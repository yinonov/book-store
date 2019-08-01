import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WishListFeatureShellComponent } from './wish-list-feature-shell.component';

describe('WishListFeatureShellComponent', () => {
  let component: WishListFeatureShellComponent;
  let fixture: ComponentFixture<WishListFeatureShellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WishListFeatureShellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WishListFeatureShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
