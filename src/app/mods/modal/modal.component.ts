import {Component,ElementRef,EventEmitter,Input,OnInit,Output} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  constructor(private er: ElementRef) {}
  @Output() onClose = new EventEmitter();
  @Input() isExistFooter = true;
  @Input() defaultButton = true;
  


  ngOnInit(): void {
    document.body.appendChild(this.er.nativeElement);
  }
  ngOnDestroy(): void {
    //document.body.removeChild(this.er.nativeElement);
    this.er.nativeElement.remove();
  }
  OnCloseClick() {
    this.onClose.emit();
  }
}
