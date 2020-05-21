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

  options: any = {
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

  ngOnInit = () => this.loadingService.show();
  loaded = () => this.loadingService.hide();
  toggleInline = (checked) => this.options = {...this.options, renderSideBySide: !checked};

  public compare() {
    this.originalModel = {...this.originalModel, code: this.originalText};
    this.modifiedModel = {...this.originalModel, code: this.comparisonText};
  }
}
