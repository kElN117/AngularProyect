import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { SlidebarComponent } from '../slidebar/slidebar.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Input() slidebar : SlidebarComponent | undefined;
  constructor(private router: Router) { 
  }
  mostrarslidebar(){
    this.slidebar?.mostrrslidebarr();
  }
  NombreP : string = '';

  public buscar(pNombre : string){
    this.NombreP = pNombre;
    this.router.navigate(["articulos/"+this.NombreP]);
  }

  menu(){
    this.router.navigate(["articulos"]);
  }
}
