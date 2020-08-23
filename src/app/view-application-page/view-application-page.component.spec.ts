import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewApplicationPageComponent } from './view-application-page.component';

describe('ViewApplicationPageComponent', () => {
  let component: ViewApplicationPageComponent;
  let fixture: ComponentFixture<ViewApplicationPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewApplicationPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewApplicationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
