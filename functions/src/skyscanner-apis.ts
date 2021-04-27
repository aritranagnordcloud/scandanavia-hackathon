
import * as request from "request";






var api_key = "2b0dffa068mshdb868caff516f00p1a40d1jsnfd9db792b255";
var api_host = "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com";


export async function listplaces(req, res) {
    try {
        var query = req.body['query']
        var country = req.body['country']
        var currency = req.body['currency']
        var locale = req.body['locale']

        const options = {
            method: 'GET',
            url: 'https://' + api_host + '/apiservices/autosuggest/v1.0/' + country + '/' + currency + '/' + locale + '/',
            qs: { query: query },
            headers: {
                'x-rapidapi-key': api_key,
                'x-rapidapi-host': api_host,
                useQueryString: true
            }
        };

        request(options, function (error, response, body) {
            if (error) throw new Error(error);

            res.setHeader('Content-Type', 'application/json');
            res.status(200).send(body);
        });
    } catch (error) {
        console.log(error)
        return res.status(400).send(error)
    }
}

export async function listcurrencies(req, res) {
    try {


        const options = {
            method: 'GET',
            url: 'https://' + api_host + '/apiservices/reference/v1.0/currencies',
            headers: {
                'x-rapidapi-key': api_key,
                'x-rapidapi-host': api_host,
                useQueryString: true
            }
        };

        request(options, function (error, response, body) {
            if (error) throw new Error(error);

            res.setHeader('Content-Type', 'application/json');
            res.status(200).send(body);
        });
    } catch (error) {
        console.log(error)
        return res.status(400).send(error)
    }
}
