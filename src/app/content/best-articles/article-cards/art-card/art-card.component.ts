import {Component, Input, OnInit} from '@angular/core';
import {BestArticle} from '../../best-article';

@Component({
  selector: 'app-art-card',
  templateUrl: './art-card.component.html',
  styleUrls: ['./art-card.component.scss']
})
export class ArtCardComponent implements OnInit {
  @Input() articleData: BestArticle;
  constructor() { }

  ngOnInit() {
  }

}
