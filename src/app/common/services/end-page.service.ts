import { Injectable } from '@angular/core';

@Injectable()
export class EndPageService {

  constructor() { }
  isEnd(): boolean {
    const d = document.documentElement;
    const offset = d.scrollTop + window.innerHeight;
    const height = d.scrollHeight;
    console.log(offset, height);
    return Math.round(offset) >= height;
  }
}
