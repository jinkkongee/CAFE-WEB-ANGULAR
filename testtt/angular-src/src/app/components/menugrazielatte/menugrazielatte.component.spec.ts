import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenugrazielatteComponent } from './menugrazielatte.component';

describe('MenugrazielatteComponent', () => {
  let component: MenugrazielatteComponent;
  let fixture: ComponentFixture<MenugrazielatteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenugrazielatteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenugrazielatteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
