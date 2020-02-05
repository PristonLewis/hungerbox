import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsComponent } from './components/items/items.component';
import { ItemsRoutingModule } from './items-routing.module';
import {MatButtonModule, MatSnackBarModule} from '@angular/material'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ItemsComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ItemsRoutingModule,
    MatSnackBarModule,
    MatButtonModule,
    SharedModule
  ],
  exports: []
})
export class ItemsModule { }
