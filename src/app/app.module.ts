import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ApplicationComponent } from './application/application.component';
import { ShortcutComponent } from './shortcut/shortcut.component';

@NgModule({
    declarations: [
        AppComponent,
        ShortcutComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        ApplicationComponent
    ]
})
export class AppModule { }
