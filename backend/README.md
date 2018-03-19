# EZPARKN Backend REST API

The Backend of EZPARKN handles all Database Queries through REST API Calls from the frontend

## Getting Started

First run `npm install` within this folder. Then run `npm start`
In addition, you would need to place the .env file within the root directory of your backend folder.
Make sure that you're running your mariadb service on the same port as specified in the .env file,
and also make sure to change the username and password accordingly on the .env file. You can always
use the root username and password but that is only for development purposes and not recommended.

### Prerequisites

You must have node installed on your computer along with npm and lastly mariadb (open source fork of mysql).

Arch Linux
```
sudo pacman -S node npm mariadb
```

## Initalizing the Database for Development

Make sure that you are running the db service and execute sequelize by executing 
```
node_modules/.bin/sequelize init
node_modules/.bin/sequelize db:create
node_modules/.bin/sequelize db:migrate
```
This should setup the minimal requirements to setup the database system.

## Running the tests

WIP

### Break down into end to end tests

WIP

## Deployment

WIP

## Built With

* [NodeJS](https://nodejs.org/en/)
* * [MySQLJS](https://github.com/mysqljs/mysql)
* * [JWT](https://github.com/auth0/node-jsonwebtoken)
* * [Sequelize](https://github.com/sequelize/sequelize)

## Contributing

## Authors

WIP
