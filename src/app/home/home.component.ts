import { Component, OnInit, Input, OnDestroy } from "@angular/core";
import { DiffEditorModel } from "ngx-monaco-editor";
import { LoadingService } from "../shared/services/loading.service";
import { ThemeService } from "../shared/services/theme.service";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit, OnDestroy {
  destroy$: Subject<boolean> = new Subject<boolean>();
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
    "yaml",
  ];

  options: any = {
    theme: this.themeService.isDarkTheme ? "vs-dark" : "vs",
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
  constructor(
    private loadingService: LoadingService,
    private themeService: ThemeService
  ) {}

  ngOnInit() {
    this.loadingService.show();
    this.themeService.isDarkTheme$
      .pipe(takeUntil(this.destroy$))
      .subscribe(
        (isDarkTheme: boolean) =>
          (this.options = {...this.options, theme: isDarkTheme ? "vs-dark" : "vs"})
      );
  }
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
  loaded = () => this.loadingService.hide();
  toggleInline = (checked) =>
    (this.options = { ...this.options, renderSideBySide: !checked });
  changeLanguage = (language) => (this.options = { ...this.options, language });

  public compare() {
    this.originalModel = { ...this.originalModel, code: this.originalText };
    this.modifiedModel = { ...this.originalModel, code: this.comparisonText };
  }
}
