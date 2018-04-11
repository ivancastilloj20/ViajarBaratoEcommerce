import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

constructor(private cookieService: CookieService){
    
}

ngOnInit(): void {
  //Set cookies
  this.cookieService.set('Rutas', 'Bienvenido a tu web de viajes' );

  window.localStorage.setItem("Routes", "Consigue las mejores rutas");
  window.sessionStorage.setItem("rurutis","Rutas para todos")
  
}
}
