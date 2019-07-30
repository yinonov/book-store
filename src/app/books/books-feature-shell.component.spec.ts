import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksFeatureShellComponent } from './books-feature-shell.component';

describe('BooksFeatureShellComponent', () => {
  let component: BooksFeatureShellComponent;
  let fixture: ComponentFixture<BooksFeatureShellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooksFeatureShellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksFeatureShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
