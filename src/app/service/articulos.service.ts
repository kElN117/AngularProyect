import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Articulo } from '../interfaces/Articulo';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {
  private apiUrl = 'http://localhost:4200/agregararticulo';
  private datos: any[] = [];

  articulos : Articulo[] = []


  constructor(private http: HttpClient) { }

  public setDatos(data: any[]): void {
    this.datos = data;
  }
  getProductos(): Observable<any[]> {
    return this.http.get<any[]>('/api/bd.php');
  }
  
  public getDatos(): any[] {
    return this.datos;
  }
  
  // Método para agregar un nuevo producto
  addProduct(product: any): Observable<any> {
    return this.http.post(this.apiUrl, product);
  }

  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  returnData(){
    return this.articulos;
  }

  validacion(articulo : Articulo) : boolean{
    const busqueda = this.articulos.filter(a => a.nombre == articulo.nombre);
    if (busqueda.length != 0) {
      return true;
    }

    return false;
  }

  agregar(articulo: Articulo) {
    this.articulos.push(articulo);
  }

  getIndex(articulo: Articulo) : number{
    let index = 0;
    this.articulos.forEach(art => {
      if (articulo.nombre === art.nombre) {
        index = this.articulos.indexOf(art);
      } 
    })
    return index;
  }

  modificar(articulo: Articulo){
    const index = this.getIndex(articulo);

    this.articulos[index] = {...articulo};
  }

  eliminar(articulo : Articulo){
    const index = this.getIndex(articulo);
    this.articulos.splice(index,1);
  }
  seleccionar(nombre:string):Articulo{
    return this.articulos.find(art => art.nombre == nombre)!
  }
}