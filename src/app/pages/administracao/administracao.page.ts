import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-administracao',
  templateUrl: './administracao.page.html',
  styleUrls: ['./administracao.page.scss'],
})
export class AdministracaoPage implements OnInit {

  constructor(private router: Router) { }

  navigate(){
    this.router.navigate(['/adminitracao'])
  }

  ngOnInit() {
  }

}
