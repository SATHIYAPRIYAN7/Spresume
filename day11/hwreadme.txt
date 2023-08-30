Charles' Tip Calculator
=======================

This is a simple web application that calculates the tip amount for a bill based on the bill amount, service quality, and number of people sharing the bill. The application uses HTML and JavaScript to provide a user-friendly interface for calculating tips.

Files:
- index.html: Contains the HTML structure, styling, and JavaScript code for the tip calculator.
- style.css: Includes the styling for the HTML elements.
- script.js: Includes the JavaScript code for calculating and displaying tip amounts.

Usage:
1. Open the `index.html` file in a web browser.
2. Fill in the bill amount, select the service quality, and specify the number of people sharing the bill.
3. Click the "Calculate!" button to see the calculated tip amount.
4. The tip amount will be displayed below the "Calculate!" button.

HTML and CSS Code Explanation:
-------------------------------
The `index.html` file includes a simple web page layout for the tip calculator. It consists of a form with input fields for bill amount, service quality, and number of people. The calculated tip amount is displayed below the "Calculate!" button.

- The page is styled using the `style.css` file to create a visually appealing user interface.
- The background image and colors are applied to the relevant elements.
- The form fields are organized using CSS flexbox.

JavaScript Code Explanation:
-----------------------------
The `script.js` file includes JavaScript code that performs the calculation and updates the UI.

- The script targets the input fields and the "Calculate!" button using their respective IDs.
- An event listener is added to the "Calculate!" button, listening for a click event.
- When the button is clicked, the script calculates the tip amount using the formula `(bill amount * service quality) / number of people`.
- The calculated tip amount is formatted and displayed below the button.
- Initially, the tip amount section is hidden, and it becomes visible only after the calculation is done.



