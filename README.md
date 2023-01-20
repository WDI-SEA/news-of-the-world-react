# News of the World - React
## Getting Started
-    Fork and clone this repo
-    Head over to the [News API](https://newsapi.org/) site and generate a free API key

## The Task
| URL Pattern | Description |
| ----------- | ----------- |
| /      | Landing page shows all recent news articles, or a filtered list based on what the user searches      |
| /articles/:id   | Displays all info about the article with the api id as indicated in the url params       |

You have been given a barebones React App from which to work, meaning you will have to complete and style existing components, create additional components, as required, and add routes to your application using `react router dom`, in addition to getting and storing API data.

#### Part 1: The API
With your freshly minted API key in hand, it's time to see what data you get back from the API. 

Read through the [Get Started](https://newsapi.org/docs/get-started) page in order to familiarize yourself with the endpoints and search options you have.

Although it won't matter too much here, best practice is to protect your API keys from bad actors, so consider this when including your key in your application.

#### Part 2: Components
You have an `App.js` file in the root of your `src/components` folder, in addition to `Landing` and `Display` pages in `src/components/pages`. 

While these offer a starting point, you may want to consider the universal layout of the application, in addition to how you want to display your API response. Whatever your choice, you'll need to create additional components and import them to the files in which they are required.

<details>
<summary>Hint</summary>
<br>
Consider endpoints of the NewsAPI when making your decision. In addition to thinking about the data you'll receive back, what edge cases might you encounter and how might you combat these.
</details>

#### Part 3: Search
As much as it's a pain, a one size fits all approach doesn't generally fit users, especially something that can be as personal as what news they wish to read about.

With that in mind, create a search feature which queries your API based on user input.

There are multiple ways to go about this. If you're struggling to implement, think about limiting potential user input to guarantee they return specific endpoints. Or, let the user input any text and do the search functionality just like animal crossing!

#### Bonus: Fully Responsive
If you've gotten this far, good job! You have one last task remaining: to make your app fully responsive.

At this point, consider how you can change your layout and components. As always, [CSS Tricks](https://css-tricks.com/) is your friend, so if you're struggling, check out some of the resouces they have. If you are struggling on how to incorporate css into your React app, don't fret! There are [so many ways](https://codeburst.io/4-four-ways-to-style-react-components-ac6f323da822) to use css in React.

<details>
<summary>Hint</summary>
<br>
Aside from media queries, which should be your bread and butter in this task, think about the ways in which you might use the parent/child relationships between elements to your advantage.
</details>
