import { BrowserModule } from '@angular/platform-browser';
/** para traducir fecha espa;ol */
import { LOCALE_ID, NgModule } from '@angular/core';
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeEs);

/** fin para traducir */
import { AppComponent } from './app.component';
import { RemplazaEspacioPorPisoPipe } from './pipes/remplaza-espacio-por-piso.pipe';
import { DomSeguroPipe } from './pipes/dom-seguro.pipe';
import { OcultaClavePipe } from './pipes/oculta-clave.pipe';

@NgModule({
  declarations: [
    AppComponent,
    RemplazaEspacioPorPisoPipe,
    DomSeguroPipe,
    OcultaClavePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
