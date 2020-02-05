import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.sass']
})
export class ItemsComponent implements OnInit {

  constructor(private snackBar: MatSnackBar, private router: Router) { }

  public data = {
    mainContent : 'dsdsf',
    subContent: 'sdfdsf'
  };
  ngOnInit() {
    let snackBarRef = this.snackBar.open('No items', 'View Cart');
    snackBarRef.onAction().subscribe(() => {
      console.log('The snack-bar action was triggered!');
      this.router.navigate(['/orders']);
    });
  }

  

}
