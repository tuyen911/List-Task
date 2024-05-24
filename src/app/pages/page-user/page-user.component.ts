import { UsersService, UersResponse} from './../../Service/users.service';
import { Component, OnInit } from '@angular/core';
import { Router } from  '@angular/router';
@Component({
  selector: 'app-page-user',
  templateUrl: './page-user.component.html',
  styleUrl: './page-user.component.css'
})
export class PageUserComponent implements OnInit {
  data: any[] = []; 
  updateUsers: boolean = false;// Biến để kiểm tra xem hiện tại có đang ở chế độ chỉnh sửa hay không
  editedUserId: number | null = null; // Biến để lưu trữ ID của người dùng đang được chỉnh sửa
  editedUser: Partial<UersResponse> = {};
  counter: number = 0; 



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
      this.updateCounter();
    });
  }

  deleteUser(id: number): void {
    if (confirm("Are you sure you want to delete this user?")) {
      this.userService.deleteUser(id).subscribe(() => {
        this.data = this.data.filter(user => user.id !== id);
        this.updateCounter();
      });
    }
  }

  editUser(user: UersResponse): void {
    this.editedUser = { ...user };
    this.updateUsers = true;
  }

  updateUser(): void {
    if (typeof this.editedUser.id === 'number') {
      this.userService.updateUser(this.editedUser.id, this.editedUser).subscribe({
        next: (res: any) => {
          console.log(res, 'response');
          alert(res.message);
          this.updateUsers = false;
          this.getData(); // Load lại dữ liệu sau khi cập nhật thành công
        },
        error: (err: any) => {
          console.log(err.error.errors, "error");
          alert('Cập nhật thông tin người dùng không thành công.');
        }
      });
    } else {
      console.error('ID của người dùng không hợp lệ.');
    }
  }

  cancelEdit(): void {
    this.updateUsers = false;
    this.editedUser = {};
  }
  updateCounter() {
    this.counter = 0;
    this.data.forEach((item, index) => {
      item.serialNumber = ++this.counter;
    });
  }

  
}

  
