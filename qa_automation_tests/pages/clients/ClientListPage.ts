import { Page, Locator } from "@playwright/test";

export class ClientListPage {
  readonly page: Page;

  readonly pageTitle: Locator;
  readonly clientTable: Locator;
  readonly addClientButton: Locator;
  readonly clientRows: Locator;
  readonly editButtons: Locator;
  readonly deleteButtons: Locator;

  constructor(page: Page) {
    this.page = page;

    this.pageTitle = page.getByRole("heading", {
      name: "Gestion clients",
    });

    this.clientTable = page.locator("table");

    this.addClientButton = page.getByRole("button", {
      name: /Ajouter client/i,
    });

    this.clientRows = page.locator("tbody tr");

    this.editButtons = page.getByRole("button", {
      name: "Modifier",
    });

    this.deleteButtons = page.getByRole("button", {
      name: "Supprimer",
    });
  }

  /**
   * Navigation page clients
   */
  async navigate(): Promise<void> {
    await this.page.goto("http://localhost:4200/clients", {
      waitUntil: "domcontentloaded",
    });

    /*
     * Attente Angular + appel API
     */
    await this.page.waitForTimeout(3000);

    /*
     * Vérification chargement page
     */
    await this.pageTitle.waitFor({
      state: "visible",
    });
  }

  /**
   * Vérifie présence tableau
   */
  async isTableVisible(): Promise<boolean> {
    return await this.clientTable.isVisible();
  }

  /**
   * Clique bouton Ajouter client
   */
  async clickAddClient(): Promise<void> {
    await this.addClientButton.click();
  }

  /**
   * Retourne nombre clients affichés
   */
  async getClientCount(): Promise<number> {
    await this.page.waitForTimeout(1000);

    const count = await this.clientRows.count();

    console.log("Nombre clients trouvés :", count);

    return count;
  }

  /**
   * Clique premier bouton Modifier
   */
  async clickFirstEdit(): Promise<void> {
    await this.editButtons.first().click();
  }

  /**
   * Clique premier bouton Supprimer
   */
  async clickFirstDelete(): Promise<void> {
    await this.deleteButtons.first().click();
  }
}
