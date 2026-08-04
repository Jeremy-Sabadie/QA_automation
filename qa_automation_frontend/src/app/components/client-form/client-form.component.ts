import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { Router, ActivatedRoute } from '@angular/router';

import Swal from 'sweetalert2';

import { ClientService } from '../../services/client.service';
import { Client } from '../../models/client';

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

  clientId?: number;

  constructor(
    private fb: FormBuilder,

    private service: ClientService,

    private router: Router,

    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      firstName: ['', Validators.required],

      lastName: ['', Validators.required],

      email: ['', [Validators.required, Validators.email]],

      phone: [''],

      birthDate: [''],

      address: [''],

      postalCode: [''],

      city: [''],
    });

    this.clientId = Number(this.route.snapshot.paramMap.get('id'));

    if (this.clientId) {
      this.editMode = true;

      /*
       * Chargement du client existant
       * pour remplir le formulaire
       */

      this.service
        .getClientById(this.clientId)

        .subscribe((client) => {
          this.form.patchValue(client);
        });
    }
  }

  save() {
    if (this.form.invalid) {
      return;
    }

    const client: Client = this.form.value;

    if (this.editMode) {
      Swal.fire({
        title: 'Confirmer modification ?',

        icon: 'question',

        showCancelButton: true,

        confirmButtonText: 'Oui',

        cancelButtonText: 'Annuler',
      })

        .then((result) => {
          if (result.isConfirmed) {
            this.update(client);
          }
        });
    } else {
      this.create(client);
    }
  }

  create(client: Client) {
    this.service

      .createClient(client)

      .subscribe(() => {
        Swal.fire(
          'Créé',

          'Client ajouté',

          'success',
        );

        this.router.navigate(['/clients']);
      });
  }

  update(client: Client) {
    this.service

      .updateClient(this.clientId!, client)

      .subscribe(() => {
        Swal.fire(
          'Modifié',

          'Client mis à jour',

          'success',
        );

        /*
         * Retour liste clients
         * avec rafraîchissement Angular
         */

        this.router.navigate(['/clients']).then(() => {
          window.location.reload();
        });
      });
  }

  cancel() {
    this.router.navigate(['/clients']);
  }
}
