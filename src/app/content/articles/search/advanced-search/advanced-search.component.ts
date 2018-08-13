import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {AdvancedSearch} from '../search-events';
import {A_SECTIONS, A_TYPES} from '../../../../constants';

@Component({
  selector: 'app-advanced-search',
  templateUrl: './advanced-search.component.html',
  styleUrls: ['./advanced-search.component.scss']
})
export class AdvancedSearchComponent implements OnInit {
  public advSearchForm: FormGroup;
  public sections: string[] = A_SECTIONS;
  public types: string[] = A_TYPES;
  @Output() addInfo = new EventEmitter<AdvancedSearch>();
  constructor(private _formBuilder: FormBuilder) { }
  ngOnInit() {
    this.advSearchForm = this._formBuilder.group({
      section: [''],
      type: [''],
      dateFrom: [''],
      dateTo: [''],
      sort: ['newest']
    });
  }
  onChanges(formValue: AdvancedSearch) {
    this.addInfo.emit(formValue);
  }
}
