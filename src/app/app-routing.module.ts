import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyIpComponent } from './components/my-ip/my-ip.component';
import { IpInfoComponent } from './components/ip-info/ip-info.component';

const routes: Routes = [
  { path: 'my-ip', component: MyIpComponent },
  { path: 'ip-info', component: IpInfoComponent },
  { path: '', redirectTo: '/my-ip', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
