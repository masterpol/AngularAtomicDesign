import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './components/Atoms/button/button.component';
import { LabelComponent } from './components/Atoms/label/label.component';
import { InputComponent } from './components/Atoms/input/input.component';
import { FormComponent } from './components/Atoms/form/form.component';
import { SimpleFormComponent } from './components/molecules/simple-form/simple-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    LabelComponent,
    InputComponent,
    FormComponent,
    SimpleFormComponent
  ],
  exports: [
    ButtonComponent,
    LabelComponent,
    InputComponent,
    FormComponent,
    SimpleFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
