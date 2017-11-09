import {Component, OnInit} from '@angular/core';
import {VideoService} from '../../services/video.service';
import {MainComponent} from '../main.component';

@Component({
    moduleId: module.id,
    selector: 'app-item',
    templateUrl: 'item.component.html',
    styleUrls: ['item.component.css']
})

export class ItemComponent implements OnInit {

    videos: any[];

    constructor(private services: VideoService) {
    }

    ngOnInit() {
        MainComponent.onButtonClick.subscribe(() => {
            this.videos = null;
            this.videos = this.services.mas;
        });
    }
}
