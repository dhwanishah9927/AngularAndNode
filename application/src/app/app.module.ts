import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminLoginPageComponent } from './admin/adminLogin/admin-login-page/admin-login-page.component';
import { RegisterPageComponent } from './admin/adminLogin/admin-register-page/register-page/register-page.component';
import { LoginHeaderComponent } from './admin/adminLogin/loginHeader/login-header/login-header.component';
import { ViewNewsComponent } from './admin/view-news/view-news.component';
import { HeaderComponent } from './admin/header/header.component';
import { SearchPipe } from './pipe/search.pipe';
import { EditNewsComponent } from './admin/edit-news/edit-news.component';
import { AddNewsComponent } from './admin/add-news/add-news.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginPageComponent,
    RegisterPageComponent,
    LoginHeaderComponent,
    ViewNewsComponent,
    HeaderComponent,
    SearchPipe,
    EditNewsComponent,
    AddNewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
