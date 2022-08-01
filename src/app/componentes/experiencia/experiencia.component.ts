import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  experienciaList:any;
  constructor(private personaService:PersonaService) { }

  ngOnInit(): void {
    this.personaService.obtenerExperiencias().subscribe(data=>{
      console.log(data);
      this.experienciaList=data;
    });
  }

}
