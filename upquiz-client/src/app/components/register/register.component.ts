import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {


  user: User = new User();
  errorMessage = '';

  constructor(
    private userService: UserService,
    private router: Router) {}

  createUser(): void {
    const new_user = {
      firstname: this.user.firstname,
      surname: this.user.surname,
      email: this.user.email,
      password: this.user.password,
    };

    this.userService.register(new_user).subscribe(res => {
      if(res){
        this.router.navigate([`/login`])
      }
    },
    err => {
      this.errorMessage = err.error.message;
    })
  }

  /*
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }*/
}
