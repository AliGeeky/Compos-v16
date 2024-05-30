import { outputAst } from '@angular/compiler';
import { Component, ElementRef, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit{

  constructor(private er:ElementRef){}
  @Output() onClose = new EventEmitter();
  ngOnInit():void {
    document.body.appendChild(this.er.nativeElement);
  };
  ngOnDestroy():void{
    //document.body.removeChild(this.er.nativeElement);
    this.er.nativeElement.remove();
  }
  OnCloseClick(){
    this.onClose.emit();
  }
}
