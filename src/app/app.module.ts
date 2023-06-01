import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Asegúrate de importar HttpClientModule aquí


import { AppComponent } from './app.component';
import { TablaComponent } from './tabla/tabla.component';
import { FormularioComponent } from './formulario/formulario.component';
import { AppRoutingModule } from './app-routing.module';
import { SlidebarComponent } from './slidebar/slidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ConexionComponent } from './conexion/conexion.component';
import { ModificarComponent } from './modificar/modificar.component';
import { CorteComponent } from './corte/corte.component';

@NgModule({
  declarations: [
    AppComponent,
    TablaComponent,
    FormularioComponent,
    SlidebarComponent,
    NavbarComponent,
    ConexionComponent,
    ModificarComponent,
    CorteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
