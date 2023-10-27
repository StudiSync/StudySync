const { response } = require("express");

async function getResponse() {
    const response = await fetch('http://localhost:8000/');
    const data = await response.json();
    const hiElement = document.getElementById("hi");
    hiElement.innerText = JSON.stringify(data);  // You can format the data as needed
}

// Call the getResponse function
getResponse();
