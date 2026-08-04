# JDD-002 — Clients invalides

## Objectif

Fournir des données invalides permettant de vérifier les mécanismes de validation de l'application.

Ce JDD est principalement destiné aux :

- tests négatifs API ;
- tests E2E / IHM ;
- tests de validation des formulaires ;
- tests de gestion des erreurs.

## Préconditions

La base de données doit être disponible.

Les scénarios doivent être exécutés sans enregistrer les données invalides dans la base lorsque la validation doit les empêcher.

## Données

| ID | Champ testé | Valeur | Résultat attendu |
|---|---|---|---|
| INVALID-001 | first_name | vide | Rejet |
| INVALID-002 | last_name | vide | Rejet |
| INVALID-003 | email | `email-invalide` | Rejet |
| INVALID-004 | email | `test@` | Rejet |
| INVALID-005 | email | `@example.com` | Rejet |
| INVALID-006 | email | vide | Rejet |
| INVALID-007 | first_name | plus de 100 caractères | Rejet |
| INVALID-008 | last_name | plus de 100 caractères | Rejet |
| INVALID-009 | email | plus de 255 caractères | Rejet |
| INVALID-010 | postal_code | valeur invalide | Rejet |

## Scénarios couverts

Ce JDD permet notamment de vérifier :

- les champs obligatoires ;
- le format d'une adresse email ;
- les longueurs maximales ;
- le format des données ;
- les messages de validation ;
- les codes HTTP retournés par l'API ;
- l'absence d'enregistrement lorsque la validation échoue.

## Résultat attendu

Les données invalides doivent être rejetées conformément aux règles définies par l'application.

Une donnée rejetée ne doit pas provoquer la création ou la modification d'un client en base de données.

## Utilisation

Les données peuvent être utilisées individuellement afin qu'un seul défaut soit testé à la fois.

Cette approche permet d'identifier précisément la règle de validation qui échoue.