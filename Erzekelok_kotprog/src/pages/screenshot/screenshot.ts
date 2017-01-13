import { Component } from '@angular/core';
import { Screenshot} from 'ionic-native';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-screenshot',
  templateUrl: 'screenshot.html'
})

export class ScreenshotPage  {

photodb;
photoQuality = "";
photoAvg ;
photoMax;

    constructor(public navCtrl: NavController) { 
      this.photodb = 0;
      this.photoQuality = "";
      this.photoAvg = 0;
      this.photoMax=10;
    }

    ionViewDidLoad() {
    console.log('Hello Screenshot Page');
  }

    screenshot(){
         Screenshot.save('jpg', 80, 'myscreenshot.jpg');
         //var avg=0;
         //this.photoQuality =  Screenshot.URI(80);
         this.photodb = this.photodb + 1; 
         if(this.photodb == 10){
          this.photoAvg  = this. photodb /this.photoMax;
          this.photodb = 0;
         }
    }

    delete(){
        this.photodb = 0; 
        this.photoAvg = 0 ;
    }

 
}