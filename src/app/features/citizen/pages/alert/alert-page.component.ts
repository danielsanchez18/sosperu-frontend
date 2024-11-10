import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'citizen-alert-page',
  templateUrl: './alert-page.component.html',
})
export class CitizenAlertPageComponent implements OnChanges {

  selectedOption: string = '';

  constructor(private router: Router) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedOption'] && this.selectedOption === 'buscar') {
      this.navigateToSearch();
    }
  }

  onSelectChange(): void {
    if (this.selectedOption === 'buscar') {
      this.navigateToSearch();
    }
  }

  private navigateToSearch(): void {
    this.router.navigate(['/ruta-de-buscar']); // Cambia '/ruta-de-buscar' a la ruta que desees
  }

}
