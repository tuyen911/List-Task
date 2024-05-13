import { Component } from '@angular/core';
import { UsersService } from '../../Service/users.service';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrl: './users-page.component.css'
})
export class UsersPageComponent {
  constructor (private  userService : UsersService) {}
  name!: string
  email!: string
  phone!:string

  isLoading:boolean =false;
  loadingTitle: string = 'Loading...'
  errors:any  = [] ;

  save(){
    this.isLoading=true;
    this.loadingTitle='Saving';

    var inputDate ={
      name: this.name,
      email:this.email,
      phone:this.phone      
    }
    this.userService.save(inputDate).subscribe({
      next:(res :any)=>{
        console.log(res,'response');

       
        alert(res.message);
        this.name ='';
        this.email='';
        this.phone= '';    
        
        this.isLoading=false;
      },
      error:(err :any) =>{
        this.errors = err.error.errors;
        this.isLoading=false;
        console.log(err.error.errors,"error")
      }
    })
  }
}
