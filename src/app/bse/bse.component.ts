import { Component, OnInit } from '@angular/core';
import { SummaryService } from '../services/summary.service';

@Component({
  selector: 'app-bse',
  templateUrl: './bse.component.html',
  styleUrls: ['./bse.component.css']
})
export class BseComponent implements OnInit {

  bseSummary: any = [];

  constructor(private summaryService: SummaryService) { }

  ngOnInit(): void {
    this.summaryService.getSummary().subscribe(data => {
      // console.log(data['marketSummaryResponse']['result'][0]);
      this.bseSummary = data['marketSummaryResponse']['result'][0];
    }, error => {
      console.log(error.message);
    })
  }

}
