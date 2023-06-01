import { Component, ViewChild, ViewChildren } from '@angular/core';
import { Articulo } from './interfaces/Articulo';
import { SlidebarComponent } from './slidebar/slidebar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  //Administracion de articulos
  //Tambien se puede colocar la interface de articulo y
  //hacer que sea de tipo articulo en vez de any
  mostrar(Datos : any){
    console.log(Datos);
    this.articuloSeleccionado = Datos;
    
  }
  @ViewChild("slidebar") slidebar : SlidebarComponent | undefined;

  mostrarslidebar(){
    this.slidebar?.mostrrslidebarr();
  }

  articuloSeleccionado : Articulo = {
    nombre : "",
    descripcion : "",
    urlImagen : "",
    precio : 0,
    existencia : 0,
    categoria : 0,
    tipoUnidad : 0,
  }

} 