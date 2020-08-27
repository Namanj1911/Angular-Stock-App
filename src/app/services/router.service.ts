import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouterService {

  constructor(private router: Router) { }

  routeToDashboard(): any{
    return this.router.navigate(['/dashboard']);
  }

  routeToSearchStock(): any{
    this.router.navigate(['/contentView']);
  }
}
