import { Component, OnInit } from '@angular/core';
import {VideoService} from '../video.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  title: string = '';
  loadDashboard = false;
  video: any;

  constructor(private service: VideoService) { }

  ngOnInit() {
  }

  onSubmit() {
      this.service.getVideo(this.title)
        .subscribe(video => {
          this.video = video;
        });
  }
}
