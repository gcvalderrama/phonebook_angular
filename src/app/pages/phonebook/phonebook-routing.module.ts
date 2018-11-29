import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhoneBookComponent } from './phonebook.component';

const routes: Routes = [{
  path: '',
  component: PhoneBookComponent  
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PhoneBookRoutingModule { }

export const routedComponents = [
  PhoneBookComponent,  
];
