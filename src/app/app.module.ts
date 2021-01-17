import { BrowserModule } from '@angular/platform-browser';
import { inject, Injector, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { createCustomElement } from '@angular/elements';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  entryComponents: [AppComponent]
})
export class AppModule { 
  constructor(public injector :Injector)
  {}
  ngDoBootstrap()
  {
    const el= createCustomElement(AppComponent,{injector:this.injector})
    customElements.define("app-chatpopup",el)
  }
}
