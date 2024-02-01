import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './core/views/pages/home/home.component';
import {NavigationComponent} from './core/views/shared/layouts/navigation/navigation.component';
import {NotFoundComponent} from './core/views/pages/not-found/not-found.component';
import {UserComponent} from './core/views/modules/user/user.component';
import {TaskComponent} from './core/views/modules/task/task.component';
import {TaskListComponent} from './core/views/modules/task/task-list/task-list.component';
import {RegisterComponent} from './core/views/modules/user/register/register.component';
import {CookieService} from "ngx-cookie-service";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {StoreModule} from '@ngrx/store';
import {NgOptimizedImage} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {InternalSeverErrorComponent} from './core/views/pages/internal-sever-error/internal-sever-error.component';
import {ValidationErrorComponent} from './core/views/pages/validation-error/validation-error.component';
import {ListUsersComponent} from './core/views/modules/user/list-users/list-users.component';
import {counterReducer} from "./state/counter/counter.reducer";
import {CounterComponent} from './core/views/shared/widgets/counter/counter.component';
import {EffectsModule} from "@ngrx/effects";
import {taskReducer} from "@app/state/task/task.reducer";
import {TaskEffect} from "@app/state/task/task.effect";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import { AddTaskComponent } from './core/views/modules/task/add-task/add-task.component';
import { RxjsComponent } from './core/views/modules/docs/rxjs/rxjs.component';
import { ChatHeadComponent } from './core/views/shared/widgets/chat-head/chat-head.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    NotFoundComponent,
    UserComponent,
    TaskComponent,
    TaskListComponent,
    RegisterComponent,
    InternalSeverErrorComponent,
    ValidationErrorComponent,
    ListUsersComponent,
    CounterComponent,
    AddTaskComponent,
    RxjsComponent,
    ChatHeadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgOptimizedImage,
    FormsModule,
    ReactiveFormsModule,

    StoreModule.forRoot(
      {
        counter: counterReducer,
        task: taskReducer
      },
      {}),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
    }),
    EffectsModule.forRoot([TaskEffect])
  ],
  providers: [
    CookieService,
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
