import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../services/home.service';
import { Observable, map } from 'rxjs';
import { NewsCategory } from '../../models/category.interface';
import { NewsItem } from '../../models/news_item.interface';

@Component({
  selector: 'app-top-news',
  templateUrl: './top-news.component.html',
  styleUrls: ['./top-news.component.scss']
})
export class TopNewsComponent implements OnInit {

  categories: NewsCategory[] = [];
  newsList$!: Observable<NewsItem[]>;

  activeCategory: number = 0;

  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    this.homeService.getNewsCategories().pipe(
      map(cats => this.categories = cats)
    ).subscribe();
    this.newsList$ = this.homeService.getNews(this.activeCategory);
  }

  getCategoryName(categoryId: string) {
    return this.categories.find(s => s.id.toString() === categoryId)?.name;
  }

  switchCategory(categoryId: number) {
    this.activeCategory = categoryId;
    this.newsList$ = this.homeService.getNews(this.activeCategory);
  }

}
