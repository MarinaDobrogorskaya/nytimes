import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {AdvansedSearch} from '../search-events';

@Component({
  selector: 'app-advanced-search',
  templateUrl: './advanced-search.component.html',
  styleUrls: ['./advanced-search.component.scss']
})
export class AdvancedSearchComponent implements OnInit {
  public advSearchForm: FormGroup;
  public sections: string[] = ['Arts', 'Automobiles', 'Autos', 'Blogs', 'Books', 'Booming', 'Business', 'Business Day', 'Corrections',
    'Crosswords & Games', 'Dining & Wine', 'Editors\' Notes', 'Education', 'Fashion & Style', 'Food', 'Front Page', 'Giving',
    'Global Home', 'Great Homes & Destinations', 'Health', 'Home & Garden', 'International Home', 'Job Market', 'Learning', 'Magazine',
    'Movies', 'Multimedia', 'Multimedia/Photos', 'NYRegion', 'NYT Now', 'National', 'New York', 'Obituaries', 'Olympics', 'Open',
    'Opinion', 'Paid Death Notices', 'Public Editor', 'Real Estate', 'Science', 'Sports', 'Style', 'Sunday Magazine', 'Sunday Review',
    'T Magazine', 'T:Style', 'Technology', 'The Public Editor', 'The Upshot', 'Theater', 'Times Topics', 'TimesMachine',
    'Today\'s Headlines', 'Topics', 'Travel', 'U.S.', 'Universal', 'UrbanEye', 'Washington', 'Week in Review', 'World', 'Your Money'];
  public types: string[] = ['Addendum', 'An Analysis', 'An Appraisal', 'Article', 'Banner', 'Biography', 'Birth Notice', 'Blog', 'Brief',
    'Caption', 'Chronology', 'Column', 'Correction', 'Economic Analysis', 'Editorial', 'Editors\' Note', 'First Chapter', 'Front Page',
    'Glossary', 'Interactive Feature', 'Interactive Graphic', 'Interview', 'Letter', 'List', 'Marriage Announcement', 'Military Analysis',
    'News', 'News Analysis', 'Newsletter', 'Obituary', 'Paid Death Notice', 'Postscript', 'Premium', 'Question', 'Quote', 'Recipe',
    'Review', 'Schedule', 'SectionFront', 'Series', 'Slideshow', 'Special Report', 'Statistics', 'Summary', 'Text', 'Video', 'Web Log'];
  constructor(private _formBuilder: FormBuilder) { }
  @Output() addInfo = new EventEmitter<AdvansedSearch>();
  ngOnInit() {
    this.advSearchForm = this._formBuilder.group({
      section: [''],
      type: [''],
      dateFrom: [''],
      dateTo: [''],
      sort: ['newest']
    });
  }
  onChanges(obj) {
    this.addInfo.emit(obj);
  }
}
