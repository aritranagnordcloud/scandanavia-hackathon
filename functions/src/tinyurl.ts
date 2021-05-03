
import * as unirest from "unirest";
import { v4 as uuidv4 } from 'uuid';
export async function shortenurlofapi(req, res) {
    try {

        var fullUrl = req.body.fullUrl
        let hexString = uuidv4();
        console.log("hex:   ", hexString);
        
        // remove decoration
        hexString = hexString.replace("-", "");
        
        let base64String = Buffer.from(hexString, 'hex').toString('base64')
        console.log("alias:", base64String);
        unirest
            .post('https://api.tinyurl.com/create')
            .headers({
                'accept': 'application/json',
                'Authorization': 'Bearer U5dbD3nZIpxeP1sZZbJU8FhOzsfOJ3L9u9r11TVw37w3xP6WBzcPbnAkw1VQ',
                'Content-Type': 'application/json'
            })
            .send({ "url": fullUrl+"/"+base64String, "alias":base64String })
            .then((response) => {
                console.log(response.body);
                res.setHeader('Content-Type', 'application/json');
                return res.status(200).send(response.body);
            })
       


    } catch (error) {
        console.log(error)
        return res.status(400).send(error)
    }
}