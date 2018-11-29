import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { PhoneBookService } from './../../@core/data/phonebook.service'
import { ThemeModule } from '../../@theme/theme.module';
import { PhoneBookRoutingModule, routedComponents } from './phonebook-routing.module';

@NgModule({
  imports: [
    ThemeModule,    
    PhoneBookRoutingModule,
    Ng2SmartTableModule,
  ],
  declarations: [
    ...routedComponents,
  ],
  providers: [    
    PhoneBookService,
  ],
})
export class PhoneBookModule { }
