import { Component, Input } from '@angular/core';
import { formType } from 'src/app/types/formType';
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

  isUpdateFormVisible: boolean = false;

  public form: formType = {
    method: 'GET',
    formInputs: [
      {
        type: 'number',
        name: 'promotion_percentage',
        id: 'promotion_percentage',
        label: 'percentage',
        value: ''
      },
      {
        type: 'date',
        name: 'promotion_expiration',
        id: 'promotion_expiration',
        label: 'expiration date',
        value: ''
      },
      {
        type: 'submit',
        name: 'submit',
        id: 'submit',
        label: 'add promotion',
        value: ''
      }
    ],
    options: {
      headers: {}
    }
  }

  openUpdatePopUp(item: any) {
    this.form.formInputs[0].value = item?.rate;
    
    this.isUpdateFormVisible = true;
  }

  closeUpdatePopUp() {
    this.isUpdateFormVisible = false;
  }

  // subitm form
  submitForm(data: any) {
    // TODO: link this function to the service
    console.log(data);

  }
}
