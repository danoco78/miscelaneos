import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-css',
  template: `
    <p>
      css works!
    </p>
  `,
  styles:[ `
    p{ color: red;
       fotn-size: 25px;
    }
    `]
})
export class CssComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
