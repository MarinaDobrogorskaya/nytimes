import {Component, Input, OnInit} from '@angular/core';
import {Article} from '../../article';

@Component({
  selector: 'app-art-item',
  templateUrl: './art-item.component.html',
  styleUrls: ['./art-item.component.scss']
})
export class ArtItemComponent implements OnInit {
  @Input() article: Article;
  constructor() { }

  ngOnInit() {
  }

}
