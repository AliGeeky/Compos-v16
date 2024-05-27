import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollectionHomeComponent } from './collection-home/collection-home.component';
import { SharedModule } from '../shared/shared.module';
import { BiographyComponent } from './biography/biography.component';
import { CompaniesComponent } from './companies/companies.component';
import { PartnersComponent } from './partners/partners.component';


const routes: Routes = [{
  path: '', component: CollectionHomeComponent,
  children: [{ path: '', component: BiographyComponent },
  { path: 'companies', component: CompaniesComponent },
  { path: 'partners', component: PartnersComponent }

  ]
}

];

@NgModule({
  imports: [RouterModule.forChild(routes),
    SharedModule
  ],
  exports: [RouterModule]

})
export class CollectionsRoutingModule { }
