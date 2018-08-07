import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent {
  public progress = false;
  constructor() { }

  inProgress(arg: boolean) {
    this.progress = arg;
  }
}
