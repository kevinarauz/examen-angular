import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu-header',
  templateUrl: './menu-header.component.html',
  styleUrls: ['./menu-header.component.css']
})
export class MenuHeaderComponent implements OnInit {

  listMenu: MenuItem[] = [];

  constructor() {
    this.inicioMenu();
  }

  ngOnInit(): void {
  }

  inicioMenu(){
    this.listMenu = [
      {
        label: 'Pantalla Examen',
        routerLink: '/pantallaExamen'
      }
    ];
  }

}
