import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs'; 
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
  //crear variable con url de la api y objeto par ael obrservable
  url="http://localhost:8080/auth/";
  //api="http://localhost:8080/auth/";
  //apiHeroku="https://limitless-gorge-37634.herokuapp.com/auth/";
  currentUserSubject: BehaviorSubject<any>;

  constructor(private http:HttpClient) { 
    console.log("El servicio de autenticación está corriendo");
    this.currentUserSubject= new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser')|| '{}'));

  }

  iniciarSesion(credenciales:any):Observable<any>{
    //                       paso url y datos
    return this.http.post(this.url, credenciales).pipe(map(data=>{
      console.log("recibimos data");
      sessionStorage.setItem('currentUser', JSON.stringify(data));
      this.currentUserSubject.next(data);
      return data;
    }))
  }

  get UsuarioAutenticado()
  {
    return this.currentUserSubject.value;
  }
}
