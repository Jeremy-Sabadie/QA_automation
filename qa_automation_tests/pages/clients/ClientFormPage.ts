import { Page, Locator } from "@playwright/test";

/**
 * Page Object représentant le formulaire de création/modification client.
 *
 * Cette classe contient les sélecteurs et les actions utilisateur
 * liées au formulaire client.
 *
 * L'objectif est de séparer :
 * - la logique métier des tests
 * - les éléments techniques de la page
 *
 * Cela facilite la maintenance si le HTML Angular évolue.
 */
export class ClientFormPage {
  readonly page: Page;

  // Titre du formulaire
  readonly title: Locator;

  // Champs du formulaire client
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly emailInput: Locator;
  readonly phoneInput: Locator;
  readonly addressInput: Locator;
  readonly postalCodeInput: Locator;
  readonly cityInput: Locator;

  // Boutons d'action
  readonly saveButton: Locator;
  readonly cancelButton: Locator;

  constructor(page: Page) {
    this.page = page;

    /*
     * Récupération des éléments du formulaire.
     *
     * Les sélecteurs utilisent formControlName Angular
     * car ils sont plus stables que des classes CSS.
     */
this.title = page.locator(".container h1").last();

    this.firstNameInput = page.locator('input[formControlName="firstName"]');

    this.lastNameInput = page.locator('input[formControlName="lastName"]');

    this.emailInput = page.locator('input[formControlName="email"]');

    this.phoneInput = page.locator('input[formControlName="phone"]');

    this.addressInput = page.locator('input[formControlName="address"]');

    this.postalCodeInput = page.locator('input[formControlName="postalCode"]');

    this.cityInput = page.locator('input[formControlName="city"]');

    this.saveButton = page.getByRole("button", {
      name: "Enregistrer",
    });

    this.cancelButton = page.getByRole("button", {
      name: "Annuler",
    });
  }

  /**
   * Remplit le formulaire avec les informations d'un client.
   *
   * Les données sont fournies par un fichier JSON
   * afin d'éviter de mettre des valeurs en dur dans les tests.
   */
  async fillClientForm(client: any) {
    await this.firstNameInput.fill(client.firstName);

    await this.lastNameInput.fill(client.lastName);

    await this.emailInput.fill(client.email);

    await this.phoneInput.fill(client.phone);

    await this.addressInput.fill(client.address);

    await this.postalCodeInput.fill(client.postalCode);

    await this.cityInput.fill(client.city);
  }

  /**
   * Clique sur le bouton enregistrer.
   */
  async submit() {
    await this.saveButton.click();
  }

  /**
   * Clique sur annuler.
   */
  async cancel() {
    await this.cancelButton.click();
  }
}
