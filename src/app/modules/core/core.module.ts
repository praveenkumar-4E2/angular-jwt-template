import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JwtserviceService } from './services/jwtservice.service';
import { CoreComponent } from './core.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterationComponent } from './components/registeration/registeration.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouteGuard } from './services/route.guard';
import { InterceptorService } from './services/interceptor.service';
import { NgmaterialModule } from '../material/ngmaterial/ngmaterial.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';



@NgModule({
  declarations: [

  
    CoreComponent,
        LoginComponent,
        RegisterationComponent,
        NavbarComponent,
        FooterComponent,
        HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    NgmaterialModule
  ],
  exports: [NavbarComponent],
  providers: [
    JwtserviceService,
    RouteGuard,
    {
      provide:HTTP_INTERCEPTORS,
      useClass:InterceptorService,
      multi: true
    }

  ]
})
export class CoreModule { }
