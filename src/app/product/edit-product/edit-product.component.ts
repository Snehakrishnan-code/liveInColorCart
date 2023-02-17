import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ProductserviceService } from '../services/productservice.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent {
productid: any;
  productdata: any;

constructor(private ar:ActivatedRoute, private ps:ProductserviceService, private router:Router){}

ngOnInit():void{
this.ar.params.subscribe((data:any)=>{          //get params.. or id from the url using activatedroute ..params method
  this.productid=data["id"]
})
this.ps.viewproduct(this.productid).subscribe((item:any)=>{
  this.productdata=item
})
}

updateProduct(form:any){
  let updateproduct={
    id: form.value.id ,
    productName:form.value.productName ,
    categoryId: form.value.categoryId,
    description: form.value.description,
    rating: form.value.rating,
    price:form.value.price ,
    productImg:form.value.productImg ,
    material:form.value.material
  }

  this.ps.updateProduct(this.productid,this.productdata).subscribe((item:any)=>{
    alert("product details updated")
    this.router.navigateByUrl("product")
  })
}
}
