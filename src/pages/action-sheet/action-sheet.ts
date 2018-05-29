import { Component } from '@angular/core';
import { IonicPage, ActionSheet, ActionSheetController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-action-sheet',
  templateUrl: 'action-sheet.html',
})
export class ActionSheetPage {

  constructor(public actionSheetCtrl: ActionSheetController) {
  }

  ionViewDidLoad() {

  }

  abrirActionSheet() {
    let actionSheet = this.actionSheetCtrl.create(
      {
        title: 'Opções',
        buttons: [
          {
            icon: 'md-create',
            text: 'Opcão A',
            role: 'destructive',
            handler: () => {

            }
          },
          {
            text: 'Opcão B',
            handler: () => {

            }
          },
          {
            icon: 'md-exit',
            text: 'Cancelar',
            role: 'destructive',
            handler: () => {

            }
          }
        ]
      }
    );
    actionSheet.present();
  }

}
