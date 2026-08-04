import { test, expect } from "@playwright/test";
import { ClientListPage } from "../../pages/clients/ClientListPage";
import { ensureClientExists } from "../utils/test-data";

test.describe("Gestion des clients - Liste", () => {
  let clientListPage: ClientListPage;

  test.beforeEach(async ({ page, request }) => {
    await ensureClientExists(request);

    clientListPage = new ClientListPage(page);

    await clientListPage.navigate();
  });

  test("Afficher la page de gestion des clients", async () => {
    await expect(clientListPage.pageTitle).toBeVisible();
  });

  test("Afficher le tableau des clients", async () => {
    await expect(clientListPage.clientTable).toBeVisible();
  });

  test("Afficher au moins un client dans la liste", async () => {
    const clientCount = await clientListPage.getClientCount();

    console.log("Nombre clients trouvés :", clientCount);

    expect(clientCount).toBeGreaterThan(0);
  });

  test("Le bouton ajouter client est visible", async () => {
    await expect(clientListPage.addClientButton).toBeVisible();
  });
});
