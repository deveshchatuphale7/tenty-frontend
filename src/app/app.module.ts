import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { HttpClientModule } from '@angular/common/http';
import { NbThemeModule } from '@nebular/theme';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { NbUserModule,NbDialogModule,NbToastrModule,NbActionsModule,NbSidebarModule,NbAccordionModule,NbProgressBarModule,NbTooltipModule,NbRadioModule,NbButtonModule,NbContextMenuModule,NbCheckboxModule,NbStepperModule,NbMenuModule,NbLayoutModule,NbPopoverModule,NbSelectModule,NbWindowModule,NbCardModule,NbListModule,NbInputModule,NbTabsetModule } from '@nebular/theme';

import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule,
    NbThemeModule,
    HttpClientModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbSidebarModule.forRoot(),
    NbToastrModule.forRoot(),
    NbUserModule,
    NbWindowModule.forRoot(),
    NbCardModule,
    NbListModule,
    NbSelectModule,
    NbCheckboxModule,
    NbContextMenuModule,
    NbTooltipModule,
    NbMenuModule.forRoot(),
    NbPopoverModule,
    NbButtonModule,
    NbInputModule,
    NbDialogModule.forRoot(),
    NbStepperModule,
    NbRadioModule,
    NbAccordionModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
