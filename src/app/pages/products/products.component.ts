import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Array<{ key: string; desc: string; name: string; }> = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.products = [
      {
        key: 'p1',
        desc: '100 отличных наборов стикеров для Telegram Рекомендуют читатели «Медузы»',
        name: 'product1'
      },
      {
        key: 'p2',
        desc: '30 наборов безумных стикеров для Telegram Читатели «Медузы» рекомендуют странное',
        name: 'product2'
      },
      {
        key: 'p3',
        desc: 'Лучшие каналы Telegram Чат-путеводитель «Медузы»',
        name: 'product3'
      },
      {
        key: 'p4',
        desc: 'wkjfwkfj',
        name: 'product4'
      }
    ]
  }

}
