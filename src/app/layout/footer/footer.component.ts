import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  today = new Date();
  myName = 'Gurmukhtiar Singh Toor';
}
