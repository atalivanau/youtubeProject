import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {ItemComponent} from './components/item/item.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';

const routes: Routes = [
    { path: '', component: DashboardComponent},
    { path: 'video/:id', component: ItemComponent},
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}