# PARKN: Parking the smart way.
Steven Barrios, Abu Butt , Mikhail Kreytser, Julia Lau, Stephen McDonald, Mostafizur Rahman, Yong Su, Kenny Tan, Yuan Zhou

This project is to provide a parking reservation service for the students at City College.
We aim to partner students at our college together as a team so that a student is provided with a guaranteed parking spot in a reasonable amount of time.

We intend to produce as our miminum viable product:
* The ability for a user to "sign in" to an area and search for parking on our app or website before they arrive or once they arrive. 
* A listing of all the users who are already parked, with information concerning car location/characteristics and arrival/departure times.
* A queue of users that may be waiting, to be prioritized first when a spot is close to open.
* The ability for users to communicate with each other to set up "reservations" to ensure a spot at a specific time.
* The ability to see street parking rules, misc events that are occuring on certain streets.


## Technologies
This rough draft is using what is known as a MEAN stack, which uses the following technologies:
+ MySql
  * A relational database management system. 
+ NodeJS
  * A JavaScript run-time environment for executing server-side scripts using native JavaScript, it is commonly used for web development purposes.
+ ExpressJS
  * An HTTP server framework for NodeJS that facilitates REST API operations and routing.
+ Angular 5
  * Front end Javascript framework designed and maintained by Google Inc.

## Setting Up the Environment

You don't necessarily need the backend Node files in order to use the client source code; everything you need to make the front end side of things work is inside the `../src` folder.

To reach the client code, navigate to  *../parkn/parkn-app/src* folder. For front end development purposes, Angular provdides a development server for you to test out your components and what not, but here I included my NodeJS script that would deploy and serve the front end.

That is to say that the front end can be worked on without ever disturbing the backend. So, if you want the server.js file to work, you need to download [NodeJS](https://nodejs.org/en/). *Technically*, Node.js and the NPM utility (which comes upon downloading Node) are not needed to make the front end Angular app work. However, it will be needed later for the ability of the app to facilitate CRUD operations, making our app more useful in the long run.

##  Front End Development
 1. Download Angular 5, the most efficient way to do this is through the command land interface located [here](https://cli.angular.io/). This interface makes it super easy to create components, directives, services, (i.e. these are the individual pieces that make up an Angular project).
 2. Clone this repository, then navigate to it through your terminal/console. You should be somewhere that looks like: ` ~/../parkn`. Navigate to the actual Angular project: `cd parkn-app`. Then we can start our development server provided by Angular:
   `ng serve`.

This by default will run the development server on localhost:4200, but your console will tell you if it started it on some other port. 

## Build

When it's time to build a production level product, run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
