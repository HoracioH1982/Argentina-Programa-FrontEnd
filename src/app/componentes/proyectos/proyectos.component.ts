import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/servicios/persona.service';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  proyectosList:any;
  constructor(private personaService:PersonaService) { }

  ngOnInit(): void {
    this.personaService.obtenerProyectos().subscribe(data=>{
      console.log(data);
      this.proyectosList=data;     
  })
}

}
