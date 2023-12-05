import { NgModule } from '@angular/core';

import { AdminRoutingModule } from './admin-routing.module';

import { AdminComponent } from './admin.component';
import { OrderAdminComponent } from './order/order.admin.component';
import { DetailOrderAdminComponent } from './detail-order/detail.order.admin.component';
import { ProductAdminComponent } from './product/product.admin.component';
import { CategoryAdminComponent } from './category/category.admin.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InsertProductAdminComponent } from './product/insert/insert.product.admin.component';
import { InsertCategoryAdminComponent } from './category/insert/insert.category.admin.component';
import { UpdateProductAdminComponent } from './product/update/update.product.admin.component';
import { UpdateCategoryAdminComponent } from './category/update/update.category.admin.component';

@NgModule({
  declarations: [
    AdminComponent,
    OrderAdminComponent,
    DetailOrderAdminComponent,
    InsertProductAdminComponent,
    ProductAdminComponent,
    CategoryAdminComponent,
    InsertCategoryAdminComponent,
    UpdateProductAdminComponent,
    

    InsertCategoryAdminComponent,
    UpdateCategoryAdminComponent


  ],
  imports: [
    AdminRoutingModule, // import routes,
    CommonModule,
    FormsModule
  ]
})
export class AdminModule {}