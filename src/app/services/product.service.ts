import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Product } from '../interfaces/product';
import {Observable} from 'rxjs';
import { Cerveza } from '../interfaces/cerveza';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  BASE_URL: string = 'http://localhost:3000';

  constructor(private http:HttpClient) { }
  getProducts(): Observable<Cerveza[]>{
    return this.http.get<Cerveza[]>('http://localhost:3000/cervezas');
  }
  getProduct(id: number): Observable<Cerveza>{
    return this.http.get<Cerveza>('http://localhost:3000/cervezas/'+id);
  }
  createProduct(product: Cerveza): Observable<Cerveza>{
    return this.http.post<Cerveza>('http://localhost:3000/cervezas/', product);
  }
  deleteProduct(id: number): Observable<Cerveza>{
    return this.http.delete<Cerveza>('http://localhost:3000/cervezas/'+id);
  }
  updateproduct(id: number, product: Cerveza): Observable<Product>{
    return this.http.put<Cerveza>('http://localhost:3000/cervezas/', product);
  }
}
