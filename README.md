# learn_express_js

## Learning Express Js

- I plan to learn express following the documentation from website and other resources online

# 1. Installation

- To start an express app we need to initialize node first using **npm init**
- we then install express: **npm install express --save**

# 2. HelloWorld

- We create our index.js file as we indicated when we were initializing node
- We then require express
- then assign the express to a variable called app, so that we can use it
- We can use _app.httpMETHOD('path', function('request', 'response'))_
- We add a port number for our app
- we use the _app.listen('port-num', callback('messagehttp://localhost:3000'))_
- **Now we enter in terminal node filename(index.js)** to run app
- also you can send along your status by adding the '.status(statu_code)' to the respons
- Also you can format the response to be a json by adding the "json({'key': 'value', ..})" to the response
- example:

## 2.1. Install additional dependencies

- We can also install _nodemon_ as a dev dependency to keep track of chamges in our app and refresh evevrytime changes is made _(mpm install -D nodemon )_
- We can also install _dotenv_ to keep environment variables(eg. the port number) : _npm install dotenv_
  - We use the name '.env' for our dotenv file
  - To import it we require it and add '.config()' at the end
  - to use it example:(_process.env.PORT_).. 'PORT' is declared in the '.env' file

### 2.1.1. Adding scripts to package.json

- We can use the node script object to add shortcuts for riunning scripts:
  - "start": "node index.js",
  - "server": "nodemon index.js"
- To run them now we use: 'npm run start' instead of 'node index.js'
