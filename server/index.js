import express from "express";
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

// We will use __dirname later on to send files back to the client.
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(dirname(__filename));

// TODO #2: Create an Express app.
const app = express();
const port = process.env.PORT || 3000;
app.use('/', express.static('client'));

//Sends the fundraiser page
// app.get('/fundraiser.html', (req, res) => {
//     res.sendFile('/client/fundraiser/fundraiser.html', { root: __dirname });
// });

// This matches all routes that are not defined.
app.all('*', async (request, response) => {
    response.status(404).send(`Not found: ${request.path}`);
});

//Listen
app.listen(port, () => { console.log(`Server listening at port ${port}`); });