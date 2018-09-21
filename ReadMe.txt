Project dRainbow

I dette prosjektet skulle vi lage en hjemmeside der brukeren skal kunne velge blant 3 kategorier av bilder, 3 kategorier av lyd og 3 kategorier av tekst, og basert på disse valgene få generert en utstilling med minimum 4 kombinasjoner av et bilde, en tekst og en lyd. Vi valgte å tolke dette slik at vi skulle ha 12 forskjellige filer av hvert medium.

Built With

React
Ajax
Node.js
CSS

Valg:

Det første vi gjorde som en gruppe, var å tegne opp alternative designløsninger. Vi ble raskt enige om å gå for en løsning hvor bildet var i fullskjerm, med tekst i forgrunnen, og en liten knapp for å skru av og på lyd. Det skulle på venstre side være en meny-knapp, og hvis man trykte på den, skulle en meny med de forskjellige medie-valgene dukke opp. På mobilversjonen skulle det være mulig å swipe for å se de 4 forskjellige utstillingene, mens man skulle ha enkle knapper for å bytte mellom de forskjellige utstillingene på tab og desktop-siden. Nederst på siden ønsket vi å ha en indikator i form at små "dots" for å indikere hvilken av de 4 utstillingene brukeren var på.

Da et gruppemedlem ble syk, innså man at det ikke ville bli tid til å få estetikken vi ville ha på plass, og vi måtte fokusere på funksjonalitet. Derfor valgte vi senere å bruke tabs for å bytte mellom utstillingene, fremfor swipe og knapper. Vi valgte også å ha en dropdownmeny for medievalget fordi det tok mindre plass, og vi mente det så finere ut enn å ha alle valgene synlig hele tiden.

CSS-grid ble brukt fremfor CSS flexbox, fordi vi ønsket å designe nettsiden på en to-dimensjonal måte, og flexbox kun ga oss mulighet til å designe éndimensjonalt. Vi valgte å ha tre json filer for hvert
medieelement siden det virket som den enkleste løsningen, og ingen av gruppemedlemmene hadde noen erfaring med ajax og react.


Grunnet tidspresset ble det ikke tid til mye testing, men fokuset ble på å få til et responsivt design. Ideelt skulle vi ønske at vi fikk valgt ut bilder, tekst og lyd som ville gitt et mer helhetlig intrykk, men vi måtte først og fremst fokusere på å få et produkt som svarte på alle tekniske krav.

Test:
Vi testet på firefox, chrome og edge, der vi så etter forskjeligheter fra utseende, og funksjonalitetet for nettsiden oppførte seg likt på de forskjellige browserne. Testing av ressponsiv desing på inspisert på chorme siden vi hadde knapt med tid. Resultate fra browser var likt på alle sider, men responsiv desgin var det ikke så bra siden vi hadde veldig knapt med til å fikse promblemene vi fant, så fikk ikke fikset det til en optimal løsning som vi hadde ønsket.

Authors

Ingrid Gormsdatter Draagen
Olav N Sole
Daniel Stupar
