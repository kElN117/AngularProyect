import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticulosService } from '../service/articulos.service';
import { interval } from 'rxjs';
import Swal from 'sweetalert2';

interface Producto {
  idProducto : number;
  PNombre: string;
  PDescripcion: string;
  PImagen: string;
  PPrecio: number;
}
@Component({
  selector: 'app-conexion',
  templateUrl: './conexion.component.html',
  styleUrls: ['./conexion.component.css']
})
export class ConexionComponent implements OnInit{
  id = '';
  producto: Producto | undefined;
  loading = true;
  error: string | undefined;
  datoss: Producto[] = [];
  datos: any[] = [];

  constructor(private cd: ChangeDetectorRef, private http: HttpClient,private activeRoute : ActivatedRoute,private articulosService: ArticulosService,
    private router: Router) { 
  }
  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
      const name: string = params["name"];
      if (name) {
        const url = `http://54.193.58.127/api/Bproducto.php?iD=${name}`;

        this.http.get<any>(url).subscribe(
          (response) => {
            if (response.status === 'success') {
              this.producto = response.data[0];
                this.datos = response.data;

            } else {
              Swal.fire("Ese producto no se encuentra disponible");
              this.error = response.data;

            }
          },
          (error) => {
            this.error = 'Ha ocurrido un error al intentar cargar el producto';
          }
        ).add(() => {
          this.loading = false;
        });      
      }else {
        this.loading = true;
        this.actualizarDatos();

        interval(1000).subscribe(() => {
          this.actualizarDatos();
        });
        this.router.navigate(['/articulos'])
        this.http.get<any[]>('/api/bd.php').subscribe(data => {
        this.datos = data;
      });
      }
    });

  }
  private actualizarDatos() {
    this.articulosService.getProductos().subscribe(
      (data) => {
        this.datos = data;
        this.loading = false;
      },
      (error) => {
        this.error = 'Ha ocurrido un error al intentar cargar los productos';
        this.loading = false;
      }
    );
  }

  NombreP : string = '';

  public modificar(pNombre : string){
    this.NombreP = pNombre;
    this.router.navigate(["modificarArticulo/"+this.NombreP]);

  }

  public eliminarProducto(idProducto: string,event: MouseEvent) {
    // console.log(idProducto);
    
    const div = (event.target as HTMLElement).closest('.card') as HTMLElement;
    const img = div.querySelector('.img-producto') as HTMLElement;
    const btn = event.target as HTMLButtonElement;
    if (!btn.disabled) {
        div.classList.add('gris');//APLICA EL ESTILO GRIS
        img.classList.add('gris'); //APLICA EL ESTILO GRIS
        btn.disabled = true; //BLOQUEA EL BOTON
        div.remove(); //BORRA EL DIV ALAVERGA

      this.http.delete<any>(`/api/eliminar.php?iD=${idProducto}`).subscribe(data => {
        this.datos = this.datos.filter(producto => producto.idProductos !== idProducto);
      });
      Swal.fire('Eliminado', 'El producto ha sido eliminado correctamente', 'success');
    }
  }
  public comprar(id: string) {
    Swal.fire({
      title: 'Con que metodo gusta pagar?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Transferencia',
      denyButtonText: `Tarjeta`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.http.delete<any>(`/api/agregar.php?iD=${id}`).subscribe(data => {
          this.datos = this.datos.filter(producto => producto.idProductos !== id);
        })
        Swal.fire('Usted ha comprado mediante transferencia!', '', 'success')
      } else if (result.isDenied) {
        this.http.delete<any>(`/api/agregar.php?iD=${id}`).subscribe(data => {
          this.datos = this.datos.filter(producto => producto.idProductos !== id);
        })
        Swal.fire('Usted ha comprado con tarjeta!', '', 'success')
      }
    })









      }
    
  }

