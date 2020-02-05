import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlaceOrderComponent } from './components/place-order/place-order.component';

const routes: Routes = [
  { path: 'order', component: PlaceOrderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
