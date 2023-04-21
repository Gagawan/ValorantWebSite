import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAuthorComponentComponent } from './new-author-component.component';

describe('NewAuthorComponentComponent', () => {
  let component: NewAuthorComponentComponent;
  let fixture: ComponentFixture<NewAuthorComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewAuthorComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewAuthorComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
