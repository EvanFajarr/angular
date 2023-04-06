import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { signUp } from '../data-type';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  invalidUserAuth= new EventEmitter<boolean>(false)
  constructor(private http: HttpClient, private router:Router) {}
  userSignUp(user:signUp){
    this.http.post('http://localhost:3000/users',user,{observe:'response'})
    .subscribe((result)=>{
    // console.warn(result);
    if(result){
      localStorage.setItem('user',JSON.stringify(result.body));
      this.router.navigate(['/']);
    }
     
    })
  }
}
