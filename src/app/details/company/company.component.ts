import { Component, OnInit } from '@angular/core';
import { InformationService } from 'src/app/services/information.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  companyData: any = [];
  url: string;

  constructor(private infoService: InformationService) { }

  ngOnInit(): void {
    this.infoService.getDetails().subscribe(data => {
      console.log(data);
      this.companyData = data['summaryProfile'];
    })
    this.imageURL();
  }

  imageURL(){
    this.url = this.infoService.getURL();
    console.log(this.url);
    
  }


}
