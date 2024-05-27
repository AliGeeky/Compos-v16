import { KeyValue } from '@angular/common';
import { Component, OnInit } from '@angular/core';

interface User{
  name:string;
  age:string;
  city:string;

}

@Component({
  selector: 'app-collection-home',
  templateUrl: './collection-home.component.html',
  styleUrls: ['./collection-home.component.css']
})
export class CollectionHomeComponent implements OnInit{
  data :User[]= [
    { name: 'ali', age: '26', city: 'tehran' },
    { name: 'ahmad', age: '28', city: 'tabriz' },
    { name: 'mahmod', age: '27', city: 'isfahan' },
    { name: 'javad', age: '20', city: 'tehran' },
    { name: 'maryam', age: '23', city: 'tabriz' },
    { name: 'test', age: '21', city: 'test' },
  ];
  headers= [
    { key: 'name', value: 'Name', show:true },
    { key: 'age', value: 'Age', show:true },
    { key: 'city', value: 'City' ,show :false},

  ]
  ngOnInit(): void {
    
  }

}
