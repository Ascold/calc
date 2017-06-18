import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalEngKeyboardComponent } from './additional-eng-keyboard.component';

describe('AdditionalEngKeyboardComponent', () => {
  let component: AdditionalEngKeyboardComponent;
  let fixture: ComponentFixture<AdditionalEngKeyboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdditionalEngKeyboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdditionalEngKeyboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
