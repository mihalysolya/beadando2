import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';
import {AlertComponent} from '../pages/alert/alert.component';
import {TextToSpeechPage} from '../pages/text-to-speech/text-to-speech';
import {ScreenshotPage} from '../pages/screenshot/screenshot';

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    AlertComponent,
    TextToSpeechPage,
    ScreenshotPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    AlertComponent,
    TextToSpeechPage,
    ScreenshotPage
  ],
  providers: []
})
export class AppModule {}
