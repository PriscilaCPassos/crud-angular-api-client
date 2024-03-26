//import { DatePipe } from '@angular/common';
import { ClientService } from './../services/client.service';
import { Component, inject, OnInit } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { Client } from '../model/client.interface';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-client-list',
  standalone: true,
  imports: [
   // DatePipe,
    RouterModule,
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './client-list.component.html',
  styleUrl: './client-list.component.scss'
})
export default class ClientListComponent implements OnInit {
  private clientService = inject (ClientService);

  clients: Client [] = [];

  ngOnInit(): any {
    this.loadAll();
  }


  loadAll() {
    this.clientService.list()
    .subscribe(clients => {
      this.clients = clients;
    });

  }

  deleteClient(client: Client) {
    this.clientService.delete(client.id)
    .subscribe(() => {
      this.loadAll();
    });
  }

}
