CREATE DATABASE gestao_eventos;

/c gestao_eventos;

CREATE TABLE ingressos (
    id SERIAL PRIMARY KEY,
    evento VARCHAR(255) NOT NULL,
    local VARCHAR (225) NOT NULL,
    data_evento DATE,
    categoria VARCHAR(50),
    preco DECIMAL(10, 2),
    quantidade_disponivel INTEGER
);

INSERT INTO ingressos (id, evento, local, data_evento, categoria, preco, quantidade_disponivel) VALUES 
(1, 'Ghettis', 'Campinas', '15-07-25', 'Pista', 100.00, 2250),
(2, 'Ghettis', 'Valinhos', '17-07-25', 'VIP', 200.00, 2000),
(3, 'Ghettis', 'Barao Geraldo', '18-07-25', 'Camarote', 300.00, 1400),
(4, 'Ghettis', 'Jundiai', '15-07-25', 'Arquibancada', 80.00, 2367); 