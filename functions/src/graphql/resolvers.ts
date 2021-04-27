
import { queryContact ,mutateContact } from '../contacts';


const resolverFunctions = {
  Query: {
    hello: () => 'world',
    getContact: async (_, { email }) => {
      var result = await queryContact(email)
      console.log(result)
      return result;
    }
  },

  Mutation : {
    createContact : async(_,obj) =>{
      console.log(obj.input.email)
      var result = mutateContact(obj.input);
      console.log(result);
      return result;
      
    }
  }
};

export default resolverFunctions;