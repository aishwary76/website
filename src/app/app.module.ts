import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavComponent } from "./nav/nav.component";
import { FoundersComponent } from "./founders/founders.component";
import { BlogComponent } from "./blog/blog.component";
import { ClientsComponent } from "./clients/clients.component";
import { LandingComponent } from "./landing/landing.component";
import { FooterComponent } from "./footer/footer.component";
import { SkillsComponent } from "./skills/skills.component";
import { AboutComponent } from "./about/about.component";
import { StrategyComponent } from "./strategy/strategy.component";
import { PortfolioComponent } from "./portfolio/portfolio.component";
import { TeamComponent } from "./team/team.component";

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FoundersComponent,
    BlogComponent,
    TeamComponent,
    ClientsComponent,
    LandingComponent,
    FooterComponent,
    SkillsComponent,
    AboutComponent,
    StrategyComponent,
    PortfolioComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
