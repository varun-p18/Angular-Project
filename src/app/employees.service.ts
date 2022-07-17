import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  public contactlist=[ {name:'Harsha Vardhan Pendyala',mail:'harsha@fosterate.com',ph:'7777888855',website:'www.technovert.com',landline:'0522 235 7220',Address:" Hyderabad\n\t\t telangana\n\t\t 500085"
  },
  {name:'Network Duke',mail:'duke@fosterate.com',ph:'7777888855',website:'www.technovert.com',landline:'0522 235 7221',Address:" Pune\n\t\t maharashtra\n\t\t 500061"},
  {name:'Arshaque Mohammed',mail:'arshaque@fosterate.com',ph:'7777888855',website:'www.technovert.com',landline:'0522 235 7223',Address:" Bangalore\n\t\t karnataka\n\t\t 500070"},
]
public buttonname='Add'
public index=0
public noelements=false
  constructor() { }
  getdetails(){
    return this.contactlist
  }
 

}
