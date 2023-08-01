import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  firstname: string ="";
  lastname: string ="";
  email: string ="";
  password: string ="";

  constructor(private router: Router,private http: HttpClient) {}

  // constructor(private http: HttpClient) 
  // {
  // }

  ngOnInit(): void
  {
  }

  register()
  {
    let bodyData = 
    {
      "firstname" : this.firstname,
      "lastname" : this.lastname,
      "email" : this.email,
      "password" : this.password,
    };
    this.http.post("http://localhost:9992/employee/create",bodyData).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Student Registered Successfully");
        //this.router.navigateByUrl('/login');
       
    });
  }

  save()
  {
    this.register();
    
  }
  goBack() {
    // Navigate back to the previous page (replace '/login' with the route path of your login page)
    this.router.navigateByUrl('/login');
  }

}
