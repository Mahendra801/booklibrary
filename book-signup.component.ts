import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-book-signup',
  templateUrl: './book-signup.component.html',
  styleUrls: ['./book-signup.component.css']
})
export class BookSignupComponent implements OnInit {
  sin: FormGroup;

  constructor(private http: HttpClient, private router: Router) {
    this.sin = new FormGroup({
      name: new FormControl(),
      mobilenumber: new FormControl(),
      address: new FormControl(),
      email:new FormControl(),
      password: new FormControl(),
    })
  }
  signup(data) {
    let body = {
      name: data.value.name,
      mobilenumber: data.value.mobilenumber,
      address: data.value.address,
      email:data.value.email,
      password: data.value.password,
    };
    localStorage.setItem("signup", JSON.stringify(body));
    console.log(body)
    this.router.navigate(["booklogin"]);
    this.http.post("http://localhost:3000/user/auth/signup", body).subscribe(data => {
      console.log(data);  
  });
  }

  ngOnInit() {
     }





}
