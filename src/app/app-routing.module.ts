import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Importamos nuestros componentes
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
import { LoginComponent } from './componentes/login/login.component';
import { NavbarComponent } from './componentes/layout/navbar/navbar.component';
import { HeaderComponent } from './componentes/layout/header/header.component';
import { FooterComponent } from './componentes/layout/footer/footer.component';
import { GuardGuard } from './servicios/guard.guard';

// Definimos o configuramos nuestras rutas
const routes: Routes = [
  {path: 'portfolio', component: PortfolioComponent, canActivate:[GuardGuard]},
  {path: 'login', component: LoginComponent },
  {path: '',redirectTo:'login',pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
