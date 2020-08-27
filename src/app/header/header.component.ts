import { Component, OnInit } from '@angular/core';
import { InformationService } from '../services/information.service';
import { RouterService } from '../services/router.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private infoService: InformationService, private routerService: RouterService) { }

  ngOnInit(): void {
  }

  needNWG() {
    this.infoService.setVariable('NWG');
    this.routerService.routeToDashboard();
    setTimeout( () => {
      this.routerService.routeToSearchStock();
    }, 10);
  }

  needICICI(){
    this.infoService.setVariable('ICICIBANK.NS');
    this.routerService.routeToDashboard();
    setTimeout( () => {
      this.routerService.routeToSearchStock();
    }, 10);
  }

  needSBI(){
    this.infoService.setVariable('SBIN.NS');
    this.routerService.routeToDashboard();
    setTimeout( () => {
      this.routerService.routeToSearchStock();
    }, 10);
  }

  needKOTAK(){
    this.infoService.setVariable('KOTAKBANK.NS');
    this.routerService.routeToDashboard();
    setTimeout( () => {
      this.routerService.routeToSearchStock();
    }, 10);

  }

  needNIIT(){
    this.infoService.setVariable('NIITLTD.NS');
    this.routerService.routeToDashboard();
    setTimeout( () => {
      this.routerService.routeToSearchStock();
    }, 10);
  }

}
