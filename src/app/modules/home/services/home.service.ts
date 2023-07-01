import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';
import {map, shareReplay} from 'rxjs/operators';
import { IBanner } from '../models/banner.interface';
import { Observable } from 'rxjs';

@Injectable()
export class HomeService {

  constructor(private http: HttpClient) {}

  getBannerSlides(): Observable<IBanner[]> {
    return this.http.get<{slides: IBanner[]}>('https://api.npoint.io/fee177346e7875554413').pipe(
      map(slides => {
        let slidesWithImages = slides.slides;
        // slidesWithImages = slidesWithImages.sort((a,b) => a.order - b.order);
        slidesWithImages[0].imgUrl = 'https://dggfi217fw9ys.cloudfront.net/app/uploads/2020/11/2_updated.jpg';
        slidesWithImages[1].imgUrl = 'https://dggfi217fw9ys.cloudfront.net/app/uploads/2020/11/3.jpg';
        slidesWithImages[2].imgUrl = 'https://dggfi217fw9ys.cloudfront.net/app/uploads/2020/11/1-1.jpg';
        return slidesWithImages;
      }),
      shareReplay()
    )
  }

}
