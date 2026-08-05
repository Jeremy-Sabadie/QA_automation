import { expect, test } from "@playwright/test";

import { ClientListPage } from "../../pages/clients/ClientListPage";
import { ensureClientExists } from "../utils/test-data";

test.describe("Gestion des clients - Modification", () => {
  let clientListPage: ClientListPage;

  test.beforeEach(async ({ page, request }) => {
    await ensureClientExists(request);

    clientListPage = new ClientListPage(page);

    await clientListPage.navigate();

    await expect(clientListPage.clientTable).toBeVisible();
  });

  test("Modifier un client existant", async ({ page }) => {
    const row = clientListPage.clientRows.first();

    await expect(row).toBeVisible();

    await row
      .getByRole("button", {
        name: /modifier/i,
      })
      .click();

    await page.waitForURL("**/clients/edit/**");

    const firstNameInput = page.locator('input[formControlName="firstName"]');

    await expect(firstNameInput).toBeVisible();

    await firstNameInput.fill("JeanModifie");

    await page
      .getByRole("button", {
        name: /enregistrer/i,
      })
      .click();

    const confirmButton = page.getByRole("button", {
      name: /oui|confirmer/i,
    });

    if (await confirmButton.isVisible().catch(() => false)) {
      await confirmButton.click();
    }

    await page.waitForURL("**/clients", {
      timeout: 10_000,
    });

    await page.reload();

    await expect(page.getByText("JeanModifie")).toBeVisible({
      timeout: 10_000,
    });
  });
});
