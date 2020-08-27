import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InformationService {

  symbol: string;
  imageURL: string;

  constructor(private httpClient: HttpClient) { }

  getDetails(){
    return this.httpClient.get(`https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/get-detail?region=IN&language=en&symbol=${this.symbol}`, {
      headers: new HttpHeaders().set("x-rapidapi-host", "apidojo-yahoo-finance-v1.p.rapidapi.com")
                                .set("x-rapidapi-key", "a51a663139msh74bc349b7ce64d8p1f0078jsn90c991c88d75")
    });
  }

  getNews() {
    return this.httpClient.get(`https://apidojo-yahoo-finance-v1.p.rapidapi.com/news/list?category=generalnews&region=IN&language=en&symbol=${this.symbol}`, {
      headers: new HttpHeaders().set("x-rapidapi-host", "apidojo-yahoo-finance-v1.p.rapidapi.com")
                                .set("x-rapidapi-key", "a51a663139msh74bc349b7ce64d8p1f0078jsn90c991c88d75")
    });
  }

  setVariable(name) {
    this.symbol = name;
    this.imageURL = `../../../assets/${name}.jpg`;
    console.log(name);
  }

  getURL(){
    return this.imageURL;
  }
}
