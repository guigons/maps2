import { AuthSmartService } from './../../smart/auth/auth-smart.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterService } from 'src/app/router.service';
import { WebsocketsService } from 'src/app/smart/db/websockets.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  constructor(
    private go: RouterService,
    private auth: AuthSmartService,
  ) { }

  ngOnInit() {

  }

  logout(){
    this.auth.logout();
    this.go.navigate(['/login'],'root');
  }

}
