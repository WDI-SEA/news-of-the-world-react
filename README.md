# News of the World - React
## Getting Started
-    Fork and clone this repo
-    Head over to the [News API](https://newsapi.org/) site and generate a free API key

## Overview
The changing landscape of how the general public navigates the internet has brought with it some interesting challenges that we, as developers, need to consider during the development process.

One such example of this is how prevalent the concept of "mobile-first" has become in recent years. Since mobile devices have, for many, become the weapon of choice when it comes to their daily blast of internet, it's important that we identify this during development to offer the most seamless browsing experience possible.

## The Task
Your task, whether you accept it or not, is to create a fairly basic news application which will, at its most basic, allow users to receive and store (in state) articles which they can read later.

You have been given a barebones React App from which to work, meaning you will have to complete and style existing components, create additional components, as required, and add routes to your application using `react router dom`, in addition to getting and storing API data.

You should consider **mobile first** development throughout. For all you pixel lovers out there, you may want to reconsider your choice of sizing increment to make life significantly easier.

If you want to see how your app will look on mobile, Chrome developer tools enables you to see this by clicking the cell/tablet icon in the top left of the window.

#### Part 1: The API
With your freshly minted API key in hand, it's time to see what data you get back from the API. 

Read through the [Get Started](https://newsapi.org/docs/get-started) page in order to familiarize yourself with the endpoints and search options you have.

Although it won't matter too much here, best practice is to protect your API keys from bad actors, so consider this when including your key in your application.

#### Part 2: Components
You have an `index.js` file in the route of your `App` folder, in addition to `Landing` and `Display` pages. 

While these offer a starting point, you may want to consider the universal layout of the application, in addition to how you want to display your API response. Whatever your choice, you'll need to create additional components and import them to the files in which they are required.

<details>
<summary>Hint</summary>
<br>
Consider endpoints of the NewsAPI when making your decision. In addition to thinking about the data you'll receive back, what edge cases might you encounter and how might you combat these.
</details>

#### Part 3: State
Handling state is, in this case, entirely your choice, however the way in which data is passed throughout an application is important.

While accomplishing the task at hand is of importance, consider the ways in which you might "future proof" your app, should you choose to expand upon this completed v1.

<details>
<summary>Hint</summary>
<br>
What if we decided to add back end functionality to the application.
</details>

#### Part 4: Search
As much as it's a pain, a one size fits all approach doesn't generally fit users, especially something that can be as personal as what news they wish to read about.

With that in mind, create a search feature which queries your API based on user input.

<details>
<summary>Hint</summary>
<br>
There are multiple ways to go about this. If you're struggling to implement, think about limiting potential user input to guarantee they return specific endpoints.
</details>

#### Part 5: Fully Responsive
If you've gotten this far, good job! You have one last task remaining: to make your app fully responsive.

At this point, consider how you can change your layout and components. As always, [CSS Tricks](https://css-tricks.com/) is your friend, so if you're struggling, check out some of the resouces they have. If you are struggling on how to incorporate css into your React app, don't fret! There are [so many ways](https://codeburst.io/4-four-ways-to-style-react-components-ac6f323da822) to use css in React.

<details>
<summary>Hint</summary>
<br>
Aside from media queries, which should be your bread and butter in this task, think about the ways in which you might use the parent/child relationships between elements to your advantage.
</details>
