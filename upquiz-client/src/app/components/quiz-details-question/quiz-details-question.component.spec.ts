import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizDetailsQuestionComponent } from './quiz-details-question.component';

describe('QuizDetailsQuestionComponent', () => {
  let component: QuizDetailsQuestionComponent;
  let fixture: ComponentFixture<QuizDetailsQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizDetailsQuestionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizDetailsQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
