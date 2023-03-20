/*step1*/
1.download & setUp: 
       - https://nodejs.org/en
2.download & setUp:
       - https://github.com/coreybutler/nvm-windows/releases
       - choose nvm-setup-exe file & setup
3.open powersell & run-administrator
      - nvm --version (check)
      - nvm install 14.13.1
      - nvm use 14.13.1 (note this project only know nvm version 14.13.1)
/*step2*/
1. npm init
2. npm install
3. npm install --global yarn
4. Run project
   yarn watch
   /*change node sass version*/
   Example:
   npm uninstall node-sass
   npm install sass
   /*install node 6 version*/
   npm node -i node-sass@^6.0


   /*noted*/
   To fix this error, you need to fix your node and node-sass versions as per this version compatibity list. From this list, you need minimum Node 8 if you are using node-sass 4.5.3+.


