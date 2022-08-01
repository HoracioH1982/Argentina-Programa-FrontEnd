import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/servicios/persona.service';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})

export class EducacionComponent implements OnInit {
  educacionList:any;  
  constructor(private personaService: PersonaService) { }

  ngOnInit(): void {
    this.personaService.obtenerEducacion().subscribe(data=>{
      console.log(data);
      this.educacionList=data;
    });
  }


}
