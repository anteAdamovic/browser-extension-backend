const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/check-url', (request, response) => {
    console.log(new Date(), 'check-url', request.query);
    // response.status(200).json({ script: 'some-script' });
    response.status(404).send();
});

app.post('/upload-file', (request, response) => {
    console.log(new Date(), 'upload-file', request.body);
    response.status(200).send();
});

app.listen(3001);