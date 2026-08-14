# Rapport de tests – Campagne PASS

## Informations générales

**Projet :** QA Automation  
**Type de campagne :** Non-régression automatisée  
**Environnement :** GitHub Actions / Docker Compose  
**Statut :** PASS

---

## Objectif

Valider le fonctionnement du parcours de gestion des clients après modification du projet.

---

## Périmètre

La campagne couvre :

- API de gestion des clients ;
- frontend Angular ;
- échanges frontend/backend ;
- scénarios E2E Playwright ;
- persistance MariaDB.

---

## Résultats

| Type | Outil | Résultat |
|---|---|---|
| Tests API | Postman / Newman | PASS |
| Tests E2E | Playwright | PASS |
| Backend | Spring Boot | Opérationnel |
| Frontend | Angular/Nginx | Opérationnel |
| Base de données | MariaDB | Opérationnelle |

---

## Exécution CI

La stack Docker a été construite et démarrée automatiquement par GitHub Actions.

Les healthchecks ont confirmé la disponibilité des différents services avant l'exécution des tests.

Les tests automatisés se sont terminés sans erreur bloquante.

---

## Anomalies

Aucune anomalie bloquante identifiée sur le périmètre de cette campagne.

---

## Conclusion

La campagne de tests est validée.

Les fonctionnalités couvertes par cette campagne ne présentent pas de régression détectée.

**Décision QA : PASS**