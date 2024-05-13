import { UsersService } from './../../Service/users.service';
import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { Router } from  '@angular/router';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.css'
})
export class AboutPageComponent implements OnInit{
  
  questions = [
    { 
      id: 1, 
      content: 'Câu hỏi số 1',
      answers: [
        { id: 'a', content: 'Đáp án A' },
        { id: 'b', content: 'Đáp án B' },
        { id: 'c', content: 'Đáp án C' }
      ],
      correctAnswer: 'a'
    },
    { 
      id: 2, 
      content: 'Câu hỏi số 2',
      answers: [
        { id: 'a', content: 'Đáp án A' },
        { id: 'b', content: 'Đáp án B' },
        { id: 'c', content: 'Đáp án C' }
      ],
      correctAnswer: 'b'
    },
    { 
      id: 3, 
      content: 'Câu hỏi số 3',
      answers: [
        { id: 'a', content: 'Đáp án A' },
        { id: 'b', content: 'Đáp án B' },
        { id: 'c', content: 'Đáp án C' }
      ],
      correctAnswer: 'a'
    },
    { 
      id: 4, 
      content: 'Câu hỏi số 4',
      answers: [
        { id: 'a', content: 'Đáp án A' },
        { id: 'b', content: 'Đáp án B' },
        { id: 'c', content: 'Đáp án C' }
      ],
      correctAnswer: 'c'
    }
  ];

  currentQuestionIndex = 0;
  currentQuestion: any;
  selectedAnswer: string | null = null;
  quizCompleted = false;

  constructor() { }

  ngOnInit(): void {
    this.setCurrentQuestion();
  }

  setCurrentQuestion(): void {
    this.currentQuestion = this.questions[this.currentQuestionIndex];
  }

  selectAnswer(answer: any): void {
    this.selectedAnswer = answer.id;
  }

  goToQuestion(index: number): void {
    this.currentQuestionIndex = index;
    this.setCurrentQuestion();
    this.selectedAnswer = null; // Reset selected answer when moving to another question
  }

  submitQuiz(): void {
    if (this.selectedAnswer === null) {
      alert('Vui lòng chọn đáp án!');
      return;
    }

    if (this.currentQuestionIndex < this.questions.length - 1) {
      // Move to the next question
      this.currentQuestionIndex++;
      this.setCurrentQuestion();
      this.selectedAnswer = null; // Reset selected answer for the next question
    } else {
      // Quiz completed
      this.quizCompleted = true;
      // You can calculate the score here
      alert('Bài trắc nghiệm đã hoàn thành!');
    }
  }
}