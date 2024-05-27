import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollectionHomeComponent } from './collection-home/collection-home.component';
import { SharedModule } from '../shared/shared.module';


const routes: Routes = [{ path: '', component: CollectionHomeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes),
    SharedModule
  ],
  exports: [RouterModule]

})
export class CollectionsRoutingModule { }
