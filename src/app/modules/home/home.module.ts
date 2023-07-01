import { NgModule } from "@angular/core";
import { HomeComponent } from './pages/home/home.component';
import { HomeRoutingModule } from "./home-routing.module";
import { HeroComponent } from './components/hero/hero.component';
import { DigitalProductivityComponent } from './components/digital-productivity/digital-productivity.component';
import { TopNewsComponent } from './components/top-news/top-news.component';
import { HomeService } from "./services/home.service";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    HomeComponent,
    HeroComponent,
    DigitalProductivityComponent,
    TopNewsComponent
  ],
  imports: [HomeRoutingModule, CommonModule],
  providers: [HomeService]
})
export class HomeModule {}
