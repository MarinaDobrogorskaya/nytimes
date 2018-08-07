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
  public searchData: any;
  @Output() search = new EventEmitter<any>();
  constructor() { }
  toggle(): void {
    this.isOpened ? this.isOpened = false : this.isOpened = true;
  }
  ngOnInit() {
  }
  onChange(data) {
    this.searchData = data;
  }
  onSearch() {
    this.searchData.query = this.query.value;
    this.search.emit(this.searchData);
  }
}
