import { Component, Input, OnInit } from '@angular/core';
import { ProdService } from '../product-list.component.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

 @Input()
  prodData:any
  constructor(private service:ProdService) { }
  
  ngOnInit(): void {
    this.prodData=this.service.prodDetails
  }

}
