In this practice let's build a **Comments App** by applying the concepts we have learned till now.

### Refer to the image below:

<br/>
<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/comments-app-output-v0.gif" alt="comments output" style="max-width:70%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>

#### Design Files

<details>
<summary>Click to view the Design Files</summary>

- [Extra Small (Size < 576px) and Small (Size >= 576px)](https://assets.ccbp.in/frontend/content/react-js/comments-app-sm-output-v0.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px)](https://assets.ccbp.in/frontend/content/react-js/comments-app-lg-output-v0.png)

</details>

### Project Set Up Instructions

<details>
<summary>Click to view the Set Up Instructions</summary>

- Download dependencies by running `npm install`
- Start up the app using `npm start`
</details>

### Project Completion Instructions

<details>
<summary>Click to view the Functionality to be added</summary>

#### Add Functionality

The app must have the following functionalities

- Initially the list of comments should empty and the values for name and comment input should be empty.
- When non-empty values are entered and **Add Comment** button is clicked,
  - The value of the input elements for name and comment should be updated to their initial values.
  - A new comment should be added to the list of comments.
  - The comments count should be incremented by 1.
- When the **Like** button of a comment is clicked, the HTML image element for like should be changed to the **filled** like image.
- When the **Delete** button of a comment is clicked, the comment should be deleted from the list of comments.
- When the **Delete** button of a comment is clicked, the comments count should be decremented by 1.

</details>

<details>
<summary>Click to view the Implementation Files</summary>

- Your task is to complete the implementation of
  - `src/components/Comments/index.js`
  - `src/components/Comments/index.css`
  - `src/components/CommentItem/index.js`
  - `src/components/CommentItem/index.css`

</details>

<details>
<summary>Click to view the Components Structure</summary>

#### Components Structure

<br/>
<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/comments-app-component-breakdown-structure-v0.png" alt="component breakdown structure" style="max-width:100%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>

</details>

### Quick Tips

<details>
<summary>Click to view Quick Tips</summary>

- The `formatDistanceToNow` function in the **date-fns** package is used to return the gap between the given date and now in words.

```js
import {formatDistanceToNow} from 'date-fns'

console.log(formatDistanceToNow(new Date())) // less than a minute
```

</details>

> #### Important Note
>
> <details open>
> <summary>Click to view Important Note Points</summary>
>
> **The following HTML attributes are required for the HTML for the tests to pass**
>
> - The **Like** image for each comment should have the alt attribute value as `like`
> - The **Delete** button for each comment should have the testid as `delete`
> - To display how much time ago the comment was posted we will use `formatDistanceToNow` function from **date-fns** package
>
> </details>

### Resources

<details>
<summary>Image URLs</summary>

#### Images

- [https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png](https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png) alt should be **comments**
- [https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png](https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png)
- [https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png](https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png)
- [https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png](https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png) alt should be **delete**

</details>

<details>
<summary>Colors</summary>

#### Colors

<div style="background-color: #dee0e3; width: 150px; padding: 10px; color: black">Hex: #dee0e3</div>
<div style="background-color: #1e293b; width: 150px; padding: 10px; color: white">Hex: #1e293b</div>
<div style="background-color: #475569; width: 150px; padding: 10px; color: white">Hex: #475569</div>
<div style="background-color: #cbd2d9; width: 150px; padding: 10px; color: black">Hex: #cbd2d9</div>
<div style="background-color: #0284c7; width: 150px; padding: 10px; color: white">Hex: #0284c7</div>
<div style="background-color: #f59e0b; width: 150px; padding: 10px; color: black">Hex: #f59e0b</div>
<div style="background-color: #0b69ff; width: 150px; padding: 10px; color: white">Hex: #0b69ff</div>
<div style="background-color: #f97316; width: 150px; padding: 10px; color: black">Hex: #f97316</div>
<div style="background-color: #10b981; width: 150px; padding: 10px; color: black">Hex: #10b981</div>
<div style="background-color: #b91c1c; width: 150px; padding: 10px; color: black">Hex: #b91c1c</div>
<div style="background-color: #0ea5e9; width: 150px; padding: 10px; color: white">Hex: #0ea5e9</div>
<div style="background-color: #334155; width: 150px; padding: 10px; color: white">Hex: #334155</div>
<div style="background-color: #94a3b8; width: 150px; padding: 10px; color: white">Hex: #94a3b8</div>
<div style="background-color: #64748b; width: 150px; padding: 10px; color: white">Hex: #64748b</div>
<div style="background-color: #7e858e; width: 150px; padding: 10px; color: white">Hex: #7e858e</div>

<br/>
</details>

#### Font-families

- Roboto

> ### _Things to Keep in Mind_
>
> - All components you implement should go in the `src/components` directory.
> - Don't change the component folder names as those are the files being imported into the tests.
> - **Do not remove the pre-filled code**
> - Want to quickly review some of the concepts you’ve been learning? Take a look at the Cheat Sheets.
