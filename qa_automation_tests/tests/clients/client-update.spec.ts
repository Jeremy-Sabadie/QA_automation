import { test, expect } from "@playwright/test";

import { ClientListPage } from "../../pages/clients/ClientListPage";

test.describe("Gestion des clients - Modification", () => {
  let clientListPage: ClientListPage;

  test.beforeEach(async ({ page }) => {
    clientListPage = new ClientListPage(page);

    await clientListPage.navigate();

    await expect(clientListPage.clientTable).toBeVisible();
  });

  test("Modifier un client existant", async ({ page }) => {
    const row = page.locator("tbody tr").first();

    await expect(row).toBeVisible();

    await row
      .getByRole("button", {
        name: /Modifier/i,
      })
      .click();

    await page.waitForURL("**/clients/edit/**");

    const firstNameInput = page.locator('input[formControlName="firstName"]');

    await expect(firstNameInput).toBeVisible();

    await firstNameInput.fill("JeanModifie");

    await page
      .getByRole("button", {
        name: /Enregistrer/i,
      })
      .click();

    const confirmButton = page.getByRole("button", {
      name: /Oui|Confirmer/i,
    });

    if (await confirmButton.isVisible().catch(() => false)) {
      await confirmButton.click();
    }

    await page.waitForURL("**/clients", {
      timeout: 10000,
    });

    await page.reload();

    await expect(page.getByText("JeanModifie")).toBeVisible({
      timeout: 10000,
    });
  });
});
