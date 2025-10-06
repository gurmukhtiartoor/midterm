import { Injectable } from '@angular/core';
import { Employee, EmploymentTerm, TERM_LABELS } from './employee.model';

@Injectable({ providedIn: 'root' })
export class EmployeeService {
  employee: Employee | null = null;

  setEmployee(emp: Employee): void {
    this.employee = {
      name: emp.name.trim(),
      salary: Number(emp.salary),
      term: emp.term,
    };
  }

  reset(): void {
    this.employee = null;
  }

  termLabel(term: EmploymentTerm): string {
    return TERM_LABELS[term];
  }
}
