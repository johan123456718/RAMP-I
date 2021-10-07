create table RAMP1_Statement (
Statement_Nr int auto_increment,
Question_Nr int,
data varchar(255),
primary key (Statement_Nr),
foreign key (Question_Nr) references RAMP1_Question(Question_Nr)
);


/*Fråga 1.1*/
insert into ramp1_statement(
Question_Nr, data
)Values(
1, 'huvudet bakåtböjt'
);
insert into ramp1_statement(
Question_Nr, data
)Values(
1, 'ryggen/överkroppen böjd eller vriden - framåt, bakåt eller åt sidan'
);
insert into ramp1_statement(
Question_Nr, data
)Values(
1, 'armen nästan eller helt sträckt framåt (handen mer än cirka 45 cm från ryggraden)'
);
insert into ramp1_statement(
Question_Nr, data
)Values(
1, 'handen över axelhöjd eller under knähöjd'
);
insert into ramp1_statement(
Question_Nr, data
)Values(
1, 'handen/armen utåtförd åt sidan (åt höger eller vänster)'
);

/* Fråga 1.2*/
insert into ramp1_statement(
Question_Nr, data
)Values(
2, 'huvudet tydligt vridet eller böjt - framåt eller åt sidan'
);
insert into ramp1_statement(
Question_Nr, data
)Values(
2, 'handen tydligt böjd uppåt, neråt eller åt sidan'
);
insert into ramp1_statement(
Question_Nr, data
)Values(
2, 'benen eller fötterna har otillräcklig plats, eller underlaget är instabilt eller sluttande'
);

/*Fråga 2.1*/
insert into ramp1_statement(
Question_Nr, data
)Values(
3, 'arbetscykeln är kortare än 30 sekunder'
);
insert into ramp1_statement(
Question_Nr, data
)Values(
3, 'arbetscykeln är mellan 30 sekunder och 5 minuter'
);
insert into ramp1_statement(
Question_Nr, data
)Values(
3, 'likartade arbetsrörelser upprepas mer än 1/10 upp till halva arbetscykeln'
);
insert into ramp1_statement(
Question_Nr, data
)Values(
3, 'likartade arbetsrörelser upprepas mer än halva arbetscykeln'
);

/*Fråga 2.2*/
insert into ramp1_statement(
Question_Nr, data
)Values(
4, 'arbetet eller likartade arbetsuppgifter pågår mellan 1 och 4 timmar per arbetsdag'
);
insert into ramp1_statement(
Question_Nr, data
)Values(
4, 'arbetet eller likartade arbetsuppgifter pågår mer än 4 timmar per arbetsdag'
);

/*Fråga 3.1*/

/*Fråga 3.2*/
insert into ramp1_statement(
Question_Nr, data
)Values(
6, 'under 3 kg'
);
insert into ramp1_statement(
Question_Nr, data
)Values(
6, '- mer än 100 gånger per arbetsdag'
);
insert into ramp1_statement(
Question_Nr, data
)Values(
6, '3-7 kg'
);
insert into ramp1_statement(
Question_Nr, data
)Values(
6, '- mer än 40 gånger per arbetsdag'
);
insert into ramp1_statement(
Question_Nr, data
)Values(
6, 'över 7 kg - 14 kg'
);
insert into ramp1_statement(
Question_Nr, data
)Values(
6, '- mer än 20 gånger per arbetsdag'
);
insert into ramp1_statement(
Question_Nr, data
)Values(
6, 'över 14 kg - 25 kg'
);
insert into ramp1_statement(
Question_Nr, data
)Values(
6, '- mer än 5 gånger per arbetsdag'
);
insert into ramp1_statement(
Question_Nr, data
)Values(
6, 'över 25 kg'
);

/*Fråga 3.3*/
insert into ramp1_statement(
Question_Nr, data
)Values(
7, 'ryggen/överkroppen tydligt böjd'
);
insert into ramp1_statement(
Question_Nr, data
)Values(
7, 'ryggen/överkroppen tydligt vriden'
);
insert into ramp1_statement(
Question_Nr, data
)Values(
7, 'handen över axelhöjd'
);
insert into ramp1_statement(
Question_Nr, data
)Values(
7, 'handen under knähöjd'
);
insert into ramp1_statement(
Question_Nr, data
)Values(
7, 'handen utanför underarmsavstånd'
);
insert into ramp1_statement(
Question_Nr, data
)Values(
7, 'handen/armen tydligt utåtförd åt sidan (åt höger eller vänster)'
);
insert into ramp1_statement(
Question_Nr, data
)Values(
7, 'lyft/hållande med överhandsgrepp (med handflatan nedåt)'
);
insert into ramp1_statement(
Question_Nr, data
)Values(
7, 'enhandslyft där lastens vikt överstiger 6 kg'
);
insert into ramp1_statement(
Question_Nr, data
)Values(
7, 'lyft sittandes där lastens vikt överstiger 7 kg'
);

/*fråga 4.1*/

/*fråga 4.2*/
insert into ramp1_statement(
Question_Nr, data
)Values(
9, 'igångsättningskraften överstiger 150 Newton'
);
insert into ramp1_statement(
Question_Nr, data
)Values(
9, 'igångsättningskraften överstiger 300 Newton'
);
insert into ramp1_statement(
Question_Nr, data
)Values(
9, 'den kontinuerliga kraften överstiger 100 Newton'
);
insert into ramp1_statement(
Question_Nr, data
)Values(
9, 'den kontinuerliga kraften överstiger 200 Newton'
);

/*Fråga 4.3*/
insert into ramp1_statement(
Question_Nr, data
)Values(
10, 'grepphöjden avviker tydligt från armbågshöjd'
);
insert into ramp1_statement(
Question_Nr, data
)Values(
10, 'arbetet sker med ryggen/överkroppen tydligt vriden'
);
insert into ramp1_statement(
Question_Nr, data
)Values(
10, 'kraftutövningen sker åt sidan eller uppåt (dvs. ej rakt framåt eller rakt bakåt)'
);
insert into ramp1_statement(
Question_Nr, data
)Values(
10, 'kraftutövningen sker med en hand'
);
insert into ramp1_statement(
Question_Nr, data
)Values(
10, 'skjuta- eller dra-arbetet sker ofta (ca 100 gånger eller mer per arbetsdag)'
);
insert into ramp1_statement(
Question_Nr, data
)Values(
10, 'förflyttningen överstiger 30 meter'
);

/*Fråga 4.4*/
insert into ramp1_statement(
Question_Nr, data
)Values(
11, 'arbetstagaren "bär upp" hela/en del av lastens vikt och lastens vikt överstiger 100 kg'
);

/*Fråga 5.1*/
insert into ramp1_statement(
Question_Nr, data
)Values(
12, 'arbetstagaren utsätts för hand-armvibrationer mer än 20 minuter (10 min för kraftigt vib.)'
);
insert into ramp1_statement(
Question_Nr, data
)Values(
12, 'arbetstagaren utsätts för hand-armvibrationer mer än 90 minuter (60 min för kraftigt vib.)'
);
insert into ramp1_statement(
Question_Nr, data
)Values(
12, 'föremål som är varma eller kalla hanteras manuellt '
);
insert into ramp1_statement(
Question_Nr, data
)Values(
12, 'handen används som slående verktyg ofta eller länge*'
);
insert into ramp1_statement(
Question_Nr, data
)Values(
12, 'hållande av handverktyg som väger mer än 2,3 kg i mer än 30 minuter'
);
insert into ramp1_statement(
Question_Nr, data
)Values(
12, 'hållande av precisionsverktyg som väger mer än 0,4 kg i mer än 30 minuter'
);

/*Fråga 5.2*/
insert into ramp1_statement(
Question_Nr, data
)Values(
13, 'arbetstagaren utsätts för helkroppsvibrationer mer än 1 timme'
);
insert into ramp1_statement(
Question_Nr, data
)Values(
13, 'arbetstagaren utsätts för helkroppsvibrationer mer än 6 timmar'
);
insert into ramp1_statement(
Question_Nr, data
)Values(
13, 'synförhållandena är otillräckliga för arbetsuppgiften'
);
insert into ramp1_statement(
Question_Nr, data
)Values(
13, 'arbetet sker i varm eller kall temperatur eller i drag'
);
insert into ramp1_statement(
Question_Nr, data
)Values(
13, 'stående eller gående på hårt underlag mer än halva arbetsdagen'
);
insert into ramp1_statement(
Question_Nr, data
)Values(
13, 'stillasittande arbete utan möjlighet att växla till stående arbete'
);
insert into ramp1_statement(
Question_Nr, data
)Values(
13, 'stillastående arbete utan möjlighet av växla till sittande arbete'
);
insert into ramp1_statement(
Question_Nr, data
)Values(
13, 'knästående/huksittande mer än 30 gånger eller mer än 30 minuter'
);

/*Fråga 5.3*/
insert into ramp1_statement(
Question_Nr, data
)Values(
14, 'det saknas möjlighet att påverka i vilket tempo arbetet utförs'
);
insert into ramp1_statement(
Question_Nr, data
)Values(
14, 'det saknas möjlighet att påverka hur arbetet är upplagt eller hur det ska utföras'
);
insert into ramp1_statement(
Question_Nr, data
)Values(
14, 'det är ofta svårt att hinna med arbetsuppgifterna'
);
insert into ramp1_statement(
Question_Nr, data
)Values(
14, 'arbetstagarna arbetar ofta snabbt (jobbar in) för att kunna ta längre rast/paus'
);
insert into ramp1_statement(
Question_Nr, data
)Values(
14, 'det saknas möjlighet till återhämtning under arbetets gång (som ej är rast)'
);

/*Fråga 6.1*/

/*Fråga 6.2*/
insert into ramp1_statement(
Question_Nr, data
)Values(
16, 'lyft '
);
insert into ramp1_statement(
Question_Nr, data
)Values(
16, 'hålla/bära'
);
insert into ramp1_statement(
Question_Nr, data
)Values(
16, 'skjuta/dra'
);
insert into ramp1_statement(
Question_Nr, data
)Values(
16, 'tryck med hand eller fingrar'
);
insert into ramp1_statement(
Question_Nr, data
)Values(
16, 'annat: (om ja, ersätt denna text)'
);

/*Fråga 7.1*/

/*Fråga 7.2*/
insert into ramp1_statement(
Question_Nr, data
)Values(
18, 'Person'
);
insert into ramp1_statement(
Question_Nr, data
)Values(
18, 'Person'
);
insert into ramp1_statement(
Question_Nr, data
)Values(
18, 'Person'
);
insert into ramp1_statement(
Question_Nr, data
)Values(
18, 'Person'
);
insert into ramp1_statement(
Question_Nr, data
)Values(
18, 'Person'
);


/*Mall för att skapa ny question*/
/*Value1: Unik identifierare för kategorin*/
/*Value2: Strängen med frågan inom 'fråga'*/
insert into ramp1_statement(
Question_Nr, data
)Values(
, ''
);
















