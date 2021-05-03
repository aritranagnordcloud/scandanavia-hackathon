import { Request, Response } from "firebase-functions";
import * as httpStatus from "http-status-codes";
import * as admin from 'firebase-admin';


const helloWorld = function(request: Request, response: Response) {
  return response.status(httpStatus.OK).send({ success: true });
};

export default helloWorld;


export async function  queryContact (email){
  try {
  const docRef = admin.firestore().collection('users').doc(String(email));
  const doc = await docRef.get();
  if (!doc.exists) {
      console.log('No such document!');
      return 'No such document!';
  } else {
      return doc.data();
  }
  } catch (error) {
      console.log(error)
      return error
  }
}

export async function  mutateContact (input){

  try {
      console.log(input)
      const docRef = admin.firestore().collection('users').doc(input.email);

      await docRef.set({
          firstName: input.firstName,
          lastName: input.lastName,
          email: input.email
      });

      return input
  } catch (error) {
      console.log(error)
      return error
  }
}


