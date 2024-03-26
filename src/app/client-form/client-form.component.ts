import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

//import { BaseUiComponent } from '../_components/base-ui/base-ui.component';
import { ClientService } from '../services/client.service';
import { Client } from '../model/client.interface';


@Component({
  selector: 'app-client-form',
  standalone: true,
  imports: [
   // BaseUiComponent,
    RouterModule,
    ReactiveFormsModule
  ],
  templateUrl: './client-form.component.html',
  styleUrl: './client-form.component.scss'
})
export default class ClientFormComponent implements OnInit {
  private formB = inject(FormBuilder);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private clientService = inject(ClientService);

  form?: FormGroup;
  client?: Client;

  ngOnInit(): void {
   const id = this.route.snapshot.paramMap.get('id');



   if (id) {
   this.clientService.get(id)
     .subscribe(client => {
      this.client = client;
        this.form = this.formB.group({
          name: ['client.name', [Validators.required]],
          email: ['client.email', [Validators.required, Validators.email]],
          cel: ['client.cel', [Validators.required]],
          cpf: ['client.cpf', [Validators.required]],
          registryUser: ['client.registryUser', [Validators.required]],
        });
     })
   } else {
     this.form = this.formB.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required,  Validators.email]],
      cel: ['', [Validators.required]],
      cpf: ['', [Validators.required]],
      registryUser: ['', [Validators.required]],
    });
   }
}

  save() {
    if (this.form?.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const clientForm = this.form!.value;

    if (this.client) {
      this.clientService.update(this.client.id, clientForm)
      .subscribe(() => {
        this.router.navigate(['/']);
    });

    } else {
      this.clientService.create(clientForm)
      .subscribe(() => {
        this.router.navigate(['/']);
      });
    }
  }
}
