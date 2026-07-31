-- ============================================================
-- QA AUTOMATION PROJECT
-- Script : 02-data.sql
-- Description : Peuplement initial de la table client
-- ============================================================

USE qa_project;

-- ============================================================
-- Nettoyage des données existantes
-- ============================================================

DELETE FROM client;

-- ============================================================
-- Données clients
-- ============================================================

INSERT INTO client (
    first_name,
    last_name,
    email,
    phone,
    birth_date,
    address,
    postal_code,
    city
)
VALUES
(
    'Jean',
    'Dupont',
    'jean.dupont@example.com',
    '0601020304',
    '1985-04-12',
    '12 rue Victor Hugo',
    '33000',
    'Bordeaux'
),
(
    'Marie',
    'Martin',
    'marie.martin@example.com',
    '0611223344',
    '1990-09-25',
    '25 avenue de la République',
    '33100',
    'Bordeaux'
),
(
    'Thomas',
    'Bernard',
    'thomas.bernard@example.com',
    '0622334455',
    '1978-02-17',
    '8 rue des Lilas',
    '33700',
    'Mérignac'
),
(
    'Sophie',
    'Petit',
    'sophie.petit@example.com',
    '0633445566',
    '1993-11-08',
    '17 rue du Port',
    '33300',
    'Bordeaux'
),
(
    'Lucas',
    'Robert',
    'lucas.robert@example.com',
    '0644556677',
    '1988-06-30',
    '42 avenue Jean Jaurès',
    '33130',
    'Bègles'
),
(
    'Camille',
    'Richard',
    'camille.richard@example.com',
    '0655667788',
    '1995-01-19',
    '6 rue des Écoles',
    '33200',
    'Bordeaux'
),
(
    'Nicolas',
    'Durand',
    'nicolas.durand@example.com',
    '0666778899',
    '1982-12-03',
    '31 rue Pasteur',
    '33520',
    'Bruges'
),
(
    'Julie',
    'Moreau',
    'julie.moreau@example.com',
    '0677889900',
    '1987-07-22',
    '19 avenue de la Libération',
    '33400',
    'Talence'
),
(
    'Antoine',
    'Simon',
    'antoine.simon@example.com',
    '0688990011',
    '1991-03-14',
    '5 rue Montesquieu',
    '33000',
    'Bordeaux'
),
(
    'Claire',
    'Laurent',
    'claire.laurent@example.com',
    '0699001122',
    '1984-10-05',
    '28 rue Gambetta',
    '33270',
    'Floirac'
);

-- ============================================================
-- Vérification du nombre de clients
-- ============================================================

SELECT COUNT(*) AS total_clients
FROM client;

-- ============================================================
-- Vérification des données
-- ============================================================

SELECT
    id,
    first_name,
    last_name,
    email,
    phone,
    birth_date,
    address,
    postal_code,
    city,
    created_at,
    updated_at
FROM client
ORDER BY id;