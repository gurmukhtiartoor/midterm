import { Component } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { EmployeeService } from '../../core/employee.service';

@Component({
  selector: 'app-output-page',
  standalone: true,
  imports: [CommonModule, RouterLink, CurrencyPipe],
  templateUrl: './output-page.html',
  styleUrls: ['./output-page.css'],
})
export class OutputPage {
  constructor(public employeeService: EmployeeService) {}
}
