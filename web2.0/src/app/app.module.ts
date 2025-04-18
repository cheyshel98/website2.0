import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { CommonModule } from "@angular/common";
import { BubbleBgComponent } from "./shared/bubble-bg/bubble-bg.component";

@NgModule({
    imports: [
        BrowserModule,
        CommonModule
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {}