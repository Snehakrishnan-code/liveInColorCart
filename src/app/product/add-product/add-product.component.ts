import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductserviceService } from '../services/productservice.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

  constructor(private ps: ProductserviceService, private router: Router, private fb: FormBuilder) { }

  addProductForm = this.fb.group({
    id:[''],
    productName: [''],
    categoryId: [''],
    description:[''],
    rating: [''],
    price: [''],
    productImg: [''],
    material: ['']
  })

  addNewProduct(){
    let newProductData = {
      id: this.addProductForm.value.id,
      productName: this.addProductForm.value.productName,
      description: this.addProductForm.value.description,
      rating: this.addProductForm.value.rating,
      price: this.addProductForm.value.price,
      productImg: this.addProductForm.value.productImg,
      material: this.addProductForm.value.material
  }


this.ps.addProduct(newProductData).subscribe((item: any) => {
  alert('product added')
  this.router.navigateByUrl('product')
})
}
}
