import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductserviceService } from '../services/productservice.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent {
  prodid: any;
  productdata: any;

  constructor(private ar: ActivatedRoute, private ps:ProductserviceService) { }

  ngOnInit(): void {
    this.ar.params.subscribe((data:any)=>{
      // console.log(data);         .... just console .. you will get an object with id key and its value (id from the url)... access it and save it
      this.prodid=data["id"]
    })

    this.ps.viewproduct(this.prodid).subscribe((item:any)=>{
      // console.log(item);
      this.productdata=item;          // subscribe is to access the data....... the array of project details will be saved in productdata
    })

  
}
}