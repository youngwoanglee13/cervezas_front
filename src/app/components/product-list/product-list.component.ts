import { Component, OnInit} from '@angular/core';
import { ProductService } from 'src/app/services/product.service'; 
import { Cerveza } from 'src/app/interfaces/cerveza';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{

  cervezas: Cerveza[]=[];

  constructor(private productService: ProductService){}

  ngOnInit(){
    this.getProducts();
  }
  getProducts(){
    this.productService.getProducts()
      .subscribe(
        res => {
          this.cervezas=res;
        },
        err => console.log(err)
      )
  }
  deleteProduct(id:number){
    this.productService.deleteProduct(id)
    .subscribe(
      res => {
        this.getProducts();
      },
      err => console.log(err)
    )
  }
  getProduct(id:string){
    this.productService.getProduct(Number(id))
      .subscribe(
        res => console.log(res),
        err => console.log(err)
      )
  }
  /*createProduct(product: Cerveza){
    this.productService.createProduct(product)
      .subscribe(
        res => console.log(res),
        err => console.log(err)
      )
  }*/
}
