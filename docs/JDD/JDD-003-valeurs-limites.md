# JDD-003 — Valeurs limites

## Objectif

Vérifier le comportement de l'application aux limites définies par les contraintes fonctionnelles et techniques.

Ce JDD permet notamment de tester les limites de longueur des champs et les valeurs situées juste avant, exactement à la limite et juste après celle-ci.

## Préconditions

La base de données doit être disponible.

Les règles de validation de l'application doivent être définies.

## Données

| ID | Champ | Situation | Valeur / Description | Résultat attendu |
|---|---|---|---|---|
| LIMIT-001 | first_name | Limite -1 | 99 caractères | Accepté |
| LIMIT-002 | first_name | Limite | 100 caractères | Accepté |
| LIMIT-003 | first_name | Limite +1 | 101 caractères | Rejet |
| LIMIT-004 | last_name | Limite -1 | 99 caractères | Accepté |
| LIMIT-005 | last_name | Limite | 100 caractères | Accepté |
| LIMIT-006 | last_name | Limite +1 | 101 caractères | Rejet |
| LIMIT-007 | email | Limite | 255 caractères | À déterminer selon validation |
| LIMIT-008 | email | Limite +1 | 256 caractères | Rejet |
| LIMIT-009 | phone | Valeur minimale | Format valide minimal | Accepté |
| LIMIT-010 | postal_code | Valeur limite | 5 chiffres | Accepté |

## Scénarios couverts

Ce JDD permet notamment de vérifier :

- les longueurs maximales des champs ;
- les longueurs minimales ;
- les valeurs exactement à la limite ;
- les valeurs dépassant la limite ;
- la cohérence entre validation frontend et backend ;
- le comportement de l'API face aux valeurs limites.

## Résultat attendu

Les valeurs respectant les limites définies doivent être acceptées.

Les valeurs dépassant les contraintes doivent être rejetées.

Le comportement du frontend et du backend doit rester cohérent.

## Intérêt QA

Les valeurs limites permettent notamment de détecter les erreurs de type :

- `<=` utilisé à la place de `<` ;
- `<` utilisé à la place de `<=` ;
- différence de validation entre frontend et backend ;
- mauvaise gestion des longueurs maximales en base de données.