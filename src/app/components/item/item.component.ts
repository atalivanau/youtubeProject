import {Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {VideoService} from '../../services/video.service';

@Component({
    moduleId: module.id,
    selector: 'app-item',
    templateUrl: 'item.component.html',
    styleUrls: ['item.component.css']
})

export class ItemComponent implements OnInit {

    @Input() video: any[];

    constructor(
        private route: ActivatedRoute,
        private videoService: VideoService,
        private location: Location
    ) {}

    ngOnInit() {

    }

    goBack(): void {
        this.location.back();
    }
}
