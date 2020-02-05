import { Component, OnInit, Input } from '@angular/core';

interface CardData {
  mainContent: string;
  subContent: string;
}

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.sass']
})

export class ItemCardComponent implements OnInit {

  constructor() { }
  @Input() type: string;
  @Input() actionRequired: boolean;
  @Input() data: CardData;

  ngOnInit() {
  }

}
