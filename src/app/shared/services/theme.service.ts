import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ThemeService {
  public isDarkTheme$: Subject<boolean> = new Subject<boolean>();
  public isDarkTheme = false;

  constructor() {
    const savedTheme = localStorage.getItem("differ-theme-index");
    if (savedTheme) {
      if (Number.parseInt(savedTheme) === 1) this.toggleTheme();
    }
    this.isDarkTheme$.next(this.isDarkTheme);
  }

  public toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    this.isDarkTheme$.next(this.isDarkTheme);
    const [themeIndex, backgroundColor, fontColor] = this.isDarkTheme
      ? [1, "#303030", "#fff"]
      : [0, "#fafafa", "#000"];

    document.documentElement.style.setProperty(
      "--background-color",
      backgroundColor
    );
    document.documentElement.style.setProperty("--font-color", fontColor);

    localStorage.setItem("differ-theme-index", themeIndex.toString());
  }
}
