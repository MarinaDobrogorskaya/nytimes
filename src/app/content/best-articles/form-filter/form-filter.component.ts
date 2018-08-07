import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

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
  public sections = ['Arts', 'Automobiles', 'Blogs', 'Books', 'Business Day', 'Education', 'Fashion Style', 'Food', 'Health',
    'Job Market', 'Magazine', 'membercenter', 'Movies', 'Multimedia', 'NYT Now', 'Obituaries', 'Open', 'Opinion', 'Public Editor',
    'Real Estate', 'Science', 'Sports', 'Style', 'Sunday Review', 'T Magazine', 'Technology', 'The Upshot', 'Theater',
    'Times Insider', 'Today’s Paper', 'Travel', 'U.S.', 'World', 'Your Money', 'all-sections'];
  @Output() search = new EventEmitter<any>();
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
