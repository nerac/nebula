<p align="center">
  <a href="https://github.com/nerac/nebula">
    <img src="https://user-images.githubusercontent.com/42247421/51596934-7e945200-1f13-11e9-8223-74ed8a8a8163.png" alt="Nebubla: A github repository manager" title="Nebula: a github repository manager">
  </a>
</p>

# Nebula: A github repository manager
Nebula is an application that allows you to manage all your starred repositories on github in a meaningful way. Search, filter, tag or group your repositories so you never miss on that one repository you can't remember.

## Getting Started: 
First clone the project to your machine. In the project directory, you can run:
### `npm start` 
This runs the app in development mode. <br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`
Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## Adding your Personal Token from Github
Visit Github -> Settings -> Developer Settings -> Personal Access Token -> Generate New Token. 

Copy this token and paste in the config.js file.

## Getting any user's starred repositories
Open `Profile.js` in your text editor. Enter any Github username and save it. You should then be able to see a list of their starred repositories. Clicking on the title of any repository should fetch you the Readme file.

# License: 
[MIT](https://github.com/babel/babel/blob/master/LICENSE)
