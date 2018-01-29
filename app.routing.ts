import { Routes, RouterModule } from '@angular/router';

import {AboutComponent} from 'app/about/about.component.ts';
import { MedicinesComponent } from 'app/medicines/viewmedicines.component.css';
//import { EmployeeComponent } from './employees/employee.component';
//import { AddEmployeeFormComponent } from './employees/addemployee-form.component';
//import { EditEmployeeFormComponent } from './employees/editemployee-form.component';

const appRoutes: Routes = [
  { path: '', component: AboutComponent },
  { path: 'medicines', component: MedicinesComponent },

];

export const routing = RouterModule.forRoot(appRoutes);
