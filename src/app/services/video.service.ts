import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Injectable} from '@angular/core';

const key = `&key=AIzaSyDOfT_BO81aEZScosfTYMruJobmpjqNeEk`;
const part = `&part=snippet`;
const type = `&type=video`;
const maxResults = `&maxResults=10`;

@Injectable()
export class VideoService {
  mas: any[];

  constructor(private http: Http) {}

  getVideo(videoName: string): Observable<any> {
    return this.http.get(`https://www.googleapis.com/youtube/v3/search?q=${videoName}${key}${part}${type}${maxResults}`)
      .map((response: Response) => {
          this.mas = response.json().items;
          return response.json().items;
        }
      );
  }
}
