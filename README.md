# iTunes-Playground 
This README.md provides you a short guideline of this page and what kind of elements are used to make this simple project. <br />

<br /> 

## Main Page
<img width="500" alt="스크린샷 2022-01-28 오후 4 23 04" src="https://user-images.githubusercontent.com/80466587/151504912-42cfcf5f-f465-44c6-bb7d-4a611dcb537f.png">
Welcome to iTunes-Playground. You can simply search for music tracks and contents on iTunes-Playground. <br />
Also, you can save your favorite musics by just clicking the 'heart' icon. <br />
Then, you can come back anytime and go to 'Favorite Page' and listen to your favorite music again!! <br/>

<br />

## Search Page
<img width="500" alt="스크린샷 2022-01-28 오후 4 34 34" src="https://user-images.githubusercontent.com/80466587/151505924-ecbc5bc2-d5ae-454e-ac8d-86cfbe784015.png">
You can search tracks from Apple Music, by typing music titles as your search keyword. <br />
Then, the page will show you total 9 musics as default. <br />
You can click next icon to see more results on same keyword <br />
<br />
Also, when you hover your cursor on the music track, <br />
the preview of that music track will automatically played. <br />
You can manage the volume of player on the top of the page <br />

<br />

## My Page
<img width="1154" alt="스크린샷 2022-01-28 오후 4 39 43" src="https://user-images.githubusercontent.com/80466587/151506542-df35d6b8-5a2b-4e09-9848-795ad6c5505d.png">
In this page, you can check your favorite musics that you chose at the past. <br />
your own playlist will be automatically saved and loaded everytime you add or delete some musics from your list. <br />
But, if you are anxious whether it is well saved or loaded, you can click the 'SAVE' and 'LOAD' button <br />
to save and load manually. <br />
When you change your device, the playlist won't be transferred. because, <br />
this page save your favorite list through LocalStorage <br />

<br />

## Settings
<img width="1154" alt="스크린샷 2022-01-28 오후 4 43 06" src="https://user-images.githubusercontent.com/80466587/151506935-9ca8cb4e-e4a9-4fef-a7be-cb68792c80c0.png">
Also, iTunes-Playground provides Settings!!! <br />
you can customize 1) Song Type, 2) Contents per page, 3) Number of Columns on Search Page, 4) Language <br />
It is set as default like below: <br />
1. Song Type: Song 
2. Contents per page: 9
3. Number of Columns: 2
4. Language: English


# Used Library

1. material UI (@mui/material, @emotion/react, @emotion/styled)
2. material icons (@mui/icons-material)
3. styled-components
4. jotai, react-query
5. axios, qs
6. react-router-dom
7. i18n (react-i18next, i18next, i18next-xhr-backend i18next-browser-languagedetector)
8. react-player
9. gh-pages


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
