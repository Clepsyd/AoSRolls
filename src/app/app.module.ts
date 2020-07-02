import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ValueInputComponent } from './value-input/value-input.component';
import { RollValuesComponent } from './roll-values/roll-values.component';
import { RollingComponent } from './rolling/rolling.component';

@NgModule({
  declarations: [
    AppComponent,
    ValueInputComponent,
    RollValuesComponent,
    RollingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
