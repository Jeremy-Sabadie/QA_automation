-- Initialisation base QA Automation Project
-- Compatible MariaDB Docker

DROP TABLE IF EXISTS client;


CREATE TABLE client (

    id BIGINT NOT NULL AUTO_INCREMENT,

    first_name VARCHAR(100) NOT NULL,

    last_name VARCHAR(100) NOT NULL,

    email VARCHAR(255) NOT NULL,

    phone VARCHAR(20),

    birth_date DATE,

    address VARCHAR(255),

    postal_code VARCHAR(10),

    city VARCHAR(100),

    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
        ON UPDATE CURRENT_TIMESTAMP,

    PRIMARY KEY (id),

    CONSTRAINT uk_client_email UNIQUE (email)

);


CREATE INDEX idx_client_last_name
    ON client(last_name);


CREATE INDEX idx_client_city
    ON client(city);


CREATE INDEX idx_client_postal_code
    ON client(postal_code);



-- Données initiales pour environnement Docker / tests

INSERT INTO client
(
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
    'Automation',
    'jean.automation@test.com',
    '0600000001',
    '1990-01-15',
    '10 rue des Tests',
    '33000',
    'Bordeaux'
),
(
    'Marie',
    'QA',
    'marie.qa@test.com',
    '0600000002',
    '1988-05-20',
    '20 avenue du Code',
    '33160',
    'Saint Médard en Jalles'
),
(
    'Pierre',
    'Developpeur',
    'pierre.dev@test.com',
    '0600000003',
    '1995-09-10',
    '5 rue Spring Boot',
    '33700',
    'Mérignac'
);