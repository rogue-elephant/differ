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

  languages = [
    "bat",
    "c",
    "coffeescript",
    "cpp",
    "csharp",
    "csp",
    "css",
    "dockerfile",
    "fsharp",
    "go",
    "handlebars",
    "html",
    "ini",
    "java",
    "javascript",
    "json",
    "less",
    "lua",
    "markdown",
    "msdax",
    "mysql",
    "objective-c",
    "pgsql",
    "php",
    "plaintext",
    "postiats",
    "powershell",
    "pug",
    "python",
    "r",
    "razor",
    "redis",
    "redshift",
    "ruby",
    "rust",
    "sb",
    "scss",
    "sol",
    "sql",
    "st",
    "swift",
    "typescript",
    "vb",
    "xml",
    "yaml"
  ];

  options: any = {
    theme: "vs",
    readOnly: false,
  };
  originalModel: DiffEditorModel = {
    code: " ",
    language: "plaintext",
  };

  modifiedModel: DiffEditorModel = {
    code: " ",
    language: "plaintext",
  };
  constructor(private loadingService: LoadingService) {}

  ngOnInit = () => this.loadingService.show();
  loaded = () => this.loadingService.hide();
  toggleInline = (checked) => this.options = {...this.options, renderSideBySide: !checked};
  changeLanguage = (language) => this.options = {...this.options, language};

  public compare() {
    this.originalModel = {...this.originalModel, code: this.originalText};
    this.modifiedModel = {...this.originalModel, code: this.comparisonText};
  }
}
