import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainKeyboardComponent } from './main-keyboard.component';

describe('MainKeyboardComponent', () => {
  let component: MainKeyboardComponent;
  let fixture: ComponentFixture<MainKeyboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainKeyboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainKeyboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
