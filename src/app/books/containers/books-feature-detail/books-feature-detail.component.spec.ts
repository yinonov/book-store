import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksFeatureDetailComponent } from './books-feature-detail.component';

describe('BooksFeatureDetailComponent', () => {
  let component: BooksFeatureDetailComponent;
  let fixture: ComponentFixture<BooksFeatureDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooksFeatureDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksFeatureDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
