import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookLoginComponent } from './book-login.component';

describe('BookLoginComponent', () => {
  let component: BookLoginComponent;
  let fixture: ComponentFixture<BookLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
