import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `

    <p [ngStyle]="{ 'font-size': tamano+'px' }">
      Hola Mundo... esta es una etiqueta
    </p>
    
    <p [style.fontSize]="'25px'">
      Como te va?
    </p>

    <p [style.fontSize.px]="tamano">
      bien
    </p>

    <button class="btn btn-primary" (click)="tamano = tamano + 5">
      <i class="fa fa-plus"></i>
    </button>

    <button class="btn btn-primary" (click)="tamano = tamano - 5">
      <i class="fa fa-minus"></i>
    </button>


  `,
  styles: [
  ]
})
export class NgStyleComponent implements OnInit {

  tamano: number = 20;

  constructor() { }

  ngOnInit(): void {
  }

}
