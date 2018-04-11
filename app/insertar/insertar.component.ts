import { Component, OnInit , ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';


import { ModelService } from '../model.service';
import { model } from '../model';
import { storage } from 'firebase/app';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-insertar',
  templateUrl: './insertar.component.html',
  styleUrls: ['./insertar.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [AngularFireDatabase]
})
export class InsertarComponent implements OnInit {
  model: model = new model();
  submitted = false;
  email:any= localStorage.getItem("email");
 nombreUsuario:any= localStorage.getItem("user");
 prueba:any;
  constructor(private insertarService: ModelService,private cookieService: CookieService, private http: HttpClient, private router: Router) {}
 
  ngOnInit() {
    
  }
 
  newInsertar(): void {
    this.submitted = false;
    this.model = new model();
    
  }
 
  save() {
    this.insertarService.createinsertar(this.model);
    console.log("guardando")
    this.model= new model();

    this.router.navigate(['/detalles'])

  }
 
  onSubmit() {
    this.submitted = true;
    console.log(this.model);
    this.save();
   
  }


   
  }


  