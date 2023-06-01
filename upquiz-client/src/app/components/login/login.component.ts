import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { UserService } from '../../services/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(
    private tokenStorage: TokenStorageService,
    private userService: UserService,
    private router: Router,
    private tostr: ToastrService) { }

  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      //this.roles = this.tokenStorage.getUser().roles;
    }
  }

  login() {
    this.userService.login(this.form).subscribe(
      loggedIn => {
        //console.log(loggedIn);
        if(loggedIn){
          this.userService.user$.subscribe(res => {
            if(res?.iduser){
              //let currentUrl = `/teacher/${res.iduser}`;
              this.router.navigate([`/teacher/${res.iduser}`])
                  //.navigateByUrl('/', { skipLocationChange: true })
                  //.then(() => this.router.navigate([currentUrl]));
            }
          })
          
        }
        //console.log(data)
        //this.tokenStorage.saveToken(data.accessToken);
        /*this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        const user = this.tokenStorage.getUser();
        console.log(user);
        console.log("user id: " + user.id)

        //this.reloadPage();
        let currentUrl = `/teacher/${user.id}`; //TODO: replace with userid
            this.router
              .navigateByUrl('/', { skipLocationChange: true })
              .then(() => this.router.navigate([currentUrl]));
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;*/
      }
    );
  }

  reloadPage() {
    window.location.reload();
  }
}
