import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

export interface SimpleLoadingData {
  loading: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class SimpleLoadingService {
  loading$ = new BehaviorSubject<SimpleLoadingData>(null);

  excuse(loading: boolean) {
    this.loading$.next({
      loading: loading
    });
  }
}
