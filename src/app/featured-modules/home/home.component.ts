import { LoaderService } from '../../services/loader.service';
import { UserService } from '../../services/user.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import {User} from '../../models/user.model';
import { Subscription } from 'rxjs';


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = ['name', 'company', 'blogs'];
  users:User[] = [];
  filteredUsers:User[] = [];
  subscription:Subscription;
  constructor(private __userService: UserService,
              private __loader: LoaderService) { }

  ngOnInit(): void {
    this.__loader.show(); //show loader
    this.subscription = this.__userService.getUsers().subscribe(users=>{
      this.__loader.hide(); //hide loader
      this.users=users;

      //deep cloning users into filteredUsers
      const tmp:User[] = []; 
      this.users.forEach(user=>tmp.push(user));
      this.filteredUsers = tmp;
    });
  }

  filterByNameOrCompany(e):void{
    var str = e.target.value.toLowerCase();
    this.filteredUsers=this.users.filter((user)=>{
      if(user.name.toLowerCase().includes(str) || user.company.name.toLowerCase().includes(str)){
        return true;
      }
    });
  }  

  ngOnDestroy(){
    //unsubscribing to avoid memory leaks
    this.subscription.unsubscribe();
  }
}
