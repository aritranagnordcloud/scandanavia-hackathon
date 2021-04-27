import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as express from 'express';
import * as bodyParser from "body-parser";
import gqlServer from "./graphql/server";

import { addContact, updateContact, viewContact, viewAllContacts } from './contacts';
import {listplaces,listcurrencies} from './skyscanner-apis'


const app = express();
const main = express();
admin.initializeApp();

main.use(bodyParser.json());
main.use(bodyParser.urlencoded({ extended: false }));
main.use('/api/v1', app);
main.use(gqlServer());



export const webApi = functions.https.onRequest(main);


/******************** Contacts***********************/

// Add new contact
app.post('/contacts', async (req, res) => {
    return addContact(req, res);
})

// Update new contact
app.patch('/contacts/:email', async (req, res) => {
    return updateContact(req, res);
})

// View a contact
app.get('/contact/email', async (req, res) => {
    return viewContact(req, res);
})

// View all contacts
app.get('/contacts', async (req, res) => {
    return viewAllContacts(req, res);
})
/******************** Contacts***********************/


/******************** SkyScanner***********************/
app.get('/listplaces', async (req, res) => {
    return listplaces(req,res);
})
app.get('/currencies', async (req, res) => {
    return listcurrencies(req,res);
})
/******************** SkyScanner***********************/




export { app };


