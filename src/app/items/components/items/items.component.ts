import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.sass']
})
export class ItemsComponent implements OnInit {

  constructor(private snackBar: MatSnackBar) { }

  ngOnInit() {
    let snackBarRef = this.snackBar.open('Message archived', 'View Cart');
  }

}
