import { Page, Locator } from "@playwright/test";

export class ClientListPage {
  readonly page: Page;

  readonly addClientButton: Locator;
  readonly clientsTable: Locator;
  readonly clientRows: Locator;

  constructor(page: Page) {
    this.page = page;

    this.addClientButton = page.getByRole("button", {
      name: /ajouter client/i,
    });

    this.clientsTable = page.locator("table");

    this.clientRows = page.locator("tbody tr");
  }

  /**
   * Navigation vers la page clients
   */
  async navigate(): Promise<void> {
    await this.page.goto("/clients", {
      waitUntil: "domcontentloaded",
    });
  }

  /**
   * Vérifie que la page est chargée
   */
  async isLoaded(): Promise<boolean> {
    return await this.clientsTable.isVisible();
  }

  /**
   * Retourne le nombre de clients affichés
   */
  async getClientCount(): Promise<number> {
    return await this.clientRows.count();
  }

  /**
   * Vérifie la présence du bouton ajout client
   */
  async isAddClientButtonVisible(): Promise<boolean> {
    return await this.addClientButton.isVisible();
  }
}
