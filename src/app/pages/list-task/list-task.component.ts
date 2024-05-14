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
      content: 'Tui thường hay cảm thấy lo lắng rằng ảnh sẽ ngừng yêu tui.',
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
      content: 'Tui dễ dàng thể hiện tình cảm với ảnh.',
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
      content: 'Tui sợ khi ảnh biết con người thật của tui ảnh sẽ không yêu tui nữa.',
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
      content: 'Tui có thể nhanh chóng trở lại bình thường sau khi chia tay, tui rất dễ dàng gạt ảnh ra khỏi tâm trí.',
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
      content: 'Khi tui đang không ở trong mối quan hệ với ai đó, tui cảm thấy lo lắng và trống trải.',
      answers: [
        { id: 'a', content: 'Đáp án A' },
        { id: 'b', content: 'Đáp án B' },
        { id: 'c', content: 'Đáp án C' },
        
      ],
      selectedAnswer: null,
      correctAnswer: 'a'
    },{ 
      id: 6, 
      content: 'Tui thấy khó khăn trong việc làm chỗ dự cảm xúc cho ảnh khi ảnh không vui, bất ổn.',
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
      content: 'Khi ảnh đi ra ngoài, tui lo sợ ảnh sẽ để ý đến người khác.',
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
      content: 'Tui cảm thấy thoải mái khi phụ thuộc vào ảnh.',
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
      content: 'Sự độc lập của tui quan trọng với tui hơn là các mối quan hệ.',
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
      content: 'Tui thấy việc phải chia sẻ tui đi đâu làm gì với ai với ảnh là một điều thừa thãi, vô lý. Và tui cũng không quan tâm ảnh đi đâu làm gì với ai.',
      answers: [
        { id: 'a', content: 'Đáp án A' },
        { id: 'b', content: 'Đáp án B' },
        { id: 'c', content: 'Đáp án C' },
        
      ],
      selectedAnswer: null,
      correctAnswer: 'c'
    },
    { 
      id: 11, 
      content: 'Tui không muốn thổ lộ cảm xúc tận đáy lòng mình với ảnh.',
      answers: [
        { id: 'a', content: 'Đáp án A' },
        { id: 'b', content: 'Đáp án B' },
        { id: 'c', content: 'Đáp án C' },
        
      ],
      selectedAnswer: null,
      correctAnswer: 'a'
    },
    { 
      id: 12, 
      content: 'Khi tui thổ lộ cảm nhận của tui với ảnh, tui sợ ảnh sẽ thay đổi cảm nhận về tui.',
      answers: [
        { id: 'a', content: 'Đáp án A' },
        { id: 'b', content: 'Đáp án B' },
        { id: 'c', content: 'Đáp án C' },
        
      ],
      selectedAnswer: null,
      correctAnswer: 'a'
    },
    { 
      id: 13, 
      content: 'Tui thích chủ động chia sẻ với ảnh là tui đi đâu làm gì với ai, và tui cũng muốn ảnh làm như thế với tui, việc đó khiến tui thấy an tâm.',
      answers: [
        { id: 'a', content: 'Đáp án A' },
        { id: 'b', content: 'Đáp án B' },
        { id: 'c', content: 'Đáp án C' },
        
      ],
      selectedAnswer: null,
      correctAnswer: 'b'
    },
    { 
      id: 14, 
      content: 'Tui thường hài lòng với các mối quan hệ tình cảm của mình.',
      answers: [
        { id: 'a', content: 'Đáp án A' },
        { id: 'b', content: 'Đáp án B' },
        { id: 'c', content: 'Đáp án C' },
        
      ],
      selectedAnswer: null,
      correctAnswer: 'c'
    },
    { 
      id: 15, 
      content: 'Tui không có cảm giác/nhu cầu phải thể hiện nhiều trong mối quan hệ tình cảm.',
      answers: [
        { id: 'a', content: 'Đáp án A' },
        { id: 'b', content: 'Đáp án B' },
        { id: 'c', content: 'Đáp án C' },
        
      ],
      selectedAnswer: null,
      correctAnswer: 'a'
    },
    { 
      id: 16, 
      content: 'Tui suy nghĩ rất nhiều đến mối quan hệ của mình.',
      answers: [
        { id: 'a', content: 'Đáp án A' },
        { id: 'b', content: 'Đáp án B' },
        { id: 'c', content: 'Đáp án C' },
        
      ],
      selectedAnswer: null,
      correctAnswer: 'b'
    },
    { 
      id: 17, 
      content: 'Tui khó phụ thuộc vào ảnh.',
      answers: [
        { id: 'a', content: 'Đáp án A' },
        { id: 'b', content: 'Đáp án B' },
        { id: 'c', content: 'Đáp án C' },
        
      ],
      selectedAnswer: null,
      correctAnswer: 'b'
    },
    { 
      id: 18, 
      content: 'Tui có xu hương gắn bó nhanh chóng với ảnh.',
      answers: [
        { id: 'a', content: 'Đáp án A' },
        { id: 'b', content: 'Đáp án B' },
        { id: 'c', content: 'Đáp án C' },
        
      ],
      selectedAnswer: null,
      correctAnswer: 'b'
    },
    { 
      id: 19, 
      content: 'Tui có chút khó khăn để thể hiện nhu cầu và mong muốn của mình với ảnh.',
      answers: [
        { id: 'a', content: 'Đáp án A' },
        { id: 'b', content: 'Đáp án B' },
        { id: 'c', content: 'Đáp án C' },
        
      ],
      selectedAnswer: null,
      correctAnswer: 'c'
    },
    { 
      id: 20, 
      content: 'Đôi khi tui cảm thấy tức giận hoặc khó chịu với ảnh mà tui không hiểu vì sao.',
      answers: [
        { id: 'a', content: 'Đáp án A' },
        { id: 'b', content: 'Đáp án B' },
        { id: 'c', content: 'Đáp án C' },
        
      ],
      selectedAnswer: null,
      correctAnswer: 'a'
    },
    { 
      id: 21, 
      content: 'Tui rất nhạy cảm với tâm trạng của ảnh.',
      answers: [
        { id: 'a', content: 'Đáp án A' },
        { id: 'b', content: 'Đáp án B' },
        { id: 'c', content: 'Đáp án C' },
        
      ],
      selectedAnswer: null,
      correctAnswer: 'a'
    },{ 
      id: 22, 
      content: 'Tui tin rằng hầu hết mọi người về cơ bản là trung thực và đáng tin cậy.',
      answers: [
        { id: 'a', content: 'Đáp án A' },
        { id: 'b', content: 'Đáp án B' },
        { id: 'c', content: 'Đáp án C' },
        
      ],
      selectedAnswer: null,
      correctAnswer: 'c'
    },
    { 
      id: 23, 
      content: 'Tui thích have sex bình thường với những người không có ràng buộc nào hơn là make love thân mật với một người cố định.',
      answers: [
        { id: 'a', content: 'Đáp án A' },
        { id: 'b', content: 'Đáp án B' },
        { id: 'c', content: 'Đáp án C' },
        
      ],
      selectedAnswer: null,
      correctAnswer: 'b'
    },
    { 
      id: 24, 
      content: 'Tui thoải mái chia sẻ suy nghĩ và cảm xúc của tui với ảnh.',
      answers: [
        { id: 'a', content: 'Đáp án A' },
        { id: 'b', content: 'Đáp án B' },
        { id: 'c', content: 'Đáp án C' },
        
      ],
      selectedAnswer: null,
      correctAnswer: 'a'
    },
    { 
      id: 25, 
      content: 'Tui lo lắng nếu ảnh bỏ tui, tui sẽ không bao giờ tìm được ai khác.',
      answers: [
        { id: 'a', content: 'Đáp án A' },
        { id: 'b', content: 'Đáp án B' },
        { id: 'c', content: 'Đáp án C' },
        
      ],
      selectedAnswer: null,
      correctAnswer: 'c'
    },
    { 
      id: 26, 
      content: 'Khi ảnh quá gần tui thì tui lại cảm thấy lo lắng.',
      answers: [
        { id: 'a', content: 'Đáp án A' },
        { id: 'b', content: 'Đáp án B' },
        { id: 'c', content: 'Đáp án C' },
        
      ],
      selectedAnswer: null,
      correctAnswer: 'a'
    },{ 
      id: 27, 
      content: 'Tui có xu hướng bốc đồng làm/nói những điều àm sau này tui thấy hối hận trong cuộc cãi vã hơn alf có thể suy nghĩ sâu sắc về mọi thứ.',
      answers: [
        { id: 'a', content: 'Đáp án A' },
        { id: 'b', content: 'Đáp án B' },
        { id: 'c', content: 'Đáp án C' },
        
      ],
      selectedAnswer: null,
      correctAnswer: 'a'
    },
    { 
      id: 28, 
      content: 'Một cuộc cãi vã với ảnh thường không khiến tui phải đặt câu hỏi cho toàn bộ mối quan hệ của tụi tui.',
      answers: [
        { id: 'a', content: 'Đáp án A' },
        { id: 'b', content: 'Đáp án B' },
        { id: 'c', content: 'Đáp án C' },
        
      ],
      selectedAnswer: null,
      correctAnswer: 'b'
    },
    { 
      id: 29, 
      content: 'Ảnh thường muốn tui thân mật hơn ngưỡng mà tui cảm thấy thoải mái.',
      answers: [
        { id: 'a', content: 'Đáp án A' },
        { id: 'b', content: 'Đáp án B' },
        { id: 'c', content: 'Đáp án C' },
        
      ],
      selectedAnswer: null,
      correctAnswer: 'c'
    },
    { 
      id: 30, 
      content: 'Tui lo lắng tui không đủ hấp dẫn.',
      answers: [
        { id: 'a', content: 'Đáp án A' },
        { id: 'b', content: 'Đáp án B' },
        { id: 'c', content: 'Đáp án C' },
        
      ],
      selectedAnswer: null,
      correctAnswer: 'b'
    },{ 
      id: 31, 
      content: 'Đôi khi mọi người thấy tui nhàm chán vì tui không tạo được nhiều kịch tính trong mối quan hệ.',
      answers: [
        { id: 'a', content: 'Đáp án A' },
        { id: 'b', content: 'Đáp án B' },
        { id: 'c', content: 'Đáp án C' },
        
      ],
      selectedAnswer: null,
      correctAnswer: 'a'
    },
    { 
      id: 32, 
      content: 'Tui nhớ ảnh khi tụi tui xa nhau, nhưng khi tụi tui gần/gặp nhau, tui lại muốn chạy trốn.',
      answers: [
        { id: 'a', content: 'Đáp án A' },
        { id: 'b', content: 'Đáp án B' },
        { id: 'c', content: 'Đáp án C' },
        
      ],
      selectedAnswer: null,
      correctAnswer: 'c'
    },
    { 
      id: 33, 
      content: 'Khi tui không đồng ý với ai đó, tui cảm thấy thoải mái khi bày tỏ ý kiến của tui.',
      answers: [
        { id: 'a', content: 'Đáp án A' },
        { id: 'b', content: 'Đáp án B' },
        { id: 'c', content: 'Đáp án C' },
        
      ],
      selectedAnswer: null,
      correctAnswer: 'b'
    },
    { 
      id: 34, 
      content: 'Tui ghét cảm giác người khác phụ thuộc vào tui.',
      answers: [
        { id: 'a', content: 'Đáp án A' },
        { id: 'b', content: 'Đáp án B' },
        { id: 'c', content: 'Đáp án C' },
        
      ],
      selectedAnswer: null,
      correctAnswer: 'b'
    },
    { 
      id: 35, 
      content: 'Nếu tui thấy ảnh để mắt đến người khác, tui không để điều đó làm tui bối rối. Tui có thể cảm thấy ghen một chút, nhưng nó chỉ thoáng qua.',
      answers: [
        { id: 'a', content: 'Đáp án A' },
        { id: 'b', content: 'Đáp án B' },
        { id: 'c', content: 'Đáp án C' },
        
      ],
      selectedAnswer: null,
      correctAnswer: 'a'
    },
    { 
      id: 36, 
      content: 'Nếu tui thấy crush để mất đến người khác, tui cảm thấy nhẹ nhõm, vì điều đó có nghĩa là ảnh không muốn biến mọi thứ thành độc quyền hoặc sở hữu tui.',
      answers: [
        { id: 'a', content: 'Đáp án A' },
        { id: 'b', content: 'Đáp án B' },
        { id: 'c', content: 'Đáp án C' },
        
      ],
      selectedAnswer: null,
      correctAnswer: 'a'
    },
    { 
      id: 37, 
      content: 'Nếu tui thấy crush của tui để mắt đến người khác, tui cảm thấy chán nản.',
      answers: [
        { id: 'a', content: 'Đáp án A' },
        { id: 'b', content: 'Đáp án B' },
        { id: 'c', content: 'Đáp án C' },
        
      ],
      selectedAnswer: null,
      correctAnswer: 'b'
    },
    { 
      id: 38, 
      content: 'Nếu ảnh tỏ ra lạnh lùng và xa cách, tui có thể tự hỏi chuyện gì đã xảy ra, nhưng tui biết có lẽ không phải do tui.',
      answers: [
        { id: 'a', content: 'Đáp án A' },
        { id: 'b', content: 'Đáp án B' },
        { id: 'c', content: 'Đáp án C' },
        
      ],
      selectedAnswer: null,
      correctAnswer: 'c'
    },
    { 
      id: 39, 
      content: 'Nếu ảnh bắt đầu tỏ ra lạnh lùng và xa cách, tui không bận tâm, thậm chí tui có thể thấy nhẹ nhõm.',
      answers: [
        { id: 'a', content: 'Đáp án A' },
        { id: 'b', content: 'Đáp án B' },
        { id: 'c', content: 'Đáp án C' },
        
      ],
      selectedAnswer: null,
      correctAnswer: 'a'
    },
    { 
      id: 40, 
      content: 'Nếu ảnh tỏ ra lạnh lùng và xa cách, tui lo sợ tui đã làm sai điều gì đó.',
      answers: [
        { id: 'a', content: 'Đáp án A' },
        { id: 'b', content: 'Đáp án B' },
        { id: 'c', content: 'Đáp án C' },
        
      ],
      selectedAnswer: null,
      correctAnswer: 'c'
    },
    { 
      id: 41, 
      content: 'Nếu ảnh chia tay với tui, tui sẽ cố gắng hết sức để ảnh biết ảnh đang bỏ lỡ điều gì đó.',
      answers: [
        { id: 'a', content: 'Đáp án A' },
        { id: 'b', content: 'Đáp án B' },
        { id: 'c', content: 'Đáp án C' },
        
      ],
      selectedAnswer: null,
      correctAnswer: 'c'
    },
    { 
      id: 42, 
      content: 'Nếu ảnh hẹn hò với tui được vài tháng, ảnh nói với tui anh không muốn gặp tui nữa, ban đầu tui có thể cảm thấy tổn thương, nhưng tui sẽ nhanh chóng vượt qua cảm giác đó.',
      answers: [
        { id: 'a', content: 'Đáp án A' },
        { id: 'b', content: 'Đáp án B' },
        { id: 'c', content: 'Đáp án C' },
        
      ],
      selectedAnswer: null,
      correctAnswer: 'c'
    },
    { 
      id: 43, 
      content: 'Thỉnh thoảng khi tui có được điều tui muốn trong mối quan hệ của tui, tui không biết rõ là mình muốn gì.',
      answers: [
        { id: 'a', content: 'Đáp án A' },
        { id: 'b', content: 'Đáp án B' },
        { id: 'c', content: 'Đáp án C' },
        
      ],
      selectedAnswer: null,
      correctAnswer: 'b'
    },
    { 
      id: 44, 
      content: 'Tui sẽ không có khó khăn gì trong việc giữ liên lạc với người yêu cũ của mình (hoàn toàn trong sáng); sau tất cả, tụi tui có nhiều điểm chung.',
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

  selectAnswer(question: any, answer: any) {
    question.selectedAnswer = answer.id;
  }

  submitAnswers(): void {
    for (let question of this.questions) {
      if (question.selectedAnswer === null) {
        alert('Vui lòng chọn đáp án cho tất cả các câu hỏi!');
        return;
      }
    }

    // Nếu tất cả các câu hỏi đều đã được trả lời, lưu kết quả và điều hướng
    localStorage.setItem('quizResults', JSON.stringify(this.questions));
    this.router.navigate(['/success-page']);
    console.log(this.questions);
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
  // goToPreviousQuestion(): void {
  //   if (this.currentQuestionIndex > 0) {
  //     this.currentQuestionIndex--;
  //     this.setCurrentQuestion();
  //   }
  // }
  
  // goToNextQuestion(): void {
  //   if (this.currentQuestionIndex < this.questions.length - 1) {
  //     this.currentQuestionIndex++;
  //     this.setCurrentQuestion();
  //   }
  // }
  
}


