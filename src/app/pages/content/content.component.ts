import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  private id: string | null="0"
  photoCover:string = "";
  contentTitle:string = "";
  contentDescription:string = "";

  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      this.id = value.get("id")
    )

    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id:string|null){
    const result = dataFake.filter(article => article.id == id)[0]
  
    this.contentTitle = result.title;
    this.contentDescription = result.description;
    this.photoCover = result.photo;
  }

}
