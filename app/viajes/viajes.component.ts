
import { Component, OnInit , ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';


import { ModelService } from '../model.service';
import { model } from '../model';
import { CookieService } from 'ngx-cookie-service';
import { viajes } from '../viajes';
@Component({
  selector: 'app-viajes',
  templateUrl: './viajes.component.html',
  styleUrls: ['./viajes.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [AngularFireDatabase]
})
export class ViajesComponent implements OnInit {
  viajes: viajes = new viajes();
  submitted = false;
  email:any= localStorage.getItem("email");
 nombreUsuario:any= localStorage.getItem("user");
 prueba:any;
  constructor(private insertarService: ModelService,private cookieService: CookieService, private http: HttpClient, private router: Router) {}
 
  ngOnInit() {
    
  }
 
  newInsertar(): void {
    this.submitted = false;
    this.viajes = new viajes();
  }
 
  save() {
    this.insertarService.createinsertar1(this.viajes);
    this.viajes= new viajes();
  }
 
  onSubmit() {
    this.submitted = true;
    this.save();
  }
}