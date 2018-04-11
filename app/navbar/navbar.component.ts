import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router, NavigationEnd } from '@angular/router';



import { HttpClient } from '@angular/common/http';
import { ModelService } from '../model.service';

import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public isLogin: boolean;
  public nombreUsuario: string;
  public emailUsuario: string;
  public fotoUsuario: string;
  coursesObservable: Observable<any[]>;

  constructor(private router: Router, public authService: AuthService,private db: AngularFireDatabase){
    // override the route reuse strategy
    this.router.routeReuseStrategy.shouldReuseRoute = function(){
       return false;
    }

    this.router.events.subscribe((evt) => {
       if (evt instanceof NavigationEnd) {
          // trick the Router into believing it's last link wasn't previously loaded
          this.router.navigated = false;
          // if you need to scroll back to top, here is the right place
          window.scrollTo(0, 0);
       }
   });

}

  ngOnInit() {
    this.authService.getAuth().subscribe( auth => {
      if (auth) {
        this.isLogin = true;
        this.nombreUsuario = auth.displayName;
        window.localStorage.setItem("user", this.nombreUsuario);
        
        this.emailUsuario = auth.email;
        window.localStorage.setItem("email", this.emailUsuario);
        this.fotoUsuario = auth.photoURL;
      } else {
        this.isLogin = false;
      }
    });

    this.coursesObservable = this.getRol('/rol');
     
   
  }

  getRol(listPath2): Observable<any[]> {
    return this.db.list(listPath2).valueChanges();
  }

  onClickLogout() {
    this.authService.logout();

  }

  
}



 
