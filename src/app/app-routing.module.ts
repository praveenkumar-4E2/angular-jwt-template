import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './modules/admin/admin.component';
import { HomeComponent } from './modules/core/components/home/home.component';
import { LoginComponent } from './modules/core/components/login/login.component';
import { NavbarComponent } from './modules/core/components/navbar/navbar.component';
import { RegisterationComponent } from './modules/core/components/registeration/registeration.component';
import { CoreComponent } from './modules/core/core.component';
import { RouteGuard } from './modules/core/services/route.guard';

const routes: Routes = [
  {
    path: '', redirectTo: 'auth', pathMatch: 'full'
  },
 
  {
    path: 'auth', component: CoreComponent, children:
      [
        {
          path: 'login',
          component: LoginComponent
        },
        {
          path: 'signup',
          component: RegisterationComponent,
          canActivate:[RouteGuard],
        },
        {
          path:'home',
          component:HomeComponent
        },
        {
          path:'nav',
          component:NavbarComponent
        },
        

      ]
  },

  {
    path: 'admin',
    component: AdminComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
