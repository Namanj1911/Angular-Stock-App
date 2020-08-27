import { Component, OnInit } from '@angular/core';
import { InformationService } from 'src/app/services/information.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  companyPrice: any = [];
  companyFin: any = [];

  constructor(private infoService: InformationService) { }

  ngOnInit(): void {
    this.infoService.getDetails().subscribe(data => {
      this.companyPrice = data['price'];
      this.companyFin = data['financialData'];
    })
  }

}
