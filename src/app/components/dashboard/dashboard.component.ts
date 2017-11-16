import {Component, OnInit} from '@angular/core';
import {VideoService} from '../../services/video.service';
import {MainComponent} from '../main.component';
import {Router} from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'app-dashboard',
    templateUrl: 'dashboard.component.html',
    styleUrls: ['dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    videos: any[];
    count: number;
    filter: boolean;

    constructor(private services: VideoService, private router: Router) {
    }

    ngOnInit() {
        MainComponent.onButtonClick.subscribe(() => {
            this.videos = null;
            this.videos = this.services.mas;
            this.count = this.services.countVideos;
        });
    }

    onDetail(videoId) {
        this.router.navigate(['/video', videoId]);
    }
}
