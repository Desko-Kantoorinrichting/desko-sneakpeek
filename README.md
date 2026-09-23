# Desko sneak peek

Teaserpagina met aftelklok tot 28 september 2026, 11.00 uur Amsterdamse tijd.

## Formulier en hosting

Deze branch is voorbereid voor Netlify Forms. De aanmeldingen staan onder **Forms** in het Netlify-dashboard van het Desko-account en zijn daar als CSV te exporteren. De verzendbevestiging op de pagina betekent alleen dat Netlify de POST accepteerde; controleer ook de eerste echte inzending in het dashboard.

1. Maak een Netlify-account via het Desko GitHub-account en importeer de publieke repository `Desko-Kantoorinrichting/desko-sneakpeek` met deze branch als productiebranch.
2. Gebruik de hoofdmap als publicatiemap en geen buildcommando.
3. Schakel in het Netlify-dashboard onder Forms de automatische formulierdetectie in en start indien nodig een nieuwe deploy.
4. Controleer dat `desko-sneakpeek` onder Forms als actief formulier verschijnt.
5. Doe een testinschrijving met een herkenbare naam en controleer de opgeslagen naam, e-mail en toestemming in Forms. Controleer ook de spamweergave.
6. Gebruik pas daarna de Netlify-URL in de campagne en stel desgewenst `binnenkort.desko.nl` via het DNS-beheer in. De GitHub Pages-URL op `main` blijft vooralsnog de eerdere FormSubmit-versie en is niet geschikt als link naar dit formulier.

Bezoekers krijgen geen automatische mail. Desko gebruikt de ontvangen adressen voor één persoonlijke update.
