// Get the elements
const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");
const signInForm = document.querySelector(".sign-in-container form");

// Add event listener for the "Sign Up" button
signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

// Add event listener for the "Sign In" button
signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

// Add event listener for the "Sign In" form submission
signInForm.addEventListener("submit", async (e) => {
  e.preventDefault(); // Prevent the default form submission behavior

  // Get the user's input
  const email = document.querySelector(".sign-in-container input[type='email']").value;
  const password = document.querySelector(".sign-in-container input[type='password']").value;

  // Perform basic validation (you can add more complex validation)
  if (email.trim() === "" || password.trim() === "") {
    alert("Please enter both email and password.");
    return;
  }

  // Perform authentication using the authenticateUser function
  const isAuthenticated = await authenticateUser(email, password);

  console.log("Authentication result:", isAuthenticated);

  if (isAuthenticated) {
    console.log("Authentication successful. Redirecting...");
    window.location.href = "index2.html"; // Redirect only if authentication is successful
  } else {
    // Authentication failed
    alert("Login failed. Please check your email and password.");
  }
});

// Mock user database (replace with a real user database)
const users = [
  { email: "ichaithanyasai@gmail.com", password: "password123" },
  // Add more user objects as needed
];

// Function to authenticate a user (mocked with a delay for demonstration)
async function authenticateUser(email, password) {
  // Simulate a delay (e.g., for network request or database query)
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Check if the provided email and password match any user in the database
  const user = users.find((user) => user.email === email && user.password === password);

  // If a user is found, return true (authenticated), otherwise, return false (not authenticated)
  return !!user;
}
