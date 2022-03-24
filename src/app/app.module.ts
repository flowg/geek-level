/**
 * Angular imports
 */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/**
 * Internal imports
 */
import { AppComponent } from './app.component';
import { GeekometerComponent } from './geekometer/geekometer.component';

@NgModule( {
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  declarations: [
    AppComponent,
    GeekometerComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
} )
export class AppModule {
}
