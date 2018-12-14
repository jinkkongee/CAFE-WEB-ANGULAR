import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenugrazieteamiComponent } from './menugrazieteami.component';

describe('MenugrazieteamiComponent', () => {
  let component: MenugrazieteamiComponent;
  let fixture: ComponentFixture<MenugrazieteamiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenugrazieteamiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenugrazieteamiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
