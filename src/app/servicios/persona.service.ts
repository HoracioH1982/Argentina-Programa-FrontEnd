import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  private persona$ = new Subject<any>();
  //localhost:8080/ver/persona
  private Url = 'http://localhost:8080';
  private Api = '/datos/';

  //localhost:8080/ver/persona

  constructor(private http:HttpClient) { 
  console.log("El servicio de persona está corriendo");
    //this.currentUserSubject= new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser')|| '{}'));
  }

//ABML Persona
/*obtenerDatos():Observable<any>
  {
    return this.http.get<any>('./assets/data/data.json'); //this.url+"persona"
  }*/

obtenerPersona():Observable<any>{
   return this.http.get(this.Url + this.Api + "ver/persona");      
} 

//this.http.get(this.myAppCriptoUrl + this.myApiUrl);
obtenerPersonaPorId():Observable<any>{
  return this.http.get(this.Url + this.Api + "buscar/persona/1");//+id);
  
}
deletePersona(id: number):Observable<any>{
  return this.http.delete(this.Url + this.Api + "borrar/persona/"+id);      
}
savePersona(persona: String): Observable<any>{
  return this.http.post(this.Url + this.Api + "new/persona", persona);
}
updatePersona(id: number, persona: any): Observable<any>{
  return this.http.put(this.Url + this.Api + "editar/persona/"+id, persona);
}
//ABML Acercade

//ABML Experiencia
obtenerExperiencias():Observable<any>{   
  return this.http.get(this.Url + this.Api + "ver/experiencia")
}
deleteExperiencias(id: number):Observable<any>{
  return this.http.delete(this.Url + this.Api + "borrar/experiencia/"+id);      
}
saveExperiencias(experiencia: String): Observable<any>{
  return this.http.post(this.Url + this.Api + "new/experiencia", experiencia);
}
updateExperiencias(id: number, experiencia: any): Observable<any>{
  return this.http.put(this.Url + this.Api + "editar/experiencia/"+id, experiencia);
}

//ABML Educacion
obtenerEducacion():Observable<any>{   
  return this.http.get(this.Url + this.Api + "ver/educacion")
}
deleteEducacion(id: number):Observable<any>{
  return this.http.delete(this.Url + this.Api + "borrar/educacion/"+id);      
}
saveEducacion(educacion: String): Observable<any>{
  return this.http.post(this.Url + this.Api + "new/educacion", educacion);
}

updateEducacion(id: number, educacion: any): Observable<any>{
  return this.http.put(this.Url + this.Api + "editar/educacion/"+id, educacion);
}

//AMBL Habilidades
obtenerHabilidad():Observable<any>{   
  return this.http.get(this.Url + this.Api + "ver/habilidades")
}
deleteHabilidad(id: number):Observable<any>{
  return this.http.delete(this.Url + this.Api + "borrar/habilidad/"+id);      
}
saveHabilidad(habilidad: String): Observable<any>{
  return this.http.post(this.Url + this.Api + "new/habilidad", habilidad);
}

updateHabilidad(id: number, habilidad: any): Observable<any>{
  return this.http.put(this.Url + this.Api + "editar/habilidad/"+id, habilidad);
}

// ABML Proyectos
obtenerProyectos():Observable<any>{
      return this.http.get(this.Url + this.Api + "ver/proyectos");      
    } 

deleteProyectos(id: number):Observable<any>{
      return this.http.delete(this.Url + this.Api + "borrar/proyectos/"+id);      
    }

saveProyectos(proyecto: String): Observable<any>{
      return this.http.post(this.Url + this.Api + "new/proyecto", proyecto);
    }

updateProyectos(id: number, proyecto: any): Observable<any>{
      return this.http.put(this.Url + this.Api + "editar/proyecto/"+id, proyecto);
    }

//ABML Redes
obtenerRedes():Observable<any>{
  return this.http.get(this.Url + this.Api + "ver/redes");      
} 

deleteRedes(id: number):Observable<any>{
  return this.http.delete(this.Url + this.Api + "borrar/red/"+id);      
}

saveRedes(red: String): Observable<any>{
  return this.http.post(this.Url + this.Api + "new/red", red);
}

updateRedes(id: number, red: any): Observable<any>{
  return this.http.put(this.Url + this.Api + "editar/red/"+id, red);
}

//RELACION TIPO TRABAJO
obtenerTipoTrabajo():Observable<any>{
  return this.http.get(this.Url + this.Api + "ver/tipoempleo");      
} 
obtenerTipoTrabajodPorId(id: number):Observable<any>{
  return this.http.get(this.Url + this.Api + "ver/tipoempleo/"+id);      
} 

//RELACION NOMBRE RED SOCIAL
obtenerNombreRed():Observable<any>{
  return this.http.get(this.Url + this.Api + "ver/nombrered");      
} 
obtenerNombreRedPorId(id: number):Observable<any>{
  return this.http.get(this.Url + this.Api + "ver/nombrered/"+id);      
} 

//RELACION NOMBRE HABILIDAD
obtenerNombreHabilidad():Observable<any>{
  return this.http.get(this.Url + this.Api + "ver/nombrehab");      
} 
obtenerNombreHabilidadPorId(id: number):Observable<any>{
  return this.http.get(this.Url + this.Api + "ver/nombrehab/"+id);      
} 

}
