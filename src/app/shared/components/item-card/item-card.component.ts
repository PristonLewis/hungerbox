import { Component, OnInit, Input, Output, EventEmitter, ViewChildren, QueryList, ElementRef } from '@angular/core';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.sass']
})

export class ItemCardComponent implements OnInit {


  @Input() type: string;
  @Input() actionRequired: boolean;
  @Input() mainContent: string;
  @Input() subContent: string;
  @Input() index: string;
  @Input() length: number;
  @Output() itemsChanged = new EventEmitter();
  @ViewChildren('itemCard') itemCard: QueryList<ElementRef>;
  @ViewChildren('itemMenu') itemMenu: QueryList<ElementRef>;
  public selectedItems: any;

  constructor() {

   }
  ngOnInit() {
    console.log('I am here');
    this.selectedItems = new Array(this.length).fill(0);
  }

  // Pass the value changed event to the parent component
  public valueChanged(index): void {
    let val;
    this.itemCard.forEach((native) => {
      val = parseInt(native.nativeElement.value, 10);
    });
    this.selectedItems[index] = val;
    this.itemsChanged.emit(this.selectedItems);
    console.log('tged', this.selectedItems);
  }
}
