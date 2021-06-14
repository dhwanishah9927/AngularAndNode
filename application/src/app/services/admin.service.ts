import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AdminInfo } from '../admin/adminLogin/admin-register-page/register-page/adminInfo';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  adminRegisterURL:string = "http://localhost:3000/admin/register";
  constructor(private httpClient: HttpClient) { }
  //local storage for token session?

  addAdmin(adminInfo:AdminInfo){
    return this.httpClient.post<AdminInfo>(this.adminRegisterURL, adminInfo);
  }
}
