import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-admin-login-page',
  templateUrl: './admin-login-page.component.html',
  styleUrls: ['./admin-login-page.component.css']
})
export class AdminLoginPageComponent implements OnInit {
  userFormGroup: FormGroup | undefined;

  userName: string = '';
  passwordCredentials: string = '';
  error: boolean = false;
  registered: boolean = false;
  
  constructor(private router: Router, private adminService:AdminService, private userservice: UserService, private auth: AuthService) { }


  ngOnInit(): void {
    this.registered = this.auth.registered;

    this.userFormGroup = new FormGroup({
      userName: new FormControl('', [Validators.required, 
                                      Validators.minLength(2), 
                                      Validators.maxLength(10)]),
      userContact: new FormControl()
    })
    
  }


  handleSubmit() {
    this.auth.clearRegister();
    this.registered = this.auth.registered;
    let loginAdmin = {
     
      username: this.userName,
      password: this.passwordCredentials
    }
    this.userservice.login(loginAdmin)
      .subscribe(user => {
        this.auth.storeUser(user);
        this.router.navigate(['./view-news']);
      }, err => {
        if(err){
          this.error = true;
          console.log(err);
        }
      })
  }

}
