import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private router: Router) { }

  DEV_API: string = 'https://dev.echo.com/';
  PROD_API: string = 'https://echo.com';

  go(route:string) {
    this.router.navigateByUrl(route);
  }

  testMe(){
    console.log("pruebame");
  }

}