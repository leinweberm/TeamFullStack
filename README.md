# Full-stack aplikace

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
2. intalace eslint rozsireni
3. instalace prettier rozsireni
4. VSCode settings => Prettier: End Of Line nastavit na lf
5. VSCode settings => Editor: Format On Save nastavit na checked
6. VSCode settings => Eslint>Format:Enable nastavit na checked
## alternativni nasteveni VS Code
1. pred kazdym ulozenim spustit script, ktery jsem pro toto vytvoril: yarn format
## start server
`yarn start`
- spusti se na: localhost:3030
## start client
`yarn start`
- spusti se na: localhost:3000