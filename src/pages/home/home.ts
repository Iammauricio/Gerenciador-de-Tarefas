import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {CadastroPage} from '../cadastro/cadastro';
import {LoginPage} from '../login/login';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
	  cadastro(){
	  	this.navCtrl.push('CadastroPage');
	  }

	   login(){
	  	this.navCtrl.push('LoginPage');
	  }
}
