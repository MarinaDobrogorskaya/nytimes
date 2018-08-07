import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  public query = new FormControl('');
  public isOpened = false;
  public searchData = {
    query: ''
  };
  @Output() search = new EventEmitter<any>();
  constructor() { }
  toggle(): void {
    this.isOpened ? this.isOpened = false : this.isOpened = true;
  }
  ngOnInit() {
  }
  onChange(data) {
    Object.assign(this.searchData, data);
  }
  onSearch() {
    this.searchData.query = this.query.value;
    console.log(this.searchData);
    this.search.emit(this.searchData);
  }
}
