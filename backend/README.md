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

For development, we will be using sqlite but will use mysql for production.
This is for easier setup for developers. By running the command below, it should setup the sqlite3 db
and also startup the server.

```
npm start
```

This should setup the minimal requirements to setup the database system.

## API Endpoint

```
Creating Users:     /api/user/create (Body: username, email and password)
Login User:         /api/user/login (Body: username, password)
Create/Update Car:  /api/car/create (Body: make, model, color, size)(Header: x-access-token)
```

## Socket Enpoint

Sockets will be accessed on the same server port. 
Clients must have open connects where clients wait for messages from the server.
Once on the maps page, the client server will be expected to open up the socket
connection. As of now, there are no authentications for sockets but will be implemented in the future.
```
Setup connection first then use the following listeners check for updates.

To get a feed of all parking: socket.on('spots')
To post a place of where you've parked: socket.emit('park', {lat: LATVAL, long: LONGVAL, userId})

To request to be added in queue, and ask for notifications emit: socket.emit('join queue')
This will allow the user to be added into a room for the queue then the client can listen for notify with socket.on('notify' (data) =>) which will listen on notification but only be send to those who have subscribed to the queue
```

## Running the tests

To run the tests run the following below.

```
npm run test
```

## Running the migrations

To run the migrations run the following below.

```
npm run migrations
```

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
