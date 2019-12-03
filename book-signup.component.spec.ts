import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookSignupComponent } from './book-signup.component';

describe('BookSignupComponent', () => {
  let component: BookSignupComponent;
  let fixture: ComponentFixture<BookSignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookSignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
