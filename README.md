# Student Profile Listing

The application fetches student profiles from API - https://www.hatchways.io/api/assessment/students

The application does following
1. Renders each student profile with info such as name, picture, email, skill and average
2. User can filter profiles based on name as well as tags
3. User can also click on a single student profile to see test scores and the tags
4. User can also add multiple tags to the student profile

Explaining application code wise,
1. The application fetches data once at start and calculates average to store it in main data store
2. The tags are saved in memory, so refreshing the app deletes that data
3. The search filter is made using OR condition between firstName, lastName and tags, it can quickly be converted to AND.

Enhancements,
1. Storing tag data in localStorage, which will be saved when user adds it. So it could be fetched on subsequent refreshes and shown to the user.
2. Adding unit tests for each component for better code coverage

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />

### `yarn build`

Builds the app for production to the `build` folder.<br />
