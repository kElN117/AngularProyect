import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioComponent } from './formulario/formulario.component';
import { Routes, RouterModule } from '@angular/router';
import { ConexionComponent } from './conexion/conexion.component';
import { ModificarComponent } from './modificar/modificar.component';


const routes : Routes = [
  {path : "articulos",component: ConexionComponent},
  {path : "" , component: ConexionComponent},
  {path : "agregararticulo",component: FormularioComponent},
  {path : "modificarArticulo/:nombre", component:ModificarComponent},
  {path : "articulos/:name",component: ConexionComponent},


]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports : [
    RouterModule
  ]
})
export class AppRoutingModule { }
