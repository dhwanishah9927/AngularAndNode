import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about/about.component';
import { ChatComponent } from './chat/chat.component';
//import { ChatComponent } from './chat/chat.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomepageviewComponent } from './homepage/homepageview/homepageview.component';
import { SportsPageComponent } from './sports-page/sports-page.component';

const routes: Routes = [
{
  path:"homepage",
  component:HomepageviewComponent
},
{
  path:"sports",
  component:SportsPageComponent
},
{
  path:"contact",
  component:ContactUsComponent
},
{
  path:"about",
  component:AboutComponent
},
{
  path: "chat", 
  component: ChatComponent
},
{
  path:"**",
  redirectTo:"homepage"
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
