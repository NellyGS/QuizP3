import { Component } from '@angular/core';
import {AlertController, NavController, NavParams} from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { RegistroPage } from '../registro/registro';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  registro = RegistroPage;
  usuarios = [];
  usuario = "";

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public storage: Storage, public NavParams: NavParams ) {
    
  }
 
clickRegistro(){
  this.NavParams.get ('usuarios')
  this.navCtrl.push (this.registro, { usuarios: this.usuarios})
}

clickEntrar() {
  if (usuarioC2 == usuarioC){
    console.log('felicidades');
      const alert = this.alertCtrl.create({
        title: 'excelente',
        subTitle: 'Has entrado ',
        buttons: ['OK']
      });
      alert.present();

  }
}
}
