import { test, expect } from "@playwright/test";
import { ClientListPage } from "../../pages/clients/ClientListPage";
import { ensureClientExists } from "../utils/test-data";

test.describe("Gestion des clients - Suppression", () => {
  let clientListPage: ClientListPage;

  test.beforeEach(async ({ page, request }) => {
    await ensureClientExists(request);

    clientListPage = new ClientListPage(page);

    await clientListPage.navigate();
  });

  test("Supprimer un client existant", async ({ page }) => {
    /*
     * Etape 1 :
     * Nombre clients avant suppression
     */

    const clientsAvant = await clientListPage.getClientCount();

    console.log("Nombre clients trouvés :", clientsAvant);

    expect(clientsAvant).toBeGreaterThan(0);

    /*
     * Etape 2 :
     * Cliquer sur supprimer
     */

    await page
      .getByRole("button", {
        name: "Supprimer",
      })
      .first()
      .click();

    /*
     * Etape 3 :
     * Attendre traitement suppression
     */

    await page.waitForTimeout(1000);

    /*
     * Etape 4 :
     * Recharger données
     */

    await page.reload();

    /*
     * Etape 5 :
     * Vérifier diminution
     */

    const clientsApres = await clientListPage.getClientCount();

    console.log("Nombre clients après suppression :", clientsApres);

    expect(clientsApres).toBe(clientsAvant - 1);
  });
});
