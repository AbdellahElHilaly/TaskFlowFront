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
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from "@angular/common/http";
// import {TokenInterceptor} from "./utils/interceptor/token.interceptor";
import {NgOptimizedImage} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { InternalSeverErrorComponent } from './core/views/pages/internal-sever-error/internal-sever-error.component';
import { ValidationErrorComponent } from './core/views/pages/validation-error/validation-error.component';

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
    ValidationErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgOptimizedImage,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CookieService,
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: TokenInterceptor,
    //   multi: true
    // },
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
