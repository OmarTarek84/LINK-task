import { Component, OnInit } from '@angular/core';
import { Observable, first, map } from 'rxjs';
import { IBanner } from '../../models/banner.interface';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  bannerSlidesList: IBanner[] = [];
  selectedOrder: number = 1;

  constructor(private homeService: HomeService) {}


  ngOnInit(): void {
    this.homeService.getBannerSlides().pipe(
      first(),
      map(slides => this.bannerSlidesList = slides)
    ).subscribe();
  }

  get bannerSlide() {
    return this.bannerSlidesList.find(s => s.order === this.selectedOrder);
  }

  get categoryColor() {
    return '#' + this.bannerSlide?.colorCode;
  }

  switchOrder(order: number) {
    this.selectedOrder = order;
  }

  counterBannerSlidesList() {
    return new Array(this.bannerSlidesList.length);
  }

}
