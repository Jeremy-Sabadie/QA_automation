# JDD-004 — Règles métier

## Objectif

Fournir les données nécessaires à la vérification des règles métier liées à la gestion des clients.

Ce JDD est destiné principalement aux tests API et E2E.

## Règle métier RM-001 — Email unique

Une adresse email ne peut être associée qu'à un seul client.

### Données

Client existant :

| Champ | Valeur |
|---|---|
| Prénom | Jean |
| Nom | Dupont |
| Email | jean.dupont@example.com |

Tentative de création :

| Champ | Valeur |
|---|---|
| Prénom | Paul |
| Nom | Dupont |
| Email | jean.dupont@example.com |

### Résultat attendu

La création doit être refusée.

L'API doit retourner le code HTTP correspondant à la règle définie par l'application.

Aucun deuxième client ne doit être créé avec cette adresse email.

---

## Règle métier RM-002 — Modification d'un client

Un client existant peut être modifié avec des données valides.

### Données initiales

| Champ | Valeur |
|---|---|
| ID | CLIENT-001 |
| Prénom | Jean |
| Nom | Dupont |
| Email | jean.dupont@example.com |

### Modification

| Champ | Nouvelle valeur |
|---|---|
| Prénom | Jean |
| Nom | Dupont |
| Email | jean.dupont@example.com |
| Ville | Mérignac |

### Résultat attendu

La modification doit être acceptée.

Les nouvelles données doivent être persistées en base.

---

## Règle métier RM-003 — Client inexistant

Une opération demandant un client inexistant doit être correctement gérée.

### Donnée

```text
ID client : 999999