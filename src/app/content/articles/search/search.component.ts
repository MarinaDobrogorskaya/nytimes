import {Component, EventEmitter, HostListener, OnInit, Output} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Search} from './search-events';
import {Renderer2} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  public input = document.getElementsByTagName('input');
  public query = new FormControl('');
  public isOpened = false;
  public searchData: Search = {
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
  onChange(data) {
    Object.assign(this.searchData, data);
  }
  onSearch() {
    this.searchData.query = this.query.value;
    console.log(this.searchData);
    this.search.emit(this.searchData);
  }
}
