import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GridModule } from './grid/grid.module';
import { Md2Module } from 'md2';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Md2Module,
    GridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
