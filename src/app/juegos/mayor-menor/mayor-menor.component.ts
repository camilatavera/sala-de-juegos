import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mayor-menor',
  templateUrl: './mayor-menor.component.html',
  styleUrls: ['./mayor-menor.component.css']
})
export class MayorMenorComponent implements OnInit {

  maxPuntos: number = 12;
  puntos: number = 0;
  vidas: number = 5;
  vidasTotal: number = 5;
  win: boolean = false;
  lose: boolean = false;
  arrayNumeros: number[] = Array.from({ length: 13 }, (_, i) => i + 1);
  numero: number = 0;
  siguienteNumero: number = 0;
  mensajeFinal: string = '';
  finalFlag: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
    // first card
    this.numero = this.arrayNumeros[Math.floor(Math.random() * this.arrayNumeros.length)];
  }

  Jugar(botonElegido: string): void {
    this.SiguienteRonda(botonElegido);
  }

  SiguienteRonda(botonElegido: string): void {
    this.siguienteNumero = this.arrayNumeros[Math.floor(Math.random() * this.arrayNumeros.length)];

    if ((botonElegido == 'menor') && (this.siguienteNumero < this.numero)) {
      this.puntos++;
      this.win = true;
      this.lose = false;
    } else if ((botonElegido == 'menor') && (this.siguienteNumero > this.numero)) {
      this.vidas--;
      this.lose = true;
      this.win = false;
    } else if ((botonElegido == 'mayor') && (this.siguienteNumero > this.numero)) {
      this.puntos++;
      this.win = true;
      this.lose = false;
    } else if ((botonElegido == 'mayor') && (this.siguienteNumero < this.numero)) {
      this.vidas--;
      this.lose = true;
      this.win = false;
    }
    this.numero = this.siguienteNumero;

    if (this.puntos === this.maxPuntos) {
      this.mensajeFinal = 'GANASTE!!!';
      this.finalFlag = true;
      this.win = false;
      this.lose = false;
    }

    if (this.vidas === 0) {
      this.mensajeFinal = 'Fin del juego!!!';
      this.finalFlag = true;
      this.win = false;
      this.lose = false;
    }
  }

  Repetir(): void {
    this.vidas = 5;
    this.puntos = 0;
    this.win = false;
    this.lose = false;
    this.finalFlag = false;

    // first card
    this.numero = this.arrayNumeros[Math.floor(Math.random() * this.arrayNumeros.length)];
  }
}
