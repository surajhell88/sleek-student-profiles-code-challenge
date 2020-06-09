# Student Profile Listing

The application fetches student profiles from API - https://www.hatchways.io/api/assessment/students

The application does following
1. Renders each student profile with info such as name, picture, email, skill and average
2. User can filter profiles based on name as well as tags
3. User can also click on a single student profile to see test scores and the tags
4. User can also add multiple tags to the student profile

Explaining application code wise,
1. The application fetches data once at start and calculates average to store it in main data store
2. The tags are saved in memory, so refreshing the app deletes that data, maybe we could add it in localstorage and fetch it in subsequent refresh, add it according to profile ids'
3. The search is made using OR conditions, it can quickly be converted to AND.

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
