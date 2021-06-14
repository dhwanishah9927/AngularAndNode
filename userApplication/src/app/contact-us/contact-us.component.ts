import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserContactService } from '../services/user-contact.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  userFormGroup: any;

  userEmail:string = "";
  userEmailBody:String = "";
  constructor(private router:Router, private userContactService: UserContactService) { }

  ngOnInit(): void {
  }


  sendEmail(){
    // alert("place email somewhere in database?" + " \n emailer " + this.email + "\n message pasted \n" + this.emailBody);
    let contactBody = {
      email: this.userEmail,
      emailBody: this.userEmailBody
    }
    this.userContactService.addUserContact(contactBody).subscribe( (res) => {
      console.log("contact was added.");
    });
    this.router.navigate(['/homepage']);
  }
}
