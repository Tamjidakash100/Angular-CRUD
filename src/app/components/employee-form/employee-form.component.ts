import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { HttpService } from '../../http.service';
import { IEmployee } from '../../interfaces/employee';

@Component({
  selector: 'app-employee-form',
  standalone: true,
  imports: [MatInputModule,MatButtonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './employee-form.component.html',
  styleUrl: './employee-form.component.css'
})
export class EmployeeFormComponent {
  formBuilder = inject(FormBuilder);
  httpService = inject(HttpService);
  employeeForm = this.formBuilder.group({
    name:['',[Validators.required]],
    email:['',[Validators.required,Validators.email]],
    phone:['',[Validators.required]],
    age:[0,[Validators.required]],
    salary:[0,[Validators.required]]
  });
  save(){
    const employee:IEmployee = {
      name:this.employeeForm.value.name!,
      email:this.employeeForm.value.email!,
      phone:this.employeeForm.value.phone!,
      age:this.employeeForm.value.age!,
      salary:this.employeeForm.value.salary!,
    }
    this.httpService.createEmployee(employee).subscribe(()=>{
      console.log("Success!");
    });
    
  }
}
