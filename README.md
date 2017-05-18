# Connect Four Game

This is a full-stack web implementation of the classic game "Connect Four". The implmentation uses [AngularJS](http://angularjs.org/), [Node](https://nodejs.org/en/), and [Express](http://expressjs.com/). 

It follows MVC architecture and uses the perfect app structure to enhance productivity.

### Screenshot
![Connect Four Screnshot](/screenshots/connectfour.png?raw=true "Connect Four by Jennifer Bland")

### Live Preview
You can view the game in action [online here](https://salesloft-hireme.herokuapp.com).

### Prerequisites

You must have [Git](http://git-scm.com/) and node.js and its package manager [npm](http://nodejs.org/) installed.

### Getting Started

To get started you can simply clone the angular-seed repository and install the dependencies.

Clone the connect-four-challenge repository using the following command and change into the directory.

```
git clone https://github.com/ratracegrad/connect-four-challenge.git
cd connect-four-challenge
```

This project uses dependencies that are installed using both npm and bower. Backend dependencies are installed using npm  and the angular packages are installed using bower

I have set pre-install script which installs bower. After the npm dependencies are installed, a postinstall script will automatically install the bower dependencies.

Run this command to install all the dependencies.

```
npm install
```

You can start the application with the following command:
```bash
node server
```

The application will start on port 3000. Open your browser to this url to play Connect Four:
```bash
localhost:3000
```

### Live Preview
You can view the game in action [online here](https://salesloft-hireme.herokuapp.com).


### Tech Stack

This application is a full stack application that uses the following Tech Stack:
* AngularJS
* NodeJS
* ExpressJS
* Flexbox
* ngAnimate

### Directory Layout

```
client/                     --> all of the source files for the frontend application
  app/
    app.js                  --> configuration of angular app
    app.css                 --> css styling for frontend application
  vendor/                   --> all the angular components and the dependencies would be found here
  audio/           		    --> audio files
  index.html                --> app layout file (the main html template file of the app)
server/                     --> all of the source files for the backend
  app.js                    --> configuration of the backend app
server.js                   --> starts application
```

### Issues
Feel free to submit issues and enhancement requests.

### Contributing
In general, I follow the "fork-and-pull" Git workflow.

1. Fork the repo on GitHub
2. Clone the project to your own machine
3. Commit changes to your own branch
4. Push your work back up to your fork
5. Submit a Pull request so that I can review your changes

NOTE: Be sure to merge the latest from "upstream" before making a pull request!

### License
This implementation of the "Connect Four" is licensed under the MIT license.