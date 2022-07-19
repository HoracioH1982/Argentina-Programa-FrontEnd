import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { LoginComponent } from './login2/login2.component';


@NgModule({
  declarations: [
    PortfolioComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class ComponentesModule { }
