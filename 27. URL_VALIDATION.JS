/* URL validation.

Write a program using a regex that matches valid URLs. Valid URLs should start with either http:// or https://,
followed by one or more letters, digits, or special characters, followed by a dot, followed by one or more letters.
Print a message indicating if the input matches the conditions or not. */

const url = "https://www.example123.com";

function validateUrl(url) {
    const urlPattern = /^(http:\/\/|https:\/\/)\w+[\w\-.~:/?#[\]@!$&'()*+,;=]+\w+$/;
    if (urlPattern.test(url)) {
        console.log("Testing successful");
    } else {
        console.log("Testing unsuccessful");
    }
}

validateUrl(url);
