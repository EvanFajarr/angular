// import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { login, signUp } from '../data-type';
import { BehaviorSubject } from 'rxjs';
import { EventEmitter, Injectable } from '@angular/core';
// import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class SellerService {
  // userLogin(data: signUp) {
  //   throw new Error('Method not implemented.');
  isSellerLoggedIn=new BehaviorSubject<boolean>(false);
  isLoginError= new EventEmitter<boolean>(false);
  constructor(private http:HttpClient, private router:Router) { }
  userSignUP(data:signUp){
   this.http.post("http://localhost:3000/seller", data,{observe:'response'},).subscribe((result)=>{
    console.warn(result)
    if(result){
    
      localStorage.setItem('seller',JSON.stringify(result.body))
      this.router.navigate(['seller-home'])
    }
     });
    // console.warn("service called")
  }
  reloadSeller(){
    if(localStorage.getItem('seller')){
      this.isSellerLoggedIn.next(true)
      this.router.navigate(['seller-home'])
    }
  }
  
  userLogin(data:login){
    // console.warn(data)
    this.http.get(`http://localhost:3000/seller?email=${data.email}& password=${data.password}`,
    {observe:'response'}).subscribe((result:any)=>{
      console.warn(result)
      if(result && result.body && result.body.length==1){
        this.isLoginError.emit(false)
        localStorage.setItem('seller',JSON.stringify(result.body))
        this.router.navigate(['seller-home'])
      }else{
        console.warn("login gagal");
        this.isLoginError.emit(true)
      }
    })
 }
}
