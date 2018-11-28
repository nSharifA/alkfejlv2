INSERT INTO USER (ID, NAME, PASSWORD, USER_NAME,birthday,email ,ROLE) values (2, 'Gipsz Jakab', '$2a$10$LplxaCfU8JFYxu9k2kRhWuAoc8Q.viSlUtxsZBs8gIfoSDqwbUZq2', 'jakab',TO_DATE('17/12/1996', 'DD/MM/YYYY'),'jakab@gmail.com', 'ROLE_USER');
INSERT INTO USER (ID, NAME, PASSWORD, USER_NAME,birthday,email , ROLE) values (3, 'support', '$2a$10$LplxaCfU8JFYxu9k2kRhWuAoc8Q.viSlUtxsZBs8gIfoSDqwbUZq2', 'support',TO_DATE('17/08/1900', 'DD/MM/YYYY') ,'support@gmail.com','ROLE_ADMIN');
INSERT INTO MOVIE (ID, NAME, DIRECTOR, created) values (1, 'film1', 'rendező1', TO_DATE('17/12/2015', 'DD/MM/YYYY'));
