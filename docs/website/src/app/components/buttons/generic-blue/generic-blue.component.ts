import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-generic-blue',
  templateUrl: './generic-blue.component.html',
  styleUrls: ['./generic-blue.component.scss']
})
export class GenericBlueComponent implements OnInit {

  @Input('text') text: string ="default";
  @Input('url') url: string ="";

  constructor() { }

  ngOnInit(): void {
  }

}
