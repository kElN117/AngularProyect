import { Component } from '@angular/core';

@Component({
  selector: 'app-slidebar',
  templateUrl: './slidebar.component.html',
  styleUrls: ['./slidebar.component.css']
})
export class SlidebarComponent {
  isShow : boolean = false;

  mostrrslidebarr(){
    this.isShow = !this.isShow;
  }
}
