import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { FormControl, FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  email = "";
  password = "";

  constructor(private authService:AuthService, private formBuilder: FormBuilder) {
     this.form = this.formBuilder.group({
       //creamos el grupo de controles para el formulario login
       password: ['',[]],
       email: ['',[]]
     }) 

   }

  login(){
    //elservicio authService.login ya redirecciona
    //en caso de inicio de sesión positivo 
    this.authService.login(this.email, this.password)
  }

  ngOnInit(): void {
  }

  onEnviar(event: Event){
     event.preventDefault;
     if (this.form.valid){
        //llamamos nuestro servicio para enviar los datos al servidor
     }else{
        //corremos las validaciones para que se ejecuten los mensaje de error
        this.form.markAllAsTouched();
     }
  }

}
