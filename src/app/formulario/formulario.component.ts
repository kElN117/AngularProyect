import { Component, Input, Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Articulo } from '../interfaces/Articulo';
import { ArticulosService } from '../service/articulos.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  // verificador : boolean = false;
  // msgText : string = "";


  @Input() articuloSeleccionado : Articulo = {
    nombre : "",
    descripcion : "",
    urlImagen: "",
    precio : 0,
    existencia : 0,
    categoria : 0,
    tipoUnidad: 0
  }

  // @Input() articuloAgregar : Articulo = {
  //   nombre : "",
  //   descripcion : "",
  //   urlImagen: "",
  //   precio : 0,
  //   existencia : 0,
  //   categoria : 0,
  //   tipoUnidad: 0
  // }

  constructor(private articuloService : ArticulosService, private activatedRoute : ActivatedRoute, private http: HttpClient){
  }

  enviarDatos(): void {
    const datos = {
      nombre: this.articuloSeleccionado.nombre,
      descripcion: this.articuloSeleccionado.descripcion,
      urlImagen: this.articuloSeleccionado.urlImagen,
      precio: this.articuloSeleccionado.precio,
      existencia: this.articuloSeleccionado.existencia,
      categoria: this.articuloSeleccionado.categoria,
      tipoUnidad: this.articuloSeleccionado.tipoUnidad
    };
    // console.log(this.articuloSeleccionado.nombre);
    // console.log(this.articuloSeleccionado.descripcion);
    // console.log(this.articuloSeleccionado.urlImagen);
    // console.log(this.articuloSeleccionado.precio);
    // console.log(this.articuloSeleccionado.existencia);
    // console.log(this.articuloSeleccionado.categoria);
    // console.log(this.articuloSeleccionado.tipoUnidad);
  
    this.http.post('http://mcswebbucket.s3-website-us-west-1.amazonaws.com/index.html', datos).subscribe(
      (response) => {
        console.log('Los datos se han enviado correctamente');
      },
      (error) => {
        console.log('Ha ocurrido un error al enviar los datos');
      }
    );
  }
  
  
  // agregar(){
  //   console.log(this.articuloSeleccionado);
  //   const url = 'http://localhost/ProyectoF/backend/api.php';
  //   const data = JSON.stringify(this.articuloSeleccionado);
  //   console.log(this.articuloSeleccionado.nombre);
  //   this.http.post('http://localhost/ProyectoF/backend/api.php', this.articuloSeleccionado)
  // .subscribe(
  //   response => console.log(response),
  //   error => {
  //     console.error(error);
  //     console.log(error.error.text);
  //   }
  // );
  //   this.articuloAgregar = {
  //     nombre : this.articuloSeleccionado.nombre,
  //     descripcion : this.articuloSeleccionado.descripcion,
  //     urlImagen : this.articuloSeleccionado.urlImagen,
  //     precio : this.articuloSeleccionado.precio,
  //     existencia : this.articuloSeleccionado.existencia,
  //     categoria : this.articuloSeleccionado.categoria,
  //     tipoUnidad : this.articuloSeleccionado.tipoUnidad
  //   } 
  //   if (this.articuloService.validacion(this.articuloSeleccionado)) {
  //     //alert("Ese codigo ya esta en uso");
  //     this.msgText = "Ese codigo ya estra en uso";

  //     this.verificador = true;
  //   }else{
  //     this.verificador = false;
  //     this.articuloService.agregar({
  //       ...this.articuloSeleccionado
  //     });
  //   }
  // }
}