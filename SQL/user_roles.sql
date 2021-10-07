create table user_roles(
user_username varchar(255),
roles varchar (255),
foreign key(user_username) references users(username)
primary key(user_username, roles)
);

insert into user_roles(user_username, roles) values (
'admin',
'ROLE_ADMIN'
);

insert into user_roles(user_username, roles) values (
'admin',
'ROLE_USER'
);

insert into user_roles(user_username, roles) values (
'user',
'ROLE_USER'
);
