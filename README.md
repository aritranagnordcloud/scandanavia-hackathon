

1. Add REST functions in index.ts file
2. Run the Below commands to check locally
- cd functions
- npm stop
- firebase emulators:start
- npm run localrun
3. Deploying the functions 
- firebase deploy --only functions
4. Before Running API key needs to be revoked from git secrets