import { Resource } from "src/app/core/services/generic/resource";

export class User extends Resource {
  id: number;
  email: string;
  flName: string;
  first_name: string;
  last_name: string;
  avatar: string;
  selected: boolean;
  get fullName(): string {
    return this.first_name + " " + this.last_name;
  }
}

//{"id":1,"email":"george.bluth@reqres.in","first_name":"George","last_name":"Bluth","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg"

//{"id":1,"email":"george.bluth@reqres.in","first_name":"George","last_name":"Bluth","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg"
