import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenugrazieteaComponent } from './menugrazietea.component';

describe('MenugrazieteaComponent', () => {
  let component: MenugrazieteaComponent;
  let fixture: ComponentFixture<MenugrazieteaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenugrazieteaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenugrazieteaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
