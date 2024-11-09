import { Location } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs';

@Component({
  selector: 'shared-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {

  @Input() title: string = 'Title';

  showMenuButton: boolean = false;

  constructor(
    private router: Router,
    private location: Location,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => {
          let route = this.activatedRoute;
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        }),
        map(route => route.snapshot.data['title'] || 'Título por defecto')
      )
      .subscribe(title => {
        this.title = title;
        this.showMenuButton = this.router.url === '/ciudadano/alerta';
      });
  }

  goBack() {
    this.location.back();
  }


}
