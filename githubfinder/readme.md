GitHub User Search Web Application

This code represents a simple web application that allows users to search for GitHub users by their usernames and displays their user information. Below is an explanation of the code structure and functionality.

1. HTML Structure:
   - The HTML structure is quite straightforward, with basic metadata and a container for the web page's content.
   - The page includes a header with the title "Github," a search form, and a user card container.

2. CSS Styles:
   - The CSS styles define the appearance and layout of the web page.
   - It sets up a clean and responsive design using Flexbox and other CSS properties.
   - The styles use a Roboto Mono font and have a dark mode toggle feature.

3. JavaScript Functionality:
   - JavaScript is used to make the web page interactive and perform user searches.
   - It listens for form submissions and fetches user data from the GitHub API based on the entered username.
   - The fetched data is displayed in the user card, which includes user information such as avatar, name, bio, and more.
   - If the user is not found or if there is an error, appropriate error messages are displayed.

4. Event Listeners:
   - The JavaScript code listens for form submission events and triggers the `getuser` function to handle the user search.
   - The code updates the user card with the fetched user data or error messages based on the API response.

5. Usage:
   - To use this web application, simply enter a GitHub username in the search input field and click the "Search" button.
   - The user's information will be displayed in the user card below the search form.

6. Dependencies:
   - The code uses the Font Awesome icons library for displaying search and spinner icons.

7. API Usage:
   - The code fetches data from the GitHub API (https://api.github.com/users/{username}) to retrieve user information.
Thankyou
