import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../../core/employee.service';
import { EmploymentTerm } from '../../core/employee.model';

@Component({
  selector: 'app-input-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './input-page.html',
  styleUrls: ['./input-page.css'],
})
export class InputPage {
  terms = [
    { value: 'FULL_TIME' as EmploymentTerm, label: 'Full Time' },
    { value: 'PART_TIME' as EmploymentTerm, label: 'Part Time' },
    { value: 'CONTRACT'  as EmploymentTerm, label: 'Contract'  },
  ];

  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private employeeService: EmployeeService,
    private router: Router
  ) {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      salary: [null as number | null, [Validators.required, Validators.min(0)]],
      term: [null as EmploymentTerm | null, [Validators.required]],
    });
  }

  onSubmit(): void {
    if (this.form.invalid) return;
    const { name, salary, term } = this.form.value;
    this.employeeService.setEmployee({
      name: String(name),
      salary: Number(salary),
      term: term as EmploymentTerm,
    });
    this.router.navigate(['/output']);
  }
}
