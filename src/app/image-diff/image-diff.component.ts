import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from "@angular/core";

import * as pixelmatch from "pixelmatch";

@Component({
  selector: "differ-image-diff",
  templateUrl: "./image-diff.component.html",
  styleUrls: ["./image-diff.component.scss"],
})
export class ImageDiffComponent implements OnInit, AfterViewInit {
  @ViewChild("fileSelector1") fileInput1: ElementRef;
  @ViewChild("fileSelector2") fileInput2: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
  }

  compare() {
    const originalImageCanvas = this.convertImageToCanvas("originalImage");
    const comparisonImageCanvas = this.convertImageToCanvas("comparisonImage");

    const originalCtx = originalImageCanvas.getContext("2d");
    const comparisonCtx = comparisonImageCanvas.getContext("2d");

    const originalImageData = originalCtx.getImageData(
      0,
      0,
      originalImageCanvas.width,
      originalImageCanvas.height
    );
    const comparisonImageData = comparisonCtx.getImageData(
      0,
      0,
      originalImageCanvas.width,
      originalImageCanvas.height
    );

    const [height, width] = [originalImageData.height, originalImageData.width];

    const diffImage = new ImageData(width, height);

    pixelmatch(
      originalImageData.data,
      comparisonImageData.data,
      diffImage.data,
      width,
      height,
      { threshold: 0.1 }
    );
    this.drawDiff(diffImage);
  }

  convertImageToCanvas(imageId) {
    const image: any = document.getElementById(imageId);
    const canvas = document.createElement("canvas");
    [canvas.width, canvas.height] = [image.width, image.height];
    canvas.getContext("2d").drawImage(image, 0, 0);
    return canvas;
  }

  drawDiff(diffImage) {
    const canvas = document.createElement("canvas");
    [canvas.width, canvas.height] = [diffImage.width, diffImage.height];
    const ctx = canvas.getContext("2d");
    ctx.putImageData(diffImage, 0, 0);
    const result = document.getElementById("diff-result-canvas-container");
    result.appendChild(ctx.canvas);
  }

  clickFileSelector(id) {
    (id === 1 ? this.fileInput1 : this.fileInput2).nativeElement.click();
  }

  onFileChange(event, imageId) {
    const selectedImage = event.target.files[0];
    const image: any = document.getElementById(imageId);
    image.src = URL.createObjectURL(selectedImage);
  }
}
