import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {

  search=new BehaviorSubject("")

  constructor(private httpClient:HttpClient) {}

  //http request

  // method that should work on making api request
  viewAllProducts(){
   return this.httpClient.get("http://localhost:3000/products")     //this method will be called by another method.. and for this to work.. there has to be return
  }    

  addProduct(newProduct:any){
    return this.httpClient.post("http://localhost:3000/products",newProduct)
  }

  //to get single product data - in view product page---- get request
  viewproduct(id:any){
    return this.httpClient.get("http://localhost:3000/products/"+id)
  }

  //delete Api
  deleteProduct(id:any){
    return this.httpClient.delete("http://localhost:3000/products/"+id)
  }

  //edit Api   ---- we will use put instead of patch.. as the complete data can also be editted
  updateProduct(id:any,data:any){
    return this.httpClient.put("http://localhost:3000/products/"+id,data)
  }

}
