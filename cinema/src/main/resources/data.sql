
INSERT INTO USER (ID, NAME, PASSWORD, USER_NAME,birthday,email,ROLE) values (2, 'Gipsz Jakab', '$2a$10$LplxaCfU8JFYxu9k2kRhWuAoc8Q.viSlUtxsZBs8gIfoSDqwbUZq2', 'jakab',TO_DATE('17/12/1996', 'DD/MM/YYYY'),'jakab@gmail.com', 'ROLE_USER');
INSERT INTO USER (ID, NAME, PASSWORD, USER_NAME,birthday,email, ROLE) values (3, 'support', '$2a$10$LplxaCfU8JFYxu9k2kRhWuAoc8Q.viSlUtxsZBs8gIfoSDqwbUZq2', 'support',TO_DATE('17/08/1900', 'DD/MM/YYYY') ,'support@gmail.com','ROLE_ADMIN');




insert into ROOM (id,name,head_count)values(1,'A1',20);
insert into ROOM (id,name,head_count)values(2,'A2',20);
insert into Projection(id,room)values(1,1);
insert into Projection(id,room)values(2,2);
insert into Reservation(id,projection)values(1,1);
INSERT INTO CHAIR(id,reservation,room,row,cloumn)values(1,1,1,1,1);
insert into movie(id,name,director,main_actors,projection)values(1,'A film','nagy rendezo','a foszereplo',1);
insert into movie(id,name,director,main_actors,projection)values(2,'A nagy semmi film','kis rendezo','a nem foszereplo',2);
