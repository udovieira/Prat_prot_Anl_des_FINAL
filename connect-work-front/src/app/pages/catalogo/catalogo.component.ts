import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

  servicosEletricos: string[] = [
    "Instalação de Interfone", 
    "Instalação de câmeras de segurança",
    "Eletricista",
    "Instalação de disjuntor"
  ]
    
  servicosInformatica: string[] = [
    "Instalação de Wi-Fi", 
    "Formatação de computadores"
  ]

  servicosHidraluticos: string[] = [
    "Instalação de Interfone", 
    "Instalação de câmeras de segurança",
    "Eletricista",
    "Instalação de disjuntor"
  ]

  pisosRevestimento: string[] = [
    "Instalação de Rodapé", 
    "Instalação de piso",
    "Revestimento na parede"
  ]
    

  constructor() { }

  ngOnInit(): void {
  }

}
