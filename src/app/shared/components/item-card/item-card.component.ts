import { Component, OnInit, Input } from '@angular/core';

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
  ngOnInit() {
  }

}
