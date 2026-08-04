import { APIRequestContext } from "@playwright/test";

export async function ensureClientExists(request: APIRequestContext) {
  const response = await request.get("http://localhost:8080/api/clients");

  const clients = await response.json();

  if (clients.length === 0) {
    await request.post("http://localhost:8080/api/clients", {
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
