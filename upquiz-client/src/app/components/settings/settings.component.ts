import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
  currentUser: User = new User();
  selectedPicture: File;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getUser(this.route.snapshot.paramMap.get('id'));
  }

  getUser(id): void {
    this.userService.get(id).subscribe(
      (data) => {
        this.currentUser = data;
        this.currentUser.password = '';
      }
    );
  }

  updateUser(): void {
    this.userService
      .update(this.currentUser.iduser, this.currentUser)
      .subscribe(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  //TODO: uploading avatar
  onFileSelected(event: any) : void{
    this.selectedPicture = event.target.files[0];
  }

  uploadAvatar():void{
    if(!this.selectedPicture){
      return;
      //TODO: add popup
    }
    const formData = new FormData();
    formData.append('photo', this.selectedPicture);
    //this.userService.update(this.currentUser.iduser, formData).subscribe()
  }
}
