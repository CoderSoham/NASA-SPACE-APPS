const admin = require('firebase-admin');
const serviceAccount = require('./config/nasa-space-apps-7-006dee006e87.json'); 
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://nasa-space-apps-7-default-rtdb.firebaseio.com/', // Update with your Firebase project URL
});
const express = require('express');
const bodyParser = require('body-parser');
const projectsRouter = require('./routes/projects');
const app = express();


app.use(bodyParser.json());

app.use('/api/projects', projectsRouter);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Update the path to your key file

