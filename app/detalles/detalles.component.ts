

import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ModelService } from '../model.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})

export class DetallesComponent implements OnInit {

 
  rutas: any;
  model: any;
city:any;
   ciudad: any;
  private sub: any;
  title: string = 'My first AGM project';
  lat: number = 51.678418;
  lng: number = 7.809007;
 

   coursesObservable: Observable<any[]>;
   nombreUsuario:any= localStorage.getItem("user");
   email:any= localStorage.getItem("email");
   constructor(private http: HttpClient,private RutasService:ModelService , private db: AngularFireDatabase,private route: ActivatedRoute) { 
 
    this.route.queryParams.subscribe(params => {
      
      this.city = this.route.snapshot.params.ciudad;
      console.log(this.city);

     
    
  });
   }
 
  
   ngOnInit() {
    this.coursesObservable = this.getViajes('/viajes');
     
      this.sub = this.route.params.subscribe(params => {
        this.ciudad = +params['ciudad'];
      
     
       console.log(this.city);
      
      });
     
   }
 
   getViajes(listPath1): Observable<any[]> {
     return this.db.list(listPath1).valueChanges();
   }

   print(): void {
    let printContents, popupWin;
    printContents = document.getElementById('print-section').innerHTML;
    popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
    popupWin.document.open();
    popupWin.document.write(`
      <html>
        <head>
          <title>Print tab</title>
          <style>
         
          </style>
        </head>
    <body onload="window.print();window.close()">${printContents}</body>
      </html>`
    );
    popupWin.document.close();
}

 }
