import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { StorageServiceModule } from "ngx-webstorage-service";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ValueInputComponent } from './value-input/value-input.component';
import { RollValuesComponent } from './roll-values/roll-values.component';
import { RollingComponent } from './rolling/rolling.component';
import { DieComponent } from './die/die.component';
import { SavedRollsComponent } from './saved-rolls/saved-rolls.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    ValueInputComponent,
    RollValuesComponent,
    RollingComponent,
    DieComponent,
    SavedRollsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StorageServiceModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
