(() => {
  const translations = {
    "Om mig": "About me",
    "Välkommen hit!": "Welcome!",
    "är en": "is a",
    "produkt designer": "product designer",
    "är en produkt designer": "is a product designer",
    "är en\nprodukt designer": "is a\nproduct designer",
    "Designsystem": "Design system",
    "Tog fram ett skalbart designsystem anpassat för flera varumärken.": "Created a scalable design system adapted for multiple brands.",
    "Designade en plattform som samlar hela bilaffären i ett gemensamt verktyg.": "Designed a platform that brings the entire vehicle sales process into one shared tool.",
    "Designade ett digitalt verktyg för rådgivare att använda tillsammans med kunden.": "Designed a digital tool for advisers to use together with their customers.",

    "Ett skalbart designsystem för flera varumärken": "A scalable design system for multiple brands",
    "Hur bygger man ett designsystem som kan växa i takt med att produkten gör det?": "How do you build a design system that can grow alongside the product?",
    "Jag tog fram designsystemet för Toyotas nya plattform, med fokus på att bygga en gemensam och hållbar designgrund. Systemet behövde kunna växa med produkten, återanvändas i nya delar av plattformen och samtidigt anpassas till olika varumärkens visuella uttryck.": "I created the design system for Toyota's new platform, focusing on a shared and sustainable design foundation. The system needed to grow with the product, be reused across new areas of the platform and adapt to the visual identities of different brands.",
    "Primitive tokens": "Primitive tokens",
    "Jag började med att definiera systemets grundläggande färgpalett och strukturerade färgerna som lokala variabler i Figma. Dessa blev grunden för systemets semantiska tokens.": "I started by defining the system's core colour palette and structured the colours as local variables in Figma. These became the foundation for the system's semantic tokens.",
    "Semantic tokens": "Semantic tokens",
    "Jag skapade semantiska tokens som beskriver färger utifrån deras funktion i gränssnittet, snarare än deras specifika färgvärde. Det gjorde systemet enklare att förstå och gav design och utveckling ett gemensamt språk.": "I created semantic tokens that describe colours by their function in the interface rather than by a specific colour value. This made the system easier to understand and gave design and development a shared language.",
    "Tokenstrukturen och namngivningen tog jag fram i nära samarbete med utvecklarna, så att färger, typografi och andra värden följde samma logik i design och kod.": "I developed the token structure and naming in close collaboration with the developers, ensuring that colours, typography and other values followed the same logic in design and code.",
    "Brand tokens": "Brand tokens",
    "För att samma designsystem skulle fungera för flera varumärken skapade jag brand tokens med separata modes. Dessa kopplades till komponenter som bär varumärkets identitet, exempelvis knappar och navigation.": "To make the same design system work across multiple brands, I created brand tokens with separate modes. These were connected to components that carry the brand identity, such as buttons and navigation.",
    "Genom att byta brand mode uppdateras färgerna automatiskt i alla kopplade komponenter. Samma komponenter och gränssnitt kan därför återanvändas utan att skapa separata versioner för varje varumärke.": "Changing the brand mode automatically updates the colours in every connected component. The same components and interfaces can therefore be reused without creating separate versions for each brand.",
    "Komponenter": "Components",
    "Jag skapade component tokens för återkommande egenskaper som radius, spacing, padding och ikonstorlek. Genom att koppla dem till gemensamma grundvärden kunde förändringar göras centralt och slå igenom i hela systemet.": "I created component tokens for recurring properties such as radius, spacing, padding and icon size. By linking them to shared base values, changes could be made centrally and applied throughout the system.",
    "Komponenterna byggdes med variants och properties för att hantera olika states, storlekar och innehåll utan att skapa onödiga dubbletter.": "The components were built with variants and properties to handle different states, sizes and content without creating unnecessary duplicates.",
    "Typografi, Ikoner, skuggor": "Typography, icons and shadows",
    "Jag definierade gemensamma principer för typografi, ikoner och effekter för att skapa ett konsekvent visuellt uttryck. Tillgänglighet vägdes in i bland annat kontraster, typografiska val och storlekar.": "I defined shared principles for typography, icons and effects to create a consistent visual expression. Accessibility was considered in contrast, typographic choices and sizing.",
    "Ett system att bygga vidare på": "A system to build on",
    "Resultatet blev en gemensam grund där tokens, komponenter och brand modes hänger ihop i ett system. Det gjorde det möjligt att återanvända samma designlogik genom plattformen och samtidigt anpassa gränssnittet för fyra olika varumärken.": "The result was a shared foundation where tokens, components and brand modes work together as one system. This made it possible to reuse the same design logic across the platform while adapting the interface for four different brands.",

    "Ett gemensamt verktyg för bilaffären": "One shared tool for the vehicle sales process",
    "Hur samlar man flera system i en gemensam plattform?": "How do you bring multiple systems together in one shared platform?",
    "Det här var ett två år långt uppdrag där vi från grunden tog fram en ny plattform för Toyotas återförsäljare. Teamet bestod av mig, tre produktägare, 10 utvecklare, en backend-arkitekt och en scrum master.": "This was a two-year project in which we built a new platform for Toyota's dealers from the ground up. The team consisted of me, three product owners, ten developers, a backend architect and a scrum master.",
    "Målet var att skapa en gemensam plattform som ersatte flera separata system och samlade bilfinansiering, lagerfinansiering och administration på ett ställe. Komplexa processer skulle bli enklare och mer intuitiva för återförsäljaren.": "The goal was to create a shared platform that replaced several separate systems and brought vehicle finance, inventory finance and administration together in one place. Complex processes needed to become simpler and more intuitive for dealers.",
    "Problemet": "The problem",
    "Från flera system till ett sammanhängande flöde": "From separate systems to one connected flow",
    "Återförsäljarna behövde använda flera olika system för att genomföra en bilaffär. Affärsförslag, kreditansökan, försäkring och lagerfinansiering hanterades separat, vilket skapade ett splittrat arbetsflöde med många systembyten och begränsad överblick.": "Dealers had to use several different systems to complete a vehicle sale. Sales proposals, credit applications, insurance and inventory finance were handled separately, creating a fragmented workflow with frequent system switching and limited overview.",
    "Omfattningen av plattformen": "The scope of the platform",
    "Från säljverktyg till en bredare plattform": "From a sales tool to a broader platform",
    "Plattformen växte över tid från att vara ett säljverktyg till att innefatta bilfinansiering, lagerfinansiering och administration. Det innebar fler användargrupper, arbetsflöden och behov inom samma produkt.": "Over time, the platform grew from a sales tool into a platform covering vehicle finance, inventory finance and administration. This introduced more user groups, workflows and needs within the same product.",
    "Återförsäljare skulle kunna följa bilaffären genom systemet och enkelt förstå vad som hade hänt och vad som behövde göras härnäst.": "Dealers needed to follow each vehicle sale through the system and easily understand what had happened and what needed to happen next.",
    "Återförsäljare": "Dealers",
    "skulle kunna följa bilaffären genom systemet och enkelt förstå vad som hade hänt och vad som behövde göras härnäst.": "needed to follow each vehicle sale through the system and easily understand what had happened and what needed to happen next.",
    "Distributörer skulle kunna hantera och koordinera sina återförsäljare och få överblick över finansierade bilar.": "Distributors needed to manage and coordinate their dealers and maintain an overview of financed vehicles.",
    "Distributörer": "Distributors",
    "skulle kunna hantera och koordinera sina återförsäljare och få överblick över finansierade bilar.": "needed to manage and coordinate their dealers and maintain an overview of financed vehicles.",
    "Lageransvariga skulle kunna hantera finansierade fordon och stötta återförsäljare och distributörer genom processen.": "Inventory managers needed to manage financed vehicles and support dealers and distributors throughout the process.",
    "Lageransvariga": "Inventory managers",
    "skulle kunna hantera finansierade fordon och stötta återförsäljare och distributörer genom processen.": "needed to manage financed vehicles and support dealers and distributors throughout the process.",
    "Administratörer skulle kunna konfigurera och hantera användare, varumärken och tillhörande avtal för att styra hur plattformen användes.": "Administrators needed to configure and manage users, brands and related agreements to control how the platform was used.",
    "Administratörer": "Administrators",
    "skulle kunna konfigurera och hantera användare, varumärken och tillhörande avtal för att styra hur plattformen användes.": "needed to configure and manage users, brands and related agreements to control how the platform was used.",
    "Genom intervjuer, workshops och nära samarbete med verksamheten kartlade jag behov, processer och beroenden. Flöden och prototyper testades sedan kontinuerligt med användare och itererades innan utveckling.": "Through interviews, workshops and close collaboration with the business, I mapped needs, processes and dependencies. Flows and prototypes were then continuously tested with users and iterated before development.",
    "Intervjuer → Flöden → Prototyper → Användartester → Iteration": "Interviews → Flows → Prototypes → User testing → Iteration",
    "Från kalkyl till signerat avtal": "From calculation to signed agreement",
    "En stor del av arbetet handlade om att skapa tydliga flöden genom processer med mycket information, regler och beroenden.": "A large part of the work involved creating clear flows through processes with extensive information, rules and dependencies.",
    "Jag arbetade bland annat med:": "My work included:",
    "Kreditansökan · KALP · Försäkring · Fakturor · E-signering med BankID": "Credit applications · Household budget calculations · Insurance · Invoices · BankID e-signing",
    "Design system": "Design system",
    "En produkt, flera varumärken": "One product, multiple brands",
    "Parallellt med produktdesignen byggde jag upp designsystemer från grunden.": "Alongside the product design, I built the design system from the ground up.",
    "Tokens, properties och variables gjorde det möjligt att skapa ett konsekvent gränssnitt och samtidigt anpassa samma produkt till flera varumärken.": "Tokens, properties and variables made it possible to create a consistent interface while adapting the same product to multiple brands.",
    "Från idé till verkliga bilaffärer": "From idea to real vehicle sales",
    "Projektet gick från idé och tidiga prototyper till en lanserad produkt som började användas av både stora och små återförsäljare.": "The project went from an idea and early prototypes to a launched product used by both large and small dealers.",
    "Kort efter lanseringen hade över 40 bilaffärer genomförts genom den nya lösningen. Feedback från användare pekade också på att flödet upplevdes som intuitivt och självgående.": "Shortly after launch, more than 40 vehicle sales had been completed through the new solution. User feedback also indicated that the flow felt intuitive and self-explanatory.",

    "Från information till interaktion": "From information to interaction",
    "Hur kan ett statiskt rådgivarverktyg bli ett flexibelt stöd för kundmötet?": "How can a static adviser tool become flexible support for customer meetings?",
    "Det här var ett sex månader långt projekt där vi tog fram nästa version av Behovsguiden – ett verktyg som används av Länsförsäkringars rådgivare i kundmötet. Teamet bestod av mig, en UX writer, en produktägare, sex utvecklare och två representanter från bankverksamheten.": "This was a six-month project in which we created the next version of Behovsguiden, a tool used by Länsförsäkringar advisers during customer meetings. The team consisted of me, a UX writer, a product owner, six developers and two representatives from the banking business.",
    "Målet var att skapa ett verktyg som både stärker kundmötet och skapar ett gemensamt arbetssätt för rådgivarna – samtidigt som det öppnar upp för en bredare dialog om kundens behov.": "The goal was to create a tool that strengthens customer meetings and establishes a shared way of working for advisers, while opening up a broader conversation about the customer's needs.",
    "Ett presentationsstöd som inte stödde samtalet": "Presentation support that did not support the conversation",
    "Behovsguiden var främst utformad för att presentera information. Men rådgivarna behövde kunna förklara, visualisera och räkna tillsammans med kunden för att skapa förståelse, intresse och förtroende.": "Behovsguiden was primarily designed to present information. Advisers, however, needed to explain, visualise and calculate together with the customer to create understanding, interest and trust.",
    "När verktyget inte räckte till skapade rådgivarna egna lösningar – Excel-kalkyler, PowerPoints och externa webbplatser.": "When the tool was not enough, advisers created their own solutions using Excel spreadsheets, PowerPoint presentations and external websites.",
    "Det skapade två problem:": "This created two problems:",
    "För rådgivaren": "For the adviser",
    "Behovsguiden gav inte tillräckligt stöd för att skapa ett värdefullt kundmöte.": "Behovsguiden did not provide enough support for a valuable customer meeting.",
    "För Länsförsäkringar": "For Länsförsäkringar",
    "Kundupplevelsen blev olika beroende på rådgivare och delar av mötet flyttade utanför LF egna verktyg och visuella identitet.": "The customer experience varied between advisers, and parts of the meeting moved outside Länsförsäkringar's own tools and visual identity.",
    "Utmaningen": "The challenge",
    "Väcka intresse – utan att bli dokumenterad rådgivning": "Creating interest without becoming documented financial advice",
    "När vi introducerade interaktiva kalkyler och mer individanpassad information blev gränsen mot rådgivning tydligare.": "When we introduced interactive calculations and more personalised information, the boundary with financial advice became clearer.",
    "Under arbetets gång behövde vi därför gå tillbaka och justera delar av både innehåll och funktionalitet utifrån juridiska krav, för att säkerställa att Behovsguiden väckte intresse och ledde vidare till dokumenterad rådgivning, utan att ersätta den.": "During the project, we therefore revisited and adjusted parts of the content and functionality based on legal requirements, ensuring that Behovsguiden created interest and led to documented advice without replacing it.",
    "Undersökning": "Research",
    "Hur arbetar rådgivarna när verktyget inte räcker till?": "How do advisers work when the tool is not enough?",
    "Jag intervjuade 7 rådgivare från olika länsbolag, med fokus på bolån, sparande och pension. Jag kartlade deras arbete före, under och efter kundmötet genom user journeys och flödesdiagram för att förstå var Behovsguiden kunde skapa störst värde.": "I interviewed seven advisers from different regional companies, focusing on mortgages, savings and pensions. I mapped their work before, during and after customer meetings through user journeys and flowcharts to understand where Behovsguiden could create the most value.",
    "Tre behov blev särskilt tydliga": "Three needs became especially clear",
    "01 — Gör det konkret": "01 — Make it concrete",
    "Rådgivarna behövde kunna räkna och visualisera för att hjälpa kunden förstå vad olika val faktiskt innebär.": "Advisers needed to calculate and visualise to help customers understand what different choices actually mean.",
    "02 — Följ samtalet": "02 — Follow the conversation",
    "Kundmöten är inte linjära. Verktyget behövde göra det enkelt att röra sig mellan olika behov och ämnen.": "Customer meetings are not linear. The tool needed to make it easy to move between different needs and topics.",
    "03 — Öppna upp fler behov": "03 — Reveal more needs",
    "Försäkring, juridik, sparande och andra områden behövde finnas nära till hands så att rådgivaren kunde bredda samtalet när ett relevant behov uppstod.": "Insurance, legal matters, savings and other areas needed to be close at hand so the adviser could broaden the conversation when a relevant need emerged.",
    "Lösningen": "The solution",
    "Från presentation till samtalsverktyg": "From presentation to conversation tool",
    "Researchen ledde till en ny riktning för Behovsguiden: istället för att bara presentera information skulle verktyget hjälpa rådgivaren att": "The research led to a new direction for Behovsguiden: instead of only presenting information, the tool would help the adviser",
    "förklara, visualisera och utforska tillsammans med kunden.": "explain, visualise and explore together with the customer.",
    "01 — Räkna tillsammans": "01 — Calculate together",
    "Interaktiva kalkyler för bland annat bolån, sparande och pension gör abstrakta frågor konkreta och hjälper rådgivaren skapa aha-upplevelser.": "Interactive calculations for mortgages, savings and pensions make abstract questions concrete and help advisers create moments of insight.",
    "02 — Anpassa mötet efter kunden": "02 — Adapt the meeting to the customer",
    "En flexibel struktur gör att rådgivaren snabbt kan röra sig mellan olika behov – från bolån och sparande till pension och försäkring.": "A flexible structure allows the adviser to move quickly between different needs, from mortgages and savings to pensions and insurance.",
    "03 — En vy för rådgivaren, en för kunden": "03 — One view for the adviser, one for the customer",
    "Behovsguiden utvecklades för skärmdelning. Rådgivaren behåller navigation och verktyg på sin skärm, medan kunden endast ser det innehåll som är relevant för samtalet": "Behovsguiden was developed for screen sharing. The adviser retains navigation and tools on their screen, while the customer only sees the content relevant to the conversation.",
    "Testa, lära, förbättra": "Test, learn, improve",
    "Lösningarna testades löpande med rådgivare genom interaktiva användningstester. Resultaten användes för att justera struktur, innehåll, kalkyler och interaktioner innan överlämning till utveckling.": "The solutions were continuously tested with advisers through interactive usability tests. The results were used to adjust structure, content, calculations and interactions before handover to development.",
    "Bilderna nedan visar hur agendan utvecklades efter användningstester – från att inte visas alls till att bli synlig, redigerbar och möjlig att anpassa med egna punkter.": "The images below show how the agenda evolved after usability testing, from not being shown at all to becoming visible, editable and customisable with personal agenda items.",
    "Ett gemensamt sätt att möta kunden": "A shared way to meet the customer",
    "Resultatet är ett verktyg som ger rådgivaren större stöd i kundmötet samtidigt som Länsförsäkringar kan skapa en mer sammanhållen kundupplevelse.": "The result is a tool that gives advisers greater support during customer meetings while enabling Länsförsäkringar to create a more cohesive customer experience.",

    "👋 Prata med mig om...": "👋 Talk to me about...",
    "🎺 Vart man ska gå för att lyssna på live musik": "🎺 Where to go for live music",
    "Allra helst jazz på en liten bar, med något gott i glaset.": "Preferably jazz at a small bar, with something good in my glass.",
    "🖼️ Secondhand fynd": "🖼️ Second-hand finds",
    "Jag tror att 80 % av vårt hem består av secondhandmöbler och loppisfynd. Är ständigt på jakt efter nästa fynd och tar gärna emot tips på bra butiker!": "I think 80% of our home consists of second-hand furniture and flea-market finds. I am always looking for the next treasure and happily welcome tips on great shops!",
    "🧦 Stickning": "🧦 Knitting",
    "Det är få saker som intresserar mig mer just nu än stickmönster och pågående stickprojekt.": "Few things interest me more right now than knitting patterns and my current knitting projects.",
    "📖 Böcker": "📖 Books",
    "Jag läste nyligen The Catcher in the Rye av J.D. Salinger och Mina drömmars stad av Per Anders Fogelström. Två väldigt olika berättelser som båda väckte en stark ömhet för människorna i dem.": "I recently read The Catcher in the Rye by J.D. Salinger and City of My Dreams by Per Anders Fogelström. Two very different stories that both made me feel a deep tenderness for the people in them.",
    "🎨 Pyssel": "🎨 Making things",
    "Jag älskar projekt där jag får skapa något med händerna. Senast blev det ett skulpterat tändarfodral i lera, med små nyckelpigor på.": "I love projects where I get to make something with my hands. Most recently, I sculpted a clay lighter case decorated with tiny ladybirds.",
    "💬 Rekommendationer från LinkedIn": "💬 LinkedIn recommendations",
    "… Mer": "… More",
    "Visa mindre": "Show less",
    "Öppna min LinkedIn": "Open my LinkedIn",
    "Jag har haft förmånen att ta in Matilda under ett cirka tre månader långt uppdrag, och hon gjorde snabbt ett starkt intryck. Matilda är snabblärd, blev snabbt självgående och vågar utmana när det behövs, alltid med välgrundade designbeslut och ett tydligt UX-perspektiv. Hon kom in i projektet med stor energi och driv och hann på kort tid leverera flera viktiga funktioner som kommer att underlätta UX-arbetet framåt i projektet. Jag kan varmt rekommendera Matilda till framtida uppdrag och samarbeten.": "I had the pleasure of bringing Matilda into a three-month assignment, and she quickly made a strong impression. Matilda is a fast learner, became independent very quickly and is willing to challenge when needed, always with well-founded design decisions and a clear UX perspective. She joined the project with great energy and drive and delivered several important features in a short time that will support the UX work going forward. I warmly recommend Matilda for future assignments and collaborations.",
    "Jag har haft förmånen att ta in Matilda under ett cirka tre månader långt uppdrag, och hon gjorde snabbt ett starkt intryck.": "I had the pleasure of bringing Matilda into a three-month assignment, and she quickly made a strong impression.",
    "Matilda är snabblärd, blev snabbt självgående och vågar utmana när det behövs, alltid med välgrundade designbeslut och ett tydligt UX-perspektiv. Hon kom in i projektet med stor energi och driv och hann på kort tid leverera flera viktiga funktioner som kommer att underlätta UX-arbetet framåt i projektet.": "Matilda is a fast learner, became independent very quickly and is willing to challenge when needed, always with well-founded design decisions and a clear UX perspective. She joined the project with great energy and drive and delivered several important features in a short time that will support the UX work going forward.",
    "Jag kan varmt rekommendera Matilda till framtida uppdrag och samarbeten.": "I warmly recommend Matilda for future assignments and collaborations.",
    "Swedbank · Matildas direkta chef": "Swedbank · Matilda's direct manager",
    "Matilda har varit en underbar kollega att jobba med! Hon är snabblärd, produktiv och driven. Hon ställer rätt frågor, tar initiativ och vågar utmana när det behövs.": "Matilda has been a wonderful colleague to work with! She is a fast learner, productive and driven. She asks the right questions, takes initiative and is willing to challenge when needed.",
    "En mycket kompetent UX designer, som under sin tid i projektet levererade värde från första till sista dagen. Kan varmt rekommendera Matilda ⭐": "A highly skilled UX designer who delivered value from the first day to the last throughout her time on the project. I warmly recommend Matilda ⭐",
    "Jag har haft förmånen att få arbeta tillsammans med Matilda Usterud i ett projekt inom bilbranschen där vi har utvecklat ett webb-baserat lagerfinansieringssystem för Återförsäljare, Finansbolag och Distributör. Matilda är en mycket omtyckt och skicklig UX-designer med starkt användarfokus, ett öga för detaljer och en förmåga att ifrågasätta krav på ett konstruktivt sätt för att alltid hitta den smartaste och mest användarvänliga lösningen. Hennes samarbete med produktägare, kravställare och utvecklare är alltid professionellt, lyhört och lösningsorienterat. Hennes starka drivkraft att förbättra användarupplevelsen märks i varje detalj av hennes arbete. Designen hon levererar är stilren, intuitiv och lättnavigerad. Jag kan varmt rekommendera Matilda till alla projekt där UX är centralt och där användarupplevelsen är avgörande för framgång. Matilda har varit en stor tillgång i teamet och hennes arbete har varit både väldigt uppskattat och värdefullt. Som person är hon också väldigt driven, nyfiken, noggrann, hjälpsam samt glad och positiv. Matilda har gjort ett stort intryck på mig och de som får äran att jobba med henne härnäst kan känna sig lyckligt lottade.": "I have had the pleasure of working with Matilda Usterud on a project in the automotive industry, where we developed a web-based inventory finance system for dealers, finance companies and distributors. Matilda is a highly appreciated and skilled UX designer with a strong user focus, an eye for detail and an ability to challenge requirements constructively in order to find the smartest and most user-friendly solution. Her collaboration with product owners, stakeholders and developers is always professional, attentive and solution-oriented. Her strong drive to improve the user experience is evident in every detail of her work. The design she delivers is clean, intuitive and easy to navigate. I warmly recommend Matilda for any project where UX is central and the user experience is crucial to success. Matilda has been a major asset to the team, and her work has been both highly appreciated and valuable. She is also driven, curious, meticulous, helpful, cheerful and positive. Matilda has made a strong impression on me, and whoever gets to work with her next will be very fortunate.",
    "Jag har haft förmånen att få arbeta tillsammans med Matilda Usterud i ett projekt inom bilbranschen där vi har utvecklat ett webb-baserat lagerfinansieringssystem för Återförsäljare, Finansbolag och Distributör. Matilda är en mycket omtyckt och skicklig UX-designer med starkt användarfokus, ett öga för detaljer och en förmåga att ifrågasätta krav på ett konstruktivt sätt för att alltid hitta den smartaste och mest användarvänliga lösningen. Hennes samarbete med produktägare, kravställare och utvecklare är alltid professionellt, lyhört och lösningsorienterat.": "I have had the pleasure of working with Matilda Usterud on a project in the automotive industry, where we developed a web-based inventory finance system for dealers, finance companies and distributors. Matilda is a highly appreciated and skilled UX designer with a strong user focus, an eye for detail and an ability to challenge requirements constructively in order to find the smartest and most user-friendly solution. Her collaboration with product owners, stakeholders and developers is always professional, attentive and solution-oriented.",
    "Hennes starka drivkraft att förbättra användarupplevelsen märks i varje detalj av hennes arbete. Designen hon levererar är stilren, intuitiv och lättnavigerad.": "Her strong drive to improve the user experience is evident in every detail of her work. The design she delivers is clean, intuitive and easy to navigate.",
    "Jag kan varmt rekommendera Matilda till alla projekt där UX är centralt och där användarupplevelsen är avgörande för framgång. Matilda har varit en stor tillgång i teamet och hennes arbete har varit både väldigt uppskattat och värdefullt. Som person är hon också väldigt driven, nyfiken, noggrann, hjälpsam samt glad och positiv. Matilda har gjort ett stort intryck på mig och de som får äran att jobba med henne härnäst kan känna sig lyckligt lottade.": "I warmly recommend Matilda for any project where UX is central and the user experience is crucial to success. Matilda has been a major asset to the team, and her work has been both highly appreciated and valuable. She is also driven, curious, meticulous, helpful, cheerful and positive. Matilda has made a strong impression on me, and whoever gets to work with her next will be very fortunate.",
    "Det har varit ett rent nöje att få arbeta tillsammans med Matilda under det senaste året i hennes roll som UX Designer. Hon är en person som verkligen gör avtryck – både genom sitt arbete och sin närvaro i teamet. Matilda har ett fantastiskt öga för detaljer och en genuin nyfikenhet som gör att hon alltid strävar efter att förstå helheten. Hon är frågvis på ett sätt som berikar processen och hjälper oss att tänka ett steg längre. Hennes engagemang smittar av sig, och hon bidrar med både energi och glädje i varje projekt. Hon är driven, positiv och en riktig teamplayer – alltid redo att hjälpa till, lyssna och bidra med sina insikter. Det är tydligt att hon brinner för sitt arbete och för att skapa användarupplevelser som verkligen gör skillnad. Jag kan varmt rekommendera Matilda till vilken arbetsplats som helst som söker en UX Designer med både hjärta och skärpa. Hon är en person man gärna har i sitt team – både för sin kompetens och för den glädje hon sprider omkring sig.": "It has been a genuine pleasure to work with Matilda over the past year in her role as a UX designer. She is someone who truly makes an impact, both through her work and her presence in the team. Matilda has a fantastic eye for detail and a genuine curiosity that drives her to understand the bigger picture. She asks questions in a way that enriches the process and helps us think one step further. Her commitment is contagious, and she brings both energy and joy to every project. She is driven, positive and a true team player, always ready to help, listen and contribute her insights. It is clear that she is passionate about her work and about creating user experiences that truly make a difference. I warmly recommend Matilda to any workplace looking for a UX designer with both heart and sharpness. She is someone you want on your team, both for her expertise and for the joy she brings to those around her.",
    "Det har varit ett rent nöje att få arbeta tillsammans med Matilda under det senaste året i hennes roll som UX Designer. Hon är en person som verkligen gör avtryck – både genom sitt arbete och sin närvaro i teamet.": "It has been a genuine pleasure to work with Matilda over the past year in her role as a UX designer. She is someone who truly makes an impact, both through her work and her presence in the team.",
    "Matilda har ett fantastiskt öga för detaljer och en genuin nyfikenhet som gör att hon alltid strävar efter att förstå helheten. Hon är frågvis på ett sätt som berikar processen och hjälper oss att tänka ett steg längre. Hennes engagemang smittar av sig, och hon bidrar med både energi och glädje i varje projekt.": "Matilda has a fantastic eye for detail and a genuine curiosity that drives her to understand the bigger picture. She asks questions in a way that enriches the process and helps us think one step further. Her commitment is contagious, and she brings both energy and joy to every project.",
    "Hon är driven, positiv och en riktig teamplayer – alltid redo att hjälpa till, lyssna och bidra med sina insikter. Det är tydligt att hon brinner för sitt arbete och för att skapa användarupplevelser som verkligen gör skillnad.": "She is driven, positive and a true team player, always ready to help, listen and contribute her insights. It is clear that she is passionate about her work and about creating user experiences that truly make a difference.",
    "Jag kan varmt rekommendera Matilda till vilken arbetsplats som helst som söker en UX Designer med både hjärta och skärpa. Hon är en person man gärna har i sitt team – både för sin kompetens och för den glädje hon sprider omkring sig.": "I warmly recommend Matilda to any workplace looking for a UX designer with both heart and sharpness. She is someone you want on your team, both for her expertise and for the joy she brings to those around her.",
    "Senior Business Consultant · Project Manager på Toyota Financial Services": "Senior Business Consultant · Project Manager at Toyota Financial Services"
  };

  const attributeTranslations = {
    "matildas.design startsida": "matildas.design home page",
    "Huvudnavigation": "Main navigation",
    "Designcase": "Design case studies",
    "Öppna case: Designsystem": "Open case study: Design system",
    "Öppna case: Toyota Financial Services": "Open case study: Toyota Financial Services",
    "Öppna case: Länsförsäkringar": "Open case study: Länsförsäkringar"
  };

  const normalise = (value) => value.replace(/\s+/g, " ").trim();
  const originalText = new WeakMap();
  const originalAttributes = new WeakMap();
  let language = "sv";

  function translateTextNodes(root, targetLanguage) {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        return /\S/.test(node.nodeValue) && !node.parentElement.closest("script, style")
          ? NodeFilter.FILTER_ACCEPT
          : NodeFilter.FILTER_REJECT;
      }
    });

    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);

    nodes.forEach((node) => {
      if (!originalText.has(node)) originalText.set(node, node.nodeValue);
      const source = originalText.get(node);
      const key = normalise(source);
      if (targetLanguage === "en" && translations[key]) {
        const leading = source.match(/^\s*/)[0];
        const trailing = source.match(/\s*$/)[0];
        node.nodeValue = `${leading}${translations[key]}${trailing}`;
      } else {
        node.nodeValue = source;
      }
    });
  }

  function translateAttributes(targetLanguage) {
    document.querySelectorAll("[aria-label], img[alt]").forEach((element) => {
      const attributes = originalAttributes.get(element) || {};
      ["aria-label", "alt"].forEach((name) => {
        if (!element.hasAttribute(name)) return;
        if (!(name in attributes)) attributes[name] = element.getAttribute(name);
        const source = attributes[name];
        element.setAttribute(name, targetLanguage === "en" && attributeTranslations[source] ? attributeTranslations[source] : source);
      });
      originalAttributes.set(element, attributes);
    });
  }

  function updateToggle() {
    document.querySelectorAll(".language-option").forEach((option) => {
      const active = option.dataset.lang === language;
      option.classList.toggle("is-active", active);
      option.setAttribute("aria-pressed", String(active));
    });
    const toggle = document.querySelector(".language-toggle");
    if (toggle) toggle.setAttribute("aria-label", language === "sv" ? "Byt språk till engelska" : "Switch language to Swedish");
  }

  function setLanguage(nextLanguage) {
    language = nextLanguage === "en" ? "en" : "sv";
    translateTextNodes(document.body, language);
    translateAttributes(language);
    document.documentElement.lang = language;
    document.title = language === "en" ? document.title.replace("Om mig", "About me").replace("Designsystem", "Design system") : document.title.replace("About me", "Om mig").replace("Design system", "Designsystem");
    try { localStorage.setItem("portfolio-language", language); } catch (_) {}
    updateToggle();
  }

  function createToggle() {
    const nav = document.querySelector(".site-nav");
    if (!nav || nav.querySelector(".language-toggle")) return;
    const toggle = document.createElement("div");
    toggle.className = "language-toggle";
    toggle.innerHTML = '<button class="language-option" type="button" data-lang="sv">SV</button><span aria-hidden="true">/</span><button class="language-option" type="button" data-lang="en">EN</button>';
    toggle.addEventListener("click", (event) => {
      const button = event.target.closest("button[data-lang]");
      if (button) setLanguage(button.dataset.lang);
    });
    nav.append(toggle);
  }

  createToggle();
  try { language = localStorage.getItem("portfolio-language") || "sv"; } catch (_) {}
  setLanguage(language);
})();
