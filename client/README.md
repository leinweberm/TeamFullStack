# Toto je studijní template projekt
Jednoduchý nakonfigurovaný template vhodný jako základ pro tvorbu nové React.js applikace.
Projekt již má nainstalované některé dependencies jako eslint, prettier, browser router, etc... Všechny jsou vysvětleny v této dokumentaci.

## 1. Yarn package manager
V tomto projektu je použit Yarn package manager, proto sis jej musíte jako první nainstalovat. Výhoda yarnu je v tom, že narozdíl od npm instaluje dependies paralelně, tedy instaluje jich více najednou a proto je rychlejší. Zároveň podporuje drtivou většinu knihoven, které jsou dostupné pro npm.
#### Instalace yarn
script: `npm install --global yarn`
### Instalace dependencies
script: `yarn`
### Spuštění applikace
script: `yarn start`

## 2. Auto-Formatting
tento projekt má nastaveno automatické formatování a kontrolu syntaxe pomocí knihoven Eslint a Prettier. Pravidla tohoto formátování najdete v souborech .eslintrc.js a .prettierrc a můžete si je měnit podle vašich potřeb. Obě knihovny mají na internetu pěkně napsanou dokumentaci ye které můžete čerpat.
eslint: https://eslint.org/docs/latest/rules/
prettier: https://prettier.io/docs/en/options.html
### Nastavení auto-formátu při uložení
1. intalace eslint rozšíření
2. instalace prettier rozšíření
3. VSCode settings => Editor: Format On Save zaškrtnout
4. VSCode settings => Eslint>Format:Enable zaškrtnout

Formátování při ukládání upraví pouze soubor, který ukládáte. Ani při možnosti save all nezformátuje vše, ale pouze jen soubory ve kterých byla provedena změna. Pokud potřebujete zformátovat celý projekt, použijte script `yarn format` , který jsem pro vás napsal.

## 3. Folder system
Pro lepší přehlednost doporučují naučit se používat nějaký Vám vyhovující folder system. Zde je malá ukázka toho, co se osvědčilo mě.
Assets = složka obsahující vaše soubory (fotky, videa, textove soubory, pdf, atd...)
Components = jednotlivé prvky, které v rámci vaší aplikace používate ( tlačítka, galerie, atd...)
Layout = složka obsahující opakující se na každé stránce (navbar, footer, sidebar, atd...)
Pages = soubory s kompletními stránkami na které se pomocí navigace přesměrováváte
Utils = opakovaně používané funkce a jiná custom business logika

## 4. React router
Můžete si vybrat z několika druhů routerů. Každý z nich má svá specifika o kterých se můžete dočíst zde: https://reactrouter.com/docs/en/v6
Ať už si vyberete jakýkoliv je potřeba jím obalit ve vašem hlavním index.js souboru tělo vaší applikace. Tak jako je to uděláno v tomto projektu. Router v Reactu funguje tak, že hlídá změny URL adresy v prohlížeči, které způsobují NavLink případně Link komponenty. Ve chvíli, kdy dojde ke změně URL, router vyrenderuje k danému URL příslušné komponenty.

## 5. Lazy-Loading a Code-Splitting
Protože React vytváří single page applications, tak po vytvoření buildu pomocí `yarn build` dostanete pouze jeden velký javascript soubor obsahující celou vaši applikaci. To znamená, že při načtení vaší stránku uživatel stahuje celou vaši stránku a ne pouze obsah, který potřebujeme. Díky tomu může uživatel čekat dlouho na načtení webu a stahuje zbytečná data čímž sobě může plýtvat mobilní data a nám zbytečně zatěžovat server. 
Code-Splitting při buildění applikace rozsekat náš program na menší části a Lazy-Loading se následně stará o to, že obsah návštěvník stahuje opravdu až tehdy, kdy jej potřebuje.
více zde: https://reactjs.org/docs/code-splitting.html

## 6. Styled-components
V tomto projektu jsou nainstalováný styled-components, což je knihovná která Vám pomáhá výtvářet vaše vlastní nastylované komponenty. Dostanete tak stejné funkčnost jako nabízí například Sass, ale snadnější práci. Styled-components se například defaultně renderují pouze pokud jsou potřeba. Podporují TypeScript. Můžete do styled-componentů posílat props a tím měnit vzhled vašich komponentů. Je snadnější je opakovaně používat. Přehlednější naming convention. 
více zde: https://styled-components.com/docs

# Další užitečné odkazy

### Deployment
This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### Advanced Configuration
This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Making a Progressive Web App
This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)


