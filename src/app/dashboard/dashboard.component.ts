import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

// import { Component, OnInit, Output, EventEmitter } from '@angular/core';
// import { Router } from '@angular/router';
// @Component({
//   selector: 'app-header',
//   templateUrl: './header.component.html',
//   styleUrls: ['./header.component.css']
// })
// export class HeaderComponent implements OnInit {
//   public selectedStock='Select Stock';
//   constructor(private router: Router) { }
//   ngOnInit() {
//   }
//   selectStock(stock){
//     this.selectedStock = stock;
//     console.log(this.selectedStock);
//   }
//   go(){
//     console.log(this.selectedStock);
//     if (this.selectedStock==='Select Stock'){
//       alert('Please select a stock first!');
//     } else {
//       this.router.navigate(['/stockdetail', this.selectedStock]);
//     }
//   }
// }

