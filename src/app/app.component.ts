import { Component } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./_components/navbar/navbar.component";
import { BaseUiComponent } from "./_components/base-ui/base-ui.component";
import { FooterComponent } from "./_components/footer/footer.component";
import { HomeComponent } from './_components/home/home.component';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [
      RouterOutlet,
      HomeComponent,
      NavbarComponent,
      BaseUiComponent,
      FooterComponent,
      CommonModule,
      RouterModule,
      RouterLink,
    ]
})
export class AppComponent {
  title = 'crud-client';
}
