# Spuštění aplikace
## instal Yarn:
`npm install --global yarn`
## instal Nest cli:
`yarn add @nestjs/cli`
## install Docker for Windows (*pro praci s databazi):
https://docs.docker.com/desktop/install/windows-install/
## setup server / client 
1. ve slozce server nainstalovat dependencies pomoci prikazu: `yarn`
2. ve slozce client nainstalovat dependencies pomoci prikazu: `yarn`
## nastaveni Gitu
prikazy:
`git config core.eol lf`
`git config --global core.autocrlf false`
## nastaveni VS Code
1. VSCode settings => Files:Eol nastavit na \n
2. intalace eslint rozšíření
3. instalace prettier rozšíření
4. VSCode settings: `Prettier: End Of Line` nastavit na lf
5. VSCode settings: `Editor: Format On Save` zaškrtnout
6. VSCode settings: `Eslint>Format:Enable` zaškrtnout
## alternativni nasteveni VS Code
1. před každým uložením spustit script, který jsem pro vás napsal: `yarn format`
## start server
`yarn start`
- spustí se na: localhost:3030
## start client
`yarn start`
- spustí se na: localhost:3000

# Git
## Git branches
1. main = finální branch obsahující otestovanou, funkční verzi aplikace
2. dev = pracovní verze
3. temp = vytvoříte si pro každou změnu v programu svůj vlastní branch podle naming rules viz. níže. Po dokončení změny uděláte merge do dev branche, z ní vytvoříte pull request do mainu a svou temp branch smažete
## Git naming rules
tvar jména branche `typ/kdo/nazev`
### typ:
`feat` = nová funkcionalita v applikaci
`fix` = oprava chyby
`add` = přídání souborů které přímo nesouvisí s funkcí aplikace (obrázky, videa, textové soubory, atd...)
`config` = změna nastavení config souborů
### kdo:
vase jmeno
### nazev:
popis_toho_co_jste_delali
## Git commit naming
`typ:`a kratky popis konkretni zmeny
