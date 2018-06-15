import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , ToastController} from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';
import {TarefasPage} from '../tarefas/tarefas';
import { Http } from '@angular/http';
// import para a animação loading
import { LoadingController } from 'ionic-angular';
import "rxjs/add/operator/map";

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {


  	public obj: any;
    public result: any;
	
	public info: Array<{}>;

	public dados = {
	    email: "",  
	   	senha: ""
	};

  constructor(public navCtrl: NavController,
   			  public navParams: NavParams ,
   			   public http: Http,
   			  public ser : ServiceProvider,
   			   public toastCtrl: ToastController,
   			  public loadingCtrl: LoadingController) {
  
  }


		
		 login(dados,info) {

			this.ser.load().then(data => {
	        this.obj = data;
	       	info = this.result = this.obj;
	       			var qnt  =	info.length;  
	       			var name = dados.email;
	       			var pass = dados.senha;
	       	for (var i = 0; i < qnt; i++) {

	       		if(info[i].email == name & info[i].senha == pass){

			              	let loader = this.loadingCtrl.create({
				      content: "Espere por favor...",
				      duration: 3000
				    });
					loader.present();

	       			this.navCtrl.setRoot('TarefasPage', {
      					id: info[i].id
      				});
	       		}
	     	}
	});

 		 }

}

