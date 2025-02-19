import { Component } from '@angular/core';
import { PanelModule } from 'primeng/panel';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-basics-page',
  imports: [PanelModule, CardModule, CommonModule],
  templateUrl: './basics-page.component.html',
  styles: ``
})
export class BasicsPageComponent {

 public nameLower: string = 'jairo' ;
 public nameUpper: string = 'JAIRO' ;
 public fullName: string = 'jaIrO sOaREs' ;
 public customDate: Date = new Date();

}

