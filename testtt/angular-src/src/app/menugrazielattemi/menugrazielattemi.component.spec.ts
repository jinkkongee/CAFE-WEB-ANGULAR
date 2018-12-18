import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenugrazielattemiComponent } from './menugrazielattemi.component';

describe('MenugrazielattemiComponent', () => {
  let component: MenugrazielattemiComponent;
  let fixture: ComponentFixture<MenugrazielattemiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenugrazielattemiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenugrazielattemiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
