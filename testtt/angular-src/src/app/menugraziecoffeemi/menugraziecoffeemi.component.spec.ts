import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenugraziecoffeemiComponent } from './menugraziecoffeemi.component';

describe('MenugraziecoffeemiComponent', () => {
  let component: MenugraziecoffeemiComponent;
  let fixture: ComponentFixture<MenugraziecoffeemiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenugraziecoffeemiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenugraziecoffeemiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
