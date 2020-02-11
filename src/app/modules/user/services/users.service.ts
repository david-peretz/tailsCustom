import { GenericHttpService } from "src/app/core/services/generic/generic-http.service";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { User } from "../interfaces/user.resource";
import { UserSerializer } from "../services/serializer";
import { UserStoreService } from "./user.store.service";
import { Observable } from "rxjs";

@Injectable()
export class UsersService extends GenericHttpService<User> {
  constructor(
    httpClient: HttpClient,
    private userStoreService: UserStoreService
  ) {
    super(httpClient, "users?page=1&per_page=1000", new UserSerializer());
    this.usersStore = userStoreService;
  }

  private _users: User[] = [];
  private users$: Observable<User>[];
  private usersStore: UserStoreService;

  get users() {
    return this.usersStore.getValue();
  }

  async fetch() {
    if (this._users.length === 0) this._users = await this.list().toPromise();
    this.usersStore.setState(this._users);
  }

  setUser(user) {
    if (!user.id) {
      user.id = this._users.length + 1;
      this._users.push(user);
    } else if (!isNaN(user.id))
      this._users[this._users.findIndex(el => el.id === user.id)] = user;
    this.usersStore.setState(this._users);
  }

  // async delete(id) {
  //   return await this.delete(id).subscribe(res => {
  //     return res;
  //   });
  // return this.http.delete(`${environment.apiUrl}/users/${id}`);
  // }
}
