import { Component, OnInit, OnDestroy, AfterViewInit, ChangeDetectorRef, AfterViewChecked } from '@angular/core';
import { SimpleLoadingService } from './share/service/loading.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy, AfterViewInit, AfterViewChecked {

  subscription: Subscription;
  title = 'FINALWED';
  loading = false;

  constructor(
    private simpleLoadingService: SimpleLoadingService,
    private cdr: ChangeDetectorRef
  ) {
  }
  ngAfterViewChecked(): void {
    this.cdr.detectChanges();
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  ngAfterViewInit() {
    this.subscription = this.simpleLoadingService.loading$.subscribe((x) => {
      if (!!x) {
        this.loading = x.loading;
      }
    });
  }
}
