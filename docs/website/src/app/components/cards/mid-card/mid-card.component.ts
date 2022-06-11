import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mid-card',
  templateUrl: './mid-card.component.html',
  styleUrls: ['./mid-card.component.scss']
})
export class MidCardComponent implements OnInit {

  @Input('title') title:string = ""
  @Input('text') text:string = ""
  @Input('imgPath') imgPath:string = ""
  @Input('url') url:string = ""
  @Input('order') order:number = NaN
  colorRibbon : string [] = ["red","pink","purple","blue"]
  constructor() { }

  ngOnInit(): void {
    console.log( "my order is: ",this.order)
  }
  determineLinearBackgroundClass = (i: number):boolean =>{
    console.log("i: ",i, "number: ",this.order)
    return (i===this.order) ? true: false}

}
