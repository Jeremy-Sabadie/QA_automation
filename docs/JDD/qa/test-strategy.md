# Stratégie de tests – QA Automation

## 1. Objectif

L'objectif de cette stratégie est de définir l'approche de validation utilisée sur l'application QA Automation.

Le projet repose sur une architecture composée de :

- un frontend Angular ;
- une API REST Spring Boot ;
- une base de données MariaDB ;
- des tests automatisés Playwright ;
- des tests API Postman / Newman ;
- une stack Docker Compose ;
- une intégration continue avec GitHub Actions.

L'objectif principal est de détecter rapidement les régressions et de vérifier le bon fonctionnement de l'application avant intégration du code.

---

## 2. Périmètre de test

Les tests couvrent principalement la gestion des clients.

Les fonctionnalités vérifiées comprennent :

- consultation de la liste des clients ;
- création d'un client ;
- modification d'un client ;
- suppression d'un client ;
- communication entre le frontend et l'API ;
- persistance des données en base.

---

## 3. Niveaux de tests

### Tests API

Les tests API permettent de valider directement les endpoints REST indépendamment de l'interface utilisateur.

Outils :

- Postman pour la conception et l'exécution manuelle ;
- Newman pour l'exécution automatisée des collections.

Les contrôles portent notamment sur :

- les codes HTTP ;
- la structure des réponses JSON ;
- les données retournées ;
- les cas nominaux ;
- les cas d'erreur ;
- l'enchaînement des opérations CRUD.

### Tests End-to-End

Les tests E2E sont réalisés avec Playwright.

Ils reproduisent les principales actions utilisateur depuis l'interface Angular et permettent de vérifier le fonctionnement global de la chaîne :

Utilisateur → Frontend → API → Base de données.

---

## 4. Environnement de test

L'environnement de CI est construit avec Docker Compose.

Les services suivants sont démarrés :

- MariaDB ;
- backend Spring Boot ;
- frontend Angular/Nginx ;
- conteneur de tests automatisés.

Des healthchecks Docker permettent de vérifier la disponibilité des services avant le démarrage des services dépendants.

---

## 5. Intégration continue

La CI est exécutée avec GitHub Actions.

Un push sur les branches configurées déclenche le workflow.

Le pipeline réalise notamment :

1. récupération du dépôt ;
2. installation de Java ;
3. compilation du backend ;
4. validation du fichier Docker Compose ;
5. construction des images nécessaires ;
6. démarrage de la stack ;
7. exécution des tests automatisés ;
8. publication des rapports ;
9. nettoyage de l'environnement Docker.

Le pipeline est considéré comme valide uniquement lorsque les tests obligatoires sont passants.

---

## 6. Gestion des résultats

Deux niveaux de résultats sont conservés :

### Artifacts CI

Les rapports générés automatiquement par les outils de test sont publiés comme artifacts GitHub Actions.

Ils permettent d'analyser précisément une exécution donnée.

### Rapports QA

Des rapports synthétiques sont conservés dans le dépôt afin de documenter des exemples représentatifs de campagnes réussies et échouées.

---

## 7. Critères de validation

Une campagne est considérée comme PASS lorsque :

- les services nécessaires sont disponibles ;
- les tests critiques sont exécutés ;
- aucun test bloquant n'est en échec ;
- aucune régression critique n'est identifiée.

Une campagne est considérée comme FAIL lorsqu'un défaut bloquant ou une régression empêche la validation du périmètre testé.

---

## 8. Objectif qualité

Cette stratégie vise à obtenir une validation reproductible et automatisée tout en conservant une analyse humaine des échecs.

L'automatisation n'a pas pour objectif de remplacer l'analyse QA mais d'accélérer la détection des régressions et de fournir un retour rapide sur la qualité du code.