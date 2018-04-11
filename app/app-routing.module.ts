import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './private/home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './guards/auth.guard';
import { NotFoundComponent } from './not-found/not-found.component';

import { InsertarComponent } from './insertar/insertar.component';
import { FooterComponent } from './footer/footer.component';
import { RutasComponent } from './private/rutas/rutas.component';
import { DetallesComponent } from './detalles/detalles.component';
import { CarritoComponent } from './carrito/carrito.component';
import { ViajesComponent } from './viajes/viajes.component';
import { PropertyComponent } from './property/property.component';


const routes: Routes = [

  {
    path: 'rutas',
    component: RutasComponent,
    data: { title: 'Rutas' }
  },
  {
    path: 'rutas/:categoria',
    component: RutasComponent,
    data: { title: 'Rutas' }
  },
  {
    path: 'viajes',
    component: ViajesComponent,
    data: { title: 'Viajes' }
  },
 
  {
    path: 'Footer',
    component: FooterComponent,
    data: { title: 'Footer' }
  },
  
  {
    path: 'insertar',
    component: InsertarComponent,
    data: { title: 'Insertar' },
    canActivate: [AuthGuard]
  },
  {
    path: 'home',
    component: HomeComponent,
    data: { title: 'Home' }
  },
  {
    path: 'carrito',
    component: CarritoComponent,
    data: { title: 'Carrito' }
  },
  {
    path: 'property/:ciudad',
    component: PropertyComponent,
    data: { title: 'Property' }
  },
  {
    path: 'detalles',
    component: DetallesComponent,
    data: { title: 'Detalles' }
  },
  {path: '', 
  component: HomeComponent},

  {path: 'login', 
  component: LoginComponent},

  {path: 'register', 
  component: RegisterComponent},
  
  {path: '**', component: NotFoundComponent}


];

@NgModule({
 
  imports: [RouterModule.forRoot(routes), RouterModule.forRoot(
    routes,
    { enableTracing: true } // <-- debugging purposes only
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }

