Netlify länk: iridescent-macaron-7bb67d.netlify.app

[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/Y0f03qEq)

# Instruktioner

Denna uppgift går ut på att du bygga vidare uppgift u01 - Portfoliosida utifrån designskiss med Javascript. Du är nu fri att ändra till egen design / layout, samt eget innehåll. Det är dock viktigt att du behåller en sektion för CV ("About me") och en sektion med projekt ("Projects") eftersom du ska vidareutveckla sidan med Javascript på dessa sektioner.

## Vad du ska göra

Du ska bygga vidare på  u01 - Portfoliosida utifrån designskiss med Javascript. och se till att du följer följande kravställningar:

### CV i en fil:

Dina egna utbildningar och tidigare arbetsplatser ska nu ersätta "About me"-sidan. Ta med så mycket som möjligt att ditt "riktiga CV", men iallafall minst tre poster av varje.
Vilka utbildningar du läst och vilka tidigare arbeten du haft ska ligga i en separat fil i JSON-format. Denna JSON-fil ska läsas och och generera ditt CV på den tidigare motsvarigheten av "About me" sidan.

### Interaktiva scripts:

Din CV-sida ska innehålla minst två interaktiva JavaScript. Exempel kan vara en modal, slideshow, scroll-effekt, dölja/visa element, o.s.v

### Portfolio:

Du publicerar minst två uppgifter / projekt från tidigare eller nuvarande studier / arbete inom HTML /CSS

### 👉  VG-krav

Din portfolio ska utökas så att den hämtar in publika projekt som finns i din egen Github via API. Den ska visa dessa projekt i din portfolio med namn och beskrivning.

Du får gärna ha både dessa projekt och andra som genereras utifrån JSON-data om du känner för det, eller så ersätter du projekten så det bara är dina Github-projekt. Eventuellt kan du behöva komplettera datan från Github API med t.ex bilder ifrån JSON-datan.

När hämtningen av projekten sker ska det finnas information om att projekten håller på att ladda in så att besökaren inte undrar varför sidan först är tom.

### Tekniska krav:

- Validerad med 0 fel på https://validator.w3.org
- Inga errors i Console

### Sammantfattning av projekt + teoretiska frågor

1. Du sammanfattar ditt projekt i README.md och reflekterar kring styrkor och ev brister. Max 500 ord.

Jag gjorde valet att spara min gamla version av figma skissen istället för att göra en ny sida.
Detta var för att spara tid och även uppdatera det jag kände att sidan saknade för att göra den mer personlig.

Mitt arbete har gått bra med att lägga in interaktiva funktioner med en slideshow på profilbilden i index.html och
även en funkation för att kunna visa och dölja navigeringsfältet(nav).

Arbetet med github-API gick bra. Jag fick idén för en lösning där jag använder variabeln index för att ge unika
klasser till de olika elementen i varje projekt som jag fetchar från API.
Detta gjorde jag med en for-each funktion som anropas för varje projekt som också ökar “index” variabeln
och detta betyder att jag kunde döpa det specifika projektets klasser till namnet på github repot.
En utmaning med github api är att github inte låter mig skicka för många förfrågningar om info från github.
Detta leder till att då och då så får man inte infon man behöver för att få projektsidan att fungera korrekt,
och istället får ett felmeddelande i konsolen(felmeddelande: 403). Från det jag förstod så var det vitala problemet
att jag först frågar om mina repositories men även frågar om techstack från github api:n, detta leder till ca 10
förfrågningar per refresh av sidan. för att motverka detta så har jag ändrat Texten som visas till error meddelandet,
så man snabbare kan förstå vad som har gått fel. Jag gjorde detta via catch i async-funktionen.

Jag förstod även att med många projekt så kan det även bli väldigt många bilder,
och detta kan leda till sämre prestanda så har jag även lagt “loading=”lazy” på alla bilder efter det första 6
på grund av att dem behöver laddas in med att man går in på sidan.

Min css-fil var väldigt full med all style kod för alla 5 html filer.
Det jag gjorde var att dela upp css filen i 5 nya men även sparat den gamla filen för style kod som används
på alla sidor samt dark mode.

2. Du svarar på dessa frågor (max 800 ord):

Vad kan man utveckla m.h.a av Javascript inom frontend?

Javascript används för att skapa interaktiva sidor med hjälp av att manipulera DOM(Document Object Model).
Detta betyder att man med hjälp av javascript skapar knappar/interactiva element.
API förfrågningar används ofta inom Javascript för att hämta information från filer och sidor
för att visa informationen på sidan.

Detta betyder att sidor som behöver interaktiva funktioner kommer att behöva
javascript(via vanilla javascript eller ramverk som React) som i sig kommer med punkter
som prestanda och SEO för att skapa en sida som kan användas på webben.
prestanda är viktigt för html, css och javascript men med funktioner och skapandet av element inom
javascript så kan det leda till att sidan tar tid innan sidan laddas in, detta kan indirekt skada
sidan pga att användaren som behöver vänta på att sidan laddas in och i sin tur ha en dålig user experience.

Vad är JSON och hur används det inom frontend?

JSON står för Javascript Object Notation och är ett textbaserat dataformat för att kunna spara och skicka
information till sidan när det får förfrågan via await fetch eller en promise. sedan kan utvecklaren som har
frågat om infon koppla det till kod och visa upp det eller använda koden för att på något sätt interagera med
sidans variabler och funktioner.

Ett exempel på detta är hur jag använde en JSON-fil via min about.html kod. Där jag skapade en nyckel för värdet på namnen på mina tidigare yrken.

Syntax: “ {"workExp": ["work": "Kundservice/Techsupport"]} ”

där jag kan hämta namnet via “workExp.work” och sedan visa namnet i html via javascript.

Vid läge där man jobbar med JSON filer så använder man ofta “JSON.parse” och JSON.stringify”, för att konvertera mellan
Javascript objekt och json-sträng.

Vad är HTTP och varför bör man som frontendutvecklare ha kunskap om det och dess protokoll?

HTTP står för Hypertext Transfer Protocol.
Detta protokoll används för att överföra data mellan server och klient
och då kunna ansluta till webbsidor som ligger på en server med hjälp av en URL.
Datan skickas via TCP(Transmission Control Protocol) som skickar datan mellan IP-aresser.
Alternativt så finns även HTTPS som är säkrare än HTTP.

Vanliga HTTP metoder:
Get - Används för att hämta data från servern
Post - Används för att skicka data
Delete - Används för att ta bort data
Put - används för att ändra/uppdatera data

Detta är viktigt för en frontendutvecklare för att kunna skapa säkra sidor som skyddar lösenord och känslig information,
men även kunna skapa kod som talar med backend och då servrar på ett effektivt sätt.

## Kriterier för bedömning

Icke Godkänd (IG), Godkänd (G) eller Väl Godkänd (VG)

### Godkänd (G)

Din portfolio-sida uppfyller alla krav enligt kravspecifikationen.
Du visar att du kan utan allvarliga brister eller missar utveckla denna portfoliosida enligt kraven
Du sammanfattar ditt projekt samt ger ett översiktligt och korrekt svar på frågorna

### Väl Godkänd (VG)

Din portfolio-sida uppfyller alla krav enligt kravspecifikationen samt VG-kraven
Du uppvisar en mer avancerad förståelse för Git genom att jobba med en developer-branch som du sedan mergar i main
Du visar att du kan utan brister, eller bara i sådan omfattning att de knappt märks eller påverkar slutresultatet

### Börja uppgift / Din inlämning

- Du börjar och lämnar in din uppgift genom Github Classroom på denna länk.
- Återkoppling ges i Canvas

#
