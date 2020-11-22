# PatientInfo
This is a web application built using React, Node and MongoDB for uploading and viewing the details of patients. <br/>
[Click here for the deployed Heroku App](https://peaceful-falls-30799.herokuapp.com/)

## Uploading Data
The users can upload the patient data in form of CSV file (separated by pipes) or XLS file having 5 columns - name, age, gender, contact, address

## Using the App
Current folder contains the frontend and backend implementation of the application.<br>
The <b>patientinfo</b> project contains the frontend implementation and <b>patientInfoBackend</b> project contains the server-side implementation in Node.js.<br/><br/>
Clone the project on your machine using the command below and open the projects in the code editor of your choice.<br /> 
`git clone https://github.com/ishon19/PatientInfo.git`

### patientinfo
- First of all we need to download the dependencies - execute `npm install` from the project root and wait for the dependencies to get downloaded before proceeding to the next step.
- Now from the folder root execute `npm start` and the app should get launched in the local environment.

However, the static production build of the frontend project has been included in the backend project so the app can directly be accessed from the backend implementation:

### patientInfoBackend
- Here as well, we need the dependencies to get downloaded; execute `npm install` from the project root and wait for the dependencies to get downloaded
- Execute `npm run dev` to get the local server started and the app should get launched on the designated port.

Once both the front end and backend apps are up and running without any errors, the app can be tested out from the browser. 

## **Important**
- The application uses MongoDB Atlas for storing the data in the database and so you need to have MongoDB Atlas credentials and create a database there for storing the data. [Click here for more information](https://docs.atlas.mongodb.com/getting-started/). MONGODB_URI environment variable holds the connection string to the database. Please set it before using the application or set the `url` variable direcly in the `models/Patient.js` file of <b>patientInfoBackend</b> project. Connection string looks like this: <br />
`mongodb+srv://${username}:${password}@cluster0.ecj5l.mongodb.net/${dbName}?retryWrites=true`

- Use your credentials and database name in the connection string to use the application.


<b>Alternatively, the pre-configured working app can be checked directly from this [link](https://peaceful-falls-30799.herokuapp.com/)</b>
