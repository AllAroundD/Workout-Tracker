![issues](https://img.shields.io/github/issues/AllAroundD/burger) ![forks](https://img.shields.io/github/forks/AllAroundD/burger) ![stars](https://img.shields.io/github/stars/AllAroundD/burger) ![license](https://img.shields.io/github/license/AllAroundD/burger)


# burger-logger
This is a simple burger logger with MySQL, Node, Express, Handlebars and a homemade ORM

## Table of Contents
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [License](#License)
  - [Contributing](#Contributing)
  - [Tests](#Tests)
  - [Questions](#Questions)

## Installation
  For just using the application, there is no installation required. The application url https://cryptic-oasis-49000.herokuapp.com/ is where the application resides.
  For the local setup of this application, there are a few npm modules that are required (dotenv, mysql). Once the repository is cloned, typing 'npm install' at the command prompt will install all of the required modules.
  This application requires 'MySql Workbench' to be installed.
  A '.env' file will need to be created in the main folder of the application after cloning for the local connection info, with the following info:
    DB_USER=<your user name (usually it is 'root'>)
    DB_NAME=<your database name> (burgers_db is set in the db/schema.sql file)
    DB_PWD=<your password>
  Then typing 'npm run dblocalschema && run dblocaldata' will initialize the database. Note: this step only needs to be included when the database needs to be initialized or restored.
  Once the user runs the program by typing 'npm start', the node server will be listening on port 8080.
  Open browser window and go to http://localhost:8080.

## Usage
  For just using the application, the application url https://cryptic-oasis-49000.herokuapp.com/ is where the application resides.
  If installing locally, see the installation steps above to install and then run the node server by typing 'npm start'.

  Eat-Da-Burger! is a restaurant app that lets users input the names of burgers they'd like to eat.
  Whenever a user submits a burger's name, the app will display the burger on the left side of the page -- waiting to be devoured.
  Each burger in the waiting area also has a Devour it button. When the user clicks it, the burger will move to the right side of the page and will be seen as a strikeout to indicate that it has been devoured and can't be clicked anymore.
  The app will store every burger in a database, whether devoured or not.

Here is an example of the application in action:
![burger logger demo](./public/assets/img/burger-demo.gif)

## License
  [MIT](LICENSE)

## Contributing
  

## Tests
  No formal tests documented. The usage demo gif above shows some of the tests that were performed.

## Questions

[GitHub Profile](https://github.com/AllAroundD/)

-If you have any questions, please contact me at [dougmoore@use.startmail.com](mailto:dougmoore@use.startmail.com?subject=[GitHub]%20Source%20Question).
