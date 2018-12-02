import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchcafeComponent } from './searchcafe.component';

describe('SearchcafeComponent', () => {
  let component: SearchcafeComponent;
  let fixture: ComponentFixture<SearchcafeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchcafeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchcafeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
