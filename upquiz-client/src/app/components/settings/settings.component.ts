import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
  currentUser: User = new User();
  settingsForm: FormGroup;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private formBuilder: FormBuilder
  ) {
    this.settingsForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      surname: ['', Validators.required],
      oldPassword: ['', Validators.required],
      newPassword: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.userService.user$.subscribe((res) => {
      if(res){
        this.currentUser = res;
      }
    })
  }

  updateUser(): void {
    if(this.settingsForm.valid && this.checkPasswords()){
      const updatedUser = {
        firstname: this.settingsForm.value.firstName,
        surname: this.settingsForm.value.surname,
        oldPassword: this.settingsForm.value.oldPassword,
        newPassword: this.settingsForm.value.newPassword
      };
      this.userService
      .update(this.currentUser.iduser, updatedUser)
      .subscribe(
        () => this.toastr.success("User settings updated successfuly.")
      );
    }else{
      this.toastr.error("You must provide correct credentials!");
    }
  }

  private checkPasswords(): boolean{
    return this.currentUser.password !== this.currentUser.repeatedPassword ? false : true;
  }
}
