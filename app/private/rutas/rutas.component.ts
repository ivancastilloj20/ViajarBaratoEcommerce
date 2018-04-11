import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ModelService } from '../../model.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-rutas',
  templateUrl: './rutas.component.html',
  styleUrls: ['./rutas.component.css']
})

export class RutasComponent implements OnInit {
  rutas: any;
  model: any;
category:any;
   categoria: any;
  private sub: any;
   coursesObservable: Observable<any[]>;
   constructor(private http: HttpClient,private RutasService:ModelService , private db: AngularFireDatabase,private route: ActivatedRoute) { 
 
    this.route.params.subscribe( params => console.log(params));
    this.route.queryParams.subscribe(params => {
      this.category = this.route.snapshot.params.categoria;
      console.log(this.category);
  });
   }
 
  
   ngOnInit() {
    this.coursesObservable = this.getRutas('/rutas');
      this.sub = this.route.params.subscribe(params => {
        this.categoria = +params['categoria'];
        
       
       console.log(this.category);
     });
     
   }
   ngOnDestroy() {
    this.sub.unsubscribe();
  }
   getRutas(listPath3): Observable<any[]> {
     return this.db.list(listPath3).valueChanges();
   }
 }

