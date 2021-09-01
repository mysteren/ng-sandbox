import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  productKey: string | null | undefined

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const routerParams = this.route.snapshot.paramMap;
    this.productKey = routerParams.get('productKey');
  }

}
