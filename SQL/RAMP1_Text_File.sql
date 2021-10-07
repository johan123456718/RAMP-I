create table RAMP1_Text_File(
Id int auto_increment,
Title_text varchar(255),
Body_Text text(655365),
primary key (id)
);

insert into ramp1_text_file(
Title_text, body_text
)values('Beskrivning av åtgärder i RAMPs Åtgärdsmodell',
'Sträva i första hand efter att eliminera risken, till exempel genom att finna tekniska lösningar eller ändrad arbetsteknik. Om
detta inte är görligt på grund av tekniska, organisatoriska, ekonomiska eller likande orsaker, arbeta med att reducera risken,
helst till låg (”grön”) risknivå. Olika typer av åtgärder behövs sannolikt för att minska risken och framgångsrika förbättringar
innefattar oftast arbete på olika områden. Tabell 1 nedan (baserad på RAMP:s Åtgärdsmodell, OSHAS 18001:2007 och
Arbetsmiljölagen) ger exempel på åtgärder på mer detaljerad nivå än Åtgärdsmodellens figur. Arbeta, lämpligen i hierarkisk
ordningsföljd inom vart och ett av de fem områdena. Kreativitet och öppenhet för förändring och nya idéer behövs ofta för att
nå fram till bra lösningar. Vissa förändringar kan leda till effekter på kort sikt, andra kan ge effekter på lång sikt. Skaderisken
påverkas av belastningen (såsom utvecklad kraft, kraftriktning och arbetsställning) och tidsaspekter (såsom varaktighet,
återhämtningstid och frekvens). Undvik att överföra en risk från en medarbetare till en annan och försök att undvika att
introducera nya risker när förändringar genomförs. Nya lösningar bör också bedömas ur ett riskperspektiv.
Förändringsarbetet är beroende av sammanhanget (kontexten), som kan beskrivas bestå av olika delar: Ekonomiskt (t ex
konjunktur); Juridiskt (t ex beroende på vilket land man verkar i); Bransch- (t ex, tekniknivå, konkurrenssituation och
vinstmarginaler i branschen); Samhälls- (t ex kultur, normer och praxis i samhället man verkar i); och Företags- (t ex kultur,
normer och praxis inom företaget).'
);
use db_example;

insert into ramp1_text_file(
Title_text, body_text
)values('Introduktion till RAMP I ',
'Denna checklista (RAMP I) är avsedd för identifiering och bedömning av belastningsergonomiska riskfaktorer vid arbete som innefattar manuell hantering och som kan öka risken
för belastningsbesvär. Manuell hantering innebär exempelvis att man lyfter, skjuter eller drar en last manuellt. Vid hög eller långvarig exponering av riskfaktorerna ökar risken att
utveckla eller förvärra belastningsbesvär.
Bedöm ett arbete eller en arbetsuppgift under en genomsnittlig arbetsdag. I vissa fall kan även extremfall som förekommer sällan behöva bedömas. Vid bedömningen, utgå från
en arbetstagare som är representativ för arbetslaget, alternativt två personer för att till del få med variationen i arbetslaget. Denna/dessa bör ha god erfarenhet av hur arbetet
ska utföras på ett lämpligt sätt. De som genomför bedömningen bör ha god kännedom om hur arbetet utförs. I annat fall bör bedömningen genomföras i samråd med en person
med sådan kompetens. Den som gör bedömningen bör ha genomgått grundläggande utbildning i belastningsergonomi, genomgått en introduktion i RAMP-metoden samt läst
igenom RAMP-manualen. Vid bedömningen, välj det alternativ som bäst stämmer överens med situationen och kryssa i ”Ja”- eller ”Nej”-rutan som hör till aktuell
fråga/påstående.
Resultatet visar om någon riskfaktor har identifierats eller ej. Om ingen riskfaktor har identifierats så bedöms risken för att utveckla belastningsbesvär vara låg för personer med
normal fysisk kapacitet. Om en eller flera riskfaktorer identifierats innebär det att det antingen finns en hög risk att utveckla belastningsbesvär, eller att det behövs en fördjupad
analys för att bedöma risknivån. En fördjupad analys kan göras med RAMP II-modulen i de flesta fallen. Resultatet från RAMP I bedömningen presenteras på tre risk- och
prioritetsnivåer:'
);

insert into ramp1_text_file(
Title_text, body_text
)values('Hög risk. ',
'Belastningarna i arbetet har en sådan storlek och karaktär att det finns en förhöjd risk att många arbetstagare utvecklar belastningsbesvär.
Förbättringsåtgärder bör ges hög prioritet.'
);

insert into ramp1_text_file(
Title_text, body_text
)values( 'Utred vidare', ' Det behövs en fördjupad analys för att bedöma risknivån. En fördjupad analys kan exempelvis göras med RAMP II-modulen.'
);

insert into ramp1_text_file(
Title_text, body_text
)values( 'Låg risk.', ' Belastningarna i arbetet har en sådan storlek och karaktär att risken att utveckla belastningsbesvär är låg för de flesta arbetstagarna. Risk
kan dock föreligga för personer med nedsatt fysisk kapacitet. Individuella förbättringsåtgärder kan behövas.'
);

insert into ramp1_text_file( body_text
)values( ' Resultatet är avsett att vara en del av beslutsunderlaget vid prioritering och val av åtgärder i arbetet att minska risken för belastningsbesvär'
);

insert into ramp1_text_file(
body_text
)values('Om åtgärdsförslagsfältet för ett område är tomt, bedöms inga åtgärder nödvändiga för det specifika riskområdet. Skriv ut de sidor som visar åtgärdsförslag. Sidnumret är synbart för varje område. Skriv alltid ut sida 1 som innehåller generell information. Notera att åtgärdsförslag endast ges för röda bedömningar. Grå bedömningar redovisas vidare.'
);


insert into ramp1_text_file(
Title_Text,
body_text
)values('Sida 1', 'Sträva efter att eliminera risken, till exempel genom att söka finna tekniska lösningar eller förändrad
arbetsteknik. Om detta inte är möjligt, pga tekniska, organisatoriska, ekonomiska eller liknande orsaker,
arbeta med att minska riskerna, helst till låg (”grön”) risknivå. Olika typer av åtgärder behövs sannolikt
för att minska risken. För att få lyckade förbättringar krävs ofta arbete inom flera områden. Kreativitet
och öppenhet för förändringar och nya idéer behövs ofta för att komma fram till bra lösningar. Vissa
förändringar kan leda till effekter på kort sikt, andra kan ge effekter på lång sikt. Skaderisken påverkas
av belastningen (såsom utvecklad kraft, kraftriktning och arbetsställning) och tidsaspekter (såsom
varaktighet, återhämtningstid och frekvens). Undvik att flytta risker från en medarbetare till en annan
och försök undvika att introducera nya risker när förändringar genomförs. Nya lösningar bör också
utvärderas ur ett riskperspektiv.
Förändringar beror på kontexten (sammanhanget), som kan beskrivas som bestående av olika delar:
den ekonomiska kontexten (t ex ekonomisk cykel); den juridiska kontexten (t ex beroende på vilket land
företaget är verksamt i); den sektoriella kontexten (t ex tekniknivå, konkurrenssituation och
vinstmarginaler i den sektorn); samhällskontexten (t ex kultur, standarder och praxis i samhället som
företaget är verksamt i) och företagskontexten (t ex kultur, standarder och praxis inom företaget).
RAMP:s Åtgärdsmodell (se fliken ”Åtgärdsmodell") ger en översikt av hur förändringar kan uppnås inom
de fem områdena Teknik & design, Organisation, Anställda, Miljö och Vision & strategier på företaget
och i den föreslås att man arbetar, förslagsvis i hierarkisk ordning, inom de fem olika områdena. Här
nedan ges exempel på förslag på åtgärder som skulle kunna vara applicerbara i den specifika situationen
för att minska risken som bedömts med RAMP I.'
);

/*Mall för att skapa ny question*/
/*Value1: Sträng med titeln in 'Title'*/
/*Value2: Strängen med textkroppen inom 'textkropp'*/
insert into ramp1_text_file(
Title_text, body_text
)values( '', ''
);

