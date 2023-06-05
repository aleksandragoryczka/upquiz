import { Component, } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form: any = {};
  roles: string[] = [];

  constructor(
    private userService: UserService,
    private router: Router,
    private toastr: ToastrService) { }

  login() {
    this.userService.login(this.form).subscribe(
      loggedIn => {
        if(loggedIn){
          this.userService.user$.subscribe(res => {
            if(res?.iduser){
              this.router.navigate([`/teacher/${res.iduser}`])
            }
          })}
      },
      (error) => {
        if(error.status === 401){
          this.toastr.error("Invalid email or password. Try again!")
        }
      }
    );
  }
}
