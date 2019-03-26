# Node.js gastles - start branch #

## Aanwezig in deze repository ##

* Basis Express app
    * Main file `./app.js`.
    * Default route `./routes/default.js`.
    * Config met basis config (momenteel enkel de poort).
* Linter (ESLint), voer `npm run lint` om je code te valideren.
* `.editorconfig` om je files sneller/beter te formatteren.

## Opdracht ##

Vraag een `key` op bij onze [API](https://gastles-2019-03-imd.hyperdrive.studio) door middel van postman.  
Tip: [https://gastles-2019-03-imd.hyperdrive.studio/docs](https://gastles-2019-03-imd.hyperdrive.studio/docs) om de documentatie van onze API te bekijken.

Maak aan de hand van middleware, services en controllers een route die via een veilige weg naar onze API (op [https://gastles-2019-03-imd.hyperdrive.studio](https://gastles-2019-03-imd.hyperdrive.studio)) berichten stuurt. Spreek je eigen route ook aan via Postman (of curl voor de echte hardcore developers 😉).

## Extra info ##

Om requests uit te voeren, kan je werken met [request](https://www.npmjs.com/package/request) (reeds in de repository) of [request-promise](https://www.npmjs.com/package/request-promise). De eerste is reeds geïnstalleerd, de tweede dien je zelf te installeren. We raden aan om met de tweede te werken omdat meer mogelijkheden biedt qua error handling en chainen van je requests.  
**TIP**: Neem ook zeker [hier](https://github.com/request/request-promise#post-data-to-a-json-rest-api) een kijkje, je hebt het nodig voor je opdracht 😉.

## Hulp nodig? Of vragen? ##

Contacteer ons gerust!
* Thomas
    * Email: thomas.bormans@studiohyperdrive.be
    * Twitter: [@ThomasBormans](https://www.twitter.com/ThomasBormans)
* Jasper
    * Email: jasper.desmet@studiohyperdrive.be
    * Twitter: [@jsprds](https://www.twitter.com/jsprds)
