CREATE DATABASE gestao_eventos;

/c gestao_eventos;

CREATE TABLE ingressos (
    id SERIAL PRIMARY KEY,
    evento VARCHAR(255) NOT NULL,
    local VARCHAR(255) NOT NULL,
    data_evento DATE NOT NULL,
    categoria VARCHAR(50) NOT NULL,
    preco DECIMAL(10,2) NOT NULL,
    quantidade_disponivel INTEGER NOT NULL
);


INSERT INTO ingressos (evento, local, data_evento, categoria, preco, quantidade_disponivel) VALUES 
('Ghettis', 'Campinas', '15-07-25', 'Pista', 100.00, 2250),
('Ghettis', 'Valinhos', '17-07-25', 'VIP', 200.00, 2000),
('Ghettis', 'Barao Geraldo', '18-07-25', 'Camarote', 300.00, 1400),
('Ghettis', 'Jundiai', '15-07-25', 'Arquibancada', 80.00, 2367); 