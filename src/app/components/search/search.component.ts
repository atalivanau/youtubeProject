import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {

  title: string = '';

  @Output() pass: EventEmitter<string> = new EventEmitter();

  onSubmit() {
    this.pass.emit(this.title);
  }

  ngOnInit() {
  }
}
