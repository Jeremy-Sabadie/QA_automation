# JDD-001 — Clients nominaux

## Objectif

Fournir des données clients valides permettant d'exécuter les scénarios nominaux de l'application.

Ce JDD est principalement destiné aux :

- tests fonctionnels ;
- tests API ;
- tests E2E / IHM ;
- tests de régression.

## Préconditions

La base de données `qa_project` doit être disponible.

La table `client` doit avoir été créée à partir du script :

`database/sql/01-schema.sql`

## Données

| ID | Prénom | Nom | Email | Téléphone | Date de naissance | Code postal | Ville |
|---|---|---|---|---|---|---|---|
| CLIENT-001 | Jean | Dupont | jean.dupont@example.com | 0601020304 | 1985-04-12 | 33000 | Bordeaux |
| CLIENT-002 | Marie | Martin | marie.martin@example.com | 0611223344 | 1990-09-25 | 33100 | Bordeaux |
| CLIENT-003 | Thomas | Bernard | thomas.bernard@example.com | 0622334455 | 1978-02-17 | 33700 | Mérignac |
| CLIENT-004 | Sophie | Petit | sophie.petit@example.com | 0633445566 | 1993-11-08 | 33300 | Bordeaux |

## Scénarios couverts

Ce JDD peut notamment être utilisé pour :

- récupérer un client existant ;
- afficher un client ;
- créer un client valide ;
- modifier un client existant ;
- rechercher un client ;
- supprimer un client existant.

## Résultat attendu

Toutes les données présentes dans ce JDD doivent être considérées comme valides.

Aucune erreur de validation ne doit être générée lorsque ces données sont utilisées conformément aux règles métier.

## Utilisation dans les tests automatisés

Les données pourront être utilisées dans les fixtures Playwright afin d'éviter de dupliquer les mêmes valeurs directement dans les tests.

## Réinitialisation

Les données peuvent être réinitialisées à partir du script :

`database/sql/02-data.sql`