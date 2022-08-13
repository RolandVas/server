import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ImprintComponent } from './legal-texts/imprint/imprint.component';
import { PrivacyComponent } from './legal-texts/privacy/privacy.component';
import { ServerListComponent } from './server-list/server-list.component';

const routes: Routes = [
  { path: '', component: ServerListComponent },
  { path: 'impressum', component: ImprintComponent },
  { path: 'datenschutz', component: PrivacyComponent },
  { path: 'dashboard', component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
