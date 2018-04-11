import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ModelService } from '../model.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {

  _id: number;
  coursesObservable: Observable<any[]>;
  nombreUsuario:any= localStorage.getItem("user");
   email:any= localStorage.getItem("email");
  city:any;
  ciudad: any;
  prueba:any;
  constructor(private http: HttpClient,private RutasService:ModelService ,private cookieService: CookieService, private db: AngularFireDatabase,private route: ActivatedRoute) { 
    this.route.queryParams.subscribe(params => {
      
      this.city = this.route.snapshot.params.ciudad;
      console.log(this.city);

     
    
  });

  }
  ngOnInit() {
    this.coursesObservable = this.getViajes('/viajes');
    this._id = this.route.snapshot.params["id"];

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

reservar(dni,cliente1,ciudad1,fechainicio1,fechafin1,hotel1,precio1,comentario1,foto1) {
  this.prueba = {   
    cliente:cliente1.value,
    ciudad: ciudad1.value,
    fechainicio:fechainicio1.value,
    fechafin:fechafin1.value,
   hotel:hotel1.value,
    precio:precio1.value,
    comentario:comentario1.value,
    foto:foto1.value
    
 };
  this.cookieService.set(dni.value, JSON.stringify(this.prueba)); 
 
  }

 

}