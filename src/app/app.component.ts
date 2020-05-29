import { Component, OnInit  } from '@angular/core';
import { UserService } from './user.service';
import { User } from 'src/app/user.model';

import { ZoomService } from './zoom.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  users: User[];
  zoomUsers: {};
  constructor(private  userService:  UserService, private zoomService: ZoomService) {}  
   
  ngOnInit() {

    // this.zoomService.sendGetRequest().subscribe((data: any[])=>{
    //   console.log(data);
    //   this.zoomUsers = data;
    //   console.log(this.zoomUsers)
    // }) 

    // this.userService.getUsers().subscribe(data => {
    //   this.users = data.map(e => {
    //     return this.userService.setUser(e.payload.doc.data(), e.payload.doc.id);
    //   })
    //   console.log(this.users)
    // });
  }
  title = 'BuSoft Tech';

  
}
