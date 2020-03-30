import { TesteService } from './../teste.service';
import { Component, OnInit } from '@angular/core';
import { RouterService } from 'src/app/router.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-item-teste',
  templateUrl: './item-teste.component.html',
  styleUrls: ['./item-teste.component.scss'],
})
export class ItemTesteComponent implements OnInit {

  public idTeste: string;
  public teste$: Observable<any>;

  constructor(
    private go: RouterService,
    private activatedRoute: ActivatedRoute,
    private testeService: TesteService
  ) { }

  ngOnInit() {

    this.idTeste = this.activatedRoute.snapshot.params['idTeste'];
    this.teste$ = this.testeService.snapshotChangesById(this.idTeste);


  }

}
