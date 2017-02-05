import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {SignInComponent} from './sign-in/sign-in.component';
import {LoginComponent} from './login/login.component';
import {RouterModule, Routes} from "@angular/router";
import {UserInfoService} from "./user-info.service";
import { DashboardsComponent } from './dashboards/dashboards.component';
import {GetDashboardsService} from "./get-dashboards.service";

const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'sign-in', component: SignInComponent},
  {path: 'dashboard', component: DashboardsComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    LoginComponent,
    DashboardsComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [UserInfoService, GetDashboardsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
