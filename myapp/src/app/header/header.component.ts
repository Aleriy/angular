import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title = 'header component public';
  public selectedUser;
  public user = {
    name: 'John'
  };
  public users;
  public myclass = 'red';
  public mycolor = 'green';
  public isShown = true;

  changeColor(color) {
    this.mycolor = color;
  }

  random() {
    return Math.random();
  }

  constructor(private _userService: UserService) {
  
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
   this._userService.getAll().subscribe(users => this.users = users);
    console.log('ngOnInit', this.user);
  }

  removeUser(name: string) {
    this._userService.remove(name);
    this.users = this._userService.getAll();
  }

  addUser(name: string) {
    if (!name) {
      return;
    }
    this._userService.add(name);
    this.users = this._userService.getAll();
  }

}
