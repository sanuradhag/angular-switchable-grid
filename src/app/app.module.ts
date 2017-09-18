import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { Md2Module } from 'md2';
import { UiSwitchModule } from 'ngx-ui-switch/src';

import { AppComponent } from './app.component';
import { GridModule } from './grid/grid.module';
import { StyleGuideComponent } from './example/style-guide/style-guide.component';
import { GetStartedComponent } from './example/get-started/get-started.component';
import { ExampleComponent } from './example/example.component';
import { AppRoutes } from './app.routing.module';


@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent,
    GetStartedComponent,
    StyleGuideComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    Md2Module,
    UiSwitchModule,
    GridModule,
    AppRoutes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
