import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , ToastController } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';
import {TarefasPage} from '../tarefas/tarefas';
import { Http, Headers, RequestOptions } from '@angular/http';
import "rxjs/add/operator/map";
@IonicPage()
@Component({
  selector: 'page-mytarefa',
  templateUrl: 'mytarefa.html',
})
export class MytarefaPage {



  constructor(public navCtrl: NavController,
              public serve : ServiceProvider,
              public navParams: NavParams,
        	  public http: Http,
   	          public toastCtrl: ToastController) {
  			

  			
  			 setTimeout(()=>{this.navCtrl.setRoot("TarefasPage",{ id:navParams.get("id") })},0);


			}

}