import { Locator, Page } from "@playwright/test";

export class ClientListPage {
  readonly page: Page;

  readonly pageTitle: Locator;
  readonly addClientButton: Locator;
  readonly clientTable: Locator;
  readonly clientsTable: Locator;
  readonly clientRows: Locator;

  constructor(page: Page) {
    this.page = page;

    this.pageTitle = page.getByRole("heading", {
      name: /gestion des clients|clients/i,
    });

    this.addClientButton = page.getByRole("button", {
      name: /ajouter client/i,
    });

    this.clientTable = page.locator("table");

    // Alias conservé pour compatibilité avec d'anciens tests.
    this.clientsTable = this.clientTable;

    this.clientRows = this.clientTable.locator("tbody tr");
  }

  /**
   * Navigue vers la page de gestion des clients.
   */
  async navigate(): Promise<void> {
    await this.page.goto("/clients", {
      waitUntil: "domcontentloaded",
    });

    await this.clientTable.waitFor({
      state: "visible",
      timeout: 10_000,
    });
  }

  /**
   * Vérifie que la page clients est chargée.
   */
  async isLoaded(): Promise<boolean> {
    return this.clientTable.isVisible();
  }

  /**
   * Retourne le nombre de clients affichés dans le tableau.
   */
  async getClientCount(): Promise<number> {
    return this.clientRows.count();
  }

  /**
   * Vérifie que le bouton d'ajout d'un client est visible.
   */
  async isAddClientButtonVisible(): Promise<boolean> {
    return this.addClientButton.isVisible();
  }

  /**
   * Ouvre le formulaire de création d'un client.
   */
  async clickAddClient(): Promise<void> {
    await this.addClientButton.click();

    await this.page.waitForURL("**/clients/new", {
      timeout: 10_000,
    });
  }
}
