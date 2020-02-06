import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/shared/http.service';
import { Router } from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.sass']
})
export class PlaceOrderComponent implements OnInit {

  constructor(private http: HttpService, private router: Router) { }
  public myOrderList: any;
  public confirmationMessage: string;
  public statusFlag: boolean;
  ngOnInit() {
      this.myOrderList = JSON.parse(localStorage.getItem('cart'));
  }

  // Places the order
  public placeOrder(): void {
    const payload = {
      items: this.myOrderList,
      vendorId: this.myOrderList[0].vid,
      userId: '1'
    };
    this.http.postCustom('http://10.117.189.47:6548/placeOrder', payload).subscribe((data: any) => {
      this.confirmationMessage = 'Order placed successfully.';
      this.statusFlag = true;
      $('#successModal').modal('show');
    }, (exception) => {
      this.statusFlag = false;
      this.confirmationMessage = 'Something went wrong.';
      $('#successModal').modal('show');
    });
  }

  // action performed on modals OK button click
  public ok() {
    $('#successModal').modal('hide');
    if (this.statusFlag) {
      this.router.navigate(['/list']);
    }
  }

}
