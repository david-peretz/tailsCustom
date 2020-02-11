import { Store } from "../../../store/store";
import { User } from "../interfaces/user.resource";

export class UserStoreService extends Store<User[]> {
  constructor() {
    super([new User()]);
  }
  // store reducer generate new state
  addUsers(users: User[]) {
    const newState = users;
    this.setState(newState);
  }
}
