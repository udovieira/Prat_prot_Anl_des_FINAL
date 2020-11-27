import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import { ChartsModule } from 'ng2-charts';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';




import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { LoginComponent } from './pages/login/login.component';
import { SelecionarContratadoComponent } from './pages/selecionar-contratado/selecionar-contratado.component';
import { AprovarCadastroComponent } from './pages/aprovar-cadastro/aprovar-cadastro.component';
import { SolicitarOrcamentoComponent } from './pages/solicitar-orcamento/solicitar-orcamento.component';
import { AprovarOrcamentoComponent } from './pages/aprovar-orcamento/aprovar-orcamento.component';
import { PagamentoComponent } from './pages/pagamento/pagamento.component';
import { RelatorioComponent } from './pages/relatorio/relatorio.component';
import { JustificativaComponent } from './pages/justificativa/justificativa.component';
import { SatisfacaoComponent } from './pages/satisfacao/satisfacao.component';
import { ContratadoSelecionadoService } from './services/selecionar-contratado.service';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    CatalogoComponent,
    CadastroComponent,
    LoginComponent,
    SelecionarContratadoComponent,
    AprovarCadastroComponent,
    SolicitarOrcamentoComponent,
    AprovarOrcamentoComponent,
    PagamentoComponent,
    RelatorioComponent,
    JustificativaComponent,
    SatisfacaoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    AppRoutingModule,
    MatSidenavModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    ChartsModule,
    FlexLayoutModule,
    MatRadioModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatDatepickerModule,
    MatButtonModule,
    MatFormFieldModule,
    MatNativeDateModule,

  ],
  providers: [ContratadoSelecionadoService],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]

})
export class AppModule { }
