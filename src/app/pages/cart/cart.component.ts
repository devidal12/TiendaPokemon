import { Component, OnInit } from '@angular/core';
import { Cart, CartItem } from 'src/app/models/cart.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl:'./cart.component.html' 

})
export class CartComponent implements OnInit {

  cart: Cart = { items: [{
    product: 'https://via.placeholder.com/150',
    name: 'Pokeball',
    price: 200,
    quantity: 1,
    id: 1,
  },
  {
    product: 'https://via.placeholder.com/150',
    name: 'Superball',
    price: 600,
    quantity: 2,
    id: 2,
  }
]};




  dataSource: Array<CartItem> = [];
  displayedColumns: Array<string> = [
    'product',
    'name',
    'price',
    'quantity',
    'total',
    'action'
  ]

  constructor(private cartService: CartService ){}


  ngOnInit(): void {
    this.dataSource = this.cart.items;
  }


  getTotal(items: Array<CartItem>): number{
    return this.cartService.getTotal(items);
  }
}
