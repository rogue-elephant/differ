import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { LoadingService } from '../services/loading.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
  public showLoader: Subject<boolean>;

  constructor(private loadingService: LoadingService) {
    this.showLoader = this.loadingService.isLoading;
   }

  ngOnInit(): void {
  }

}
