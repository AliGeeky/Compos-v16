import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElementsRoutingModule } from './elements-routing.module';
import { ElementHomeComponent } from './element-home/element-home.component';
import { PlaceHolderComponent } from './place-holder/place-holder.component';


@NgModule({
  declarations: [
    ElementHomeComponent,
    PlaceHolderComponent
  ],
  imports: [
    CommonModule,
    ElementsRoutingModule
  ],

})
export class ElementsModule { }
