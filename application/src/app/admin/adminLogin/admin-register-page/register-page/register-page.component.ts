import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {
  

  constructor(private router: Router, private adminService:AdminService, private route: ActivatedRoute, private auth: AuthService) { }

  usersName: string = '';
  email: string = ''; 
  password: string = '';
  confirmPassword: string ='';

  ngOnInit(): void {
  }

  createUser(){
    let newAdmin = {
      email: this.email,
      name: this.usersName,
      username: this.email,
      password: this.password
    }
    this.adminService.addAdmin(newAdmin).subscribe(
      (response=> {
        console.log("user was added")
      }
    ));
    this.auth.registerUser();
    this.router.navigate(['./login']);
  }

}
