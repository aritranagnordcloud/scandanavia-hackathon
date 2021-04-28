
import * as request from "request";
import * as unirest from "unirest";

var api_key = "2b0dffa068mshdb868caff516f00p1a40d1jsnfd9db792b255";
var api_host = "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com";


export async function listplaces(req, res) {
    try {
        var query = req.body.query
        var country = req.body.country
        var currency = req.body.currency
        var locale = req.body.locale
        var url = 'https://' + api_host + '/apiservices/autosuggest/v1.0/' + country + '/' + currency + '/' + locale + '/'
        console.log(url)
        const options = {
            method: 'GET',
            url: url,
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
            return res.status(200).send(body);
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
            return res.status(200).send(body);
        });
    } catch (error) {
        console.log(error)
        return res.status(400).send(error)
    }
}


export async function listmarkets(req, res) {
    try {

        var locale = req.body.locale
        var url = 'https://' + api_host + '/apiservices/reference/v1.0/countries/' + locale
        const options = {
            method: 'GET',
            url: url,
            headers: {
                'x-rapidapi-key': api_key,
                'x-rapidapi-host': api_host,
                useQueryString: true
            }
        };

        request(options, function (error, response, body) {
            if (error) throw new Error(error);

            res.setHeader('Content-Type', 'application/json');
            return res.status(200).send(body);
        });
    } catch (error) {
        console.log(error)
        return res.status(400).send(error)
    }
}

export async function browseroutesinbound(req, res) {
    try {

        var destinationplace = req.body.destinationplace
        var country = req.body.country
        var currency = req.body.currency
        var locale = req.body.locale
        var inboundpartialdate = req.body.inboundpartialdate
        var originplace = req.body.originplace
        var outboundpartialdate = req.body.outboundpartialdate
        const options = {
            method: 'GET',
            url: 'https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browseroutes/v1.0/' + country + '/' + currency + '/' + locale + '/' + originplace + '/' + destinationplace + '/' + outboundpartialdate + '/' + inboundpartialdate,
            headers: {
                'x-rapidapi-key': api_key,
                'x-rapidapi-host': api_host,
                useQueryString: true
            }
        };

        request(options, function (error, response, body) {
            if (error) throw new Error(error);

            console.log(body);
            res.setHeader('Content-Type', 'application/json');
            return res.status(200).send(body);
        });

    } catch (error) {
        console.log(error)
        return res.status(400).send(error)
    }
}


export async function browsequotesinbound(req, res) {
    try {

        var destinationplace = req.body.destinationplace
        var country = req.body.country
        var currency = req.body.currency
        var locale = req.body.locale
        var inboundpartialdate = req.body.inboundpartialdate
        var originplace = req.body.originplace
        var outboundpartialdate = req.body.outboundpartialdate
        const options = {
            method: 'GET',
            url: 'https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/' + country + '/' + currency + '/' + locale + '/' + originplace + '/' + destinationplace + '/' + outboundpartialdate + '/' + inboundpartialdate,
            headers: {
                'x-rapidapi-key': api_key,
                'x-rapidapi-host': api_host,
                useQueryString: true
            }
        };

        request(options, function (error, response, body) {
            if (error) throw new Error(error);

            console.log(body);
            res.setHeader('Content-Type', 'application/json');
            return res.status(200).send(body);
        });

    } catch (error) {
        console.log(error)
        return res.status(400).send(error)
    }
}

export async function browsedatesinbound(req, res) {
    try {

        var destinationplace = req.body.destinationplace
        var country = req.body.country
        var currency = req.body.currency
        var locale = req.body.locale
        var inboundpartialdate = req.body.inboundpartialdate
        var originplace = req.body.originplace
        var outboundpartialdate = req.body.outboundpartialdate
        const options = {
            method: 'GET',
            url: 'https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsedates/v1.0/' + country + '/' + currency + '/' + locale + '/' + originplace + '/' + destinationplace + '/' + outboundpartialdate + '/' + inboundpartialdate,
            headers: {
                'x-rapidapi-key': api_key,
                'x-rapidapi-host': api_host,
                useQueryString: true
            }
        };

        request(options, function (error, response, body) {
            if (error) throw new Error(error);

            console.log(body);
            res.setHeader('Content-Type', 'application/json');
            return res.status(200).send(body);
        });

    } catch (error) {
        console.log(error)
        return res.status(400).send(error)
    }
}

export async function browsedates(req, res) {
    try {
        var country = req.body.country
        var currency = req.body.currency
        var locale = req.body.locale
        var originplace = req.body.originplace
        var inboundpartialdate = req.body.inboundpartialdate
        var destinationplace = req.body.destinationplace
        var outboundpartialdate = req.body.outboundpartialdate
        var request = unirest("GET", "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsedates/v1.0/"+ country + '/' + currency + '/' + locale + '/' + originplace + '/' + destinationplace + '/'+ outboundpartialdate + '/' );

        request.query({
            "inboundpartialdate": inboundpartialdate
        });

        request.headers({
            "x-rapidapi-key": api_key,
            "x-rapidapi-host":api_host,
            "useQueryString": true
        });


        request.end(function (response) {
            if (response.error) throw new Error(response.error);

            console.log(response.body);
            res.setHeader('Content-Type', 'application/json');
            return res.status(200).send(response.body);
        });

    } catch (error) {
        console.log(error)
        return res.status(400).send(error)
    }
}

export async function browseroutes(req, res) {
    try {
        var country = req.body.country
        var currency = req.body.currency
        var locale = req.body.locale
        var originplace = req.body.originplace
        var inboundpartialdate = req.body.inboundpartialdate
        var destinationplace = req.body.destinationplace
        var outboundpartialdate = req.body.outboundpartialdate
        var request = unirest("GET", "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browseroutes/v1.0/"+ country + '/' + currency + '/' + locale + '/' + originplace + '/' + destinationplace + '/'+ outboundpartialdate + '/' );

        request.query({
            "inboundpartialdate": inboundpartialdate
        });

        request.headers({
            "x-rapidapi-key": api_key,
            "x-rapidapi-host":api_host,
            "useQueryString": true
        });


        request.end(function (response) {
            if (response.error) throw new Error(response.error);

            console.log(response.body);
            res.setHeader('Content-Type', 'application/json');
            return res.status(200).send(response.body);
        });

    } catch (error) {
        console.log(error)
        return res.status(400).send(error)
    }
}


export async function browsequotes(req, res) {
    try {
        var country = req.body.country
        var currency = req.body.currency
        var locale = req.body.locale
        var originplace = req.body.originplace
        var inboundpartialdate = req.body.inboundpartialdate
        var destinationplace = req.body.destinationplace
        var outboundpartialdate = req.body.outboundpartialdate
        var request = unirest("GET", "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/"+ country + '/' + currency + '/' + locale + '/' + originplace + '/' + destinationplace + '/'+ outboundpartialdate + '/' );

        request.query({
            "inboundpartialdate": inboundpartialdate
        });

        request.headers({
            "x-rapidapi-key": api_key,
            "x-rapidapi-host":api_host,
            "useQueryString": true
        });


        request.end(function (response) {
            if (response.error) throw new Error(response.error);

            console.log(response.body);
            res.setHeader('Content-Type', 'application/json');
            return res.status(200).send(response.body);
        });

    } catch (error) {
        console.log(error)
        return res.status(400).send(error)
    }
}