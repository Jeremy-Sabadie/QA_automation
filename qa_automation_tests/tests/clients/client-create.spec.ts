import { test, expect } from "@playwright/test";

import { ClientListPage } from "../../pages/clients/ClientListPage";
import { ClientFormPage } from "../../pages/clients/ClientFormPage";

/**
 * Tests E2E création d'un client.
 *
 * Objectif :
 * Vérifier qu'un utilisateur peut ajouter un client
 * depuis l'application Angular.
 */
test.describe("Gestion des clients - Création", () => {
  test("Créer un nouveau client avec des informations valides", async ({
    page,
  }) => {
    const clientListPage = new ClientListPage(page);

    const clientFormPage = new ClientFormPage(page);

    /*
     * Etape 1 :
     * Accès à la page de gestion des clients
     */
    await clientListPage.navigate();

    /*
     * Etape 2 :
     * Ouverture du formulaire d'ajout client
     */
    await clientListPage.clickAddClient();

    /*
     * Vérification que le formulaire est affiché
     */
    await expect(clientFormPage.title).toContainText("Ajouter un client");

    /*
     * Etape 3 :
     * Saisie des informations client
     */
    await clientFormPage.firstNameInput.fill("Pierre");

    await clientFormPage.lastNameInput.fill("Martin");

    await clientFormPage.emailInput.fill("pierre.martin@test.com");

    await clientFormPage.phoneInput.fill("0612345678");

    await clientFormPage.addressInput.fill("10 rue des tests");

    await clientFormPage.postalCodeInput.fill("33000");

    await clientFormPage.cityInput.fill("Bordeaux");

    /*
     * Vérification que le bouton enregistrer
     * devient disponible après remplissage
     */
    await expect(clientFormPage.saveButton).toBeEnabled();

    /*
     * Etape 4 :
     * Enregistrement du client
     */
    await clientFormPage.submit();

    /*
     * Vérification :
     * Après création l'utilisateur doit revenir
     * sur la liste des clients.
     */
    await expect(page).toHaveURL(/clients/);
  });
});
