
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ModelService } from '../../model.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  rutas: any;
  model: any;
  public isLogin: boolean;
  public nombreUsuario: string;
  public emailUsuario: string;
  public fotoUsuario: string;
   coursesObservable: Observable<any[]>;

  constructor(private router: Router,private http: HttpClient,private RutasService:ModelService , private db: AngularFireDatabase,private route: ActivatedRoute,  public authService: AuthService) {
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
    this.coursesObservable = this.getRutas('/rutas');
    this.authService.getAuth().subscribe( auth => {
      if (auth) {
        this.isLogin = true;
        this.nombreUsuario = auth.displayName;
        this.emailUsuario = auth.email;
        this.fotoUsuario = auth.photoURL;
      } else {
        this.isLogin = false;
      }
    });
  }

  getRutas(listPath3): Observable<any[]> {
    return this.db.list(listPath3).valueChanges();
  }

  onClickLogout() {
    this.authService.logout();
  }
}

