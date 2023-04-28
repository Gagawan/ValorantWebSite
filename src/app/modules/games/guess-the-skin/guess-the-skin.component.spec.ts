import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuessTheSkinComponent } from './guess-the-skin.component';

describe('GuessTheSkinComponent', () => {
  let component: GuessTheSkinComponent;
  let fixture: ComponentFixture<GuessTheSkinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuessTheSkinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuessTheSkinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
