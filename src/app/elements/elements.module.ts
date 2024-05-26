import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElementsRoutingModule } from './elements-routing.module';
import { ElementHomeComponent } from './element-home/element-home.component';
import { PlaceHolderComponent } from './place-holder/place-holder.component';
import { RepeatTemplateDirective } from './repeat-template.directive';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ElementHomeComponent,
    PlaceHolderComponent,
    RepeatTemplateDirective
  ],
  imports: [
    CommonModule,
    ElementsRoutingModule,
    SharedModule
  ],

})
export class ElementsModule { }
