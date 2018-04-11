import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  viajesObservable: Observable<any[]>;
  allCookies: any = this.cookieService.getAll();
  carrito1:string;
  carrito= [];
 nombreUsuario:any= localStorage.getItem("user");
  constructor(private cookieService: CookieService,private db: AngularFireDatabase) { }

  ngOnInit() {
    this.viajesObservable = this.cookieService.get("1")["cliente"];
    for (const key in this.allCookies) {
      this.carrito.push(JSON.parse(this.cookieService.get(key)));
  
    }
    console.log(this.carrito);
    
  }
    getViajes(listPath1): Observable<any[]> {
     return this.db.list(listPath1).valueChanges();
   }
}
