import 'rxjs/add/operator/switchMap';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Location} from '@angular/common';

import {VideoService} from '../../services/video.service';

@Component({
    moduleId: module.id,
    selector: 'app-item',
    templateUrl: 'item.component.html',
    styleUrls: ['item.component.css']
})

export class ItemComponent implements OnInit {

    item: any;

    constructor(private route: ActivatedRoute,
                private videoService: VideoService,
                private location: Location) {
    }

    ngOnInit() {
        this.route.paramMap
            .switchMap((params: ParamMap) => this.videoService.getOneVideo(params.get('id')))
            .subscribe(item => {
                this.item = item;
                console.log("!!!!", item);
                return this.item;
            });
    }

    goBack(): void {
        this.location.back();
    }
}
