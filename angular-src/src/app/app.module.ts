//Meeting place for all components
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DeliveriesComponent } from './components/deliveries/deliveries.component';
import { CreateWarehouseComponent } from './components/create-warehouse/create-warehouse.component';

import {ValidateService} from './services/validate.service';
import {AuthService} from './services/auth.service';
import {WarehouseService} from './services/warehouse.service';
import {DeliveryService} from './services/delivery.service';
import {AuthGuard} from './guards/auth.guard';
import { NewDeliveryComponent } from './components/new-delivery/new-delivery.component';
import { NotFoundComponent } from './components/not-found/not-found.component';



const appRoutes: Routes = [
{path:'', component: LoginComponent},
{path:'dashboard', component: DashboardComponent, canActivate:[AuthGuard]},
{path:'register', component: RegisterComponent},
{path: 'deliveries', component: DeliveriesComponent, canActivate:[AuthGuard]},
{path:'createWarehouse', component: CreateWarehouseComponent, canActivate:[AuthGuard]},
{path: 'createDelivery', component: NewDeliveryComponent, canActivate:[AuthGuard]},
{path: '**', component: NotFoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    DeliveriesComponent,
    CreateWarehouseComponent,
    NewDeliveryComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ValidateService, AuthService, WarehouseService, DeliveryService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
