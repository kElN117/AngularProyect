export interface Articulo {
  nombre : string;
  descripcion : string;
  urlImagen : string;
  precio : number;
  existencia : number;
  categoria : number;
  tipoUnidad : number;
}
export interface ArticuloM {
  Pid: number;
  PNombre : string;
  PDescripcion : string;
  PImagen : string;
  PPrecio : number;
}
export interface Producto {
  idProductos : number;
  PNombre: string;
  PDescripcion: string;
  PImagen: string;
  PPrecio: number;
}