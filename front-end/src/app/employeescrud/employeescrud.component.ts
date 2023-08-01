import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-employeescrud',
  templateUrl: './employeescrud.component.html',
  styleUrls: ['./employeescrud.component.scss']
})
export class EmployeescrudComponent {

  EmployeeArray : any[] = [];
  currentEmployeeId = "";

  name: string ="";
  address: string ="";
  phone: string ="";


  constructor (private http: HttpClient)
  {
    this.getAllEmployee();
  }
  getAllEmployee() {
    this.http.get("http://localhost:8003/user/getAll")
    .subscribe((resultData: any)=>
    {
       
        console.log(resultData);
        this.EmployeeArray = resultData.data;
    });
  }

  setUpdate(data: any) 
  {
   this.name = data.name;
   this.address = data.address;
   this.phone = data.phone;
   this.currentEmployeeId = data._id;
  
  }
  UpdateRecords()
  {
    let bodyData = {
      "name" : this.name,
      "address" : this.address,
      "phone" : this.phone,
    };
    
    this.http.patch("http://localhost:8003/user/update"+ "/"+this.currentEmployeeId,bodyData).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Employee Updateddd")
        
       this.getAllEmployee();
       this.name = '';
       this.address = '';
       this.phone  = '';
       
       // this.getAllEmployee();
      
    });
  }

  setDelete(data: any) {
    this.http.delete("http://localhost:8003/user/delete"+ "/"+ data._id).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Employee Deletedddd")
       
       this.getAllEmployee();
        //this.getAllEmployee();
   
    });
    }

  save()
  {
    if(this.currentEmployeeId == '')
    {
        this.register();
    }
      else
      {
       this.UpdateRecords();
      }       
  }

  register()
  {
    let bodyData = {
      "name" : this.name,
      "address" : this.address,
      "phone" : this.phone, 
  };
    this.http.post("http://localhost:8003/user/create",bodyData).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Employee Registered Successfully")
         //this.getAllEmployee();
        this.name = '';
        this.address = '';
        this.phone  = '';
       this.getAllEmployee();
    });
  }
}


