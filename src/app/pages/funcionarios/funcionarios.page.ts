import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.page.html',
  styleUrls: ['./funcionarios.page.scss'],
})
export class FuncionariosPage implements OnInit {

  constructor(private router: Router) { }

  navigate(){
    this.router.navigate(['/funcionarios'])
  }

  ngOnInit() {
  }

}
