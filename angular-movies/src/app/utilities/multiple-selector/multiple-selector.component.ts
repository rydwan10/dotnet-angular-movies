import { Component, Input, OnInit } from '@angular/core';
import { multipleSelectorModel } from './multiple-selector.model';

@Component({
  selector: 'app-multiple-selector',
  templateUrl: './multiple-selector.component.html',
  styleUrls: ['./multiple-selector.component.css'],
})
export class MultipleSelectorComponent implements OnInit {
  @Input()
  selectedItems: multipleSelectorModel[] = [];

  @Input()
  nonSelectedItems: multipleSelectorModel[] = [];

  constructor() {}

  ngOnInit(): void {}

  selectAll() {
    this.selectedItems.push(...this.nonSelectedItems);
    this.nonSelectedItems = [];
  }

  deselectAll() {
    this.nonSelectedItems.push(...this.selectedItems);
    this.selectedItems = [];
  }

  select(item: multipleSelectorModel, index: number) {
    this.selectedItems.push(item);
    this.nonSelectedItems.splice(index, 1);
  }

  deselect(item: multipleSelectorModel, index: number) {
    this.nonSelectedItems.push(item);
    this.selectedItems.splice(index, 1);
  }
}
