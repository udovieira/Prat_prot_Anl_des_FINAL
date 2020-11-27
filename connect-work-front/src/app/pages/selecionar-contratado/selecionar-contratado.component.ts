import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contratado } from 'src/app/models/contratado';
import { ContratadoSelecionadoService } from 'src/app/services/selecionar-contratado.service';

@Component({
  selector: 'app-selecionar-contratado',
  templateUrl: './selecionar-contratado.component.html',
  styleUrls: ['./selecionar-contratado.component.css']
})
export class SelecionarContratadoComponent implements OnInit {

  servico: string;
  contratadoSelecionado: Contratado;

  contratados: Contratado[] = [
    {nome : 'aaa', servicos : 7, avaliacao : 5, meses : 6},
    {nome : 'bbb', servicos : 7, avaliacao : 5, meses : 6},
    {nome : 'ccc', servicos : 7, avaliacao : 5, meses : 6}
  ]

  constructor(
    private route: ActivatedRoute,
    public contratadoSelecionadoService: ContratadoSelecionadoService,
    private router: Router
  ) { }

  ngOnDestroy() {
    this.contratadoSelecionadoService.contratado = this.contratadoSelecionado; 
 }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.servico = params.get('servico');
    });
  }

  selecionaContratado(contratado: Contratado){
    this.contratadoSelecionado = contratado;
    console.log(this.contratadoSelecionado)
    this.router.navigateByUrl('/solicita-orcamento'); 
  }

}
