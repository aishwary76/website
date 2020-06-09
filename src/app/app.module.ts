import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FoundersComponent } from './founders/founders.component';
import { BlogComponent } from './blog/blog.component';
import { ClientsComponent } from './clients/clients.component';
import { LandingComponent } from './landing/landing.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FoundersComponent,
    BlogComponent,
    ClientsComponent,
    LandingComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
