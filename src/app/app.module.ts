import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { ComponentModule } from '../components/module';

@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    ComponentModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
})
export class AppModule {}
