import { User } from "../interfaces/user.resource";

import { Serializer } from "src/app/core/services/generic/serializer";

export class UserSerializer implements Serializer {
  fromJson(json: any): User {
    const user = Object.assign(new User(), json);
    return user;
  }

  toJson(user: User): any {
    return {
      id: user.id,
      first_name: user.first_name,
      last_name: user.last_name,
      avatar: user.avatar,
      email: user.email,
      selected: user.selected
    };
  }
}
