/*
  1- Na tabela sakila.film, monte uma query que exiba o título e o ano de lançamento dos filmes em uma coluna e dê a ela o nome Lançamento do Filme.
  2- Na tabela sakila.address, monte uma query que exiba a rua e o distrito de cada registro em uma coluna apenas, e dê a essa coluna o nome Endereço.
*/

# EXERCÍCIO 1
SELECT CONCAT(title, " ", release_year) AS "Lançamento do Filme" FROM sakila.film;


# EXERCÍCIO 2
SELECT CONCAT(address, " ", district) AS "Endereço" FROM sakila.address;
