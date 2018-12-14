import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';

import { ValidateService } from './services/validate.service';
import { AuthService } from './services/auth.service';
import { NgFlashMessagesModule } from 'ng-flash-messages';
import { AuthGuard } from './guards/auth.guard';
import { OwnerComponent } from './components/owner/owner.component';
import { MenugraziecoffeeComponent } from './components/menugraziecoffee/menugraziecoffee.component';
import { SearchcafeComponent } from './components/searchcafe/searchcafe.component';
import { OrderComponent } from './components/order/order.component';
import { MenugrazielatteComponent } from './components/menugrazielatte/menugrazielatte.component';
import { MenugrazieteaComponent } from './menugrazietea/menugrazietea.component';
import { MenugraziesmoothieComponent } from './menugraziesmoothie/menugraziesmoothie.component';
import { MenugraziecoffeemiComponent } from './menugraziecoffeemi/menugraziecoffeemi.component';
import { MenugrazielattemiComponent } from './menugrazielattemi/menugrazielattemi.component';
import { MenugrazieteamiComponent } from './menugrazieteami/menugrazieteami.component';
import { MenugraziesmoothiemiComponent } from './menugraziesmoothiemi/menugraziesmoothiemi.component';


const appRoutes: Routes = [
  {path:'', component: HomeComponent},
  {path:'register', component: RegisterComponent},
  {path:'login', component: LoginComponent},
  {path:'owner',component:OwnerComponent},
  {path:'searchcafe',component:SearchcafeComponent},
  {path:'order',component:OrderComponent},
  {path:'menugraziecoffee',component:MenugraziecoffeeComponent},
  {path:'menugrazietea',component:MenugrazieteaComponent},
  {path:'menugraziesmoothie',component:MenugraziesmoothieComponent},
  {path:'menugrazielatte',component:MenugrazielatteComponent},
  {path:'menugraziecoffeemi',component:MenugraziecoffeemiComponent},
  {path:'menugrazieteami',component:MenugrazieteamiComponent},
  {path:'menugraziesmoothiemi',component:MenugraziesmoothiemiComponent},
  {path:'menugrazielattemi',component:MenugrazielattemiComponent},
  {path:'dashboard', component: DashboardComponent, canActivate:[AuthGuard]},
  {path:'profile', component: ProfileComponent, canActivate:[AuthGuard]}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,
    ProfileComponent,
    OwnerComponent,
    MenugraziecoffeeComponent,
    SearchcafeComponent,
    OrderComponent,
    MenugrazielatteComponent,
    MenugrazieteaComponent,
    MenugraziesmoothieComponent,
    MenugraziecoffeemiComponent,
    MenugrazielattemiComponent,
    MenugrazieteamiComponent,
    MenugraziesmoothiemiComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    NgFlashMessagesModule
  ],
  providers: [ValidateService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
