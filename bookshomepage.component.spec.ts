import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookshomepageComponent } from './bookshomepage.component';

describe('BookshomepageComponent', () => {
  let component: BookshomepageComponent;
  let fixture: ComponentFixture<BookshomepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookshomepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookshomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
