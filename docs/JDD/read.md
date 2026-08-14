# Jeux de données de test (JDD)

Ce répertoire contient les jeux de données nécessaires à l'exécution des tests fonctionnels, API et E2E du projet.

Les JDD sont versionnés dans Git afin de garantir leur traçabilité, leur reproductibilité et leur disponibilité pour l'ensemble des acteurs du projet.

Les données utilisées dans ces JDD sont fictives.

## Objectifs

Les jeux de données permettent notamment de couvrir :

- les cas nominaux ;
- les cas négatifs ;
- les règles de validation ;
- les valeurs limites ;
- les règles métier ;
- les scénarios de création, modification et suppression ;
- les scénarios de recherche ;
- les tests API ;
- les tests E2E / IHM.

## Organisation

Les JDD sont séparés des données de référence utilisées pour initialiser la base de données.

Les données de référence de l'application sont présentes dans :

`database/sql/02-data.sql`

Les données spécifiques aux tests QA sont documentées dans ce répertoire.

## Liste des JDD

| Identifiant | Fichier | Objectif |
|---|---|---|
| JDD-001 | JDD-001-clients-nominaux.md | Données valides pour les scénarios nominaux |
| JDD-002 | JDD-002-clients-invalides.md | Données permettant de tester les validations |
| JDD-003 | JDD-003-valeurs-limites.md | Données permettant de tester les valeurs limites |
| JDD-004 | JDD-004-regles-metier.md | Données permettant de tester les règles métier |

## Utilisation

Les JDD peuvent être utilisés :

- manuellement lors des tests fonctionnels ;
- dans les collections Postman et les tests API automatisés avec Newman ;
- dans les tests E2E Playwright ;
- dans les fixtures Playwright ;
- pour reproduire un scénario lors de l'analyse d'une anomalie.

Les tests API du projet sont définis dans une collection Postman et exécutés en ligne de commande avec Newman.

La collection couvre notamment les opérations CRUD de l'API Clients :

- consultation de la liste des clients ;
- création d'un client ;
- consultation du client créé ;
- modification du client ;
- suppression du client.

Ces tests API sont exécutables localement et sont également intégrés au pipeline CI GitHub Actions.

Les données nécessaires à un scénario doivent être identifiées dans le cas de test correspondant.

## Principes

Les JDD doivent être :

- reproductibles ;
- compréhensibles ;
- traçables ;
- maintenables ;
- indépendants lorsque cela est possible ;
- représentatifs des scénarios à tester.

Les données sensibles ou réelles ne doivent pas être utilisées dans ce repository.