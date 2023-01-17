import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manutencao',
  templateUrl: './manutencao.page.html',
  styleUrls: ['./manutencao.page.scss'],
})
export class ManutencaoPage implements OnInit {

  constructor(private router: Router) { }

  navigate(){
    this.router.navigate(['/manutencao'])
  }

  ngOnInit() {
  }

}
