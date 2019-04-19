import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , ToastController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import {HomePage} from '../home/home';
// import para a animação loading
import { LoadingController } from 'ionic-angular';
import "rxjs/add/operator/map";


@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {

	private url:string = "http://localhost:3000/usuarios";

	public usuario = {
		nome: "",  
		email: "",  
		senha:""
	};

  constructor(public navCtrl: NavController,
  			  public navParams: NavParams,
  			  public http: Http,
              public toastCtrl: ToastController,
               public loadingCtrl: LoadingController) {
  }



  cadastro(usuario){
    let headers = new Headers();
    headers.append('Content-type','application/json');

    let options = new RequestOptions({ headers: headers });

    this.http.post(this.url, usuario, options)
            .map(res => res.json())
            .subscribe(data => {
              const toast = this.toastCtrl.create({
                message: 'Usúario cadastrado com Sucesso!',
                 duration: 2000
                
              });

              let loader = this.loadingCtrl.create({
        content: "Espere por favor...",
        duration: 3000
      });
    loader.present();

  
  setTimeout(()=>{toast.present();},4000);
  setTimeout(()=>{this.navCtrl.setRoot(HomePage)},4000);
              
             
            }

            );
    }




}
