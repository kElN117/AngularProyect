import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Injectable, Input, OnInit } from '@angular/core';
import { ArticulosService } from '../service/articulos.service';
import { ActivatedRoute, Router } from '@angular/router';
import axios from 'axios';
import Swal from 'sweetalert2';
import { ArticuloM } from '../interfaces/Articulo';

interface Producto {
  idProductos : number;
  PNombre: string;
  PDescripcion: string;
  PImagen: string;
  PPrecio: number;
  PExistencia: string;
}
@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit{
  producto: Producto | undefined;
  loading = true;
  error: string | undefined;
  datos: Producto[] = [];
  constructor(private http: HttpClient,private activeRoute : ActivatedRoute,private articulosService: ArticulosService) {}
  ngOnInit() :void{
    this.activeRoute.params.subscribe(params => {
      const name : string = params["nombre"];
      console.log(name)
      const url = `/api/Bproducto.php?iD=${name}`;
      this.http.get<any>(url).subscribe(
        (response) => {
          if (response.status === 'success') {
            this.producto = response.data[0];
            this.datos = response.data;
            console.log(this.datos);
        
          } else {
            this.error = response.data;
          }
        },
        (error) => {
          this.error = 'Ha ocurrido un error al intentar cargar el producto';
        }
      ).add(() => {
        this.loading = false;
      });
    });

  }
  @Input() artMOD : ArticuloM = {
    Pid : 0,
    PNombre : '',
    PDescripcion : '',
    PImagen : '',
    PPrecio : 0
  }
  enviarDatos(): void {
    const data = {
      Pid : this.artMOD.Pid,
      nombre: this.artMOD.PNombre,
      descripcion: this.artMOD.PDescripcion,
      urlImagen: this.artMOD.PImagen,
      precio: this.artMOD.PPrecio,
    };
    // console.log(this.artMOD.Pid);
    // console.log(this.artMOD.PNombre);
    // console.log(this.artMOD.PDescripcion);
    // console.log(this.artMOD.PImagen);
    // console.log(this.artMOD.PPrecio);
  
    this.http.post('/api/api.php', data).subscribe(
      (response) => {
        console.log('Los datos se han enviado correctamente');
      },
      (error) => {
        console.log('Ha ocurrido un error al enviar los datos');
      }
    );
  }
}

