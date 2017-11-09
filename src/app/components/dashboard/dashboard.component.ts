import {Component, OnInit} from '@angular/core';
import {VideoService} from '../../services/video.service';
import {MainComponent} from '../main.component';

@Component({
  moduleId: module.id,
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css']
})
export class DashboardComponent implements OnInit{

    videos: any[];
    count: number;

    constructor(private services: VideoService) {
    }

    ngOnInit() {
        MainComponent.onButtonClick.subscribe(() => {
            this.videos = null;
            this.videos = this.services.mas;
            this.count = this.services.countVideos;
        });
    }
}
