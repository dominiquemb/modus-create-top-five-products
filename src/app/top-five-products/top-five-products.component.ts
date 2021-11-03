import { Component, OnInit } from '@angular/core';
import { TopFiveProductsService } from '../top-five-products.service';

@Component({
  selector: 'app-top-five-products',
  templateUrl: './top-five-products.component.html',
  styleUrls: ['./top-five-products.component.css']
})
export class TopFiveProductsComponent implements OnInit {
  topFiveProducts: any[] = [];

  constructor(private topFiveProductsService: TopFiveProductsService) {

  }

  ngOnInit(): void {
    this.getTopFiveProducts();
  }

  onImageLoad(evt): void {
    document.getElementById(evt.target.id).className = 'visible';
  }

  getTopFiveProducts(): void {
    this.topFiveProductsService.getTopFiveProducts()
      .subscribe(products => {
        this.topFiveProducts = products.slice(0,5);
        console.log(this.topFiveProducts);
      });
  }

}
