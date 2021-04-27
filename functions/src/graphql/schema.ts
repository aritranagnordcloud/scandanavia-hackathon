import { gql } from "apollo-server-express";

const schema = gql`

type Contact {
	firstName: String
	lastName: String
	email: String
}

input ContactInput {
  firstName: String
	lastName: String
	email: String!
}

type Mutation {
	createContact(input: ContactInput!): Contact
}

  type Query {
    "A simple type for getting started!"
    hello: String
    getContact(email: String!): Contact
  }
`;

export default schema;
