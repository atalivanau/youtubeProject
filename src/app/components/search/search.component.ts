import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {

    title = '';

    @Output() pass: EventEmitter<Object> = new EventEmitter();

    onSubmit() {
        this.pass.emit({title: this.title, filter: true});
    }

    ngOnInit() {
        if (this.title != null) {
            this.title = localStorage.getItem('title_youtube');
        }
    }

    onTitleChange() {
        localStorage.setItem('title_youtube',  this.title);
    }
}
