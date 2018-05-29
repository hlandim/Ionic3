import { Component } from '@angular/core';
import { IonicPage, AlertController } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-alert',
  templateUrl: 'alert.html',
})
export class AlertPage {

  constructor(private alerCtrl: AlertController) {
  }

  ionViewDidLoad() {

  }

  abrirBasicAlert() {
    let alert = this.alerCtrl.create(
      {
        title: 'Título',
        subTitle: 'Subtitle',
        message: 'Message',
        buttons: ['Ok']
      }
    );
    alert.present();
  }

  abrirConfirmAlert() {
    let alert = this.alerCtrl.create(
      {
        title: 'Cancelar',
        message: 'Tem certeza que deseja cancelar esta compra?',
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel',
            handler: () => {
              console.log('Compra cancelada');
            }
          },
          {
            text: 'Comprar',
            handler: () => {
              console.log('Compra realizada com sucesso');
            }
          }
        ]
      }
    );
    alert.present();
  }

  abrirInputAlert() {
    this.alerCtrl.create(
      {
        title: 'Alert input',
        message: 'Enter your personal informations',
        inputs: [{
          name: 'fullName',
          placeholder: 'Full Name'
        }],
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel',
            handler: () => {
              console.log('Cancelado');
            }
          },
          {
            text: 'Enviar',
            handler: data => {
              console.log('Informações enviadas: ' + data.fullName);
            }
          }
        ]
      }
    ).present();

  }

  radioAlert() {
    let alert = this.alerCtrl.create();
    alert.setTitle('Escolha uma cor');
    alert.addInput(
      {
        type: 'radio',
        label: 'azul',
        value: 'blue',
        checked: true
      }
    );
    alert.addInput(
      {
        type: 'radio',
        label: 'vermelho',
        value: 'red'
      }
    );
    alert.addInput(
      {
        type: 'radio',
        label: 'verde',
        value: 'green'
      }
    );
    alert.addButton('Cancelar');
    alert.addButton(
      {
        text: 'Ok ',
        handler: (data: any) => {
          console.log('Cor selecionada', data)
        }
      }
    );
    alert.present();
  }

  checkBoxAlert() {
    let alert = this.alerCtrl.create();
    alert.setTitle('Quais frutas você gosta');
    alert.addInput(
      {
        type: 'checkbox',
        label: 'Laranja',
        value: 'orange',
        checked: true
      }
    );
    alert.addInput(
      {
        type: 'checkbox',
        label: 'Maça',
        value: 'apple'
      }
    );
    alert.addInput(
      {
        type: 'checkbox',
        label: 'Banana',
        value: 'banana'
      }
    );

    alert.addButton('Cancelar');

    alert.addButton(
      {
        text: 'Ok',
        handler: (data: any) => {
          console.log('Você selecionou as frutas: ', data);
        }
      }
    );
    alert.present();
  }

}
