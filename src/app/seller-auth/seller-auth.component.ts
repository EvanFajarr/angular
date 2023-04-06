import { Component, OnInit } from '@angular/core';
import { signUp } from '../data-type';
import { SellerService } from '../services/seller.service';



@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit {
  showLogin=false
  authError:String='';
  constructor(private seller:SellerService) {}

 ngOnInit(): void{
this.seller.reloadSeller()
 }
 SignUp(data:signUp):void{
  newFunction_1();
  this.seller.userSignUP(data);

   function newFunction_1() {
     console.warn(data);
   }

   function newFunction(result: Object) {
     console.warn(result);
   } 
  
 }
 Login(data:signUp):void{
  this.seller.userLogin(data);
  // console.warn(data)
  this.seller.isLoginError.subscribe((isError)=>{
    if(isError){
      this.authError="Login Gagal";
    }
  })
 }



 openLogin(){
  this.showLogin=true
 }
 openSignUp(){
  this.showLogin=false
 }
}

