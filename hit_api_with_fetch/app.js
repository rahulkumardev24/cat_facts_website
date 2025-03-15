const url = "https://catfact.ninja/fact";
const factText = document.getElementById("fact");
const factBtn = document.getElementById("factBtn");

/*

// Hit APi With Fetch 
// Function to fetch a new cat fact
const fetchCatFact = () => {
    factText.textContent = "Fetching new fact... 🐾";

    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            factText.textContent = data.fact;
        })
        .catch(() => {
            factText.textContent = "Oops! Couldn't fetch a fact. Try again.";
        });
};

// Event listener for the button
factBtn.addEventListener("click", fetchCatFact);

// Fetch an initial fact when the page loads
fetchCatFact();
*/

// Hit Api with await async 
// Function to fetch a new cat fact using async/await
const fetchCatFact = async () => {
    try {
        factText.textContent = "Fetching new fact... 🐾";
        
        const response = await fetch(url);
        const data = await response.json();
        
        factText.textContent = data.fact;
    } catch (error) {
        factText.textContent = "Oops! Couldn't fetch a fact. Try again.";
    }
};

// Event listener for the button
factBtn.addEventListener("click", fetchCatFact);

// Fetch an initial fact when the page loads
fetchCatFact();
