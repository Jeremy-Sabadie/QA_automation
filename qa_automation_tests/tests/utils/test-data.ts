import { APIRequestContext, expect } from "@playwright/test";
import { config } from "../config/environment";

const CLIENT_API = `${config.backendUrl}/api/clients`;

export async function ensureClientExists(
  request: APIRequestContext,
): Promise<void> {
  const getResponse = await request.get(CLIENT_API);

  expect(
    getResponse.ok(),
    `Impossible de récupérer les clients : ${getResponse.status()} ${await getResponse.text()}`,
  ).toBeTruthy();

  const clients = await getResponse.json();

  if (!Array.isArray(clients)) {
    throw new Error(
      `La réponse de ${CLIENT_API} n'est pas un tableau : ${JSON.stringify(clients)}`,
    );
  }

  if (clients.length > 0) {
    return;
  }

  const createResponse = await request.post(CLIENT_API, {
    data: {
      firstName: "Jean",
      lastName: "Test",
      email: `jean.test.${Date.now()}@test.com`,
      phone: "0600000000",
      birthDate: "1990-01-01",
      address: "1 rue Test",
      postalCode: "33000",
      city: "Bordeaux",
    },
  });

  expect(
    createResponse.ok(),
    `Impossible de créer le client : ${createResponse.status()} ${await createResponse.text()}`,
  ).toBeTruthy();

  const verificationResponse = await request.get(CLIENT_API);

  expect(
    verificationResponse.ok(),
    `Impossible de vérifier la création : ${verificationResponse.status()} ${await verificationResponse.text()}`,
  ).toBeTruthy();

  const clientsAfterCreation = await verificationResponse.json();

  expect(
    clientsAfterCreation.length,
    "Le client a été créé par l'API mais la liste reste vide",
  ).toBeGreaterThan(0);
}
