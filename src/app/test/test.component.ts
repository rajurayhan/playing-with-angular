import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <div>
      Inline Template <br> {{ text }}
    </div>
  `,
  styles: [`
    div {
      color: red;
    }
  `]
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public text = 'This is an example of interpolations';

}
