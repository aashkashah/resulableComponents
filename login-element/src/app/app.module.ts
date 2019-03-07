import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';
import { HelloComponent } from "./components/Hello/hello.component";
import { RadioComponent } from "./components/RadioButton/radio.component";

@NgModule({
  declarations: [AppComponent, HelloComponent, RadioComponent],
  imports: [BrowserModule],
  providers: [],
  entryComponents: [AppComponent, HelloComponent, RadioComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]  // to support custom components inside the module 
})
export class AppModule {
  constructor(private injector: Injector) {
    const el = createCustomElement(AppComponent, { injector });
    customElements.define('login-element', el);

    const e2 = createCustomElement(HelloComponent, { injector});
    customElements.define('hello-element', e2);

    const e3 = createCustomElement(RadioComponent, { injector});
    customElements.define('radio-element', e3);
    
  }
  ngDoBootstrap() {}
 }
