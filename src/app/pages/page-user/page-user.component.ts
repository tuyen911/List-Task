import { UsersService, UersResponse } from './../../Service/users.service';
import { Component, OnInit } from '@angular/core';
import { Router } from  '@angular/router';
@Component({
  selector: 'app-page-user',
  templateUrl: './page-user.component.html',
  styleUrl: './page-user.component.css'
})
export class PageUserComponent implements OnInit {
  data: any[] = []; 
  editMode: boolean = false; // Biến để kiểm tra xem hiện tại có đang ở chế độ chỉnh sửa hay không
  editedUserId: number | null = null; // Biến để lưu trữ ID của người dùng đang được chỉnh sửa
  editedUser: Partial<UersResponse> = {};

  constructor(private userService: UsersService, private router: Router) {}

  ngOnInit(): void {
    this.getData(); 

     // Sidebar toggle
     document.getElementById('sidebarCollapse')?.addEventListener('click', () => {
      document.getElementById('sidebar')?.classList.toggle('active');
    });
  }

  submitAnswers(){
    this.router.navigate(['/users-page']);
  }

  getData(){ 
    this.userService.getData().subscribe((res: any) => { 
      this.data = res.data; 
      console.log(res); 
    });
  }

  deleteUser(id: number): void {
    if (confirm("Are you sure you want to delete this user?")) {
      this.userService.deleteUser(id).subscribe(() => {
        this.data = this.data.filter(user => user.id !== id);
      });
    }
  }

  editUser(user: UersResponse): void {
    this.editMode = true;
    this.editedUser = { ...user };
    
  }

  updateUser(): void {
    if (this.editedUser.id) {
      this.userService.updateUser(this.editedUser.id, this.editedUser).subscribe(() => {
        const index = this.data.findIndex(user => user.id === this.editedUser.id);
        if (index !== -1) {
          this.data[index] = { ...this.data[index], ...this.editedUser };
        }
        this.cancelEdit();
      });
    }
  }

  cancelEdit(): void {
    this.editMode = false;
    this.editedUser = {};
  }
}
