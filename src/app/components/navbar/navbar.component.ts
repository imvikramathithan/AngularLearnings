import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

/**
 * @title Toolbar overview
 */
@Component({
  selector: 'app-navbar',
  templateUrl: 'navbar.component.html',
  styleUrl: 'navbar.component.css',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule],
})
export class NavbarComponent {}

