import { Component } from '@angular/core';
import { TextToSpeech } from 'ionic-native';

/*
  Generated class for the TextToSpeech page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-text-to-speech',
  templateUrl: 'text-to-speech.html'
})
export class TextToSpeechPage {
  textInput: string;
  
  constructor() {
    this.textInput = "Hello bello";
  }

  ionViewDidLoad() {
    console.log('Hello TextToSpeechPage Page');
  }

  speak(){
    TextToSpeech.speak(this.textInput);
  }
}
