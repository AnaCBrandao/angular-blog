import { Component, Input, OnInit } from '@angular/core';

import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  
  @Input()
  Id:string = "0";
  
  cardTitle:string= "";
  cardDescription:string ="";
  photoCover:string =""

  constructor() { }

  ngOnInit(): void {
    const result = dataFake.filter(article => article.id == this.Id)[0]
  
    this.cardTitle = result.title;
    this.cardDescription = result.description;
    this.photoCover = result.photo;
  }

}
