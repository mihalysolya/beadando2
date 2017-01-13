import { Component} from '@angular/core';
import {AlertController} from 'ionic-angular';

@Component({
    selector: 'alert-component',
    templateUrl: 'alert.component.html'
})
export class AlertComponent {
    constructor(public alertCtrl: AlertController) { }

    ngOnInit() { }

    showAlert(){
        let alert = this.alertCtrl.create({
            title: "Figyelmeztetés!",
            subTitle: "Megy a hűtője? Ha igen, gyorsan menjen utána!",
            buttons: ['Ok']
        })
        alert.present();
    }
}