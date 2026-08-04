USE qa_automation;

DROP TABLE IF EXISTS client;

CREATE TABLE client (
    id BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(20),
    birth_date DATE,
    address VARCHAR(255),
    postal_code VARCHAR(10),
    city VARCHAR(100),
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT uk_client_email UNIQUE (email)
);

CREATE INDEX idx_client_last_name
    ON client(last_name);

CREATE INDEX idx_client_city
    ON client(city);

CREATE INDEX idx_client_postal_code
    ON client(postal_code);