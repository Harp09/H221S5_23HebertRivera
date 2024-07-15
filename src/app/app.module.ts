import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Importar FormsModule

import { AppComponent } from './app.component';
import { MyIpComponent } from './components/my-ip/my-ip.component';
import { IpInfoComponent } from './components/ip-info/ip-info.component';
import { IpInfoService } from './services/ip-info.service';

const appRoutes: Routes = [
  { path: 'my-ip', component: MyIpComponent },
  { path: 'ip-info', component: IpInfoComponent },
  { path: '', redirectTo: '/my-ip', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    MyIpComponent,
    IpInfoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule, // Agregar FormsModule a imports
    RouterModule.forRoot(appRoutes)
  ],
  providers: [IpInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
