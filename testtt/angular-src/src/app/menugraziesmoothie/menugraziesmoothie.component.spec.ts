import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenugraziesmoothieComponent } from './menugraziesmoothie.component';

describe('MenugraziesmoothieComponent', () => {
  let component: MenugraziesmoothieComponent;
  let fixture: ComponentFixture<MenugraziesmoothieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenugraziesmoothieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenugraziesmoothieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
