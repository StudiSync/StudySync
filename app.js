function replaceNewlinesWithSpace(inputString) {
    // Use the replace() method with a regular expression to replace all "\n" with a space
    return inputString.replace(/\\n/g, '');
}

const { response } = require("express");

async function getResponse() {
    const response = await fetch('http://localhost:8000/');
    const data = await response.json();
    const hiElement = document.getElementById("hi");
    hiElement.innerText = JSON.stringify(data);  // You can format the data as needed
    const originalString = JSON.stringify(data);
    hiElement.innerText = replaceNewlinesWithSpace(originalString);
    console.log(hiElement.innerText);
}

// Call the getResponse function
getResponse();
