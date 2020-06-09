# Student Profile Listing

The application fetches student profiles from API - https://www.hatchways.io/api/assessment/students

### What does the application do?
1. Renders each student profile with info such as name, picture, email, skill and average
![List-Of-Student-Profiles](https://github.com/surajhell88/sleek-student-profiles-code-challenge/screenshots/List.png)
2. User can filter profiles based on name as well as tags
![Filter-By-Name](https://github.com/surajhell88/sleek-student-profiles-code-challenge/screenshots/Search-By-Name.png)
3. User can also click on a single student profile to see test scores and the tags
![Profile-Details](https://github.com/surajhell88/sleek-student-profiles-code-challenge/screenshots/List-Details-Open.png)
4. User can also add multiple tags to the student profile
![List-With-Tags](https://github.com/surajhell88/sleek-student-profiles-code-challenge/screenshots/List-Added-Tags.png)

### How does the application behave?
1. The application fetches data once at start and calculates average to store it in main data store
2. The tags are saved in memory, so refreshing the app deletes that data
3. The search filter is made using OR condition between firstName, lastName and tags, it can quickly be converted to AND.

### Steps to remember:
1. If you want to add a new component, go to `src/components` directory, create a new directory with the component name as Pascal Case. Also, make sure that you export it in the `src/components/index.js` file.
2. Any common styles that maybe helpful for others, should be added to `src/styles` as a new file and also make sure you import it in the `src/styles/index.scss` so that it is available everywhere in the app.
3. If any new API is to be integrated in the application, first add the endpoint URL in the `src/utils/constants.js` file, create a new function in `src/utils/api` and then export it.
4. As we have added `.env` file, you can import all `src` level files & directories without using `../../` from deep withing the app code. You can simply use import urls such as `import utils from 'utils'` as `utils` is present in `src/utils`

### Probable Enhancements:
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
