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

# 3. Routing

- routing refers to how the app can respond to client requests based on an endpoint (_http method, uri(path)_)
- Route definutuin is structured like: **app.httpMETHOD('PATH(uri)', 'HANDLER(function)')**

## 3.1. Basic Route Methids

- The basic http methods we can use are: _post, get, put, delete === creaate, read, update, delete_
- **Note:** to make a post request: we need to use a middleware('express.json') to be able to allow the user to send data in json format

## 3.2. Other Route Methods

- _all: it is like any other route method but it accecpts all http method calls(post, get, update, delete)_

- _app.disable("name"): is use to disable a property from the app settings table. Example_
- _app.enable("name"): is use to enable a property from the app settings table. Example_
- _app.enabled("name"): returns true or false based on the parameter passed._
- _app.disabled("name"): returns true or false based on the parameter passed._
- **Note:** _the route can take multiple callback functions, but you will have to use the next() to be able to move to the next function, or else it will stop at the first function_

**App Settings table link: _https://expressjs.com/en/4x/api.html#app.settings.table_**
_Checkout docs for more methods_

## 3.3. Route Paths

- These can be strings, string patterns, or regular expressions.
- Checkout documentation for more: **https://expressjs.com/en/guide/routing.html**

## 3.4. Response Methods

- these are methods in the response object.
  - _res.download() - Prompt a file to be downloaded._
  - _res.end() - End the response process._
  - _res.json() - Send a JSON response_
  - _Also we have the redirect, sens, sendStatus, render(render aview), etc.., check documentation_

## 3.5. Express Router Class

- We can use the express router class to create modular, and mountable route handlers(controllers).
- You can create a router as a module and export it for use in another file.
- you can create middlewares specific just to that router(eg _'/user'_)

# 4. Serving Static Files

- It serves static files like: _images, css, and js files,_ we use _express.static_
  - it is a built-in middleware function in Express. The function is like:
    - express.static(root, [options])
    - the _root_ arguement specifies the root directory from which to serve static assets
    - the options is a function that takes that returns an object of values like:
      - _dotfiles_: how files or directories that start with dot are handles
        - possible values for this option: _allow, deny=(403 response), ignore=(404 response)_
      - _setHeaders_, _redirects_, etc...
- The function determines the file to serve by combining _req.url_ with the provided _root directory_
  - When file is not found, instead of sending _404 response_ it instead calls _next()_ to move to next middleware
- You can add multiple static asset directories and call the _express.static()_ middleware function multiple times.
- Express will look for the files in the order you set them with the express.static middleware
