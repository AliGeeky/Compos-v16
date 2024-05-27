import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectionsRoutingModule } from './collections-routing.module';
import { CollectionHomeComponent } from './collection-home/collection-home.component';
import { TableComponent } from './table/TableComponent';
import { SharedModule } from "../shared/shared.module";
import { DividerComponent } from '../shared/divider/divider.component';


@NgModule({
    declarations: [
        CollectionHomeComponent,
        TableComponent,
    ],
    imports: [
        CommonModule,
        CollectionsRoutingModule,
        SharedModule,
    ]
})
export class CollectionsModule { }
