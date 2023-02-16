import { Component } from '@angular/core';
import { ProductserviceService } from 'src/app/product/services/productservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  searchterm:any

  constructor(private ps:ProductserviceService){}
  search(event:any){
    this.searchterm=event.target.value       // target is to get what is typed asap
    this.ps.search.next(this.searchterm)    // next is to send data to ps
  }
}
