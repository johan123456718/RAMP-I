use db_example;
/*Contains code to insert all information needed to display result tab in react,
Execute from the top each part individually before next. 
1: RAMP1_ResultCategory
2: RAMP1_ResultQuestion
3: RAMP1_ResultStatement*/

create table RAMP1_Result_Question (
Question_Nr int auto_increment,
Category_Nr int, 
data varchar(255) NOT NULL UNIQUE,
primary key (Question_Nr),
foreign key (Category_Nr) references RAMP1_Category(Category_Nr)
);

create table RAMP1_Result_Statement (
Statement_Nr int auto_increment,
Question_Nr int,
data varchar(255),
primary key (Statement_Nr),
foreign key (Question_Nr) references RAMP1_Result_Question(Question_Nr)
);

/*Data for questions*/
/*Fråga 1.1*/
insert into RAMP1_Result_Question(
Category_Nr, data
)Values(
1, '1.1 Förekommer arbete ofta eller länge* i nedanstående ogynnsamma arbetsställningar?'
);

/*Fråga 1.2*/
insert into RAMP1_Result_Question(
Category_Nr, data
)Values(
1, '1.2 Förekommer arbete i någon/några av nedanstående ogynnsamma arbetsställningar cirka 1 timme eller mer per arbetsdag?'
);

/*Fråga 2.1 & 2.2*/
insert into RAMP1_Result_Question(
Category_Nr, data
)Values(
2, '2.1 & 2.2 Arbetsrörelser och repetitivitet?'
);

/*Fråga 3.1*/
insert into RAMP1_Result_Question(
Category_Nr, data
)Values(
3, '3.1 Förekommer lyft av laster?'
);

/*Fråga 3.2*/
insert into RAMP1_Result_Question(
Category_Nr, data
)Values(
3, '3.2 Hur tunga är lasterna och hur ofta lyfts de? '
);

/*Fråga 3.3*/
insert into RAMP1_Result_Question(
Category_Nr, data
)Values(
3, '3.3 Förekommer lyften generellt i nedanstående ogynnsamma arbetsställningar? '
);

/*Fråga 4.1*/
insert into RAMP1_Result_Question(
Category_Nr, data
)Values(
4, '4.1 Förekommer skjuta- eller dra-arbete?'
);

/*Fråga 4.2*/
insert into RAMP1_Result_Question(
Category_Nr, data
)Values(
4, '4.2 Hur stor är den utvecklade kraften vid skjuta- eller dra-arbetet? '
);

/*Fråga 4.3*/
insert into RAMP1_Result_Question(
Category_Nr, data
)Values(
4, '4.3 Förekommer skjuta- eller dra-arbetet generellt under nedanstående ogynnsamma förutsättningar? '
);

/*Fråga 4.4*/
insert into RAMP1_Result_Question(
Category_Nr, data
)Values(
4, ' 4.4 Lastbärare med 1-2 hjul (t ex pirra) eller liknande med lastvikt > 100 kg?'
);


/*Fråga 5.1*/
insert into RAMP1_Result_Question(
Category_Nr, data
)Values(
5, '5.1 Påverkande fysiska faktorer hand/arm - förekommer följande? Tiderna avser "per arbetsdag"'
);

/*Fråga 5.2*/
insert into RAMP1_Result_Question(
Category_Nr, data
)Values(
5, '5.2 Påverkande fysiska faktorer övriga - förekommer följande? Tiderna avser "per arbetsdag".'
);

/*Fråga 5.3*/
insert into RAMP1_Result_Question(
Category_Nr, data
)Values(
5, '5.3 Påverkande arbetsorganisatoriska och psykosociala faktorer  - förekommer följande?'
);


/*Fråga 6.1*/
insert into RAMP1_Result_Question(
Category_Nr, data
)Values(
6, '6.1 Finns dokumenterad rapportering (t ex tillbudsrapportering eller journalanteckningar) om fysiskt påfrestande arbetsmoment vid utförande av arbetsuppgiften?'
);

/*Fråga 6.2*/
insert into RAMP1_Result_Question(
Category_Nr, data
)Values(
6, '6.2  Om "Ja" på 6.1 , vilken typ av arbete eller arbeten har medfört detta?'
);


/*Fråga 7.1*/
insert into RAMP1_Result_Question(
Category_Nr, data
)Values(
7, '7.1  Finns det moment i arbetet som medför fysiskt obehag (t ex i muskler eller leder) under arbetsdagen?'
);

/*Fråga 7.2*/
insert into RAMP1_Result_Question(
Category_Nr, data
)Values(
7, '7.2  Om "Ja" på fråga 7.1, vilket är det värsta momentet?'
);


/*Data for statements*/
/*Fråga 1.1*/
insert into RAMP1_Result_Statement(
Question_Nr, data
)Values(
1, 'huvudet bakåtböjt'
);
insert into RAMP1_Result_Statement(
Question_Nr, data
)Values(
1, 'ryggen/överkroppen böjd eller vriden - framåt, bakåt eller åt sidan'
);
insert into RAMP1_Result_Statement(
Question_Nr, data
)Values(
1, 'armen nästan eller helt sträckt framåt (handen mer än cirka 45 cm från ryggraden)'
);
insert into RAMP1_Result_Statement(
Question_Nr, data
)Values(
1, 'handen över axelhöjd eller under knähöjd'
);
insert into RAMP1_Result_Statement(
Question_Nr, data
)Values(
1, 'handen/armen utåtförd åt sidan (åt höger eller vänster)'
);

/* Fråga 1.2*/
insert into RAMP1_Result_Statement(
Question_Nr, data
)Values(
2, 'huvudet tydligt vridet eller böjt - framåt eller åt sidan'
);
insert into RAMP1_Result_Statement(
Question_Nr, data
)Values(
2, 'handen tydligt böjd uppåt, neråt eller åt sidan'
);
insert into RAMP1_Result_Statement(
Question_Nr, data
)Values(
2, 'benen eller fötterna har otillräcklig plats, eller underlaget är instabilt eller sluttande'
);

/*Fråga 2.1*/

/*Fråga 2.2*/

/*Fråga 3.1*/

/*Fråga 3.2*/
insert into RAMP1_Result_Statement(
Question_Nr, data
)Values(
5, 'under 3 kg och mer än 100 gånger per arbetsdag'
);
insert into RAMP1_Result_Statement(
Question_Nr, data
)Values(
5, '3-7 kg och mer än 40 gånger per arbetsdag'
);
insert into RAMP1_Result_Statement(
Question_Nr, data
)Values(
5, 'över 7 kg - 14 kg mer än 20 gånger per arbetsdag'
);
insert into RAMP1_Result_Statement(
Question_Nr, data
)Values(
5, 'över 14 kg - 25 kg mer än 5 gånger per arbetsdag'
);
insert into RAMP1_Result_Statement(
Question_Nr, data
)Values(
5, 'över 25 kg'
);

/*Fråga 3.3*/
insert into RAMP1_Result_Statement(
Question_Nr, data
)Values(
6, 'ryggen/överkroppen tydligt böjd'
);
insert into RAMP1_Result_Statement(
Question_Nr, data
)Values(
6, 'ryggen/överkroppen tydligt vriden'
);
insert into RAMP1_Result_Statement(
Question_Nr, data
)Values(
6, 'handen över axelhöjd'
);
insert into RAMP1_Result_Statement(
Question_Nr, data
)Values(
6, 'handen under knähöjd'
);
insert into RAMP1_Result_Statement(
Question_Nr, data
)Values(
6, 'handen utanför underarmsavstånd'
);
insert into RAMP1_Result_Statement(
Question_Nr, data
)Values(
6, 'handen/armen tydligt utåtförd åt sidan (åt höger eller vänster)'
);
insert into RAMP1_Result_Statement(
Question_Nr, data
)Values(
6, 'lyft/hållande med överhandsgrepp (med handflatan nedåt)'
);
insert into RAMP1_Result_Statement(
Question_Nr, data
)Values(
6, 'enhandslyft där lastens vikt överstiger 6 kg'
);
insert into RAMP1_Result_Statement(
Question_Nr, data
)Values(
6, 'lyft sittandes där lastens vikt överstiger 7 kg'
);

/*fråga 4.1*/

/*fråga 4.2*/
insert into RAMP1_Result_Statement(
Question_Nr, data
)Values(
8, 'igångsättningskraft'
);
insert into RAMP1_Result_Statement(
Question_Nr, data
)Values(
8, 'kontinuerlig kraft'
);

/*Fråga 4.3*/
insert into RAMP1_Result_Statement(
Question_Nr, data
)Values(
9, 'grepphöjden avviker tydligt från armbågshöjd'
);
insert into RAMP1_Result_Statement(
Question_Nr, data
)Values(
9, 'arbetet sker med ryggen/överkroppen tydligt vriden'
);
insert into RAMP1_Result_Statement(
Question_Nr, data
)Values(
9, 'kraftutövningen sker åt sidan eller uppåt (dvs. ej rakt framåt eller rakt bakåt)'
);
insert into RAMP1_Result_Statement(
Question_Nr, data
)Values(
9, 'kraftutövningen sker med en hand'
);
insert into RAMP1_Result_Statement(
Question_Nr, data
)Values(
9, 'skjuta- eller dra-arbetet sker ofta (ca 100 gånger eller mer per arbetsdag)'
);
insert into RAMP1_Result_Statement(
Question_Nr, data
)Values(
9, 'förflyttningen överstiger 30 meter'
);

/*Fråga 4.4*/

/*Fråga 5.1*/
insert into RAMP1_Result_Statement(
Question_Nr, data
)Values(
11, 'arbetstagaren utsätts för hand-armvibrationer'
);
insert into RAMP1_Result_Statement(
Question_Nr, data
)Values(
11, 'föremål som är varma eller kalla hanteras manuellt '
);
insert into RAMP1_Result_Statement(
Question_Nr, data
)Values(
11, 'handen används som slående verktyg ofta eller länge*'
);
insert into RAMP1_Result_Statement(
Question_Nr, data
)Values(
11, 'hållande av handverktyg som väger mer än 2,3 kg i mer än 30 minuter'
);
insert into RAMP1_Result_Statement(
Question_Nr, data
)Values(
11, 'hållande av precisionsverktyg som väger mer än 0,4 kg i mer än 30 minuter'
);

/*Fråga 5.2*/
insert into RAMP1_Result_Statement(
Question_Nr, data
)Values(
12, 'arbetstagaren utsätts för helkroppsvibrationer'
);
insert into RAMP1_Result_Statement(
Question_Nr, data
)Values(
12, 'synförhållandena är otillräckliga för arbetsuppgiften'
);
insert into RAMP1_Result_Statement(
Question_Nr, data
)Values(
12, 'arbetet sker i varm eller kall temperatur eller i drag'
);
insert into RAMP1_Result_Statement(
Question_Nr, data
)Values(
12, 'stående eller gående på hårt underlag mer än halva arbetsdagen'
);
insert into RAMP1_Result_Statement(
Question_Nr, data
)Values(
12, 'stillasittande arbete utan möjlighet att växla till stående arbete'
);
insert into RAMP1_Result_Statement(
Question_Nr, data
)Values(
12, 'stillastående arbete utan möjlighet av växla till sittande arbete'
);
insert into RAMP1_Result_Statement(
Question_Nr, data
)Values(
12, 'knästående/huksittande mer än 30 gånger eller mer än 30 minuter'
);

/*Fråga 5.3*/
insert into RAMP1_Result_Statement(
Question_Nr, data
)Values(
13, 'det saknas möjlighet att påverka i vilket tempo arbetet utförs'
);
insert into RAMP1_Result_Statement(
Question_Nr, data
)Values(
13, 'det saknas möjlighet att påverka hur arbetet är upplagt eller hur det ska utföras'
);
insert into RAMP1_Result_Statement(
Question_Nr, data
)Values(
13, 'det är ofta svårt att hinna med arbetsuppgifterna'
);
insert into RAMP1_Result_Statement(
Question_Nr, data
)Values(
13, 'arbetstagarna arbetar ofta snabbt (jobbar in) för att kunna ta längre rast/paus'
);
insert into RAMP1_Result_Statement(
Question_Nr, data
)Values(
13, 'det saknas möjlighet till återhämtning under arbetets gång (som ej är rast)'
);

/*Fråga 6.1*/

/*Fråga 6.2*/
insert into RAMP1_Result_Statement(
Question_Nr, data
)Values(
15, 'lyft '
);
insert into RAMP1_Result_Statement(
Question_Nr, data
)Values(
15, 'hålla/bära'
);
insert into RAMP1_Result_Statement(
Question_Nr, data
)Values(
15, 'skjuta/dra'
);
insert into RAMP1_Result_Statement(
Question_Nr, data
)Values(
15, 'tryck med hand eller fingrar'
);

/*Fråga 7.1*/

/*Fråga 7.2*/
insert into RAMP1_Result_Statement(
Question_Nr, data
)Values(
17, 'Person'
);
