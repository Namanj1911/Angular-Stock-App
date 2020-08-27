import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SummaryService {

  constructor(private httpClient:HttpClient) { }

  getSummary() {
    return this.httpClient.get('https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/get-summary?region=IN&language=en', {
      headers: new HttpHeaders().set("x-rapidapi-host", "apidojo-yahoo-finance-v1.p.rapidapi.com")
                                .set("x-rapidapi-key", "a51a663139msh74bc349b7ce64d8p1f0078jsn90c991c88d75")
    });
  }
}
