import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenugraziesmoothiemiComponent } from './menugraziesmoothiemi.component';

describe('MenugraziesmoothiemiComponent', () => {
  let component: MenugraziesmoothiemiComponent;
  let fixture: ComponentFixture<MenugraziesmoothiemiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenugraziesmoothiemiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenugraziesmoothiemiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
