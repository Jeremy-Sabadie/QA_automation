import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { ClientService } from './client.service';
import { Client } from '../models/client';

describe('ClientService', () => {
  let service: ClientService;

  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });

    service = TestBed.inject(ClientService);

    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all clients', () => {
    const mockClients: Client[] = [
      {
        id: 1,
        firstName: 'Jean',
        lastName: 'Dupont',
        email: 'jean@test.com',
      },
    ];

    service.getClients().subscribe((clients) => {
      expect(clients.length).toBe(1);

      expect(clients[0].firstName).toBe('Jean');
    });

    const request = httpMock.expectOne('http://localhost:8080/api/clients');

    expect(request.request.method).toBe('GET');

    request.flush(mockClients);
  });

  it('should delete a client', () => {
    service.deleteClient(1).subscribe();

    const request = httpMock.expectOne('http://localhost:8080/api/clients/1');

    expect(request.request.method).toBe('DELETE');

    request.flush(null);
  });
});
