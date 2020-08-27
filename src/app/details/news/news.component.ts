import { Component, OnInit } from '@angular/core';
import { InformationService } from '../../services/information.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  newsArray: any = [];

  constructor(private infoService: InformationService) { }

  ngOnInit(): void {
    this.infoService.getNews().subscribe(data=> {
      console.log(data['items']['result']);
      this.newsArray = data['items']['result'];
    })
  }

}
