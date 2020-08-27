import { Component, OnInit } from '@angular/core';
import { SummaryService } from '../services/summary.service';

@Component({
  selector: 'app-nse',
  templateUrl: './nse.component.html',
  styleUrls: ['./nse.component.css']
})
export class NseComponent implements OnInit {

  bseSummary: any = [];

  constructor(private summaryService: SummaryService) { }

  ngOnInit(): void {
    this.summaryService.getSummary().subscribe(data => {
      // console.log(data['marketSummaryResponse']['result'][1]);
      this.bseSummary = data['marketSummaryResponse']['result'][1];
    }, error => {
      console.log(error.message);
    })
  }

}
