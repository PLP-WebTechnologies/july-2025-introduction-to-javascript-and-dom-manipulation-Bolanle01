// ====================
// PART 1: Variables & Conditionals
// ====================

document.getElementById("submitBtn").addEventListener("click", function() {
    let name = document.getElementById("nameInput").value;
    let age = Number(document.getElementById("ageInput").value);

    // Conditional logic
    let message = `Hello ${name}! You are ${age} years old. `;
    if (age >= 18) {
        message += "You are an adult. ✅";
    } else {
        message += "You are a minor. 🧒";
    }

    document.getElementById("greeting").textContent = message;
});

// ====================
// PART 2: Functions
// ====================

// Function to format names properly
function formatName(name) {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}

// Function to calculate total price (example use)
function calculateTotal(prices) {
    let total = 0;
    for (let price of prices) {
        total += price;
    }
    return total;
}

// Example usage
console.log("Total price:", calculateTotal([10, 20, 30]));

// ====================
// PART 3: Loops
// ====================

// Display hobbies using a loop
let hobbies = ["Reading", "Coding", "Gaming", "Traveling"];
let hobbyList = document.getElementById("hobbyList");
hobbies.forEach(function(hobby) {
    let li = document.createElement("li");
    li.textContent = hobby;
    hobbyList.appendChild(li);
});

// Countdown loop
let daysLeft = 5; // Example days until birthday
let countdownText = "";
while (daysLeft > 0) {
    countdownText += `${daysLeft} days left! 🎉\n`;
    daysLeft--;
}
document.getElementById("countdown").textContent = countdownText;

// ====================
// PART 4: DOM Manipulation
// ====================

// Change background color when button is clicked
document.getElementById("toggleColorBtn").addEventListener("click", function() {
    document.body.style.backgroundColor =
        document.body.style.backgroundColor === "lightblue" ? "#f4f4f4" : "lightblue";
});

// Create a new element dynamically
let footer = document.createElement("p");
footer.textContent = "Made with ❤️ using JavaScript";
document.body.appendChild(footer);
