# Node.js gastles - solution branch #

## Aanwezig in deze repository ##

* Basis Express app
    * Main file `./app.js`.
    * Default route `./routes/default.js`.
    * Config met basis config (momenteel enkel de poort).
    * `routes` map met:
        * `default` route dewelke reeds aanwezig was in de `start` branch.
        * `message` route om je bericht naartoe te sturen.
    * `controllers` map met controller dewelke vasthangt aan de route.
    * `services` map met message service om een bericht te versturen.
    * `middleware` map met validatie helper.
* Linter (ESLint), voer `npm run lint` om je code te valideren.
* `.editorconfig` om je files sneller/beter te formatteren.

## Je eigen node api gebruiken? 

1. Start de app met `node .` in productie of om te ontwikkelen met `npm run start`. 

2. Stuur een POST request naar `http://localhost:4000/messages` met de juiste body

3. Bekijk je bericht op https://gastles-2019-03-imd.hyperdrive.studio

## Wat kan je nog verbeteren? 

- Versioneer de API 
- Schrijf een Unit Test met bijvoorbeeld Jest of Mocha
- Check of dit project voldoet aan alle "linter-rules" door `npm run lint` uit te voeren. 
- ... 

Een verbetering gemaakt? Cool! Zet een PR open naar de branch `feat/solution`. 💪

## Hulp nodig? Of vragen? ##

Contacteer ons gerust!
* Thomas
    * Email: thomas.bormans@studiohyperdrive.be
    * Twitter: [@ThomasBormans](https://www.twitter.com/ThomasBormans)
* Jasper
    * Email: jasper.desmet@studiohyperdrive.be
    * Twitter: [@jsprds](https://www.twitter.com/jsprds)
