import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TenentAppComponent } from './tenent-app.component';

describe('TenentAppComponent', () => {
  let component: TenentAppComponent;
  let fixture: ComponentFixture<TenentAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TenentAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TenentAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
