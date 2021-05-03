import * as admin from 'firebase-admin';
import { v4 as uuidv4 } from 'uuid';
import * as unirest from "unirest";

var api_key = "2b0dffa068mshdb868caff516f00p1a40d1jsnfd9db792b255";
var api_host = "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com";





export async function getplaces(input) {
    try {

        let response = await invokelistplaces(input);
        return response;
    } catch (error) {
        console.log(error)
        return error
    }
    function invokefirestoreAPI(response) {

        const docRef = admin.firestore().collection('getplaces').doc(uuidv4());
        docRef.set({
            response: response
        });
        return response;
    }
    function invokelistplaces(input) {
        var query = input.query
        var country = input.country
        var currency = input.currency
        var locale = input.locale
        var url = 'https://' + api_host + '/apiservices/autosuggest/v1.0/' + country + '/' + currency + '/' + locale + '/';
        unirest("GET", url).query({
            "query": query
        }).headers({
            "x-rapidapi-key": api_key,
            "x-rapidapi-host": api_host,
            "useQueryString": true
        }).end(function (res) {
            if (res.error) {
                console.log('GET error', res.error)

            } else {
                invokefirestoreAPI(res.body)

            }

        });

    }
}