/**
 * Angular imports
 */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

/**
 * Internal imports
 */
import { AppComponent } from './app.component';
import { GeekometerComponent } from './geekometer/geekometer.component';

@NgModule( {
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule
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
