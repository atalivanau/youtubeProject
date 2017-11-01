import { Component } from '@angular/core';
import {VideoService} from '../services/video.service';
import {Observable} from 'rxjs/Observable';
import {Subject} from "rxjs/Subject";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent {
  title = 'Поиск видео на ютуб';
  videos: Observable<any>;
  static onButtonClick: any = new Subject();

  constructor(private service: VideoService) { }

  pass(event) {
    this.service.getVideo(event)
      .subscribe(video => {
        this.videos = video;
        MainComponent.onButtonClick.next();
        console.log('main', this.videos);
      });
  }
}
