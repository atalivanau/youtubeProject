import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {VideoService} from '../../services/video.service';

@Component({
  moduleId: module.id,
  selector: 'app-item',
  templateUrl: 'item.component.html',
  styleUrls: ['item.component.css']
})
export class ItemComponent implements OnInit {

  video: Observable<any> ;
  title: string = '';

  constructor(private services: VideoService) {

  }

  ngOnInit() {
    this.services
      .getVideo('dfdf')
      .subscribe(video => this.video = video);
    console.log('item', this.video);
  }
}
