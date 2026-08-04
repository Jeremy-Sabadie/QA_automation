import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { ClientService } from '../../services/client.service';
import { Client } from '../../models/client';

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.css',
})
export class ClientsComponent implements OnInit {
  clients: Client[] = [];

  loading = true;

  constructor(
    private readonly clientService: ClientService,
    private readonly router: Router,
  ) {}

  ngOnInit(): void {
    this.loadClients();
  }

  loadClients(): void {
    this.loading = true;

    this.clientService.getClients().subscribe({
      next: (clients) => {
        this.clients = clients;
        this.loading = false;
      },

      error: (error) => {
        console.error('Erreur récupération clients', error);

        this.loading = false;
      },
    });
  }

  addClient(): void {
    this.router.navigate(['/clients/create']);
  }

  editClient(client: Client): void {
    this.router.navigate(['/clients/edit', client.id]);
  }

  deleteClient(id: number): void {
    this.clientService.deleteClient(id).subscribe({
      next: () => {
        this.loadClients();
      },

      error: (error) => {
        console.error('Erreur suppression client', error);
      },
    });
  }
}
