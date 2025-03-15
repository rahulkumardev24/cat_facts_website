# 🐱 Cat Facts Website  

An interactive and user-friendly **Cat Facts Website** that fetches random cat facts using the **CatFact API**. This project demonstrates two ways to fetch API data:  

1️⃣ **Using `.then()` and `.catch()`**  
2️⃣ **Using `async/await` with `try...catch`**  

## 🚀 Live Demo  
🔗 [Click here to view the live project](https://github.com/rahulkumardev24/cat_facts_website/tree/main/hit_api_with_fetch)   

🎨 Screenshots
<img src = "https://github.com/rahulkumardev24/cat_facts_website/blob/main/Screenshot%20(58).png" /> 

---

## 📌 Features  
✅ Fetches random cat facts from [CatFact API](https://catfact.ninja/fact).  
✅ Uses **both `.then()` and `async/await`** methods to hit the API.  
✅ **User-friendly UI** with a cute cat-themed design.  
✅ **Responsive layout** for mobile, tablet, and desktop.  
✅ Click **"Get New Fact"** to fetch a fresh cat fact.  
✅ **Navigation bar** with a cat icon.  

---

## 🖥️ Tech Stack  
- **HTML** - Page structure  
- **CSS** - Styling & layout  
- **JavaScript (ES6+)** - Fetching API data & DOM manipulation  

---

---

## 📜 How to Use  

### 🔥 **1. Clone the repository**
```sh
git clone https://github.com/yourgithubusername/cat-facts-website.git
🔥 2. Open index.html in a browser
sh
Copy
Edit
cd cat-facts-website
open index.html
⚡ Fetch API - .then() Method
javascript
Copy
Edit
fetch(url)
    .then((response) => response.json())
    .then((data) => {
        factText.textContent = data.fact;
    })
    .catch(() => {
        factText.textContent = "Oops! Couldn't fetch a fact. Try again.";
    });
⚡ Fetch API - async/await Method
javascript
Copy
Edit
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
```

 
💡 Created with ❤️ by Rahul Kumar Sahu 
🐾 Happy Coding! 🚀


