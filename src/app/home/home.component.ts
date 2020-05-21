import { Component, OnInit, AfterViewInit } from "@angular/core";
import { DiffEditorModel } from "ngx-monaco-editor";
import { LoadingService } from '../shared/services/loading.service';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  originalText: string;
  comparisonText: string;

  options = {
    theme: "vs",
    readOnly: false,
  };
  originalModel: DiffEditorModel = {
    code: " ",
    language: "text/plain",
  };

  modifiedModel: DiffEditorModel = {
    code: " ",
    language: "text/plain",
  };
  constructor(private loadingService: LoadingService) {}

  ngOnInit(): void {
    this.loadingService.show();
  }
  loaded(): void {
    this.loadingService.hide();
  }

  public compare() {
    this.originalModel = {...this.originalModel, code: this.originalText};
    this.modifiedModel = {...this.originalModel, code: this.comparisonText};
  }
}
