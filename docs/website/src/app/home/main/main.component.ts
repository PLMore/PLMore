import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  homeContent: {text:string,title:string,btntext:string,btnurl:string,imagePath: string, imageHeight:string}[]=[
    {
      text:"PLMore is the modern age Product Lifecycle Management software. Offering more than 14 modules with both general and specefic tooling capabilities. With its ease of deployment, cloud native support and ergonomy, You will focus more resources on your business development and less on technicalities.",
      title: "Your go-to PLM software",
      btntext:"Read More",
      btnurl: "#",
      imagePath: "assets/home/plm-general.jpg",
      imageHeight: ""
    }, {
      text: "PLMore offers you insights and visualization charts to help guide you in your decision making process. You can rely on powerful  charts to gage your progress and see trends in realtime.",
      title: "Data-driven insights",
      btntext: "Read More",
      btnurl: "#",
      imagePath: "assets/home/product-stats.webp",
      imageHeight: "500px"
    },{
      title:"Materials & Stock Management",
      text: "View your stock and inventory data in a single view. Manage your BOMs and Batch Tracking in one place. You can also track your production and consumption in realtime.",
      btntext: "Read More",
      btnurl: "#",
      imagePath: "assets/home/stock-management.webp",
      imageHeight: "500px"
    },{
      title:"Regulation & Compliance",
      text: "Strategize your compliance with regulations and standards. PLMore offers you a complete solution to uphold your processes toward world class standards, including ISO standards, FDA Regulations and many more..",
      btntext: "Read More",
      btnurl: "#",
      imagePath: "assets/home/law-regulations.webp",
      imageHeight: "500px"
    }, {
      title:"Supply Chain Management",
      text: "Manage your supply chain in one place. Keep track of your requests and procurements in an ergonomic manner. Check your advances and see how your supply chain is progressing.",
      btntext: "Read More",
      btnurl: "#",
      imagePath: "assets/home/supply-chain.webp",
      imageHeight: "500px"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
