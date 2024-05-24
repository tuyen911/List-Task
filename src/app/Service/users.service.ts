import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface UersResponse{
  id ?: number
  name?: string
  email?: string
  phone?: string
}


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private HttpClient:HttpClient) { }
  getData() {
    return this.HttpClient.get('http://localhost:3000/users')
  }

  save(inputData:object){
    return this.HttpClient.post('http://localhost:3000/users', inputData)
  }
  updateUser(id: number, inputData: object) {
    return this.HttpClient.put(`http://localhost:3000/users/${id}`, inputData);
  }

  deleteUser(id: number) {
    return this.HttpClient.delete(`http://localhost:3000/users/${id}`);
  }
}
