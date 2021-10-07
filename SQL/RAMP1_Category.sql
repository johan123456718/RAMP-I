use db_example;
create table RAMP1_Category (
Category_Nr int auto_increment,
name varchar(255) NOT NULL UNIQUE,
PRIMARY KEY(Category_Nr)
);

insert into ramp1_category(
name
)Values(
'Arbetsställningar'
);

insert into ramp1_category(
name
)Values(
'Arbetsrörelser och repetitivt arbete'
);

insert into ramp1_category(
name
)Values(
'Lyftarbete'
);

insert into ramp1_category(
name
)Values(
'Skjuta- och dra-arbete'
);

insert into ramp1_category(
name
)Values(
'Påverkande faktorer'
);

insert into ramp1_category(
name
)Values(
'Rapportering om fysiskt påfrestande arbete'
);

insert into ramp1_category(
name
)Values(
'Upplevt fysiskt obehag Fråga fem personer som arbetar med detta arbetsmoment'
);

/*
Mall för att skapa ny kategori
Value1: Strängen med namnet på kateogorin 'Namn'
insert into ramp1_category(
name
)Values(
'Arbetsberättelser och repetitivt arbete'
);
*/




