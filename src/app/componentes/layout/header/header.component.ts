import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  headerList:any;
  redesList:any;
  constructor(private personaService: PersonaService, private autenticacionService:AutenticacionService) { }

  ngOnInit(): void {
    this.ObtenerRedesSociales();

}

ObtenerRedesSociales(){
  this.personaService.obtenerRedes().subscribe(data=>{
    console.log(data);
    this.redesList=data;
    })
}

}
