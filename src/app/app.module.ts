import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './core/views/pages/home/home.component';
import { NavigationComponent } from './core/views/shared/layouts/navigation/navigation.component';
import { NotFoundComponent } from './core/views/pages/not-found/not-found.component';
import { UserComponent } from './core/views/modules/user/user.component';
import { TaskComponent } from './core/views/modules/task/task.component';
import { TaskListComponent } from './core/views/modules/task/task-list/task-list.component';
import { RegisterComponent } from './core/views/modules/user/register/register.component';
import {CookieService} from "ngx-cookie-service";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {TokenInterceptor} from "./utils/interceptor/token.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    NotFoundComponent,
    UserComponent,
    TaskComponent,
    TaskListComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [CookieService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
