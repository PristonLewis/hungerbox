import { Component, OnInit, Input, Output, EventEmitter, ViewChildren, QueryList, ElementRef } from '@angular/core';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.sass']
})

export class ItemCardComponent implements OnInit {

  constructor() { }
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
  ngOnInit() {
    this.selectedItems = new Array(this.length);
  }
  // Pass the value changed event to the parent component
  public valueChanged(index): void {
    console.log(this.length);
    this.itemCard.forEach((native) => {
      this.selectedItems[index] = parseInt(native.nativeElement.value, 10);
    });
    this.itemsChanged.emit(this.selectedItems);
  }
}
