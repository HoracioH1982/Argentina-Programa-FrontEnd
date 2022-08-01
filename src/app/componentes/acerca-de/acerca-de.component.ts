import { Component, ElementRef, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/servicios/persona.service';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  acercaDe:any;
  constructor(private personaService: PersonaService) { }

  ngOnInit(): void {
    this.personaService.obtenerPersonaPorId().subscribe(data=>{
      console.log(data);
      this.acercaDe=data;   
  })
}

}
