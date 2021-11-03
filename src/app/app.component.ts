import { Component } from '@angular/core';
import { TopFiveProductsService } from './top-five-products.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'topfive';

  constructor() {

  }
}
