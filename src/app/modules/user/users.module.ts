import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { EntitiesComponent } from "../entities/entities.component";
import { UsersService } from "./services/users.service";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FilterPipe } from "src/app/core/pipes/filter.pipe";
import { UserStoreService } from "./services/user.store.service";
import { UsersComponent } from "./users.component";

const routes: Routes = [
  { path: "", component: EntitiesComponent },
  { path: ":id", component: EntitiesComponent },
  { path: "**", component: EntitiesComponent }
];
@NgModule({
  declarations: [EntitiesComponent, UsersComponent, FilterPipe],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  providers: [UsersService, UserStoreService]
})
export class UsersModule {}
