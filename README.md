# 📌 Digital Message Board (Guestbook)

A modern, responsive, and interactive Full-Stack web application where users can leave public messages on a digital sticky-note board. The project features a clean user interface with realistic handwritten-style post-its and a lightweight backend built with C# and .NET.

---

## Features

- **Interactive UI:** Post-its feature unique random rotations and a custom handwritten font (`Caveat`) for a realistic aesthetic.
- **Dynamic Updates:** New messages are instantly rendered on the screen without reloading the page (`event.preventDefault()`).
- **Asynchronous Communication:** Seamless frontend-backend connection using the JavaScript `Fetch API` with `async/await`.
- **CORS Enabled:** Secure cross-origin communication configured within the .NET backend middleware.
- **Data Validation:** Input protection on both Frontend (HTML attributes) and Backend (C# string validations).

---

## Tech Stack

### Frontend
- **HTML5:** Semantic structure for accessible web content.
- **CSS3:** Advanced Grid Layout, Flexbox, transformations (`rotate`), and custom hover animations.
- **JavaScript (ES6+):** Asynchronous API consumption, DOM manipulation, and dynamic component rendering.

### Backend
- **C# / .NET Core:** High-performance Minimal API implementation.
- **Data Modeling:** Modern C# Records for lightweight and immutable data structures.

---

## How to Run the Project (Step-by-Step)

Follow these simple steps to get the project running locally on your machine:

### Step 1: Clone or Download the Project
- Click the green **Code** button at the top of this GitHub page and select **Download ZIP**, then extract the file on your computer.

### Step 2: Start the Backend Server (C#)
Open your computer's Terminal (Mac) or Command Prompt (Windows).

Navigate to the backend folder inside the project. You can do this by typing cd  and dragging the backend folder into the terminal, or by typing:

Bash
cd MessageBoard/backend
Run the following command to compile and start the C# server:

Bash
dotnet run
Important: Keep this terminal window open! The server needs to stay active. You will see a message indicating it is running, usually at http://localhost:5117.

Note: If your backend runs on a port different than 5117, make sure to update the API_URL constant at the top of your frontend/script.js file.

### Step 3: Open the Frontend Interface
Open your computer's file manager (Finder on Mac or File Explorer on Windows).

Navigate to the frontend folder of the project.

Double-click the index.html file. It will automatically open in your default web browser (Chrome, Safari, Edge, etc.).

That's it! You can now type your name, write a message, and see your sticky note pop up on the screen.
