// 1. Base URL of our C# Backend API (Using your specific port)
const API_URL = 'http://localhost:5117/api/messages';

const messageForm = document.getElementById('message-form');
const messagesContainer = document.getElementById('messages-container');

messageForm.addEventListener('submit', async function (event) {
    event.preventDefault();

    const usernameInput = document.getElementById('username');
    const messageInput = document.getElementById('message');

    const payload = {
        author: usernameInput.value,
        content: messageInput.value
    };

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });

        if (response.ok) {
            fetchMessages();
            messageForm.reset();
        } else {
            alert('Ops! Something went wrong saving your message.');
        }
    } catch (error) {
        console.error('Error connecting to the backend:', error);
        alert('Could not connect to the server. Is your C# API running?');
    }
});

async function fetchMessages() {
    try {
        const response = await fetch(API_URL);
        const messages = await response.json();

        messagesContainer.innerHTML = '';

        messages.forEach(msg => {
            createPostItOnScreen(msg.author, msg.content);
        });
    } catch (error) {
        console.error('Error fetching messages from backend:', error);
    }
}

function createPostItOnScreen(author, text) {
    const postItDiv = document.createElement('div');
    postItDiv.classList.add('post-it');
    postItDiv.innerHTML = `
        <div class="post-it-text">"${text}"</div>
        <div class="post-it-author">- ${author}</div>
    `;
    messagesContainer.appendChild(postItDiv);
}

window.addEventListener('DOMContentLoaded', fetchMessages);