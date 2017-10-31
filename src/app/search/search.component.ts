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
  videos: any;

  constructor(private service: VideoService) { }

  onSubmit() {
      this.service.getVideo(this.title)
        .subscribe(video => {
          this.videos = video;
        });
  }

  ngOnInit() {
  }
}
