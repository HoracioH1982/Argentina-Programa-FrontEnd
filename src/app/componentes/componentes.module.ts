import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { LoginComponent } from './login2/login2.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { EducacionComponent } from './educacion/educacion.component';
import { HardSoftSkillsComponent } from './hard-soft-skills/hard-soft-skills.component';
import { ProyectosComponent } from './proyectos/proyectos.component';


@NgModule({
  declarations: [
    PortfolioComponent,
    LoginComponent,
    EncabezadoComponent,
    AcercaDeComponent,
    ExperienciaComponent,
    EducacionComponent,
    HardSoftSkillsComponent,
    ProyectosComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class ComponentesModule { }
