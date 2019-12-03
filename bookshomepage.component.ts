import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bookshomepage',
  templateUrl: './bookshomepage.component.html',
  styleUrls: ['./bookshomepage.component.css']
})
export class BookshomepageComponent implements OnInit {
  library:any;
  data1: any;
  public bookData=[]

  constructor(private http: HttpClient, private router:Router) { }

  ngOnInit() {
     this.http.get('http://localhost:3000/book').subscribe(data=>{      
       this.library=data
       console.log(this.library)    
     })
  }
  bookdetail(value){
console.log(value)
localStorage.setItem("bookdetail",JSON.stringify(value))
this.router.navigate(['/bookdetail'])
  }
}
