create table RAMP1_Question (
Question_Nr int auto_increment,
Category_Nr int, 
data varchar(255) NOT NULL UNIQUE,
primary key (Question_Nr),
foreign key (Category_Nr) references RAMP1_Category(Category_Nr)
);

/*Fråga 1.1*/
insert into RAMP1_Question(
Category_Nr, data
)Values(
1, '1.1 Förekommer arbete ofta eller länge* i nedanstående ogynnsamma arbetsställningar? 
* ofta = cirka 100 gånger eller mer per arbetsdag
* länge = cirka 30 minuter eller mer per arbetsdag'
);

/*Fråga 1.2*/
insert into RAMP1_Question(
Category_Nr, data
)Values(
1, '1.2 Förekommer arbete i någon/några av nedanstående ogynnsamma arbetsställningar cirka 1 timme
 eller mer per arbetsdag?'
);

/*Fråga 2.1*/
insert into RAMP1_Question(
Category_Nr, data
)Values(
2, '2.1 Förekommer arbete på något av nedanstående sätt?'
);

/*Fråga 2.2*/
insert into RAMP1_Question(
Category_Nr, data
)Values(
2, 'Om "Nej" på alla i 2.1, gå till 3. Om "Ja" på någon i 2.1, besvara 2.2 nedan.
2.2 Hur lång tid av arbetsdagen förekommer sådant arbete? '
);

/*Fråga 3.1*/
insert into RAMP1_Question(
Category_Nr, data
)Values(
3, '3.1 Förekommer lyft av laster? Om "Nej", gå till 4.'
);

/*Fråga 3.2*/
insert into RAMP1_Question(
Category_Nr, data
)Values(
3, '3.2 Hur tunga är lasterna och hur ofta lyfts de?'
);

/*Fråga 3.3*/
insert into RAMP1_Question(
Category_Nr, data
)Values(
3, '3.3 Förekommer lyften generellt i nedanstående ogynnsamma arbetsställningar?'
);

/*Fråga 4.1*/
insert into RAMP1_Question(
Category_Nr, data
)Values(
4, '4.1 Förekommer skjuta- eller dra-arbete? Om "Nej", gå till 5.'
);

/*Fråga 4.2*/
insert into RAMP1_Question(
Category_Nr, data
)Values(
4, '4.2 Hur stor är den utvecklade kraften vid skjuta- eller dra-arbetet?'
);

/*Fråga 4.3*/
insert into RAMP1_Question(
Category_Nr, data
)Values(
4, '4.3 Förekommer skjuta- eller dra-arbetet generellt under nedanstående ogynnsamma förutsättningar?'
);

/*Fråga 4.4*/
insert into RAMP1_Question(
Category_Nr, data
)Values(
4, ' 4.4 Används lastbärare med 1-2 hjul (t ex pirra) eller liknande under följande förutsättning?'
);

/*Fråga 5.1*/
insert into RAMP1_Question(
Category_Nr, data
)Values(
5, '5.1 Påverkande fysiska faktorer hand/arm - förekommer följande? Tiderna avser "per arbetsdag".'
);

/*Fråga 5.2*/
insert into RAMP1_Question(
Category_Nr, data
)Values(
5, '5.2 Påverkande fysiska faktorer övriga - förekommer följande? Tiderna avser "per arbetsdag"'
);

/*Fråga 5.3*/
insert into RAMP1_Question(
Category_Nr, data
)Values(
5, '5.3 Påverkande arbetsorganisatoriska och psykosociala faktorer - förekommer följande?'
);

/*Fråga 6.1*/
insert into RAMP1_Question(
Category_Nr, data
)Values(
6, '6.1 Finns dokumenterad rapportering (t ex tillbudsrapportering eller journalanteckningar) om
 fysiskt påfrestande arbetsmoment vid utförande av arbetsuppgiften? '
);

/*Fråga 6.2*/
insert into RAMP1_Question(
Category_Nr, data
)Values(
6, '6.2 Om "Ja" på 6.1 , vilken typ av arbete eller arbeten har medfört detta? Om "Nej", gå till 7'
);

/*Fråga 7.1*/
insert into RAMP1_Question(
Category_Nr, data
)Values(
7, '7.1 Finns det moment i arbetet som medför fysiskt obehag (t ex i muskler eller leder) under
 arbetsdagen? Svara "Ja" om någon arbetstagare upplever sådant obehag.'
);

/*Fråga 7.2*/
insert into RAMP1_Question(
Category_Nr, data
)Values(
7, '7.2 Om ja på fråga 7.1, vilket är det värsta momentet?'
);







/*Mall för att skapa ny question
Value1: Unik identifierare för kategorin
Value2: Strängen med frågan inom 'fråga'
insert into RAMP1_Question(
Category_Nr, data
)Values(
, ''
);
*/
