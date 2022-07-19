import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  constructor(private formBuilder:FormBuilder, private autenticacionService:AutenticacionService, private ruta:Router) {

    this.form=this.formBuilder.group({
       //creamos el grupo de controles para el formulario login
       email:['',[Validators.required,Validators.email]],
       password: ['',[Validators.required,Validators.minLength(8)]],  
       deviceInfo:this.formBuilder.group({
          deviceId:["12345678"],
          deviceType: ["DEVICE_TYPE_ANDROID"],
          notificationToken: ["67657575eececc34"]
       })    

    })
   }

  ngOnInit(): void {
  }

  get Email() { return this.form.get('email');  }
  get Password() { return this.form.get('password');  }

  onEnviar(event:Event)
  {
    event.preventDefault;
    this.autenticacionService.iniciarSesion(this.form.value).subscribe(data=>{
      console.log("DATA:" + JSON.stringify(data));
      this.ruta.navigate(['/portfolio']);
    })
  }

}
