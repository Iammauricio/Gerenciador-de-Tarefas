import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , ToastController } from 'ionic-angular';

import {HomePage} from '../home/home';
import {AddtarefaPage} from '../addtarefa/addtarefa';
import {MytarefaPage} from '../mytarefa/mytarefa';

import { Http, Headers, RequestOptions } from '@angular/http';
import { ServiceProvider } from '../../providers/service/service';
import { Usuario } from '../../model/usuario';
// import para a animação loading
import { LoadingController } from 'ionic-angular';
import "rxjs/add/operator/map";



@IonicPage()
@Component({
  selector: 'page-tarefas',
  templateUrl: 'tarefas.html',
})
export class TarefasPage {
 
  public id;
  public obg: any;
  public usuario: Usuario;

  public data:any;

	getEpisodeById(id: number) {
    if (this.data) {
      return Promise.resolve(this.data);
    }
    return new Promise(resolve => {
      this.http
        .get(`http://localhost:3000/usuarios/${id}`)
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
  }
 
 getTarefas(id: number) {
    if (this.data) {
      return Promise.resolve(this.data);
    }
    return new Promise(resolve => {
      this.http
        .get(`http://localhost:3000/tarefa?dono=${id}`)
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
  }
  


  constructor(public navCtrl: NavController,
              public serve : ServiceProvider,
              public navParams: NavParams,
        		  public http: Http,
   	          public toastCtrl: ToastController,
              public loadingCtrl: LoadingController) {
    
      this.id = navParams.get("id");

         this.getTarefas(this.id).then(data => {
             this.obj = data;
              this.result = this.obj;
            }); 

      this.usuario = new Usuario();
      console.log(this.id);
      this.getEpisodeById(this.id).then(data => {
      this.obg = data;
      this.usuario.id = this.obg.id;
      this.usuario.nome = this.obg.nome;
      this.usuario.email = this.obg.email;
      console.log(this.usuario);
	});

  
}

  newtarefa(id:number){
  	console.log(id);
  	this.navCtrl.push('AddtarefaPage', {
      					id:id
      				});
  }

   mytarefa(id:number){
    console.log(id);
    this.navCtrl.push('MytarefaPage', {
                id:id
              });
  }


    sair(){
        let loader = this.loadingCtrl.create({
        content: "Espere por favor...",
        duration: 3000
      });
       
       loader.present();
      
      setTimeout(()=>{
         this.navCtrl.setRoot(HomePage);     
      },3000);
    }

  



      excluir(id,dono){
     console.log(id);
     console.log(id);

      this.http.delete("http://localhost:3000/tarefa/"+id+"")
      .map(res => res.json())
      .subscribe(data => {

        let toast = this.toastCtrl.create({
          message: 'Deletar Com Sucesso',
          duration: 1000
      });
      toast.present();
  this.navCtrl.push("MytarefaPage",{id:dono});       
      
     
    });

}	  
}

