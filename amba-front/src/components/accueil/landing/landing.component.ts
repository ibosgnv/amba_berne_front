import { Component } from '@angular/core';
import { Navbar } from '../../shared/navbar/navbar.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [Navbar],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css',
})
export class Landing {}
