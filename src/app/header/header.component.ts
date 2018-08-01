import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: []
})
export class HeaderComponent implements OnInit {
  public languages = ['EN', 'RU', 'UA'];
  public isActiveArt: boolean;
  public isActiveBest: boolean;
  constructor() { }
  public language = new FormControl('EN');
  ngOnInit() {
  }

}
