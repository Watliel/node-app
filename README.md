Ce fichier reprend les etape afin de pouvoir cloner / installer / exectuer et deployer le 
server.


1) Cloner 
git clone <url depot distant>
cd <nom folder>


2) installer

npx express-generator --hogan --git  // genere automatiquement le minima requis  
git add . //ajoute tout 
git commit -m "initial commit: express-generator" //envoi express-generator en commit "initial"  
git push // balance tout

3) executer et deployer

npm install 

DEBUG="node-app:server" npm start  // deploi server
