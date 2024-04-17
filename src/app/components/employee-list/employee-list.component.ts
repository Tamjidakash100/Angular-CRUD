import { Component } from '@angular/core';
import { IEmployee } from '../../interfaces/employee';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent {
employeeList:IEmployee[]=[];
ngOnInit(){

}
}
