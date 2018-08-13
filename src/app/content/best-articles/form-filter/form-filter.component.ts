import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Search} from './search-events';
import {BA_SECTIONS} from '../../../constants';

@Component({
  selector: 'app-form-filter',
  templateUrl: './form-filter.component.html',
  styleUrls: ['./form-filter.component.scss']
})
export class FormFilterComponent implements OnInit {
  public selectionGroup: FormGroup;
  public categories = [
    { name: 'The most viewed', value: 'mostviewed' },
    { name: 'The most shared', value: 'mostshared' },
    { name: 'The most emailed', value: 'mostemailed' }
  ];
  public sections = BA_SECTIONS;
  @Output() search = new EventEmitter<Search>();
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.selectionGroup = this._formBuilder.group({
      category: ['mostviewed'],
      section: ['all-sections'],
      period: ['1']
    });
    this.search.emit(this.selectionGroup.value);
  }
  changeFilterData(obj): void {
    this.search.emit(obj);
    console.log(obj);
  }
}
