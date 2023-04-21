import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksListItemComponent } from './books-list-item.component';

describe('BooksListItemComponent', () => {
  let component: BooksListItemComponent;
  let fixture: ComponentFixture<BooksListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BooksListItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BooksListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should notify parent component when author is clicked', () => {
    component.b = {
      id: 1,
      title: 'Test',
      author: 'Test Author',
      resume: 'Test Resume'
    };
    fixture.detectChanges();

    const el = fixture.nativeElement.querySelector('[data-test="author"]') as HTMLElement;
    const author = el.querySelector('[data-test="author"]') as HTMLElement;

  });
});
