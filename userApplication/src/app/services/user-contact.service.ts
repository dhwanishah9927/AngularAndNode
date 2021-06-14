import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserContactService {
  
  addUserContactURL = 'http://localhost:3000/user/addUserQuery';

  constructor(private httpClient: HttpClient) { }

  addUserContact(userContact: any){
    return this.httpClient.post(this.addUserContactURL, userContact)
  }
  
}

