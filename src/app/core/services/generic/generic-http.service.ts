import { Resource } from "./resource";
import { HttpClient } from "@angular/common/http";
import { Serializer } from "./serializer";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { environment } from "src/environments/environment";

export class GenericHttpService<T extends Resource> {
  constructor(
    private httpClient: HttpClient,
    private endpoint: string,
    private serializer: Serializer
  ) {}

  public create(item: T): Observable<T> {
    return this.httpClient
      .post<T>(
        `${environment.apiUrl}/${this.endpoint}`,
        this.serializer.toJson(item)
      )
      .pipe(map(data => this.serializer.fromJson(data) as T));
  }

  public update(item: T): Observable<T> {
    return this.httpClient
      .put<T>(
        //`${environment.uri}/${this.endpoint}/${item.id}`,
        "https://reqres.in/api/users/2",
        this.serializer.toJson(item)
      )
      .pipe(map(data => this.serializer.fromJson(data) as T));
  }

  read(id: number): Observable<T> {
    return this.httpClient
      .get(`${environment.uri}/${this.endpoint}/${id}`)
      .pipe(map((data: any) => this.serializer.fromJson(data) as T));
  }

  list(queryOptions?: any): Observable<T[]> {
    return this.httpClient
      .get(
        `${environment.uri}/${this.endpoint}${
          queryOptions ? queryOptions.toQueryString() : ""
        }`
      )
      .pipe(map((data: any) => this.convertData(data.data)));
  }

  delete(id: number) {
    return this.httpClient.delete(`${environment.uri}/${this.endpoint}/${id}`);
  }

  private convertData(data: any): T[] {
    return data.map(item => {
      return this.serializer.fromJson(item);
    });
  }
}
