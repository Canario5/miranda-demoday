# DEMODay MirandaMedia

## Grafický návrh

Grafický návrh je část staršího projektu, konkrétně pouze Homepage jednoduchého e-shopu, zabývajícího se prodejem investičních kovů.

URL: [Figma.com](https://www.figma.com/file/mNSNesuEHkSvwnZHsBwLxt/DemoDay?node-id=0%3A1)

## Technologie

K realizaci zadání prosím nepoužívej žádné frameworky ani knihovny. Nepotřebuješ ani jQuery, Bootstrap ani nic jim podobného. Používej HTML, CSS a čistý (nebo také Vanilla) JavaScript. Pokud jsi zvyklý na CSS preprocesor, jeho použití je samozřejmě vítáno.

## Zadání

Naklonuj si tento repozitář k sobě do PC. V repozitáři máš připravené uplně základní HTML, adresářovou strukturu a zdrojová data pro produkty. Vytvoř si CSS / SCSS / LESS a JavaScript a nalinkuj si je do připraveného HTML.

1. Stránka musí být plně responsivní, grafický návrh obsahuje pouze mobilní a desktopovou verzi, u ostatních velikostí displayů si musíš poradit dle svého nejlepšího vědomí a svědomí.
2. Zajisti, aby všechny aktivní prvky na stránce měly příslušný hover efekt. Pokud není v návrhu naznačený, vymysli si svůj.
3. Nemusíš vytvářet žádné další podstránky, ale dbej na to, aby odkaz byl odkazem a tlačítko tlačítkem.
4. Na stránce je sekce s produkty. Data pro tyto produkty najdeš v souboru /assets/src/products.json.
    - Načti tento soubor, a pomocí JavaScriptu vytvoř kompletní elementy produktů a vlož je do stránky.
        - HINT: Pro načtení ze souboru použij "fetch"
        - HINT: JSON obsahuje chyby, použij validátor, chyby najdi a odstraň
        - HINT: Pro vytvoření elementu se používá "createElement", pro vložení do stránky například "appendChild" nebo "insertBefore"
    - Blok s produkty má 3 záložky, každý produkt v JSONu má uvedenou konkrétní kategorii.
    - Pomocí JavaScriptu zajisti, aby mezi jednotlivými záložkami šlo přepínat.
        - HINT: K tomuto budeš určitě potřebovat "addEventListener"
    - Pro každou záložku obsahuje soubor 8 produktů, defaultně zobrazuj pouze 4 a po kliknutí na tlačíko "Zobrazit více produktů" zobraz všechny
    - Pokud se na řešení pomocí JavaScriptu necítíš, vytvoř kód přímo v HTML
        - HINT: Věř ale, že tato část pomocí JavaScriptu je pro nás nesmírně důležitá a přinese ti velkou spoustu plusových bodů
5. Stránka obsahuje i formuláře. Zajisti, aby formuláře byly sémanticky správně, akci pro ně samozřejmě vytvářet nemusíš.
6. Hned pod hlavičkou je "Carousel", ten můžeš ponechat statický a pouze pokud ti zbyde nějaký čas, můžeš ho rozpohybovat.
    - HINT: Pro tohle můžeš použít JS knihovnu, nám se osvědčil například Swiper.
7. Fonty můžeš použít z CDN fonts.google.com, ale pokud je zvládneš stáhnout a importovat z lokálního disku, jsou to opět body navíc.

## Zpracování

Buď důsledný. Prioritní je vzhledová stránka. Nedovol, aby se ti při jakémkoliv rozlišení překrývaly elementy nebo třeba "utíkaly" ze stránky. Preciznost a pixel perfect design je pro nás alfa-omega.

Snaž se psát čitý, přehledný a vizuálně hezký kód, využívej DRY princip. Nebudeš jediný, kdo ho bude číst.
