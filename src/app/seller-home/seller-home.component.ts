import { Component, OnInit } from '@angular/core';
import { product } from '../data-type';
import { ProductService } from '../services/product.service';
import { faTrash,faPen } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css']
})
export class SellerHomeComponent implements OnInit {
  productList:undefined | product[]
 productMessage:undefined|string;
 icon=faTrash;
 iconPEN=faPen;
   constructor(private product:ProductService){}

  ngOnInit(): void {
    this.list()
    // this.product.productList().subscribe((result)=>{
    //   console.warn(result)
    //   if(result){
    //     this.productList=result;
    //   }
    // })
   
  }
  deleteProduct(id:number){ 
    // console.warn(id)
    this.product.deleteProduct(id).subscribe((result) => {
      if (result) {
        this.productMessage = 'Delete Product Succesfully ';
        this.list()
      }
    });
    setTimeout(() => {
      this.productMessage=undefined
    }, 3000);
  }
  list(){
    this.product.productList().subscribe((result)=>{
      // console.warn(result)
      if(result){
        this.productList=result;
      }
    })
  }
}
