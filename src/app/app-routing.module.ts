import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Importamos nuestros componentes
import { NavbarComponent } from './layout/navbar/navbar.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';

// Definimos nuestras rutas
const routes: Routes = [
   {path: 'navbar', component: NavbarComponent},
   {path: 'header', component: HeaderComponent},
   {path: 'footer', component: FooterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
