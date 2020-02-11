import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "users"
  },
  {
    path: "users",
    loadChildren: "./modules/user/users.module#UsersModule"
    // loadChildren: () =>
    //   import("./modules/users/users.module").then(
    //     m => m.UsersModule
    //   )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
