import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./core/views/pages/home/home.component";
import {NotFoundComponent} from "./core/views/pages/not-found/not-found.component";
import {UserComponent} from "./core/views/modules/user/user.component";
import {UserProfileComponent} from "./core/views/modules/user/user-profile/user-profile.component";
import {TaskComponent} from "./core/views/modules/task/task.component";
import {TaskListComponent} from "./core/views/modules/task/task-list/task-list.component";
import {RegisterComponent} from "./core/views/modules/user/register/register.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'register', component: RegisterComponent},
  {
    path: 'user', component: UserComponent,
    children: [
      {path: 'profile', component: UserProfileComponent},
    ]
  },
  {
    path: 'task', component: TaskComponent,
    children: [
      {path: 'list', component: TaskListComponent},
    ]
  },


  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', component: NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
