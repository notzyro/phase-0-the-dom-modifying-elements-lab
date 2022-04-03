document.getElementById("main").remove(); // Passes test case 1

const newHeader = document.createElement("h1"); // Should pass case 2
newHeader.id = "victory"; // Should pass case 3
newHeader.innerHTML = "YOUR-NAME is the champion"; // Should pass case 4

document.body.appendChild(newHeader); // Add it to the DOM