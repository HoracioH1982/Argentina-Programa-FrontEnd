import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/servicios/persona.service';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-hard-soft-skills',
  templateUrl: './hard-soft-skills.component.html',
  styleUrls: ['./hard-soft-skills.component.css']
})
export class HardSoftSkillsComponent implements OnInit {
  habilidadesList:any;
  constructor(private personaService: PersonaService) { }

  ngOnInit(): void {
    this.personaService.obtenerHabilidad().subscribe(data=>{
      console.log(data);
      this.habilidadesList=data;     
    });
  }


}
