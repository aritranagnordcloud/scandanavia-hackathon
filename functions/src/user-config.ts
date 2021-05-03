

import * as admin from 'firebase-admin';



export async function senduserquery(req, res) {
    try {
        console.log(req.body['email'])
        const docRef = admin.firestore().collection('userquery').doc(req.body['email']);
        var uniquevalue = req.body['originplace'] + "#" + req.body['destinationplace'];
        console.log(req.body['currency'])
        await docRef.collection(uniquevalue).add({
            inboundpartialdate: req.body['inboundpartialdate'],
            country: req.body['country'],
            locale: req.body['locale'],
            originplace: req.body['originplace'],
            currency: req.body['currency'],
            destinationplace: req.body['destinationplace'],
            outboundpartialdate: req.body['outboundpartialdate'],
            resolved: false,
            resolveddate: "",
            email: req.body['email']
        });

        return res.status(201).send("Saved a User Query Record for Browse Dates for  contact:" + req.body['email'] + " between " + req.body['originplace'] + " and " + req.body['destinationplace'] + " for currency: "+ req.body['currency']);
    } catch (error) {
        console.log(error)
        return res.status(400).send(error)
    }
}

export async function updateuserquery(req, res) {
    try {

        const updatedCollections : string[] = [];
        var uniquevalue = req.body['originplace'] + "#" + req.body['destinationplace'];
        const docRef = await admin.firestore().collection('userquery').doc(req.body['email']).collection(uniquevalue).where('resolved','!=', true).get();
        docRef.forEach(collection => {
            console.log('Found subcollection with id:',collection.id );
            updatedCollections.push(collection.id);
            admin.firestore().collection('userquery').doc(req.body['email']).collection(uniquevalue).doc(collection.id).update({ resolved: true,
            resolveddate: Date.now()})
            

            
        });
        return res.status(201).send("Records Processed Browse Dates for  contact:" +req.body['email'] + " between " + req.body['originplace'] + " and " + req.body['destinationplace'] + " for collections: " + updatedCollections);
    } catch (error) {
        console.log(error)
        return res.status(400).send(error)
    }
}

export async function fetchuserquery(req, res) {
    try {
        var email = req.query.email
        var uniquevalue = req.query.originplace + "#" + req.query.destinationplace;
        const docRef = admin.firestore().collection('userquery').doc(email).collection(uniquevalue).where('resolved','!=', true).get();
        return res.status(200).send((await docRef).docs.map(doc => doc.data()));      

    } catch (error) {
        console.log(error)
        return res.status(400).send(error)
    }
}
