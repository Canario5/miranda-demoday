# DEMODay MirandaMedia

The party is in the `demoday-base-second-try` branch.

Dočasně dostupné na:
https://miranda.raha.cz (Pozn.: automatický build jde z main, která může být pozadu oproti výše uvedené)

Projekt k náhledu na lokálu se spustí:
```
npm run build
npm run preview
```

Používám Vite kvůli hot reloadu. V projektu je Gerilless, ale nepoužíval jsem ho. Jde spíš o takovou záložku.
V projektu používám vite-plugin-svg-spritemap, aby mi trochu usnadňoval práci se SVG ikonami. Ale zvládl bych to i bez něj.


Pozn.: Kód přejetý Prettierem, předpokládám, že "stylizace" kódu taky může hrát v hodnocení roli. A ten kdo není zvyklý na Prettier ve stylu:

```
<nav
              class="main-navigation js-main-navigation"
              id="main-navigation"
              aria-label="Main navigation"
              aria-hidden="true"
            >
            </nav>
```

vs

```
<nav class="main-navigation js-main-navigation" id="main-navigation" aria-label="Main navigation" aria-hidden="true">

    </nav>
```

...se snadno může na první pohled zhrozit. Obzvlášť, když používám jen na dvě mezery odsazení místo obvyklejších čtyř či tabu, tak celý výsledek může vypadat exotičtěji... Nemám problém používat odlišnou stylizaci kódu, v minulé firmě se používaly 4mezery a neměl jsem problém dodržovat firemní standardy.
