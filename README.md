# Spuštění aplikace
## 1. instal Yarn:
v terminálu scriptem:
`npm install --global yarn`
## 2. instal Nest cli:
v terminálu scriptem:
`yarn add @nestjs/cli`
## nepovinné install Docker for Windows (*pro práci s databází):
https://docs.docker.com/desktop/install/windows-install/
## 3. nastavení Gitu
v terminálu příkazem:
`git config core.eol lf`
`git config --global core.autocrlf false`
## 4. nastavení Visual Studio Code
1. VSCode settings => `Files:Eol` nastavit na \n
2. intalace `eslint` rozšíření
3. instalace `prettier` rozšíření
4. instalace `Material` Icon Theme rozšíření
5. VSCode settings: `Prettier: End Of Line` nastavit na lf
6. VSCode settings: `Editor: Format On Save` zaškrtnout
7. VSCode settings: `Eslint>Format:Enable` zaškrtnout
## 5. naklonování repositáře z DEV branche
## 6. setup server / client 
1. v terminálu ve složce server nainstalovat dependencies pomocí příkazu: `yarn`
2. v terminálu ve složce client nainstalovat dependencies pomocí příkazu: `yarn`
### alternativní nastavení formátování VS Code
Pokud nechce instalovat rozšíření eslint a prettier
1. před každým uložením spustit v terminálu script, který jsem pro vás napsal: `yarn format`
## 7. start server
v terminálu scriptem:
`yarn start`
- spustí se na: localhost:3030
## 8. start client
v terminálu scriptem:
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
`delete` = smazání souborů které přímo nesouvisí s funkcí aplikace (obrázky, videa, textové soubory, atd...)
`config` = změna nastavení config souborů
### kdo:
vase jmeno
### nazev:
popis_toho_co_jste_delali
## Git commit naming
`typ:`a kratký popis konkrétní změny

# Databáze PostGreSQL (TATO SEKCE SE PRIPRAVUJE)
## 1. Stažení PostgreSQL 10 (64x)
stáhnout verzi 10.21
https://www.enterprisedb.com/downloads/postgres-postgresql-downloads

## 2. Instalace PostgreSQL 10 (64x)
Při instalaci můžete Postgre nainstalovat kam potřebujete. Nicméně složku z daty vyberte `cesta_k_tomuto_projektu\TeamFullStack\postgreSQL\data`
heslo: `leprikonsql`
port: `5432`
advanced options: locales: `Czech, Czechia`
Stack Builder 4.2.1
- Database Server: PostgreSQL (64 bit) v10.21-1
- Spatial Extensions: PostGIS 3.2 Bundle for PostgreSQL 10 (64 bit) v3.2.1
- Web Development: PEM-HTTPD v2.4.53-1

### APACHE
PEM HTTPD
Apache port: 8080

### PostGIS
všechny dodatečné možnosti během instalace = NO

### SQL Shell (psql)
Server [localhost]:
Database [postgres]: eshopdb
Port [5432]:
Username [postgres]: eshopAdmin
Password for user eshopAdmin: `zde nic nezadavat`
psql: fe_sendauth: no password supplied
Press any key to continue . . .