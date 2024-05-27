import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit,OnChanges {
  @Input() data:any[]= [];
  @Input() headers:any[]= [];
  @Input() className="basic";


  constructor() { }
  ngOnChanges(): void {
console.log(this.headers)
  }

  ngOnInit(): void {
    // console.log(this.headers);
    // console.log(this.data)
  }
}
