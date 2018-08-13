import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl} from '@angular/forms';
import {AdvancedSearch, Search} from './search-events';
import {Renderer2} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  private TAG = 'SearchComponent >';
  private input = document.getElementsByTagName('input');
  public query = new FormControl('');
  public isOpened = false;
  private searchData: Search = {
    query: ''
  };
  @Output() search = new EventEmitter<Search>();
  constructor(private renderer: Renderer2) { }
  toggle(): void {
    this.isOpened ? this.isOpened = false : this.isOpened = true;
  }
  ngOnInit() {
    this.renderer.listen(this.input[0], 'keydown', (event) => {
      if (event.keyCode === 13) {
        this.onSearch();
      }
    });
  }
  onChange(data: AdvancedSearch) {
    Object.assign<Search, AdvancedSearch>(this.searchData, data as AdvancedSearch);
  }
  onSearch() {
    this.searchData.query = this.query.value;
    console.log(`${this.TAG} onSearch: this.searchData - ${this.searchData}`);
    this.search.emit(this.searchData);
  }
}
