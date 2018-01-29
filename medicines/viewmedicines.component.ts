import { Component, OnInit } from '@angular/core';
import { EmployeesService } from "app/medicines/medicineservice.ts";

@Component({
  selector: 'app-employees',
  templateUrl: './viewmedicines.component.html',
  styleUrls: ['./viewmedicines.component.css']
})
export class ViewMedicineComponent implements OnInit {
  employees: any[];

  constructor(private _employeeService: MedicineService) { }

  ngOnInit() {
    this.medicines = this._employeeService.getMedicines();
    console.log(this.medicines);
  }
}
