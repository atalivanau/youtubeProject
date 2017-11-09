import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {VideoService} from '../../services/video.service';
import {MainComponent} from '../main.component'


@Component({
    moduleId: module.id,
    selector: 'app-item',
    templateUrl: 'item.component.html',
    styleUrls: ['item.component.css']
})
export class ItemComponent implements OnInit {

    video: Observable<any>;
    title: string = '';
    videos: any[];

    constructor(private services: VideoService) {
    }

    ngOnInit() {
        MainComponent.onButtonClick.subscribe(() => {
            this.videos = null;
            this.videos = this.services.mas;
            console.log("!!!", this.videos);
        });
    };

}
