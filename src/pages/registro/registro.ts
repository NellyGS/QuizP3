import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import {HomePage} from '../home/home';
/**
 * Generated class for the RegistroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {
  home = HomePage;
  usuarios = [];
  usuarioC = "";
  usuarioP = "";

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController,) {
  this.usuarioC = this.navParams.get ('usuarioC')
  this.usuarioP = this.navParams.get ( 'usuarioP')
  }

  clickAgregar(){

    let index = this.usuarios.findIndex (usuario => usuario.correo == this.usuarioC && usuario.cont == this.usuarioP);


    if ((this.usuarioC.length > 0) && (this.usuarioP.length >8 )){
      this.usuarios.push({
        correo: this.usuarioC,
        contraseña: this.usuarioP,
      });

      this.navCtrl.push(this.home,this.usuarios);
    }
    else {
      console.log ('Oye te falta un parametro')
      const alert = this.alertCtrl.create({
        title: 'Jeje',
        subTitle: 'Checa otra vez la contraseña',
        buttons: ['OK']
      });
      alert.present ();
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroPage');
  }

}
