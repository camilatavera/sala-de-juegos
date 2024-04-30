import { Component,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Auth, signOut } from '@angular/fire/auth';
  import { UsuarioService } from '../../services/usuario.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})


export class HomeComponent implements OnInit {
  email: string = '';

  constructor(private auth: Auth, private router: Router, private usuarioService: UsuarioService) {}

  ngOnInit() {
    this.email = this.usuarioService.email;
  }

  cerrarSesion() {
    this.router.navigate(['/login'])
  }

  iniciarSesion() {
    signOut(this.auth).then(() => {
      this.usuarioService.clenServiceUser();
      this.router.navigate(['/login']);
    });
  }

  handleClick(path: string) {
    this.router.navigateByUrl(path);
  }
}

