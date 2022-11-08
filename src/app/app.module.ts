import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminModule } from './modules/admin/admin.module';
import { CoreModule } from './modules/core/core.module';
import { RouteGuard } from './modules/core/services/route.guard';
import { SharedModule } from './modules/shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgmaterialModule } from './modules/material/ngmaterial/ngmaterial.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes=[{
  path: '',
}]
@NgModule({
  declarations: [
    AppComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    AdminModule,
    BrowserAnimationsModule,
    NgmaterialModule,
    RouterModule.forRoot(routes)
  
  ],
  exports: [RouterModule],
  providers: [
    RouteGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
