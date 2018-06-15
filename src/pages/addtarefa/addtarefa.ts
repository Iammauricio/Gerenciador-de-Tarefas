import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , ToastController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import {TarefasPage} from '../tarefas/tarefas';
import { Usuario } from '../../model/usuario';
import "rxjs/add/operator/map";


@IonicPage()
@Component({
  selector: 'page-addtarefa',
  templateUrl: 'addtarefa.html',
})
export class AddtarefaPage {
  
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


	private url:string = "http://localhost:3000/tarefa";

	public tarefa = {
    dono : "",
		titulo: "",  
		data: "",
		texto:""
	};

  constructor(public navCtrl: NavController,
  			  public navParams: NavParams,
  			  public http: Http,
           public toastCtrl: ToastController) {

    

      this.id = navParams.get("id");
      this.usuario = new Usuario();
      this.getEpisodeById(this.id).then(data => {
      this.obg = data;
      this.usuario.id = this.obg.id;
      this.usuario.nome = this.obg.nome;
      this.usuario.email = this.obg.email;
     
  });


    
  }

  cad_tarefa(tarefa){
    
   
    let headers = new Headers();
    headers.append('Content-type','application/json');

    let options = new RequestOptions({ headers: headers });

    this.http.post(this.url, tarefa, options)
            .map(res => res.json())
            .subscribe(data => {

              const toast = this.toastCtrl.create({
                message: 'Tarefa cadastrada com Sucesso!',
               duration : 2000
              });
              toast.present();

              this.navCtrl.setRoot('TarefasPage',{id : tarefa.dono});
            });
    }

  
}
