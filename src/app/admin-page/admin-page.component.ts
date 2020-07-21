import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { DataListService } from '../service/data-list.service';
import { SimpleLoadingService } from '../share/service/loading.service';
import { Subscription } from 'rxjs';
import { Table } from 'primeng/table';
import { Item } from '../model/itemModel';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit, OnDestroy {

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
  item: Item;
  displayDialog = false;
  selectedItem: Item;
  newItem: boolean;

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

  onCancelDialog() {
    let index = this.data.indexOf(this.item);
    this.data = this.data.filter((val, i) => i != index);
    this.item = null;
    this.displayDialog = false;
  }

  onSave() {

  }

  onRowSelect(data) {

  }

  showDialogToAdd() {
    this.newItem = true;
    this.item = { value: '', date: null, id: '' };
    this.displayDialog = true;
  }

}
