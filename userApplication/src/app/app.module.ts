import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgmCoreModule } from '@agm/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherReportComponent } from './weather-report/weather-report.component';
import { ThreeLatestNewsComponent } from './three-latest-news/three-latest-news.component';
import { FooterComponent } from './footer/footer.component';
import { HomepageHeaderComponent } from './homepage-header/homepage-header.component';
import { HomepageviewComponent } from './homepage/homepageview/homepageview.component';
import { SportsPageComponent } from './sports-page/sports-page.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutComponent } from './about/about/about.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewsService } from './services/news.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { SlickCarouselModule } from 'ngx-slick-carousel';
//ok
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { SharedModule } from './shared/shared.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { MatMenuModule } from '@angular/material/menu';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './shared/material/material.module';
import { DialogUserComponent } from './chat/dialog-user/dialog-user.component';
import { ChatComponent } from './chat/chat.component';
import { StoreUserService } from './chat/shared/services/store-user.service';
import { SocketService } from './chat/shared/services/socket.service';
//import { MatIconModule } from '@angular/material/icon';
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
@NgModule({
  declarations: [
    AppComponent,
    WeatherReportComponent,
    ThreeLatestNewsComponent,
    FooterComponent,
    HomepageHeaderComponent,
    HomepageviewComponent,
    SportsPageComponent,
    ContactUsComponent,
    AboutComponent,
    DialogUserComponent,
    ChatComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    SlickCarouselModule,
//ok
    BrowserAnimationsModule,
    SharedModule,
    MatMenuModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    // MatIconModule, 
    
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),

// map

AgmCoreModule.forRoot({
  apiKey: 'AIzaSyD7jdtVdFkNWFTUuBwP8scBtGSwzuSRLX0'
})

  ],
  providers: [NewsService, StoreUserService, SocketService],
  entryComponents: [DialogUserComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
