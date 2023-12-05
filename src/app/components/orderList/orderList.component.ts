import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from '../../services/order.service';
import { Order } from 'src/app/models/order';
import { OrderResponse } from 'src/app/responses/order/order.response';
import { TokenService } from '../../services/token.service';
import { NgForm } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Location } from '@angular/common';

@Component({
  selector: 'app-order-list',
  templateUrl: './orderList.component.html',
  styleUrls: ['./orderList.component.scss']
})
export class OrderListComponent implements OnInit {
  orders: OrderResponse[] = [];

  constructor(private router: Router,
    private orderService: OrderService,
    private tokenService: TokenService,
    private location: Location
  ) { }

  ngOnInit() {
    debugger;
    this.loadOrders();
  }

  loadOrders() {
    debugger;
    const user_id = this.tokenService.getUserId();
    this.orderService.getOrdersByUserId(user_id).subscribe({
      next: (response: any) => {
        debugger;
        this.orders = response.orders;
      },
      complete: () => {
        debugger;
      },
      error: (error: any) => {
        debugger;
        console.error('Error fetching products:', error);
      }
    });
  }

  deleteOrder(id: number) {
    const confirmation = window.confirm('Are you sure you want to delete this order?');
    if (confirmation) {
      debugger;
      this.orderService.deleteOrder(id).subscribe({
        next: (response: any) => {
          debugger;
          location.reload();
        },
        complete: () => {
          debugger;
        },
        error: (error: any) => {
          debugger;
          console.error('Error fetching products:', error);
        }
      });
    }
  }

  viewDetails(id: number) {
    debugger;
    this.router.navigate(['orders', id]);
  }
}