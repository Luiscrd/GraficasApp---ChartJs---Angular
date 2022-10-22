import { Component } from '@angular/core';

interface MenuItem {
  texto: string;
  ruta: string;
};

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent {

graficasMenu: MenuItem[] = [
  {
    texto: 'Barras',
    ruta: '/barras'
  },
  {
    texto: 'Barras Dobles',
    ruta: '/barrasdobles'
  },
  {
    texto: 'Dona',
    ruta: '/dona'
  },
  {
    texto: 'Dona Http',
    ruta: '/donahttp'
  },
];

};
