# Intro to React Sprint Challenge

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This challenge allows you to practice the concepts and techniques learned over the past sprint and apply them in a concrete project. This sprint explored **introductory React**. During this sprint, you studied **React components and advanced styling**.

In your challenge this week, you will demonstrate your mastery of these skills by creating **a Star Wars page** using data from an API.

This is an individual assessment. All work must be your own. All projects will be submitted to Codegrade for automated review. You will also be given feedback by code reviewers. For more information on the review process [click here.](https://www.notion.so/bloomtech/How-to-View-Feedback-in-CodeGrade-c5147cee220c4044a25de28bcb6bb54a)

You are not allowed to collaborate during the sprint challenge.

## Project Set Up

- [X] Fork and clone the repo. Delete your old fork from Github first if you are repeating this Unit.
- [X] Open the assignment in Canvas and click on the "Set up git" option (Or, depending, if you see something along the lines of 'Load Sprint Challenge Submission in a new window' click that).
- [X] Wire your fork to Codegrade using the "Click here for instructions on setting up Git submissions" link, select Github, authorize Github.
- [X] Push your first commit: `git commit --allow-empty -m "first commit" && git push`. MAKE SURE TO PUSH TO MAIN, YOU NO LONGER NEED TO CREATE A NEW BRANCH!!
- [X] Make commits often! PUSH TO MAIN!!!
- [X] You can run tests locally by running npm run test.
- [X] Check to see that Codegrade has accepted your git submission.

## Project Instructions

### Introduction

In this challenge you will create a web page that presents a styled list of characters obtained from an API. Being able to render out data to a web page is a large part of what JavaScript developers do, this challenge assesses your ability to achieve such a task.

In meeting the minimum viable product (MVP) specifications listed below, your project might look somewhat similar to the solution examples below:

[Example](https://tk-assets.lambdaschool.com/b011a132-0916-4ed2-8955-14192de03a75_sample-screenshot.png)

[Another example](https://tk-assets.lambdaschool.com/3b82c793-2352-4d4d-a81d-e55bf350f7bd_sample-screenshot2.png)

### Instructions

Your finished project must include all of the following requirements:

- [X] Use the endpoint `[GET] https://swapi.dev/api/people` (mocked in [msw](https://github.com/mswjs/msw)) to obtain characters.
- [X] Set the list of characters into state.
- [X] Render your characters to the DOM:

  1. Build a React component named 'Character' to render an individual character.
  1. Map over the list in state, and for each character render a Character to the page.
  1. Each rendered character must display its name in the DOM (e.g. "Luke Skywalker").
  1. The character's name can't be hard-coded into the HTML. This data must be obtained from the API.
  1. The components must be styled with **styled-components**.

  **Notes:**

- Data obtained from the endpoint using browser-run JavaScript is mocked with [msw](https://github.com/mswjs/msw).
- If you test the endpoint using HTTPie or Postman you will obtain different results, as msw won't intercept the request.
- You are welcome to create additional files but **do not move or rename existing files** or folders.
- Do not alter your `package.json` file except to install extra libraries.
- The `start` process can sometimes choke after adding new dependencies and may need to be restarted.
- In your solution, it is essential that you follow best practices and produce clean and professional results.
- Schedule time to review and polish your work, including spell-checking and grammar-checking.
- It is better to submit a challenge that meets MVP than one that attempts too much and does not.

### Stretch Goals

After finishing your required elements, you can push your work further. These goals may or may not be things you have learned in this module but they build on the material you just studied. Time allowing, stretch your limits and see if you can deliver on any the following optional goals:

- [X] Make the Character component more complex and break it into several subcomponents.
- [X] Use the endpoint `[GET] https://swapi.dev/api/films` (mocked in msw) to obtain movie information to render with the characters.
- [X] Create a helper function in separate module to remove unneeded information from the API data, before putting it in state.
- [X] Create transitions or animations with styled-components.
- [X] Use Promise.all to resolve an array of promises.

## Submission format

- [X] Submit via Codegrade by committing and pushing any new changes to the main branch.
- [X] Check Codegrade for automated feedback.
- [X] Check Codegrade in the days following the Sprint Challenge for reviewer feedback.
- [X] Any changes pushed after the deadline will not receive any feedback.

## Interview Questions

Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. Put your answers underneath the questions:

1. What is React JS and what problems does it solve? Support your answer with concepts introduced in class and from your personal research on the web.
-React is a library that abstracts away the tedious methods for rendering to the DOM of components such as the method document.getElementByClassname. React interacts with the DOM through an engine created by the React team called the ‘virtual DOM’. This virtual DOM acts as the middle-man between the developer and the actual DOM. The way the virtual DOM interacts with the code is that it keeps track of the elements/apps on the page and whenever it sees a change in an app it will send that specific change to the actual DOM allowing it to selectively render only the changes rather than the whole page. React is useful because it allows a page of content to independently render singular elements/apps on a page when changes are made to them rather than refreshing the entire page every time that there is a change in the content.

2. Describe component state.
-State is when you have values within a component that you need to track the value of and detect changes to those values in order to apply those changes elsewhere.

3. Describe props.
 -Props is a keyword in React that is used to pass data from one component to another. From a parent to a child and is short for 'properties'.

4. What are side effects, and how do you sync effects in a React component to changes of certain state or props?
- Side effect is when a function tries to modify anything outside its body. To sync effects in a React component, you will need to have to use your setter and getter within the useEffect hook.
