import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-kpicard',
  templateUrl: './kpicard.component.html',
  styleUrls: ['./kpicard.component.less']
})
export class KPICardComponent {

  @Input() data: Array<any> = [];
  public _title: string = "";
  public _percentage: string = "";
  public _icon: string = "";
  public _color: string = "";
}
