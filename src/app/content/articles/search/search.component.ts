import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl} from '@angular/forms';
import {AdvancedSearch, Search} from './search-events';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  public query = new FormControl('');
  public isOpened = false;
  private searchData: Search = {
    query: ''
  };
  @Output() search = new EventEmitter<Search>();
  constructor() { }
  toggle(): void {
    this.isOpened ? this.isOpened = false : this.isOpened = true;
  }
  ngOnInit() {
  }
  onChange(data: AdvancedSearch): void {
    Object.assign<Search, AdvancedSearch>(this.searchData, data);
  }
  onSearch(): void {
    this.searchData.query = this.query.value;
    this.search.emit(this.searchData);
  }
  onEnterPressed(event: KeyboardEvent): void {
    if (event.keyCode === 13) {
      this.onSearch();
    }
  }
}
