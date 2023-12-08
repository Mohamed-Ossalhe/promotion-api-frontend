import {Component, Input} from '@angular/core';
import {formType} from 'src/app/types/formType';
import {PromotionService} from "../../services/promotion/promotion.service";
import {Router} from "@angular/router";

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

    itemId: number = 0;

    isUpdateFormVisible: boolean = false;

    constructor(private service: PromotionService, private router: Router) {
    }

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
        this.itemId = item.id;
        this.form.formInputs[0].value = item.rate;
        this.form.formInputs[1].value = item.expiry;
        this.isUpdateFormVisible = true;
    }

    closeUpdatePopUp() {
        this.isUpdateFormVisible = false;
    }

    // subitm form
    submitForm(data: any) {
        data.id = this.itemId;
        // TODO: link this function to the service
        this.service.updatePromotion(data).subscribe((data: any) => {
            console.log(data);
            this.closeUpdatePopUp();
            this.router.navigate(['']).then(r => alert('Promotion updated successfully'));
        });


    }
}
