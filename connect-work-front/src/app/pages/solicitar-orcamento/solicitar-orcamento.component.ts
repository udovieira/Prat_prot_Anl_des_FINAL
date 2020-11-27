import { Component, OnInit } from '@angular/core';
import { Contratado } from 'src/app/models/contratado';
import { ContratadoSelecionadoService } from 'src/app/services/selecionar-contratado.service';

@Component({
  selector: 'app-solicitar-orcamento',
  templateUrl: './solicitar-orcamento.component.html',
  styleUrls: ['./solicitar-orcamento.component.css']
})
export class SolicitarOrcamentoComponent implements OnInit {

  contratadoSelecionado: Contratado;

  constructor(public contratadoSelecionadoService: ContratadoSelecionadoService) { }

  ngOnInit(): void {
    this.contratadoSelecionado = this.contratadoSelecionadoService.contratado;
  }

}
