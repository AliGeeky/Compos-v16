import { Component } from '@angular/core';
interface statictis {
  value: number;
  label: string;
}

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.css'],
})
export class ViewsHomeComponent {
  data: statictis[] = [
    { value: 28, label: '#Users' },
    { value: 381, label: '#Like' },
    { value: 63, label: '#Comment' },
  ];

  items = [
    {
      images: './assets/c++2.png',
      title: 'Dresser',
      description: 'This is a fantastic language',
    },
    {
      images: './assets/c++.png',
      title: 'Dresser',
      description: 'This is a fantastic ',
    },
  ];
}
