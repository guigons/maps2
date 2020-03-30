import { RouterService } from '../../../router.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-boas-vindas',
  templateUrl: './boas-vindas.component.html',
  styleUrls: ['./boas-vindas.component.scss'],
})
export class BoasVindasComponent implements OnInit {

  constructor(
    private go: RouterService
  ) { }

  ngOnInit() {}

  
}
