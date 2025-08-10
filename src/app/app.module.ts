import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { TrainListComponent } from './components/train-list/train-list.component';
import { TrainDetailsComponent } from './components/train-details/train-details.component';

@NgModule({
    declarations: [
        AppComponent,
        TrainListComponent,
        TrainDetailsComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }

