# Rapport de tests – Campagne PASS

## Informations générales

**Projet :** QA Automation  
**Type de campagne :** Non-régression automatisée  
**Environnement :** GitHub Actions / Docker Compose  
**Statut :** PASS

---

## Objectif

Valider le fonctionnement du parcours de gestion des clients après modification du projet.

La campagne permet de vérifier le fonctionnement de l'API REST ainsi que les principaux parcours utilisateur de l'application.

---

## Périmètre

La campagne couvre :

- API REST de gestion des clients ;
- tests API automatisés Postman / Newman ;
- frontend Angular ;
- échanges frontend/backend ;
- scénarios E2E Playwright ;
- persistance MariaDB.

---

## Tests API Postman / Newman

Les tests API sont définis dans une collection Postman et exécutés automatiquement avec Newman.

La campagne API couvre les opérations CRUD principales :

1. `GET /api/clients` – consulter la liste des clients ;
2. `POST /api/clients` – créer un client ;
3. `GET /api/clients/{id}` – consulter le client créé ;
4. `PUT /api/clients/{id}` – modifier le client ;
5. `DELETE /api/clients/{id}` – supprimer le client.

Les tests vérifient notamment :

- les codes de statut HTTP ;
- le format JSON des réponses ;
- la présence de l'identifiant après création ;
- la cohérence des données retournées ;
- la prise en compte des modifications ;
- la suppression du client.

### Résultat Newman

| Indicateur | Résultat |
|---|---:|
| Requêtes exécutées | 5 |
| Requêtes en échec | 0 |
| Assertions exécutées | 12 |
| Assertions en échec | 0 |
| Résultat | PASS |

---

## Tests E2E Playwright

Les tests Playwright valident les principaux parcours utilisateur depuis le frontend Angular jusqu'au backend et à la base de données.

### Résultat Playwright

| Indicateur | Résultat |
|---|---:|
| Tests exécutés | 21 |
| Tests réussis | 21 |
| Tests échoués | 0 |
| Résultat | PASS |

---

## Résultats globaux

| Type | Outil | Résultat |
|---|---|---|
| Tests API | Postman / Newman | PASS |
| Tests E2E | Playwright | PASS |
| Backend | Spring Boot | Opérationnel |
| Frontend | Angular / Nginx | Opérationnel |
| Base de données | MariaDB | Opérationnelle |

---

## Exécution CI

La campagne est exécutée automatiquement par GitHub Actions.

Le pipeline :

1. construit le backend ;
2. valide la configuration Docker Compose ;
3. construit les images Docker ;
4. démarre MariaDB, le backend et le frontend ;
5. attend que le backend soit disponible ;
6. exécute les tests API Postman avec Newman ;
7. exécute les tests E2E Playwright ;
8. publie les rapports et résultats Playwright ;
9. nettoie l'environnement Docker.

Les healthchecks Docker permettent de vérifier la disponibilité des services nécessaires avant l'exécution des tests.

Les tests Newman et Playwright se sont terminés sans erreur bloquante.

---

## Anomalies

Aucune anomalie bloquante identifiée sur le périmètre de cette campagne.

---

## Conclusion

La campagne de non-régression automatisée est validée.

Les tests API Postman / Newman et les tests E2E Playwright sont exécutés avec succès dans le pipeline CI.

Les fonctionnalités couvertes par cette campagne ne présentent pas de régression détectée.

**Décision QA : PASS**