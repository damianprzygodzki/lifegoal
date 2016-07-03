# lifegoal
Lifegoal visualisator. It is react + redux warmup app with caching state of the app in localStorage.

# How to run it
You have to first install dependencies:

> npm install

Then use node server to run development environment with hot reloading:

> npm start

# How to build it
To build `dist` version you need Webpack (in this case installed globally) and use the predefined config `/webpack.prod.js`, and execute:

> webpack --config webpack.prod.js
