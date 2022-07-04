import { Component, OnInit } from '@angular/core';
import { ProdService } from './product-list.component.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
prodData: any;
  constructor(private service:ProdService) { }
  
  ngOnInit(): void {
    this.prodData=this.service.prodDetails
  }

}
