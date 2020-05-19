import { Component, OnInit } from '@angular/core';
import { CommonService } from '../api/common.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public common : CommonService) { }

  ngOnInit() {
    
  }

  goToRegister(){
    this.common.go('registro');
  }

  doLogin(){
    this.common.go('home');
  }

}
