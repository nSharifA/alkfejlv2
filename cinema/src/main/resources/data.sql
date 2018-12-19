
INSERT INTO USER (ID, NAME, PASSWORD, USER_NAME,email,ROLE) values (2, 'Gipsz Jakab', '$2a$10$LplxaCfU8JFYxu9k2kRhWuAoc8Q.viSlUtxsZBs8gIfoSDqwbUZq2', 'jakab','jakab@gmail.com', 'ROLE_USER');
INSERT INTO USER (ID, NAME, PASSWORD, USER_NAME,email, ROLE) values (3, 'support', '$2a$10$LplxaCfU8JFYxu9k2kRhWuAoc8Q.viSlUtxsZBs8gIfoSDqwbUZq2', 'support','support@gmail.com','ROLE_ADMIN');




insert into ROOM (id,name,head_count)values(1,'A1',20);
insert into ROOM (id,name,head_count)values(2,'A2',20);
insert into Projection(id,room)values(1,1);
insert into Projection(id,room)values(2,2);
insert into Reservation(id,projection)values(1,1);
INSERT INTO CHAIR(id,reservation,room,row,cloumn)values(1,1,1,1,1);
insert into movie(id,name,director,main_actors,projection)values(1,'A film','nagy rendezo','a foszereplo',1);
insert into movie(id,name,director,main_actors,projection)values(2,'A nagy semmi film','kis rendezo','a nem foszereplo',2);
