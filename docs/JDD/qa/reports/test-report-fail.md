# Rapport de tests – Campagne FAIL

## Informations générales

**Projet :** QA Automation  
**Type de campagne :** CI / tests automatisés  
**Environnement :** GitHub Actions / Docker Compose  
**Statut :** FAIL

---

## Objectif

Valider automatiquement l'application dans l'environnement CI avant intégration.

---

## Résultat global

La campagne n'a pas pu atteindre l'étape normale d'exécution complète des tests.

Docker Compose a détecté que le service frontend n'était pas considéré comme disponible.

Erreur observée :

    dependency failed to start: container qa-frontend-ci is unhealthy

Le workflow GitHub Actions s'est terminé avec un code de sortie 1.

---

## Analyse

Les vérifications ont montré que :

- MariaDB démarrait correctement ;
- le backend Spring Boot était opérationnel ;
- le backend communiquait avec la base de données ;
- le problème concernait le healthcheck du frontend ;
- Docker considérait donc le conteneur frontend comme `unhealthy`.

Le problème empêchait le démarrage du service de tests dépendant du frontend.

---

## Impact

**Sévérité CI : Bloquante**

La campagne automatisée ne pouvait pas être validée puisque l'environnement nécessaire aux tests n'était pas entièrement disponible.

---

## Action corrective

Le healthcheck du frontend dans `docker-compose.ci.yml` a été corrigé afin d'utiliser une vérification compatible avec l'image réellement exécutée sur le runner GitHub Actions.

Une nouvelle exécution de la CI a ensuite été déclenchée.

---

## Résultat après correction

Après correction, le workflow :

**Docker Compose + Playwright**

s'est exécuté avec succès.

La CI est passée au statut vert.

---

## Conclusion

L'échec provenait de la configuration de l'environnement de CI et non d'une anomalie fonctionnelle identifiée sur la gestion des clients.

Cette analyse a permis de corriger le mécanisme de contrôle de disponibilité du frontend et de rendre l'exécution de la stack CI fiable.

**Décision initiale : FAIL**

**Après correction et nouvelle exécution : PASS**