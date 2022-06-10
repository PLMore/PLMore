import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-info-card',
  templateUrl: './home-info-card.component.html',
  styleUrls: ['./home-info-card.component.scss']
})
export class HomeInfoCardComponent implements OnInit {

  @Input('title') title: string = "default title";
  @Input('text') text: string = "default text";
  @Input('btnurl') url: string = "";
  @Input('btntext') btntxt: string = "default btn text"
  @Input('imagePath') imagePath:string = "";
  @Input('imageHeight') imageHeight:string=""
  constructor() { }

  ngOnInit(): void {
  }

}
