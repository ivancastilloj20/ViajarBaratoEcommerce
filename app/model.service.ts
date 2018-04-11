
import {Injectable} from '@angular/core';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';



import { QueryFn } from 'angularfire2/database/interfaces';

import { model} from './model';
import { viajes } from './viajes';
import { rol } from './rol';
@Injectable()
export class ModelService { 
 

  private dbPath3 = '/rutas';
  private dbPath2 = '/rol';
  private dbPath1 = '/viajes';

  insertarRef: AngularFireList<model> = null;
  insertarRef1: AngularFireList<rol> = null;
  insertarRef2: AngularFireList<viajes> = null;
  constructor(private db: AngularFireDatabase) {
    this.insertarRef1 = db.list(this.dbPath2);
    this.insertarRef = db.list(this.dbPath3);
    this.insertarRef2 = db.list(this.dbPath1);
  }
 
  createinsertar(model: model): void {
    this.insertarRef.push(model);
  }
  createinsertar1(viajes: viajes): void {
    this.insertarRef2.push(viajes);
  }
 
 
  getRutas(): AngularFireList<model> {
    return this.insertarRef;
  }
  getRol(): AngularFireList<rol> {
    return this.insertarRef1;
  }
  getViajes(): AngularFireList<viajes> {
    return this.insertarRef2;
  }
 
  private handleError(error) {
    console.log(error);
  }
}