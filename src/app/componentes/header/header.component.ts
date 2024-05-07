import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  loggedIn: boolean = false; 
  @Input() headerTittle: string = '';
  @Input() showChatButton: boolean = false;
  @Input() showHomeButton: boolean = false;
  @Input() showQuienSoyButton: boolean = false;
  @Input() showAuth: boolean = true;
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    //verificado is estamos logueados siempre que se inicializa el header
    this.checkUserLoggedIn();
  }

  checkUserLoggedIn(): void {
    this.loggedIn = this.authService.userLoggedIn();
  }

  cerrarSesion(): void {
    this.authService.cerrarSesion()
    .then((cerrado) => {
      if (cerrado) {
        this.loggedIn = false;
        this.router.navigate(['/login']);
      } else {
        alert(this.authService.msjError);
      }
    });
  }

  navigateLogin() {
    this.router.navigate(['/login']);
  }

  navigateQuienSoy() {
    this.router.navigate(['/quienSoy']);
  }

  navigateAhorcado() {
    this.router.navigate(['/juegos/ahorcado']);
  }

  navigateMayorMenor() {
    this.router.navigate(['/juegos/mayorMenor']);
  }

  navigateHome() {
    this.router.navigate(['/home']);
  }

  navigateChat() {
    if (!this.loggedIn) {
      alert('Debes iniciar sesión para acceder al chat.');
    } else {
      this.router.navigate(['/chat']);
    }
  }

  /*
  showHomeButton(): boolean {
    return this.router.url.includes('quienSoy');
  }
  

  showQuienSoyButton(): boolean {
    return this.router.url.includes('home');
  }
  */

}