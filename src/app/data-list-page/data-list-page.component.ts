import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { DataListService } from '../service/data-list.service';
import * as _ from "lodash";
import { Item } from '../model/itemModel';
import { SimpleLoadingService } from '../share/service/loading.service';
import { Table } from 'primeng/table';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-data-list-page',
  templateUrl: './data-list-page.component.html',
  styleUrls: ['./data-list-page.component.scss']
})
export class DataListPageComponent implements OnInit, OnDestroy {

  constructor(
    private dataListService: DataListService,
    private loadingService: SimpleLoadingService
  ) { }

  searchValue = '';
  _data = [];
  data = [];
  loading = true;
  cols = [
    { field: 'id', header: 'Id' },
    { field: 'value', header: 'Value' },
    { field: 'date', header: 'Date' }
  ];
  subscriptions: Subscription[] = [];

  @ViewChild('dataTable') dataTable: Table;

  ngOnInit(): void {
    this.loadingService.excuse(this.loading);

    this.subscriptions.push(this.dataListService.getData().subscribe(x => {
      this.data = x;
      this._data = x;
      this.loading = false;
      this.loadingService.excuse(this.loading)
    })
    );
  }

  onSearch() {
    if (this.searchValue) {
      this.data = this.findInArr(this._data, this.searchValue);
    } else {
      this.data = this._data;
    }
  }

  findInArr(arr: Item[], value: string) {
    const result = arr.filter(x => this.itemMatched(x, value));
    return result;
  }

  itemMatched(item: Item, value) {
    return item.id.toString().includes(value) || item.date.toString().includes(value) || item.value.toString().includes(value);
  }

  exportData() {
    if (this.dataTable) {
      this.dataTable.exportCSV();
    }
  }
  ngOnDestroy() {
    if (this.subscriptions) {
      this.subscriptions.forEach(x => x.unsubscribe());
    }
  }
}
