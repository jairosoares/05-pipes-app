import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Menu } from 'primeng/menu';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  imports: [Menu]
})
export class MenuComponent implements OnInit {

  constructor() { }

  items: MenuItem[] | undefined;

    ngOnInit() {
        this.items = [
            {
              label: 'Pipes de Angular',
              icon: 'pi pi-desktop',
              items: [
                {
                  label: 'Textos y Fechas',
                  icon: 'pi pi-align-left',
                },
                {
                  label: 'Números',
                  icon: 'pi pi-dollar',
                },
                {
                  label: 'No comunes',
                  icon: 'pi pi-globe',
                }
              ]
            },
            {
              label: 'Pipes personalizados',
              icon: 'pi pi-cog',
              items: [
                {
                  label: 'Outro elemento',
                  icon: 'pi pi-cog'
                }
              ]
            },

        ];
    }

}
