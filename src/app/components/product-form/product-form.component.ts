import { Component, OnInit } from '@angular/core';
import { Cerveza } from 'src/app/interfaces/cerveza';
import { ProductService } from 'src/app/services/product.service';
import {Router, ActivatedRoute} from '@angular/router'


@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  cerveza: Cerveza = {id:0,nombre: '', tipo:'', precio:0};
  
  constructor(private productService:ProductService, private router:Router, private ActivatedRoute: ActivatedRoute){}

  submitProduct(){
    this.productService.createProduct(this.cerveza)
    .subscribe(
      res => {
        console.log(res),
        this.router.navigate(['/']);
        },
      err => console.log(err)
    )
  } 
  ngOnInit(){
    const params =this.ActivatedRoute.snapshot.params;
    //console.log(params["id"]);
    if(params){
      this.productService.getProduct(params["id"])
      .subscribe(
        res =>{
          this.cerveza = res; 
        }
      )
    }
  }
}
