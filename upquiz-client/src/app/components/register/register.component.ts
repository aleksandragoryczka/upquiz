import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
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
    private authService: AuthService) {}

  createUser(): void {
    const new_user = {
      firstname: this.user.firstname,
      surname: this.user.surname,
      email: this.user.email,
      password: this.user.password,
    };

    this.authService.register(new_user).subscribe(data => {
      console.log(data);
    },
    err => {
      this.errorMessage = err.error.message;
      //this.isSignUpFailed = true;
    })

    //this.userService.createUser(new_user).subscribe();
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
