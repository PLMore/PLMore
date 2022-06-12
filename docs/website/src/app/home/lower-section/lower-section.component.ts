import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lower-section',
  templateUrl: './lower-section.component.html',
  styleUrls: ['./lower-section.component.scss']
})
export class LowerSectionComponent implements OnInit {
  elements : {title: string, text:string,imgPath:string,url:string}[]=[{
    title: "Migrate your pre-existing system",
    text:"PLMore will offer migration solutions to entreprises coming from different softwares.",
    imgPath: "assets/home/stock-management.webp",
    url: "#"
  },{
    title: "Visit our get started guide",
    text:"Still not sure how to get going ? We have comprehensive guides on how to setup and get blazing with PLMore.",
    imgPath: "assets/home/stock-management.webp",
    url: "#"
  },{
    title: "Still not convinced?",
    text:"Visit our comparison page to understand how PLMore is the new game changer in the PLM industry.",
    imgPath: "assets/home/stock-management.webp",
    url: "#"
  },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
