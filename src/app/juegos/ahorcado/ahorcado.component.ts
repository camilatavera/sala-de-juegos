import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ahorcado',
  templateUrl: './ahorcado.component.html',
  styleUrls: ['./ahorcado.component.css']
})
export class AhorcadoComponent implements OnInit {

  palabras: string[] = ['CARRO', 'CASA', 'PERRO', 'GATO', 'PLANTA'];
  palabraSecreta: string = '';
  palabraMostrada: string = '';
  intentosMaximos: number = 6;
  intentosActuales: number = 0;
  juegoTerminado: boolean = false;
  letras: string[] = [];
  imagenActual: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.prepararJuego(); 
  }

  prepararJuego(): void {
    this.iniciarJuego();
    this.inicializarTeclado();
  } 

  iniciarJuego(): void {
    this.palabraSecreta = this.seleccionarPalabraAleatoria();
    this.palabraMostrada = '_'.repeat(this.palabraSecreta.length);
    this.intentosActuales = 0;
    this.juegoTerminado = false;
    this.imagenActual=0;
  }

  seleccionarPalabraAleatoria(): string {
    const indiceAleatorio = Math.floor(Math.random() * this.palabras.length);
    return this.palabras[indiceAleatorio];
  }

  intentarLetra(letra: string): void {
    if (!this.juegoTerminado) {
      if (this.palabraSecreta.includes(letra)) {
        this.actualizarPalabraMostrada(letra);
      } else {
        this.intentosActuales++;
        this.imagenActual++;
      }
      
      this.verificarFinJuego();
    }
  }

  actualizarPalabraMostrada(letra: string): void {
    let nuevaPalabraMostrada = '';
    for (let i = 0; i < this.palabraSecreta.length; i++) {
      if (this.palabraSecreta[i] === letra) {
        nuevaPalabraMostrada += letra;
      } else if (this.palabraMostrada[i] !== '_') {
        nuevaPalabraMostrada += this.palabraMostrada[i];
      } else {
        nuevaPalabraMostrada += '_';
      }
    }
    this.palabraMostrada = nuevaPalabraMostrada;
  }

  verificarFinJuego(): void {
    if (this.palabraMostrada === this.palabraSecreta) {
      this.juegoTerminado = true;
    } else if (this.intentosActuales >= this.intentosMaximos) {
      this.juegoTerminado = true;
    }
  }

  reiniciarJuego(): void {
    this.prepararJuego()
    this.iniciarJuego();
  }

  inicializarTeclado(): void {
    this.letras = Array.from(Array(26), (_, i) => String.fromCharCode(65 + i));
  }
}
