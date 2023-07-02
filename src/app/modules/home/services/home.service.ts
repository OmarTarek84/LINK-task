import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';
import {map, shareReplay} from 'rxjs/operators';
import { IBanner } from '../models/banner.interface';
import { Observable } from 'rxjs';
import { NewsCategory } from '../models/category.interface';
import { NewsItem } from '../models/news_item.interface';

@Injectable()
export class HomeService {

  constructor(private http: HttpClient) {}

  getBannerSlides(): Observable<IBanner[]> {
    return this.http.get<{slides: IBanner[]}>('https://api.npoint.io/fee177346e7875554413').pipe(
      map(slides => {
        let slidesWithImages = slides.slides;
        slidesWithImages = slidesWithImages.sort((a,b) => a.order - b.order);
        slidesWithImages[0].imgUrl = 'https://dggfi217fw9ys.cloudfront.net/app/uploads/2020/11/2_updated.jpg';
        slidesWithImages[1].imgUrl = 'https://dggfi217fw9ys.cloudfront.net/app/uploads/2020/11/3.jpg';
        slidesWithImages[2].imgUrl = 'https://dggfi217fw9ys.cloudfront.net/app/uploads/2020/11/1-1.jpg';
        return slidesWithImages;
      }),
      shareReplay()
    )
  }

  getNewsCategories(): Observable<NewsCategory[]> {
    return this.http.get<{newsCategory: NewsCategory[]}>('https://api.npoint.io/91298d970c27e9a06518').pipe(
      map(categories => {
        return [
          {
            id: 0,
            name: "All News"
          },
           ...categories.newsCategory
        ];
      }),
      shareReplay()
    );
  }

  getNews(categoryId: number): Observable<NewsItem[]> {
    return this.http.get<{News: NewsItem[]}>('https://api.npoint.io/d275425a434e02acf2f7').pipe(
      map(news => {
        const newsArray = news.News;
        if (!categoryId || categoryId === 0)
          return newsArray.filter(s => s.showOnHomepage === 'yes');
        else
          return newsArray.filter(s => s.showOnHomepage === 'yes' && s.categoryID === categoryId.toString());
      }),
    );
  }

}
