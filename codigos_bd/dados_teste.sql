-- Inserindo dados de teste

-- atores
INSERT INTO atores ( id, nome) VALUES (default, 'Cher');
INSERT INTO atores ( id, nome) VALUES (default, 'Brad Pitt');
INSERT INTO atores ( id, nome) VALUES (default, 'Helena Bonham Carter');
INSERT INTO atores ( id, nome) VALUES (default, 'Edward Norton');

SELECT * FROM public.atores;

-- atores_filme
INSERT INTO atores_filme (id_filme, id_ator, personagem) VALUES (12, 1, 'Tess');
INSERT INTO atores_filme (id_filme, id_ator, personagem) VALUES (13, 2, 'Benjamin Button');
INSERT INTO atores_filme (id_filme, id_ator, personagem) VALUES (14, 3, 'Rainha Vermelha');
INSERT INTO atores_filme (id_filme, id_ator, personagem) VALUES (15, 2, 'Tyler Durden');
INSERT INTO atores_filme (id_filme, id_ator, personagem) VALUES (15, 3, 'Marla Singer');
INSERT INTO atores_filme (id_filme, id_ator, personagem) VALUES (15, 4, 'The Narrator');

SELECT * FROM public.atores_filme;

-- clientes
INSERT INTO clientes (nome, sobrenome, telefone, endereco) 
VALUES ('Fabiany', 'Sousa', '(99)97755-4433', 'Rua Qualquer, Número 000, Bairro Inexistente');
INSERT INTO clientes (nome, sobrenome, telefone, endereco) 
VALUES ('Leticia', 'Saraiva', '(59)96758-4431', 'Rua 1, Número 123, Bairro Feliz');
INSERT INTO clientes (nome, sobrenome, telefone, endereco) 
VALUES ('Ernandes', 'Junior', '(88)97459-4240', 'Rua 2, Número 456, Bairro Triste');

SELECT * FROM public.clientes;

-- devolucoes
INSERT INTO table (  ) VALUES (  );
INSERT INTO table (  ) VALUES (  );
INSERT INTO table (  ) VALUES (  );

SELECT * FROM public.devolucoes;

-- emprestimos
INSERT INTO table (  ) VALUES (  );
INSERT INTO table (  ) VALUES (  );
INSERT INTO table (  ) VALUES (  );

SELECT * FROM public.emprestimos;

-- filmes
INSERT INTO filmes (titulo, id_genero, valor) VALUES ('Burlesque', 1, 15.30);
INSERT INTO filmes (titulo, id_genero, valor) VALUES ('O Curioso Caso de Benjamin Button', 2, 13.00);
INSERT INTO filmes (titulo, id_genero, valor) VALUES ('Alice no País das Maravilhas', 3, 11.45);
INSERT INTO filmes (titulo, id_genero, valor) VALUES ('Clube da Luta', 4, 12.00);

SELECT * FROM public.filmes;

-- filmes_devolucao
INSERT INTO table (  ) VALUES (  );
INSERT INTO table (  ) VALUES (  );
INSERT INTO table (  ) VALUES (  );

SELECT * FROM public.filmes_devolucao;

-- filmes_emprestimo
INSERT INTO table (  ) VALUES (  );
INSERT INTO table (  ) VALUES (  );
INSERT INTO table (  ) VALUES (  );

SELECT * FROM public.filmes_emprestimo;

-- generos
INSERT INTO generos (genero) VALUES ('Musical');
INSERT INTO generos (genero) VALUES ('Romance');
INSERT INTO generos (genero) VALUES ('Fantasia');
INSERT INTO generos (genero) VALUES ('Drama');

SELECT * FROM public.generos;