import * as admin from 'firebase-admin';




// Add new contact
export async function  addContact (req, res){
    try {
        console.log(req.body['email'])
        const docRef = admin.firestore().collection('users').doc(req.body['email']);

        await docRef.set({
            firstName: req.body['firstName'],
            lastName: req.body['lastName'],
            email: req.body['email']
        });

        return res.status(201).send("Created a new contact:" + req.body['email']);
    } catch (error) {
        console.log(error)
        return res.status(400).send(error)
    }
}





export async function  updateContact (req, res){
    try {
        const docRef = admin.firestore().collection('users').doc(req.params.email);

        await docRef.update({
            firstName: req.body['firstName'],
            lastName: req.body['lastName'],
            email: req.body['email']
        });
        res.status(204).send("Updated a new contact:" + req.params.email);
    } catch (error) {
        console.log(error)
        return res.status(400).send(error)
    }
}

export async function  viewContact (req, res){
    try {
        var email = req.query.email
    console.log(email)
    const docRef = admin.firestore().collection('users').doc(String(email));
    const doc = await docRef.get();
    if (!doc.exists) {
        console.log('No such document!');
        res.status(400).send('No such document!');
    } else {
        res.status(200).send(doc.data());
        console.log('Document data:', doc.data());
    }
    } catch (error) {
        console.log(error)
        return res.status(400).send(error)
    }
}

export async function  viewAllContacts (req, res){
    try {
        const snapshot = await admin.firestore().collection('users').get()

        const documents = [] as any;
        snapshot.forEach(doc => {
            console.log(doc.data())
            documents.push(doc.data());
        });
        res.status(200).send(documents);
    } catch (error) {
        console.log(error)
        return res.status(400).send(error)
    }
}









