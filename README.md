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


To run the app open the terminal from the root of the projects and execute below command from the terminal <br/>
`npm install`
<br><br>
Once the dependencies are downloaded, follow the below steps for running the apps <br/>

### patientinfo
- First of all we need to download the dependencies - execute `npm install` from the project root and wait for the dependencies to get downloaded before proceeding to the next step.
- Now from the folder root execute `npm start` and the app should get launched in the local environment.

### patientInfoBackend
- Here as well, we need the dependencies to get downloaded; execute `npm install` from the project root and wait for the dependencies to get downloaded
- Execute `npm run dev` to get the local server started.

Once both the front end and backend apps are up and running without any errors, the app can be tested out from the browser. Alternatively, the app can be checked directly from this [link](https://peaceful-falls-30799.herokuapp.com/)
