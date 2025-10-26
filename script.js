const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");

// Simple chatbot responses
const responses = {
  "hello": "Hi there! How can I help you?🫣",
  "hey": "Hello! What’s up?🤔",
  "how are you": "I’m just a bot, but I’m doing great! 😃",
  "your name": "I’m your AlgoBudyy which acts as AI Chatbot 🤖",
  "bye": "Goodbye! Have a nice day ✨",
  "Greeting": "Hello! 👋 Hi there! Hey, how can I help you?",
    "goodbye": "Goodbye 👋, See you soon! Take care!",
    "thanks": "You're welcome 😊 No problem!, Glad to help!",
    "about": "I am your academic chatbot 🤖 I’m a chatbot created for my creater academic's project🙂.",
    "college": "I am developed by a student from [Your College Name]."
};

function sendMessage() {
  let message = userInput.value.trim();
  if (message === "") return;

  // Display user message
  appendMessage(message, "user-message");
  userInput.value = "";

  // Bot reply
  setTimeout(() => {
    let reply = getBotResponse(message.toLowerCase());
    appendMessage(reply, "bot-message");
  }, 500);
}

function appendMessage(text, className) {
  let msgDiv = document.createElement("div");
  msgDiv.classList.add("message", className);
  msgDiv.textContent = text;
  chatBox.appendChild(msgDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotResponse(input) {
  return responses[input] || "Sorry, I don’t understand that.Can you ask something else!";
}