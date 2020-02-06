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
  public selectedItems: Array<any> = [];

  @ViewChildren('itemCard') itemCard: QueryList<ElementRef>;

  constructor(private snackBar: MatSnackBar, private router: Router, private activatedRoute: ActivatedRoute, private http: HttpService) { }
  public vendorId: string;

  public ngOnInit(): void {
    // getting the vendor id from the url and passing it to the vendor items api to get the list of items
    this.activatedRoute.params.subscribe((route: any) => {
      this.vendorId = route.id;
      this.http.getRequest('/items/allItem').subscribe((vendorList: any) => {
        this.itemList = vendorList.items;
      });
    });
  }

  // reduce function to sum all the items in an array
  private sum(total: number, num: number): number {
    return total + num;
  }

  // Adds the items to the cart and stores the data in local storage for further processing
  public updateTheCart(event: any) {
    this.selectedItems = event;
    this.noOfItems = event.reduce(this.sum);
    const snackBarRef: any = this.snackBar.open(this.noOfItems + ' items', 'View Cart');
    snackBarRef.onAction().subscribe(() => {
      this.router.navigate(['/order']);
    });
    const orderDetails = [];
    let grandTotal: number = 0;
    console.log('grandTotal', this.itemList);
    event.forEach((data, index) => {
        if (data) {
          console.log('data', data);
          console.log('this.itemList[index].price', this.itemList[index].price);
          grandTotal += data * this.itemList[index].price;
          console.log('grandTotal', grandTotal);
          console.log('---------');          
          const obj: any = {
            itemName : this.itemList[index].itemName ,
            quantity: data,
            price: this.itemList[index].price,
            total: grandTotal,
            itemId : this.itemList[index].itemId,
            vId : this.vendorId
          };
          orderDetails.push(obj);
          console.log('obj', obj);
        }
    });
    localStorage.setItem('cart', JSON.stringify(orderDetails));
  }
}
