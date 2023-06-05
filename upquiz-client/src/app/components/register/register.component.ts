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
  userForm: FormGroup;

  email = new FormControl('', [Validators.required, Validators.email]);
  firstname = new FormControl('', [Validators.required]);
  surname = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);
  repeatedPassword = new FormControl('', [Validators.required]);

  constructor(
    private userService: UserService,
    private router: Router,
    private toastr: ToastrService,
    private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      repeatedPassword: ['', Validators.required]
    });
  }

  createUser(): void {
    if(!this.checkPasswords()){
      this.toastr.warning("Provided passwords are not the same");
      return;
    }

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
    )
  }

  public getErrorMessage(fieldName: string) : string {
    switch(fieldName){
      case 'email':
        if (this.email.hasError('required')) {
          return 'You must enter an email';
        }
        return this.email.hasError('email') ? 'Invalid email form' : '';
      case 'firstname':
        return this.firstname.hasError('required') ? 'You must enter a name' : '';
      case 'surname':
        return this.surname.hasError('required') ? 'You must enter a surname' : '';
      case 'password':
        return this.password.hasError('required') ? 'You must enter a password' : '';
      case 'repeatedPassword':
        return this.password.hasError('required') ? 'You must repeat a password' : '';
      default:
        return '';
    }
  }

  private checkPasswords(): boolean{
    return this.user.password !== this.user.repeatedPassword ? false : true;
  }

  }
