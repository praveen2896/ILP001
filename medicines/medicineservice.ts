import { Injectable} from '@angular/core';
import { Init } from "./initial-medicines";

@Injectable()
export class MedicineService extends Init {
  constructor() {
    super();
    console.log("Initializing medicines service ...");
    this.load();
  }

  getMedicineCount() {
    let medicines = JSON.parse(localStorage.getItem('medicines));
    return medicines.length;
  }

  getMedicines() {
    let medicines = JSON.parse(localStorage.getItem('medicines'));
    return medicines;
  }
}
