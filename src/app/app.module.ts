import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ClarityModule, ClrInputModule } from '@clr/angular';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MonacoEditorModule, MONACO_PATH } from '@materia-ui/ngx-monaco-editor';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ClarityModule,
    FormsModule,
    MonacoEditorModule
  ],
  providers: [{
    provide: MONACO_PATH,
    useValue: 'https://unpkg.com/monaco-editor@0.33.0/min/vs'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
