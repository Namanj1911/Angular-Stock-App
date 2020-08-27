import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import {StockDetailComponent} from './stock-detail/stock-detail.component';
import { CompanyComponent } from './details/company/company.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'contentView',
    component: StockDetailComponent
    // children: [
    //   {
    //     path: 'NWG',
    //     component: CompanyComponent
    //   }
    // ]
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
