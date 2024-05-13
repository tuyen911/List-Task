import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from  '@angular/router';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrl: './list-task.component.css'
})
export class ListTaskComponent implements OnInit, OnDestroy{
  [x: string]: any;
  questions = [
    { 
      id: 1, 
      content: 'Câu hỏi số 1',
      answers: [
        { id: 'a', content: 'Đáp án A' },
        { id: 'b', content: 'Đáp án B' },
        { id: 'c', content: 'Đáp án C' },
        
      ],
      selectedAnswer: null ,
      correctAnswer: 'a'
    },
    { 
      id: 2, 
      content: 'Câu hỏi số 2',
      answers: [
        { id: 'a', content: 'Đáp án A' },
        { id: 'b', content: 'Đáp án B' },
        { id: 'c', content: 'Đáp án C' },
        
      ],
      selectedAnswer: null,
      correctAnswer: 'b'
    },
    { 
      id: 3, 
      content: 'Câu hỏi số 3',
      answers: [
        { id: 'a', content: 'Đáp án A' },
        { id: 'b', content: 'Đáp án B' },
        { id: 'c', content: 'Đáp án C' },
        
      ],
      selectedAnswer: null,
      correctAnswer: 'a'
    },
    { 
      id: 4, 
      content: 'Câu hỏi số 4',
      answers: [
        { id: 'a', content: 'Đáp án A' },
        { id: 'b', content: 'Đáp án B' },
        { id: 'c', content: 'Đáp án C' },
        
      ],
      selectedAnswer: null,
      correctAnswer: 'c'
    },
    { 
      id: 5, 
      content: 'Câu hỏi số 5',
      answers: [
        { id: 'a', content: 'Đáp án A' },
        { id: 'b', content: 'Đáp án B' },
        { id: 'c', content: 'Đáp án C' },
        
      ],
      selectedAnswer: null,
      correctAnswer: 'a'
    },{ 
      id: 6, 
      content: 'Câu hỏi số 6',
      answers: [
        { id: 'a', content: 'Đáp án A' },
        { id: 'b', content: 'Đáp án B' },
        { id: 'c', content: 'Đáp án C' },
        
      ],
      selectedAnswer: null,
      correctAnswer: 'a'
    },
    { 
      id: 7, 
      content: 'Câu hỏi số 7',
      answers: [
        { id: 'a', content: 'Đáp án A' },
        { id: 'b', content: 'Đáp án B' },
        { id: 'c', content: 'Đáp án C' },
        
      ],
      selectedAnswer: null,
      correctAnswer: 'b'
    },
    { 
      id: 8, 
      content: 'Câu hỏi số 8',
      answers: [
        { id: 'a', content: 'Đáp án A' },
        { id: 'b', content: 'Đáp án B' },
        { id: 'c', content: 'Đáp án C' },
        
      ],
      selectedAnswer: null,
      correctAnswer: 'a'
    },
    { 
      id: 9, 
      content: 'Câu hỏi số 9',
      answers: [
        { id: 'a', content: 'Đáp án A' },
        { id: 'b', content: 'Đáp án B' },
        { id: 'c', content: 'Đáp án C' },
        
      ],
      selectedAnswer: null,
      correctAnswer: 'b'
    },
    { 
      id: 10, 
      content: 'Câu hỏi số 10',
      answers: [
        { id: 'a', content: 'Đáp án A' },
        { id: 'b', content: 'Đáp án B' },
        { id: 'c', content: 'Đáp án C' },
        
      ],
      selectedAnswer: null,
      correctAnswer: 'c'
    }
   
  ];
  currentQuestionIndex = 0;
  displayedQuestions: any[] = [];
  currentQuestion: any;
  selectedAnswer: string | null = null;

  // Biến này để lưu trữ chỉ số của câu hỏi hiện tại
  currentIndex = 0; 

  //đồng hồ tính giờ
  endTime!: Date;
  minutes!: Number;
  seconds!: Number;
  countdownInterval: any;

  constructor(private router: Router) { }

  goToQuestion(index: number): void {
    this.currentQuestionIndex = index;
    this.setCurrentQuestion();
    this.selectedAnswer = null; // Đặt lại câu trả lời đã chọn khi chuyển sang câu hỏi khác
  }

  
  setCurrentQuestion(): void {
    this.currentQuestion = this.questions[this.currentQuestionIndex];
    this.updateDisplayedQuestions();
  }
  updateDisplayedQuestions(): void {
    this.displayedQuestions = [this.questions[this.currentQuestionIndex]];
  }

  selectAnswer(question: any, answer: any): void {
    question.selectedAnswer = answer.id;
  }

  submitAnswers(): void {
    for (let question of this.questions) {
      if (question.selectedAnswer === null) {
        alert('Vui lòng chọn đáp án cho tất cả các câu hỏi!');
        return;
      }
    
      localStorage.setItem('quizResults', JSON.stringify(this.questions));

      this.router.navigate(['/success-page']);
      
    console.log(this.questions);
    }
  }

  ngOnInit(): void {
    this.endTime = new Date();
    this.endTime.setMinutes(this.endTime.getMinutes() + 30);

     // Thiết lập câu hỏi hiện tại là câu hỏi đầu tiên
    this.setCurrentQuestion();
 
     // Cập nhật đồng hồ đếm ngược mỗi giây
    this.countdownInterval = setInterval(() => {
    this.updateCountdown();
    }, 1000);
  }
  // hàm xử lý đồng hồ
  ngOnDestroy(): void {
    // Xóa interval khi component bị hủy
    clearInterval(this.countdownInterval);
  }
  updateCountdown(): void {
    const currentTime = new Date();
    const remainingTime = new Date(this.endTime.getTime() - currentTime.getTime());

    this.minutes = remainingTime.getMinutes();
    this.seconds = remainingTime.getSeconds();
  }
  //nút điều hướng câu hỏi trước sau
  goToPreviousQuestion(): void {
    if (this.currentQuestionIndex > 0) {
      this.currentQuestionIndex--;
      this.setCurrentQuestion();
    }
  }
  
  goToNextQuestion(): void {
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
      this.setCurrentQuestion();
    }
  }
  
}


