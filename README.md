## Template repository to use for starting a new game

## Setting up the various themes available in this repository
In order to run this project you now need to configure a symlink to point to the appropriate theme that you want to run.

### On linux
You can run the following to point a 'theme' symlink to the appropriate brand directory...

`cd ./src && ln -s brands/<brand name> theme`

You can then run...

`npm start`

In order to change brands run...

`cd ./src && rm theme && ln -s theme brands/<other brand name>`

You can then restart the app.

### On windows
You can run the following to point a 'theme' symlink to the appropriate brand directory...

`mklink /D d:\absolute\path\to\code\src\theme d:\absolute\path\to\code\src\brands\<brand name>`

You can then run...

`npm start`

In order to change brands, delete the 'theme' link file and rerun the above command. You can then restart the app.

This game project will also require a .env file to be created in the route, below is a example:

REACT_APP_GA_TRACKING_CODE=12345
REACT_APP_ID=predictorapp
REACT_APP_NAME=predictorapp
REACT_APP_SITE_ID=6aafcfeb
REACT_APP_SITE_ENV=dev
REACT_APP_REQUEST_TIMEOUT=5000
