import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { PersonaService } from 'src/app/servicios/persona.service';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';


@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {
ListaPerso:any;
constructor(private personaService: PersonaService, private autenticacionService:AutenticacionService) { }

  ngOnInit(): void {
    this.personaService.obtenerPersonaPorId().subscribe(data=>{
      console.log(data);
      this.ListaPerso=data;
    });
  } 




  //datosPortfolio.obtenerDatos().subscribe(data=>{
    /*



      constructor(private LoginService:LoginService, 
              private Http:HttpClient, 
              private routes:Router,
              private _personaService:PersonaService) {

    Http.get(this.rutaapi+"ver").subscribe(data=>{
      //console.log(data);
      this.databanner=data;
    })
    */
}
