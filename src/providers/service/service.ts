import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';


@Injectable()
export class ServiceProvider {
 data: any;
  constructor(public http: Http) {
    console.log('Hello ServiceProvider Provider');
  }

 load() {
    if (this.data) {
      return Promise.resolve(this.data);
    }

    return new Promise(resolve => {this.http.get('http://localhost:3000/usuarios').map(res 
    	=> res.json()).subscribe(data 
    	=> {this.data = data;
    		resolve(this.data) ;})
    	;})
    ;}


    getTarefas(id:number) {
    if (this.data) {
      return Promise.resolve(this.data);
    }

    return new Promise(resolve => {this.http.get('http://localhost:3000/tarefa?dono=${id}').map(res 
      => res.json()).subscribe(data 
      => {this.data = data;
        resolve(this.data) ;})
      ;})
    ;}


}
