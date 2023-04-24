import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PantallaExamenComponent } from './pages/pantalla-examen/pantalla-examen.component';

@NgModule({
  declarations: [
    AppComponent,
    PantallaExamenComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
