import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css']
})
export class ModsHomeComponent {
  showModal: boolean = false;
  constructor(){
    console.log(this.showModal);

  }
  
  OnChangeModal() {
    this.showModal = !this.showModal;
    console.log(this.showModal);
  }

}
