import { Component } from '@angular/core';
import {FormControl} from '@angular/forms';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: []
})
export class HeaderComponent {
  public languages = ['EN', 'RU', 'UA'];
  public isActiveArt = true;
  public isActiveBest: boolean;
  constructor() { }
  public language = new FormControl('EN');
  isActive(name): void {
    this.isActiveArt = name === 'a';
    this.isActiveBest = name === 'b';
  }
}
