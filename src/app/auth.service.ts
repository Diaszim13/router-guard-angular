import { Injectable } from '@angular/core';
import { Role } from './role';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  getUserRole() {
    /*
      Chamada fake para api
    */ 
    return Role.USER;
    
    //return localStorage.getItem('role');
  }

}
