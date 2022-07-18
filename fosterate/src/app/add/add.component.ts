import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../employees.service';
import { FormsModule } from '@angular/forms';
import { FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  constructor(public employeedetails:EmployeesService) { 
    

}

public fb= new FormBuilder()
registrationform=this.fb.group({
      name:['',Validators.required],
      mail:['',Validators.required],
      ph:['',Validators.required],
      Landline:['',],
      Website:[''],
      Address:[''],

})
 



idx=0

  ngOnInit() {
    this.edit(this.employeedetails.index)

  }
  adddetails(){
    if(this.registrationform.value.name==""||this.registrationform.value.mail==""||this.registrationform.value.ph==""){
      alert("Name,Email,Mobile fields are mandatory")
    }
    else{
    if(this.employeedetails.buttonname=='edit'){
    this.employeedetails.contactlist[this.idx]={...this.registrationform.value}
    alert("Contact edited successfully")
    }
    else{
      this.employeedetails.contactlist.push(this.registrationform.value)
      this.employeedetails.noelements=false
      alert("Contact added successfully")
    }
  }
  }
  edit(i:number){
    this.idx=this.employeedetails.index
    if(this.employeedetails.buttonname=='edit'){
    this.registrationform=this.fb.group({
      name:[this.employeedetails.contactlist[i].name,Validators.required],
      mail:[this.employeedetails.contactlist[i].mail,Validators.required],
      ph:[this.employeedetails.contactlist[i].ph,Validators.required],
      Landline:[this.employeedetails.contactlist[i].landline,],
      Website:[this.employeedetails.contactlist[i].website],
      Address:[this.employeedetails.contactlist[i].Address],

})

  }
}
}


