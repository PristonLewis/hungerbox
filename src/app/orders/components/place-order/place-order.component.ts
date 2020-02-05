import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/shared/http.service';

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.sass']
})
export class PlaceOrderComponent implements OnInit {

  constructor(private http: HttpService) { }
  public myOrderList: any;
  ngOnInit() {
      this.myOrderList = JSON.parse(localStorage.getItem('cart'));
  }

  public placeOrder(): void {
    const payload = {
      items: this.myOrderList,
      vendorId: this.myOrderList[0].vid,
      userId: '1'
    };
    this.http.postRequest('placeOrder', payload).subscribe((data: any) => {

    });
  }

}
