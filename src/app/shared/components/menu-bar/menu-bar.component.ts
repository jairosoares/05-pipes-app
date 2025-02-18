import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Menubar } from 'primeng/menubar';

@Component({
  selector: 'shared-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css'],
  imports: [Menubar]
})
export class MenuBarComponent implements OnInit {

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
