import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  public selectedUser;
  public user = {
        name: 'John'
      };
  public users = [
    {name: 'John'},
    {name: 'Bob'},
    {name: 'Alice'}
  ];
  public myclass = 'red';
  public mycolor = 'green';
  public isShown = true;


  changeColor(color) {
    this.mycolor = color;
  }

  random() {
    return Math.random();
  }

  constructor() {

    console.log('constructor', this.user);

    // setTimeout(() => {
    //   this.mycolor = 'black'
    // }, 2000);

    setTimeout(() => {
      this.myclass = 'green';
      setTimeout(() => {
        this.myclass = 'blue';
      }, 2000);
    }, 2000);


    // setTimeout(() =>{
    //   this.user ={
    //     name: 'John'
    //   };
    // },2000);
  }

  ngOnInit(): void {
    console.log('ngOnInit', this.user);
  }

}
