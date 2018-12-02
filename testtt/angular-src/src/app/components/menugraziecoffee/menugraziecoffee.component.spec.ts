import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenugraziecoffeeComponent } from './menugraziecoffee.component';

describe('MenugraziecoffeeComponent', () => {
  let component: MenugraziecoffeeComponent;
  let fixture: ComponentFixture<MenugraziecoffeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenugraziecoffeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenugraziecoffeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
