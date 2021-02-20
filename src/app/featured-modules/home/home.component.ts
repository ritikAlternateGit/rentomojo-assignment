import { LoaderService } from '../../services/loader.service';
import { UserService } from '../../services/user.service';
import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user.model';


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  displayedColumns: string[] = ['name', 'company', 'blogs'];
  users:User[] = [];
  filteredUsers:User[] = [];
  constructor(private __userService: UserService,
              private __loader: LoaderService) { }

  ngOnInit(): void {
    this.__loader.show(); //show loader
    this.__userService.getUsers().subscribe(users=>{
      this.__loader.hide(); //hide loader
      this.users=users;
      const tmp:User[] = []; //temporary array to assign to filtered array, so that angular can detect change 
      this.users.forEach(user=>tmp.push(user));
      this.filteredUsers = tmp;
    });
  }

  filter(e):void{
    var str = e.target.value.toLowerCase();
    this.filteredUsers=this.users.filter((user)=>{
      if(user.name.toLowerCase().includes(str) || user.company.name.toLowerCase().includes(str)){
        return true;
      }
    });
  }  
}
