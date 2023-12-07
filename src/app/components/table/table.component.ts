import { Component, Input } from '@angular/core';
/**
 * Table component used to represent data in a table view structure
 * 
 * @prop data - an array of elements
 */
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.less']
})
export class TableComponent {
  @Input() data: Array<any> = [];
}
