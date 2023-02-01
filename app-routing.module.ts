import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { DaiComponent } from './dai/dai.component';
import { MypageComponent } from './mypage/mypage.component';
import { VillainsComponent } from './villains/villains.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { MainLayoutsComponent } from './layouts/main-layouts/main-layouts.component';
import { LinksComponent } from './links/links.component';
import { InformationComponent } from './information/information.component';
import { PersonalComponent } from './personal/personal.component';
import { BlogComponentComponent } from './blog-component/blog-component.component';


const routes: Routes = [
{
  path:'',
component:MypageComponent,
children:[
  {
    path:'home',component:HomeComponent},
    {path:'about',component:AboutComponent},
    {path:'contact',component:ContactComponent},
    {path:'links',component:LinksComponent},
    {path:'information',component:InformationComponent},
    {path:'personal',component:PersonalComponent}, 
    {path:'dai',component:DaiComponent}, 
    {path:'blog-component',component:BlogComponentComponent},
    {path:'villains',component:VillainsComponent},

]


}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
