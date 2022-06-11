import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lower-section',
  templateUrl: './lower-section.component.html',
  styleUrls: ['./lower-section.component.scss']
})
export class LowerSectionComponent implements OnInit {
  elements : {title: string, text:string,imgPath:string,url:string}[]=[{
    title: "Lorem ipsum dolor",
    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis.",
    imgPath: "assets/home/stock-management.jpg",
    url: "#"
  },{
    title: "Lorem ipsum dolor",
    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis.",
    imgPath: "assets/home/stock-management.jpg",
    url: "#"
  },{
    title: "Lorem ipsum dolor",
    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis.",
    imgPath: "assets/home/stock-management.jpg",
    url: "#"
  },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
