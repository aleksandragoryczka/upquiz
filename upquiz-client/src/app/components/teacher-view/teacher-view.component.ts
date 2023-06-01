import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';
import { TokenStorageService } from '../../services/token-storage.service';

@Component({
  selector: 'app-TeacherView',
  templateUrl: './teacher-view.component.html',
  styleUrls: ['./teacher-view.component.scss'],
})
export class TeacherViewComponent implements OnInit {
  @Input() currentUser: User;
  //currentUser: User = new User();

  constructor(
    private userService: UserService,
    private tokenStorageService: TokenStorageService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.currentUser.iduser = params['id'];
      //console.log(this.currentUser.iduser);
      //const user =this.tokenStorageService.getUser();
      this.userService.get(this.currentUser.iduser).subscribe(
        (data) => {
          this.currentUser = data;
          console.log(data);
        },
        (error) => {
          console.log(error);
        }
      );
    });
  }
}
