# Hyge

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.4.

## Lancement du serveur
Lancement du serveur grâce à la commande "nodemon server"

## Mongo

### Lancement de MongoDB
"C:\Program Files\MongoDB\Server\3.4\bin\mongod.exe"

### Connexion à la base de données
"C:\Program Files\MongoDB\Server\3.4\bin\mongo.exe"

### Commandes mongo
- Lister les bases de données MongoDB : db.adminCommand("listDatabases");
- Connexion à une base de données : connect("hyge");

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Générer un nouveau composant

- Se rendre dans le répertoire 'hyge\src\app\components'
- Créer un dossier portant le nom du nouveau composant : mkdir user
- Se rendre dans le dossier nouvellement créé 'hyge\src\app\components\user'
- Générer un nouveau composant à l'aide de la commande 'ng generate component user --flat'

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

