import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/shared/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.sass']
})
export class VendorListComponent implements OnInit {

  public data: any;
  public vendorsList: any;
  constructor(private http: HttpService, private router: Router) {
    this.data = {
      mainContent : 'dsdsf' ,
      subContent: 'sdfdsf'
    };
    this.vendorsList = [{
      vendorId: 2123,
      vendorName: 'Snack It'
    }, {
      vendorId: 2122,
      vendorName: 'Juice Junction'
    }];
   }
  ngOnInit() {
    console.log(this.http.getConfigurations());
  }

  // navigates to the item list components passing vendorId as a parameter
  public displayItems(vendorId: string): void {
    this.router.navigate(['/details/' + vendorId]);
  }

}
