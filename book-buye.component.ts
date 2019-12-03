import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-buye',
  templateUrl: './book-buye.component.html',
  styleUrls: ['./book-buye.component.css']
})
export class BookBuyeComponent implements OnInit {

  constructor( private router:Router) {
   
   }
    show(value){
    alert("payment is sucessfull")
  }

  ngOnInit() {
  }

}
