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
    countVideos: number;

    constructor(private http: Http) {
    }

    getVideo(videoName: string): Observable<any> {
        return this.http.get(`https://www.googleapis.com/youtube/v3/search?q=${videoName}${key}${part}${type}${maxResults}`)
            .map((response: Response) => {
                    this.mas = response.json().items;
                    this.countVideos = response.json().pageInfo.totalResults;
                    return response.json().items;
                }
            );
    }

    getOneVideo(videoId: string) {
        for (let i = 0; i < this.mas.length; i++) {
            let item = this.mas[i];
            if (item.id.videoId == videoId) {
                return item;
            }
        }
        return videoId;
    }
}
