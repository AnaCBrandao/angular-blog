import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  @Input()
  photoCover:string = "";
  @Input()
  contentTitle:string = "";
  @Input()
  contentDescription:string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
