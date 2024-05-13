import { Component, OnInit } from '@angular/core';
import { Router,  ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-success-page',
  templateUrl: './success-page.component.html',
  styleUrl: './success-page.component.css'
})
export class SuccessPageComponent implements OnInit{
  quizResults!: any[];
  countA: number = 0;
  countB: number = 0;
  countC: number = 0;
  

  constructor() { }
  
  ngOnInit(): void {
    
    // const results = localStorage.getItem('quizResults');
    // if (results) {
    //   this.quizResults = JSON.parse(results);
    // }
    this.calculateCounts();
  }
  
  calculateCounts(): void {
    const results = JSON.parse(localStorage.getItem('quizResults') || '[]');
    for (let result of results) {
      if (result.selectedAnswer === 'a') {
        this.countA++;
      } else if (result.selectedAnswer === 'b') {
        this.countB++;
      } else if (result.selectedAnswer === 'c') {
        this.countC++;
      }
    }
  }
 
}
