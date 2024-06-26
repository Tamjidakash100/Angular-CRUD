import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { IEmployee } from './interfaces/employee';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  apiURL = "https://localhost:7287";
  http=inject(HttpClient);
  constructor() { }

  getAllEmployee(){
    return this.http.get<IEmployee[]>(this.apiURL+"/api/Employee");
  }
  createEmployee(employee:IEmployee){
    return this.http.post(this.apiURL+"/api/Employee",employee);
  }
}
