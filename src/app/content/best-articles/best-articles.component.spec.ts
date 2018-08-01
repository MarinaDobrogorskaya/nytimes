import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BestArticlesComponent } from './best-articles.component';

describe('BestArticlesComponent', () => {
  let component: BestArticlesComponent;
  let fixture: ComponentFixture<BestArticlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BestArticlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BestArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
