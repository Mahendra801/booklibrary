import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookBuyeComponent } from './book-buye.component';

describe('BookBuyeComponent', () => {
  let component: BookBuyeComponent;
  let fixture: ComponentFixture<BookBuyeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookBuyeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookBuyeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
