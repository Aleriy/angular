import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public user;
  public myclass = 'red';
  public mycolor = 'green';

  changeColor(color) {
    this.mycolor = color;
  }

  random() {
    return Math.random();
  }

  constructor() {

    // setTimeout(() => {
    //   this.mycolor = 'black'
    // }, 2000);

    setTimeout(() => {
      this.myclass = 'green';
      setTimeout(() => {
        this.myclass = 'blue';
      }, 2000);
    }, 2000);


    setTimeout(() =>{
      this.user ={
        name: 'John'
      };
    },2000);
  }

  ngOnInit(): void {
  }

}
