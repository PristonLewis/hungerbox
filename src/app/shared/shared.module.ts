import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemCardComponent } from './components/item-card/item-card.component';
import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [ItemCardComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [HttpService],
  exports: [ItemCardComponent]
})
export class SharedModule { }
