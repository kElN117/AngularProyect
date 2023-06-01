import { Component, Output, EventEmitter } from '@angular/core';
import { Articulo } from '../interfaces/Articulo';
import { ArticulosService } from '../service/articulos.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent {

  @Output() datosMostrar = new EventEmitter();

  articulos : Articulo [] = [];

  articuloSeleccionado : Articulo = {
    nombre : "",
    descripcion : "",
    urlImagen: "",
    precio : 0,
    existencia : 0,
    categoria : 0,
    tipoUnidad: 0
  }

  //Cargar el arreglo con ngOnInit
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.articulos = this.articulosService.returnData();
  }
  //Pero es directo del servicio no del componente

  constructor(private articulosService : ArticulosService,
    private router: Router){
  }

  borrar(borrar : Articulo){


    this.articulosService.eliminar(borrar);

  }
  seleccionarArticulo(articulo: Articulo): void{
    this.articuloSeleccionado = {
      ...articulo
    }
    this.router.navigate(["modificarArticulo/" + articulo.nombre]);
    
  }

} 