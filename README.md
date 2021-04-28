

1. Add REST functions in index.ts file
2. Run the Below commands to check locally
- cd functions
- npm stop
- firebase emulators:start
- npm run localrun
3. Deploying the functions 
- firebase deploy --only functions


Sample Graphql Queries

mutation {
  createContact(input: {firstName:"Bhagwan" ,lastName:"Kumar",
  email:"jokumar@deloitte.com"})
	{
    email
  }
}

query{
    getContact(email:"jokumar@deloitte.com"){
        firstName
    }
}