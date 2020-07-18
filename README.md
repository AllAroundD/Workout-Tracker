![issues](https://img.shields.io/github/issues/AllAroundD/Workout-Tracker) ![forks](https://img.shields.io/github/forks/AllAroundD/Workout-Tracker) ![stars](https://img.shields.io/github/stars/AllAroundD/Workout-Tracker) ![license](https://img.shields.io/github/license/AllAroundD/Workout-Tracker)


# Workout-Tracker
Workout Tracker is an app that lets users view, create, and track daily workouts. Users should be able to log multiple exercises in a workout on a given day, and should also be able to track the name, type, weight, sets, reps, and duration of exercise. If the exercise is a cardio exercise, the user should be able to track the distance traveled.

## Table of Contents
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [License](#License)
  - [Contributing](#Contributing)
  - [Tests](#Tests)
  - [Questions](#Questions)

## Installation
  For just using the application, there is no installation required. The application url is .
  For the local setup of this application, there are a few npm modules that are required (dotenv, etc.). Once the repository is cloned, typing 'npm install' at the command prompt will install all of the required modules.
  This application requires the MongoDB client (https://www.mongodb.com/download-center#community) to be installed.
  A '.env' file will need to be created in the main folder of the application after cloning for the local connection info, with the following info:
    DB_URL=mongodb://localhost/Workout
  Then typing 'npm run seed' will initialize the database. Note: this step only needs to be included when the database needs to be initialized or restored.
  Once the user runs the program by typing 'npm start', the node server will be listening on port 8080.
  Open browser window and go to http://localhost:8080.

## Usage
  For just using the application, the application url https://lit-inlet-77036.herokuapp.com/ is where the application resides.
  If installing locally, see the installation steps above to install and then run the node server by typing 'npm start'.

  Workout Tracker is an app that lets users view, create, and track daily workouts. Users should be able to log multiple exercises in a workout on a given day, and should also be able to track the name, type, weight, sets, reps, and duration of exercise. If the exercise is a cardio exercise, the user should be able to track the distance traveled.

Here is an example of the application in action:
![Workout Tracker demo](./public/assets/img/Workout-Tracker-demo.gif)

## License
  [MIT](LICENSE)

## Contributing
  

## Tests
  No formal tests documented. The usage demo gif above shows some of the tests that were performed.

## Questions

[GitHub Profile](https://github.com/AllAroundD/)

-If you have any questions, please contact me at [dougmoore@use.startmail.com](mailto:dougmoore@use.startmail.com?subject=[GitHub]%20Source%20Question).
