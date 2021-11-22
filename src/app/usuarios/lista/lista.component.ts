import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html'

})
export class ListaComponent implements OnInit {

  usuarios: Usuario[] = []

  constructor(private usuarioSerive: UsuarioService) { }

  ngOnInit(): void {

    this.usuarioSerive.getUsers()
      .subscribe(data => {
        console.log(data);
        this.usuarios = data
      })
  }

}
