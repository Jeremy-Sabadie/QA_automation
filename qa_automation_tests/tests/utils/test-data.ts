import { APIRequestContext } from "@playwright/test";
import { config } from "../config/environment";

const CLIENT_API = `${config.backendUrl}/api/clients`;

export async function ensureClientExists(request: APIRequestContext) {
  const response = await request.get(CLIENT_API);

  const clients = await response.json();

  if (clients.length === 0) {
    await request.post(CLIENT_API, {
      data: {
        firstName: "Jean",
        lastName: "Test",
        email: "jean.test@test.com",
        phone: "0600000000",
        address: "1 rue Test",
        postalCode: "33000",
        city: "Bordeaux",
      },
    });
  }
}
