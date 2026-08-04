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

  /**
   * Chargement des clients
   */
  loadClients(): void {
    this.loading = true;

    this.clientService.getClients().subscribe({
      next: (clients) => {
        this.clients = clients;
        this.loading = false;
      },

      error: (error) => {
        console.error('Erreur chargement clients', error);
        this.loading = false;
      },
    });
  }

  /**
   * Navigation création client
   */
  addClient(): void {
    this.router.navigate(['/clients/new']);
  }

  /**
   * Navigation modification client
   */
  editClient(client: Client): void {
    if (client.id === undefined) {
      console.error('Impossible de modifier un client sans identifiant');
      return;
    }

    this.router.navigate(['/clients/edit', client.id]);
  }

  /**
   * Suppression client
   */
  deleteClient(id: number | undefined): void {
    if (id === undefined) {
      console.error('Impossible de supprimer un client sans identifiant');
      return;
    }

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
