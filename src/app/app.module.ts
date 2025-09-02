import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { TrainListComponent } from './components/train-list/train-list.component';
import { TrainDetailsComponent } from './components/train-details/train-details.component';

@NgModule({ declarations: [
        AppComponent,
        TrainListComponent,
        TrainDetailsComponent
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class AppModule { }

