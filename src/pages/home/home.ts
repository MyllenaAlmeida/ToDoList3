import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public task :any;
  public tasks: Array <String> = [
    "Myllena tá manjando"
  ];

  constructor(public navCtrl: NavController, public alertCtrl : AlertController) {
  }

  callAlert(){
    let prompt = this.alertCtrl.create({
      title:'Add a new task',
      inputs: [
        { name:'task',
          type: 'text',
          placeholder:'Add task'
        },
      ],
      buttons: [
        {
          text:'Add',   
          handler : data => {
            console.log('FOOOI'),
            this.addTask()
          }
        },
      ]
    });
    prompt.present();
  }

  addTask() {
    this.tasks.push(this.task);
    this.task="";
  }

  viewTask() {

  }
}
