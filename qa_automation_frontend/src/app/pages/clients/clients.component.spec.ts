import { ComponentFixture, TestBed } from '@angular/core/testing';

import { of } from 'rxjs';

import { ClientsComponent } from './clients.component';

import { ClientService } from '../../services/client.service';

describe('ClientsComponent', () => {
  let component: ClientsComponent;

  let fixture: ComponentFixture<ClientsComponent>;

  const clientServiceMock = {
    getClients: () =>
      of([
        {
          id: 1,

          firstName: 'Jean',

          lastName: 'Dupont',

          email: 'jean@test.com',
        },
      ]),

    deleteClient: () => of(void 0),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientsComponent],

      providers: [
        {
          provide: ClientService,

          useValue: clientServiceMock,
        },
      ],
    })

      .compileComponents();

    fixture = TestBed.createComponent(ClientsComponent);

    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load clients on init', () => {
    expect(component.clients.length).toBe(1);

    expect(component.clients[0].firstName).toBe('Jean');
  });
});
