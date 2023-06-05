import { Component, Input, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-TeacherView',
  templateUrl: './teacher-view.component.html',
  styleUrls: ['./teacher-view.component.scss'],
})
export class TeacherViewComponent implements OnInit {
  @Input() currentUser: User;

  constructor(
    private userService: UserService,
  ) {}

  ngOnInit(): void {
    console.log(this.currentUser)
    this.userService.user$.subscribe((res) => {
      if(res){
        this.currentUser = res
      }
    })
  }

  public logout():void{
    return this.userService.logout();
  }
}
