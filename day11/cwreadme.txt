This is a simple example demonstrating how to capture keycodes and display the corresponding key value using HTML and JavaScript. The example provides a webpage where you can press any keyboard key, and it will show you the key value and keycode.

Files:
- index.html: Contains the HTML structure, styling, and JavaScript code.
- style.css: Includes the styling for the HTML elements.
- script.js: Includes the JavaScript code for capturing and displaying keycodes and key values.

Usage:
1. Open the `index.html` file in a web browser.
2. Press any key on your keyboard.
3. The webpage will display the key value and keycode of the pressed key.

HTML Code Explanation:
-----------------------
The `index.html` file contains a simple webpage structure with a `<div>` element that displays the instructions and the captured key value and keycode. The styling for the webpage is defined in the `style.css` file.

JavaScript Code Explanation:
-----------------------------
The `script.js` file includes the JavaScript code responsible for capturing the keydown event and displaying the key value and keycode.

- An event listener is added to the `keydown` event on the `document` object.
- When a key is pressed, the event listener function is triggered.
- The `key` and `keyCode` properties of the event object are used to retrieve the pressed key's value and keycode.
- The `keyPressed` `<div>` element's content is updated with the captured key value and keycode.

