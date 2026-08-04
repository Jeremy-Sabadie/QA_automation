import { defineConfig, devices } from "@playwright/test";

/**
 * Configuration Playwright
 *
 * Tests E2E QA Automation
 */

export default defineConfig({
  /**
   * Dossier des tests
   */
  testDir: "./tests",

  /**
   * Les tests CRUD utilisent la même base de données.
   * On désactive le parallélisme pour éviter
   * les conflits entre Create/Delete/Update.
   */
  fullyParallel: false,

  /**
   * Empêche les test.only oubliés en CI
   */
  forbidOnly: !!process.env.CI,

  /**
   * Retry uniquement en CI
   */
  retries: process.env.CI ? 2 : 0,

  /**
   * Un seul worker pour garantir
   * l'indépendance des scénarios CRUD
   */
  workers: 1,

  /**
   * Rapport HTML
   */
  reporter: "html",

  /**
   * Configuration commune
   */
  use: {
    /**
     * URL Angular
     */
    baseURL: "http://127.0.0.1:4200",

    /**
     * Trace en cas de retry
     */
    trace: "on-first-retry",
  },

  /**
   * Navigateurs testés
   */
  projects: [
    {
      name: "chromium",
      use: {
        ...devices["Desktop Chrome"],
      },
    },

    {
      name: "firefox",
      use: {
        ...devices["Desktop Firefox"],
      },
    },

    {
      name: "webkit",
      use: {
        ...devices["Desktop Safari"],
      },
    },
  ],

  /**
   * Serveur Angular lancé manuellement
   *
   * npm start
   */
});
