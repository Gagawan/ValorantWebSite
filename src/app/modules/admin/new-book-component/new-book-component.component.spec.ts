import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBookComponentComponent } from './new-book-component.component';

describe('NewBookComponentComponent', () => {
  let component: NewBookComponentComponent;
  let fixture: ComponentFixture<NewBookComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewBookComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewBookComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
