import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as express from 'express';
import * as bodyParser from "body-parser";
import gqlServer from "./graphql/server";

import { addContact, updateContact, viewContact, viewAllContacts} from './contacts';
import {listplaces,listcurrencies , browseroutesinbound,browsequotesinbound,browsedatesinbound,browsedates,browseroutes,browsequotes, listmarkets} from './skyscanner-apis'
import {updateuserquery,senduserquery,fetchuserquery} from './user-config';
import {shortenurlofapi} from './tinyurl';

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
app.post('/listplaces', async (req, res) => {
    return listplaces(req,res);
})
app.get('/listcurrencies', async (req, res) => {
    return listcurrencies(req,res);
})

app.post('/listmarkets', async (req, res) => {
    return listmarkets(req,res);
})

app.post('/browseroutesinbound', async (req, res) => {
    return browseroutesinbound(req,res);
})
app.post('/browsequotesinbound', async (req, res) => {
    return browsequotesinbound(req,res);
})
app.post('/browsedatesinbound', async (req, res) => {
    return browsedatesinbound(req,res);
})

app.post('/browsedates', async (req, res) => {
    return browsedates(req,res);
})

app.post('/browseroutes', async (req, res) => {
    return browseroutes(req,res);
})
app.post('/browsequotes', async (req, res) => {
    return browsequotes(req,res);
})
/******************** SkyScanner***********************/

/******************** Reading User Config***********************/
app.post('/senduserquery', async (req, res) => {
    return senduserquery(req, res);
})
app.get('/fetchuserquery', async (req, res) => {
    return fetchuserquery(req, res);
})
// Processed Records
app.post('/updateuserquery', async (req, res) => {
    return updateuserquery(req, res);
})
/******************** Reading User Config***********************/

/********************Tiny URL***********************/
app.post('/shortenurlofapi', async (req, res) => {
    return shortenurlofapi(req, res);
})
/******************** Tiny URL***********************/



export { app };


