import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VillainsComponent } from './villains/villains.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { BlogComponentComponent } from './blog-component/blog-component.component';
import { DaiComponent } from './dai/dai.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MainLayoutsComponent } from './layouts/main-layouts/main-layouts.component';
import { MypageComponent } from './mypage/mypage.component';
import { LinksComponent } from'./links/links.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { InformationComponent } from './information/information.component';
import {MatTableModule} from '@angular/material/table';
import { PersonalComponent } from './personal/personal.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { CodformComponent } from './codform/codform.component';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    VillainsComponent,
    MainLayoutComponent,
    BlogComponentComponent,
    DaiComponent,
    MainLayoutsComponent,
    MypageComponent,
    LinksComponent,
    PersonalInfoComponent,
    InformationComponent,
    PersonalComponent,
    CodformComponent,
    

  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    LayoutModule,
    MatToolbarModule,
    MatListModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
