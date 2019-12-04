import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { GridModule } from './grid';
import { StyleGuideComponent } from './example/style-guide/style-guide.component';
import { GetStartedComponent } from './example/get-started/get-started.component';
import { ExampleComponent } from './example/example.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderPanelComponent } from './shared/header-panel/header-panel.component';
import { FooterPanelComponent } from './shared/footer-panel/footer-panel.component';

import { Md2Module } from 'angular-md2';
import { UiSwitchModule } from 'ngx-ui-switch';

@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent,
    GetStartedComponent,
    StyleGuideComponent,
    HeaderPanelComponent,
    FooterPanelComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    Md2Module,
    UiSwitchModule,
    GridModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
