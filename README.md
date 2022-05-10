# IOEN App
The IOEN App is a collection of projects for different parts of the system. The ui folder has the Electron app, the hoplochain folder is the DNA, pico-grid has the rust code for the raspberryPi solar kit and the tesla-gateway-logger folder has the node server to log the data from your Tesla Powerwall.

Run ```npm install``` in the root, tesla-gateway-folder and pico-grid folders. the Electron app likes yarn so run ```yarn install``` in the ui folder.

each time you change the DNA run ```npm run pack:happ```, this has been separated from the starting of apps so you can commit your happ to pull it onto your raspberrypi.

Run ```npm run start:ioen-app``` to run the DNA and electron app.
Run ```npm run start:picogrid``` to run the DNA and pico grid.
Run ```npm run start:tesla-logger``` to run the DNA and the tesla logger. Make sure you put your tesla gateway login details in the package.json file in the tesla-gateway-logger folder.
