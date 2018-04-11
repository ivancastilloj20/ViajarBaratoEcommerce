
export class model{
  nombre: string;
  usuario:string= localStorage.getItem("user");
  email:string=localStorage.getItem("email");
  plan:string;
  fechaentrada: Date;
  fechaultima: Date;
  preferencia: string;
  presupuesto:number;
  telefono:string;
  }