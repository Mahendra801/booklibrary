import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-book-login',
  templateUrl: './book-login.component.html',
  styleUrls: ['./book-login.component.css']
})
export class BookLoginComponent implements OnInit {
  log: FormGroup;

  constructor(private http:HttpClient,private router:Router) { 
    this.log=new FormGroup({
      email:new FormControl(),
      password:new FormControl(),
    })
  }

  ngOnInit() {
  }
  login(value){
    let logindata={
      email:value.email,
      password:value.password,
    }
    this.http.post("http://localhost:3000/user/auth/login",logindata).subscribe(data=>{
      console.log(data)
      if(value.email = data && value.password ==data){
        this.router.navigate(['bookhome'])
      }
      else{
        alert("check username are password")
      }
    })
  }
  }

