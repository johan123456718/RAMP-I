create table RAMP1_inputByUser(
UUID char(36) NOT NULL,
username varchar(255) NOT NULL,
primary key(UUID),
foreign key (UUID) references RAMP1_Input(UUID),
foreign key (username) references users(username)
)
