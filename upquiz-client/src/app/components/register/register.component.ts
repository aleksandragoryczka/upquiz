import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgModel, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit{
  user: User = new User();
  errorMessage = '';
  userForm: FormGroup;

  constructor(
    private userService: UserService,
    private router: Router,
    private toastr: ToastrService,
    private formBuilder: FormBuilder) {}


  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      firstname: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      surname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }

  get formControls() {
    return this.userForm.controls;
  }

  createUser(): void {
    const new_user = {
      firstname: this.user.firstname,
      surname: this.user.surname,
      email: this.user.email,
      password: this.user.password,
    };

    this.userService.register(new_user).subscribe(res => {
      if(res){
        this.toastr.success("Succesfully registered. Now log in with your credentials")
        this.router.navigate([`/login`])
      }else{
        this.toastr.error("User with that email already exists!");
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
