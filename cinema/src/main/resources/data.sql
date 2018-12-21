
INSERT INTO USER (ID, NAME, PASSWORD, USER_NAME,email,ROLE) values (2, 'Gipsz Jakab', '$2a$10$LplxaCfU8JFYxu9k2kRhWuAoc8Q.viSlUtxsZBs8gIfoSDqwbUZq2', 'jakab','jakab@gmail.com', 'ROLE_USER');
INSERT INTO USER (ID, NAME, PASSWORD, USER_NAME,email, ROLE) values (3, 'support', '$2a$10$LplxaCfU8JFYxu9k2kRhWuAoc8Q.viSlUtxsZBs8gIfoSDqwbUZq2', 'support','support@gmail.com','ROLE_ADMIN');




insert into ROOM (id,name,head_count)values(1,'A1',20);
insert into ROOM (id,name,head_count)values(2,'A2',20);
insert into Projection(id,room,start,endt)values(1,1,TO_TIMESTAMP('2018-12-02 20:14:00.742000000', 'YYYY-MM-DD HH24:MI:SS'),TO_TIMESTAMP('2018-12-02 22:45:00.742000000', 'YYYY-MM-DD HH24:MI:SS'));
insert into Projection(id,room,start,endt)values(2,2,TO_TIMESTAMP('2018-12-02 18:14:00.742000000', 'YYYY-MM-DD HH24:MI:SS'),TO_TIMESTAMP('2018-12-02 20:14:00.742000000', 'YYYY-MM-DD HH24:MI:SS'));
insert into Reservation(id,projection)values(1,1);
INSERT INTO CHAIR(id,reservation,room,row,cloumn)values(1,1,1,1,1);
insert into movie(id,name,director,main_actors,projection)values(1,'A film','nagy rendezo','a foszereplo',null);
