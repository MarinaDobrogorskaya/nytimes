import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public languages = ['EN', 'RU', 'UA'];
  constructor() { }
  public language = new FormControl('EN');
  ngOnInit() {
  }

}
