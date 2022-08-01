import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Router, RouterLinkActive } from '@angular/router';
import { Observable } from 'rxjs';
//import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = 'http://localhost:8080/';
  Api = '"/datos/"';
  //token: ; 

  constructor( private http: HttpClient, private router: Router) {}

  /*
  
  login(usuario: any): Observable<any> {
    return this.http.post(this.url + Api + "usuario/login", usurio);
  } 
  getUsuario(id:number):Observable<any>{
    return this.http.get(this.url + Api +"buscar/usuario/"+id);
  }
  getUserLogged(){
    const token=this.getToken();
    return token;
  }

  //logueo
  login(email: string, password: string){
     this.http.post(this.url+ Api + 'ver/usuario, {email: email, password: password})
        .subscribe((resp: any) => {
        // redireccionamos al usuario a su perfil
            this.router.navigate(['profile']);
            //guardamos el token en el localStorage
            localStorage.setItem('token', resp.token);
        })
      };

  //para cerrar la sesion se elimina el token del local storage
  logOut(){
    localStorage.removeItem('token');
  }

  //servicio para verificar si la sesion existe
  public get logIn(): boolean {
      return (localStorage.getItem('token') !== null);
  }



  */
  
  
  
  

             




  }




