import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculadoraComponent } from './componente/calculadora/calculadora.component';
import { FormularioDonacionesComponent } from './componente/formulario-donaciones/formulario-donaciones.component';
import { DesarrolladoraComponent} from'./componente/desarrolladora/desarrolladora.component';

const routes: Routes = [
  {path: '', redirectTo: '/desarrolladora', pathMatch: 'full'},
  {path:'calculadora', component: CalculadoraComponent},
  {path:'formulario-donaciones', component: FormularioDonacionesComponent},
  {path:'desarrolladora', component: DesarrolladoraComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
