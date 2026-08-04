import { test, expect } from '@playwright/test';

/**
 * Test E2E - Gestion des clients
 *
 * Objectif :
 * Vérifier qu'un utilisateur peut accéder à la page des clients
 * et visualiser la liste des clients existants.
 *
 * Ce test simule un comportement utilisateur réel :
 * 1 - Ouverture de la page clients
 * 2 - Vérification du titre de la page
 * 3 - Vérification de la présence du tableau
 * 4 - Vérification qu'au moins un client est affiché
 */

test.describe('Gestion des clients - Consultation de la liste', () => {
  test('Afficher la liste des clients existants', async ({ page }) => {
    // Etape 1 :
    // L'utilisateur accède à la page de gestion des clients
    await page.goto('http://localhost:4200/clients');

    // Etape 2 :
    // Vérification que la page est bien chargée
    // Le titre dépendra de ton HTML actuel.
    // Ici on vérifie simplement la présence de la zone principale.
    await expect(page).toHaveURL(/clients/);

    // Etape 3 :
    // Vérification que le tableau des clients est présent
    //
    // A adapter si ton HTML utilise un autre sélecteur.
    // Pour l'instant on utilise un sélecteur générique.
    const clientTable = page.locator('table');

    await expect(clientTable).toBeVisible();

    // Etape 4 :
    // Vérifie qu'au moins une ligne client est affichée.
    //
    // On ignore la ligne d'entête grâce au tbody.
    const clientRows = page.locator('table tbody tr');

    await expect(clientRows).not.toHaveCount(0);
  });
});
