import { Component, OnInit, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/shared/http.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.sass']
})
export class ItemsComponent implements OnInit {

  public itemList: any;
  public noOfItems: number = 0;
  @ViewChildren('itemCard') itemCard: QueryList<ElementRef>;
  constructor(private snackBar: MatSnackBar, private router: Router, private activatedRoute: ActivatedRoute, private http: HttpService) { }
  public vendorId: any;
  ngOnInit() {
    this.activatedRoute.params.subscribe((route: any) => {
      this.http.getRequest('/items/allItem').subscribe((vendorList: any) => {
        this.itemList = vendorList;
      });
    });


  }

  private sum(total, num): number {
    return total + num;
  }
  public updateTheCart(event: any) {
    this.noOfItems = event.reduce(this.sum);
    const snackBarRef: any = this.snackBar.open(this.noOfItems + ' items', 'View Cart');
    snackBarRef.onAction().subscribe(() => {
      this.router.navigate(['/order']);
    });
    const orderDetails = [];
    let grandTotal: number = 0;
    event.forEach((data, index) => {
        if (data) {
          grandTotal += data * this.itemList[index].itemPrice;
          const obj: any = {
            itemName : this.itemList[index].itemName ,
            quantity: data,
            price: this.itemList[index].itemPrice,
            total: grandTotal,
            itemId : this.itemList[index].itemId,
            vId : this.vendorId
          };
          orderDetails.push(obj);
        }
    });
    console.log('orderDetails', orderDetails);
    localStorage.setItem('cart', JSON.stringify(orderDetails));
  }

}
