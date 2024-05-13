import { UsersService, UersResponse } from './../../Service/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-user',
  templateUrl: './page-user.component.html',
  styleUrl: './page-user.component.css'
})
export class PageUserComponent implements OnInit {
  data: any[] = []; // Thay đổi tên từ users sang data

  constructor(private userService: UsersService) {}

  ngOnInit(): void {
    this.getData(); 
  }

  getData(): void { 
    this.userService.getUsers().subscribe((res: any) => { 
      this.data = res; 
      console.log(this.data); // Log dữ liệu ra console để kiểm tra
    });
  }
}
