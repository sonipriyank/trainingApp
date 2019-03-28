import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { CalcComponent } from './calc/calc.component';
import { Calc1Component } from './calc1/calc1.component';
import { TodoComponent } from './todo/todo.component';
import { ProductComponent } from './product/product.component';
import { FilterPipe } from './filter.pipe';
import { DemodirectiveDirective } from './demodirective.directive';
import { HighliterDirective } from './highliter.directive';
import { CreditcardDirective } from './creditcard.directive';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    CalcComponent,
    Calc1Component,
    TodoComponent,
    ProductComponent,
    FilterPipe,
    DemodirectiveDirective,
    HighliterDirective,
    CreditcardDirective,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
