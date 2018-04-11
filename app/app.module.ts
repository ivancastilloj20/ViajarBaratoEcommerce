import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgIf } from '@angular/common';
import { AppComponent } from './app.component';
import { HomeComponent } from './private/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import {AngularFireAuthModule} from 'angularfire2/auth';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CookieService } from 'ngx-cookie-service';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {environment} from '../environments/environment';
import { ModelService } from './model.service';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './services/auth.service';
import {FlashMessagesModule} from 'angular2-flash-messages';
import {FlashMessagesService} from 'angular2-flash-messages';

import { InsertarComponent } from './insertar/insertar.component';
import { FooterComponent } from './footer/footer.component';
import { RutasComponent } from './private/rutas/rutas.component';
import { DetallesComponent } from './detalles/detalles.component';
import { AgmCoreModule } from '@agm/core';
import { APP_BASE_HREF } from '@angular/common';
import { CarritoComponent } from './carrito/carrito.component';
import { ViajesComponent } from './viajes/viajes.component';
import { PropertyComponent } from './property/property.component';


@NgModule({
  declarations: [
    AppComponent,
  
    HomeComponent,
    LoginComponent,
    NotFoundComponent,
    RegisterComponent,
    NavbarComponent,
 
    InsertarComponent,
    FooterComponent,
    RutasComponent,
    DetallesComponent,
    CarritoComponent,
    ViajesComponent,
    PropertyComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    FormsModule,
    AngularFireAuthModule,
    NgbModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FlashMessagesModule,
    
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB6j5PApYOCzoJWBkIUnOSfT5jhw1Skqgo'
    })
    

  ],
  providers: [ModelService,CookieService, AuthGuard,AuthService,FlashMessagesService,{provide: APP_BASE_HREF, useValue: '/'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
