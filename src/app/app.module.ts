import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { RouterModule } from "@angular/router";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatIconModule } from "@angular/material/icon";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from "@angular/material/select";
import { MatButtonModule } from "@angular/material/button";
import { MatRippleModule } from "@angular/material/core";
import {
  MatSnackBarModule,
  MAT_SNACK_BAR_DEFAULT_OPTIONS,
} from "@angular/material/snack-bar";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MonacoEditorModule } from "ngx-monaco-editor";

import { LoaderComponent } from "./shared/loader/loader.component";
import { LoadingService } from "./shared/services/loading.service";
import { ThemeService } from "./shared/services/theme.service";
import { NotificationsService } from "./shared/services/notifications.service";
import { HomeComponent } from "./home/home.component";

@NgModule({
  declarations: [AppComponent, LoaderComponent, HomeComponent],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatRippleModule,
    MatSelectModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MonacoEditorModule.forRoot(),
  ],
  providers: [
    LoadingService,
    NotificationsService,
    ThemeService,
    { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { duration: 4500 } },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
