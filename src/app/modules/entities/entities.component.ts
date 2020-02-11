import { Component, OnInit, Input } from "@angular/core";
import { Observable } from "rxjs";

import { UserStoreService } from "../user/services/user.store.service";
import { UsersService } from "../user/services/users.service";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { Location } from "@angular/common";

import { User } from "../user/interfaces/user.resource";

@Component({
  selector: "entities",
  templateUrl: "./entities.component.html"
})
export class EntitiesComponent implements OnInit {
  private id: string;
  users: User[] = [];

  constructor(
    private usersService: UsersService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) {
    // console.log(this.usersState);
  }

  async ngOnInit() {
    await this.usersService.fetch();

    this.users = this.usersService.users;

    //lisening route and get id ,get it , and  location back(), if we want to add entety detail, cancel the back
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id: string = params.get("id");

      console.log(id);

      let idNum = parseInt(id);
      let user: User;
      // id = isNaN(id) ? 1 : id;
      if (!isNaN(idNum)) {
        user = this.users.find(user => user.id === idNum);
        user.selected = true;
        this.usersService.setUser(user);
        this.location.back();
      }
    });
  }
}
