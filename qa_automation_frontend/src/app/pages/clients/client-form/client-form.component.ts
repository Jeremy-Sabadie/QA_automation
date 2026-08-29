import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';

import Swal from 'sweetalert2';

import { ClientService } from '../../../services/client.service';
import { Client } from '../../../models/client';

@Component({
  selector: 'app-client-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './client-form.component.html',
  styleUrl: './client-form.component.css',
})
export class ClientFormComponent implements OnInit {
  form!: FormGroup;

  editMode = false;

  clientId!: number;

  showValidation = false;

  constructor(
    private readonly fb: FormBuilder,
    private readonly clientService: ClientService,
    private readonly router: Router,
    private readonly route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      firstName: ['', Validators.required],

      lastName: ['', Validators.required],

      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern(/^[^\s@]+@[^\s@]+\.com$/i),
        ],
      ],

      phone: [''],

      birthDate: [''],

      address: [''],

      postalCode: [''],

      city: [''],
    });

    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.editMode = true;

      this.clientId = Number(id);

      this.loadClient();
    }
  }

  loadClient(): void {
    this.clientService.getClientById(this.clientId).subscribe({
      next: (client) => {
        this.form.patchValue(client);
      },

      error: () => {
        Swal.fire('Erreur', 'Impossible de charger le client', 'error');

        this.router.navigate(['/clients']);
      },
    });
  }

  showRequiredFields(): void {
    if (this.form.invalid) {
      this.showValidation = true;
    }
  }

  save(): void {
    if (this.form.invalid) {
      this.showValidation = true;

      this.form.markAllAsTouched();

      Swal.fire(
        'Formulaire incomplet',
        'Veuillez renseigner correctement les champs obligatoires',
        'warning',
      );

      return;
    }

    const client: Client = this.form.value;

    if (this.editMode) {
      this.confirmUpdate(client);
    } else {
      this.create(client);
    }
  }

  create(client: Client): void {
    this.clientService.createClient(client).subscribe({
      next: () => {
        Swal.fire('Succès', 'Client ajouté', 'success');

        this.router.navigate(['/clients']);
      },

      error: (err) => {
        console.error(err);

        Swal.fire('Erreur', 'Création impossible', 'error');
      },
    });
  }

  confirmUpdate(client: Client): void {
    Swal.fire({
      title: 'Modifier ce client ?',

      icon: 'question',

      showCancelButton: true,

      confirmButtonText: 'Oui',

      cancelButtonText: 'Annuler',
    }).then((result) => {
      if (result.isConfirmed) {
        this.update(client);
      }
    });
  }

  update(client: Client): void {
    this.clientService.updateClient(this.clientId, client).subscribe({
      next: () => {
        Swal.fire('Succès', 'Client modifié', 'success');

        this.router.navigate(['/clients']);
      },

      error: (err) => {
        console.error(err);

        Swal.fire('Erreur', 'Modification impossible', 'error');
      },
    });
  }

  cancel(): void {
    this.router.navigate(['/clients']);
  }
}
