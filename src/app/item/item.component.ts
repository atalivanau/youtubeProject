import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {VideoService} from '../video.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  title: string = 'Информация про видео';

  services: Observable<any>;

  constructor(private service: VideoService) {
  }

  ngOnInit() {
    this.service.getVideo(this.service.title).subscribe(services => this.services = services);
  }
}
