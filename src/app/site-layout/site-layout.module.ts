import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    FormsModule               //to use ngmodel.. 2 way binding
  ],
  exports:[
    HeaderComponent,
    FooterComponent
  ]
})
export class SiteLayoutModule { }
