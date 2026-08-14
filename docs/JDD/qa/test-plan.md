# Plan de tests – Gestion des clients

## 1. Objectif

Ce plan de tests définit les principaux contrôles fonctionnels réalisés sur la gestion des clients de l'application QA Automation.

---

## 2. Fonctionnalités couvertes

Le périmètre comprend :

- affichage des clients ;
- création d'un client ;
- modification d'un client ;
- suppression d'un client ;
- validation des échanges avec l'API ;
- contrôle de la persistance des données.

---

## 3. Scénarios principaux

| ID | Type | Scénario | Résultat attendu |
|---|---|---|---|
| TC-API-001 | API | Récupérer la liste des clients | HTTP 200 et réponse JSON valide |
| TC-API-002 | API | Créer un client valide | Client créé et réponse HTTP attendue |
| TC-API-003 | API | Consulter le client créé | Les données correspondent aux données envoyées |
| TC-API-004 | API | Modifier un client | Les nouvelles données sont enregistrées |
| TC-API-005 | API | Supprimer un client | Le client n'est plus disponible |
| TC-E2E-001 | E2E | Afficher la liste des clients | La liste est visible |
| TC-E2E-002 | E2E | Créer un client depuis l'interface | Le client apparaît dans la liste |
| TC-E2E-003 | E2E | Modifier un client | Les modifications sont visibles |
| TC-E2E-004 | E2E | Supprimer un client | Le client disparaît de la liste |

---

## 4. Données de test

Les données utilisées pour les tests automatisés doivent être maîtrisées et reproductibles.

Lorsque cela est nécessaire, les tests génèrent des données spécifiques afin d'éviter les collisions entre différentes exécutions.

Les données créées par un scénario doivent être supprimées lorsque leur conservation n'est pas nécessaire.

---

## 5. Environnement

Les tests de CI sont exécutés dans une stack Docker dédiée comprenant :

- MariaDB ;
- Spring Boot ;
- Angular/Nginx ;
- environnement d'exécution des tests.

Cette approche permet de disposer d'un environnement reproductible sur le runner GitHub Actions.

---

## 6. Critères d'entrée

La campagne peut commencer lorsque :

- le backend est compilé ;
- la base de données est disponible ;
- le backend répond à son healthcheck ;
- le frontend répond à son healthcheck ;
- l'environnement de test est initialisé.

---

## 7. Critères de sortie

La campagne est validée lorsque :

- tous les tests critiques sont exécutés ;
- aucun test bloquant n'est en échec ;
- les éventuelles anomalies sont identifiées et documentées.

En présence d'un échec, le résultat est analysé afin de déterminer s'il provient :

- de l'application ;
- des données de test ;
- du test automatisé ;
- de la configuration ;
- de l'environnement CI.