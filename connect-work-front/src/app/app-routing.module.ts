import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';
import { SelecionarContratadoComponent } from './pages/selecionar-contratado/selecionar-contratado.component';
import { SolicitarOrcamentoComponent } from './pages/solicitar-orcamento/solicitar-orcamento.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'catalogo', component: CatalogoComponent },
  { path: 'selecionar-contratado/:servico', component: SelecionarContratadoComponent },
  { path: 'solicita-orcamento', component: SolicitarOrcamentoComponent }


  ];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule {
  
 }

 