import { Component } from '@angular/core';
import { PhoneBookService } from './../../@core/data/phonebook.service'
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'ngx-phonebook',
  template: `<router-outlet></router-outlet>`,
  templateUrl: './phonebook.component.html',
})
export class PhoneBookComponent {

    settings = {
        actions: {            
            add :  false,
            edit :  false,
            delete: false,
        },
        columns: {
          name: {
            title: 'name',
            type: 'string',
            editable: false,
          },          
          phone_number: {
            title: 'phone number',
            type: 'string',
            editable: false,
          },          
          address: {
            title: 'address',
            type: 'string',
            editable: false,
          },          
        },
    };
    public contacts: any[];
    source: LocalDataSource = new LocalDataSource();
    constructor(private phonebookService: PhoneBookService) {
        phonebookService.getContacts().subscribe(d=>{
            this.source.load(d);
        });
    }

}
