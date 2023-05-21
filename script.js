const chatLog = document.getElementById('chat-log');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

sendBtn.addEventListener('click', sendMessage);
userInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const userMessage = userInput.value;
    if (userMessage.trim() !== '') {
        displayMessage(userMessage, 'user');
        userInput.value = '';
        // You can send the userMessage to the server for processing and get the bot's response
        const botMessage = getBotResponse(userMessage);
        displayMessage(botMessage, 'bot');
    }
}

function displayMessage(message, sender) {
    const messageContainer = document.createElement('div');
    messageContainer.className = `${sender}-message`;
    messageContainer.textContent = message;
    chatLog.appendChild(messageContainer);
    chatLog.scrollTop = chatLog.scrollHeight;
}

function getBotResponse(userMessage) {
    // Implement your bot's response logic here
    // You can use AI models or predefined rules to generate the bot's response
    // For simplicity, this function returns a static response
    return "Hindi pa ako working pakyu ka!";
}

