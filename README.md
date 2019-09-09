# FlexSpace
An app that shares conference meeting spaces between offices and potential renters. It uses NodeJS, MySQL, Sequelize, Express, and EJS for template rendering. Passport and Bcrypt are used for authentication and password hashing. Express Validator and Connect-Flash are used for inline form feedback and displaying messages to end users. 

**Fully developed by Aaron Keisler,David Pomerede,Javier Pagan and Kevin Steele for GWU Full Stack Web Development BootCamp Group Project 2

Github repo: https://github.com/brityank/flexspace
Heroku website: https://sheltered-shelf-68211.herokuapp.com/


## FlexSpace Features 

Sign up with inline form validation

Log in

Edit user account information

Owner: create and edit room offerings

Renter: search, create, and edit room reservations

Admin: all management privileges

## Development setup
This application requires MySQL. This application supports a local MySQL Installation and a Heroku hosted JAWSDB setup. 

Please create a .env file and enter the MYSQL or Heroku server informtion as below:

JAWSDB_URL='your heroku db link'

MySQL_User="your user"
MySQL_Pass="your password"
MySQL_DB="your db"
MySQL_Host="your host"

git clone https://github.com/brityank/flexspace
npm i

Once your database has been succesfully setup, you can run node seeds.js to populate the database with sample listing and user accounts. 

## Organization

Config - contains the MySQL databse configuration setting and the Passport authentication middleware settings 

Models - contains the Sequlize settings, schema definitions and table associations for the user, rooms, reservations and reviews tables 

Public - contains the CSS, Javascript, Images and fonts used for the applications 

Routes - contains the API and HTML routes for the application 

Seeders - contains the data to seed the database. Alter as neeeded to meet your needs. 

Views - contains the EJS templates for the HTML pages and EJS partials for the headers, footer and navigation elements 

















