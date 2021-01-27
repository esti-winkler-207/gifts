import { Component, OnInit } from '@angular/core';
import { ProductSerService } from 'src/app/services/product-ser.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private productSer:ProductSerService) { }

  ngOnInit(): void {
    this.productSer.getAllproduct().subscribe(
      data=>{console.log(data)},
      err=>{console.error(err);}
      
    )


  }


}
