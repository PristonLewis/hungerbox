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
  @ViewChildren('itemCard') itemCard: any;
  @ViewChildren('itemMenu') itemMenu: QueryList<ElementRef>;
  @Input() selectedItems: Array<any>;
  // public selectedItems: any;

  constructor() {

   }
  ngOnInit() {
    console.log('I am here');
    this.selectedItems = new Array(this.length).fill(0);
  }

  // Pass the value changed event to the parent component
  public valueChanged(index): void {
    this.selectedItems[index] = parseInt(this.itemCard._results[0].nativeElement.value, 10);
    this.itemsChanged.emit(this.selectedItems);
    // console.log('tged', this.selectedItems);
  }
}
