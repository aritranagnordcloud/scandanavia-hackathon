
import { queryContact ,mutateContact } from '../functions/index';



const resolverFunctions = {
  Query: {
    hello: () => 'world',
    getContact: async (_, { email }) => {
      var result = await queryContact(email)
      return result;
    }
  },

  Mutation : {
    createContact : async(_,obj) =>{
      console.log(obj.input.email)
      var result = mutateContact(obj.input);
      console.log(result);
      return result;
    },
    
  }
};

export default resolverFunctions;
