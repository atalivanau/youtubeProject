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
    videoName: string;
    filter: boolean;

    constructor(private http: Http) {
    }

    getVideo(videoName: string, filter: boolean): Observable<any> {
        this.videoName = videoName;
        this.filter = filter;
        return this.http.get(`https://www.googleapis.com/youtube/v3/search?q=${videoName}${key}${part}${type}${maxResults}`)
            .map((response: Response) => {
                    this.mas = response.json().items;
                    this.countVideos = response.json().pageInfo.totalResults;
                    return response.json().items;
                }
            );
    }

    getOneVideo(videoId: string): Observable<any> {
        return this.http.get(`https://www.googleapis.com/youtube/v3/search?q=${this.videoName}${key}${part}${type}${maxResults}`)
            .map((response: Response) => {
                    for (let i = 0; i < response.json().items.length; i++) {
                        const item = response.json().items[i];
                        if (item.id.videoId === videoId) {
                            return item;
                        }
                    }
                    return response.json().items[0];
                }
            );

    }
}
