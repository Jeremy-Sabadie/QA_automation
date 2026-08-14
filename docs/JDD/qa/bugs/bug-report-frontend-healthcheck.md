# Incident CI – Frontend Docker déclaré unhealthy

## Référence

**ID :** CI-001  
**Projet :** QA Automation  
**Composant :** Frontend / Docker Compose CI  
**Environnement :** GitHub Actions  
**Statut :** Résolu

---

## Description

Lors de l'exécution du pipeline GitHub Actions, la stack Docker ne pouvait pas démarrer complètement.

Le conteneur frontend était déclaré `unhealthy` par Docker Compose.

---

## Étapes de reproduction

1. Pousser le code sur une branche déclenchant la CI.
2. Laisser GitHub Actions construire le projet.
3. Lancer la stack via `docker-compose.ci.yml`.
4. Attendre l'évaluation des healthchecks.
5. Observer l'échec du service frontend.

---

## Résultat attendu

Le frontend démarre correctement.

Son healthcheck passe à l'état `healthy`.

Le conteneur de tests peut ensuite démarrer et exécuter les tests Playwright.

---

## Résultat obtenu

Le frontend est déclaré :

    unhealthy

Docker Compose interrompt le démarrage des services dépendants avec le message :

    dependency failed to start: container qa-frontend-ci is unhealthy

Le workflow GitHub Actions se termine en erreur.

---

## Impact

La campagne de tests automatisés ne peut pas être exécutée normalement.

**Criticité : Bloquante pour la CI**

---

## Analyse

L'application backend et la base MariaDB étaient opérationnelles.

L'analyse des logs et de la configuration Docker a permis d'isoler le problème au niveau du healthcheck du frontend.

La commande utilisée pour vérifier la disponibilité du frontend n'était pas adaptée à l'environnement du conteneur exécuté sur GitHub Actions.

---

## Correction

Le healthcheck défini dans `docker-compose.ci.yml` a été corrigé.

Une nouvelle exécution du workflow a été réalisée après commit et push de la correction.

Commit de correction :

    17c506b - fix(ci): fix frontend healthcheck on GitHub runner

---

## Validation

Après correction :

- le frontend est correctement considéré comme disponible ;
- les dépendances Docker peuvent démarrer ;
- les tests Playwright sont exécutés ;
- le workflow GitHub Actions se termine avec succès.

---

## Statut final

**RESOLVED / PASS**