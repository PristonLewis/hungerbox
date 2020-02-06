import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VendorListComponent } from './components/vendor-list/vendor-list.component';
import { VendorsRoutingModule } from './vendors-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [VendorListComponent],
  imports: [
    CommonModule,
    VendorsRoutingModule,
    SharedModule
  ]
})
export class VendorsModule { }
