const questions = [
    "Do you enjoy working with numbers and analyzing data?",
    "Do you like building AI or Machine Learning models?",
    "Do you enjoy using Excel, dashboards or data visualization tools?",
    "Do you enjoy programming in Python?",
    "Do you like learning cloud platforms such as AWS, Azure or GCP?",
    "Are you excited about managing large datasets and distributed systems?",
    "Do you enjoy solving logical and technical problems?",
    "Do you want to build applications that can scale to millions of users?",
    "Do you like experimenting with algorithms to improve accuracy?",
    "Are you interested in automation and intelligent applications?"
];

const roles = {
    "Data Analyst": 0,
    "Data Scientist": 0,
    "ML Engineer": 0,
    "Cloud Engineer": 0,
    "Big Data Engineer": 0
};

let currentQuestionIndex = 0;
let isAssessmentComplete = false;

const chatWindow = document.getElementById('chat-window');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');
const optionsContainer = document.getElementById('options-container');

// Initialize
window.onload = () => {
    // Small delay for natural feel
    setTimeout(() => {
        addBotMessage("Hello! I'm your Career Assessment Assistant. Let's find your ideal career path! 😄✨");
        setTimeout(() => {
            askQuestion();
        }, 1000);
    }, 500);
};

function askQuestion() {
    if (currentQuestionIndex < questions.length) {
        addBotMessage(questions[currentQuestionIndex]);
        setTimeout(() => {
            showOptions();
        }, 800);
    } else {
        finishAssessment();
    }
}

function showOptions() {
    optionsContainer.innerHTML = '';

    const yesBtn = document.createElement('button');
    yesBtn.className = 'option-btn';
    yesBtn.textContent = 'Yes';
    yesBtn.onclick = () => handleOptionClick('yes');

    const noBtn = document.createElement('button');
    noBtn.className = 'option-btn';
    noBtn.textContent = 'No';
    noBtn.onclick = () => handleOptionClick('no');

    optionsContainer.appendChild(yesBtn);
    optionsContainer.appendChild(noBtn);
}

function handleOptionClick(value) {
    userInput.value = value;
    handleInput();
}

function handleInput() {
    const text = userInput.value.trim().toLowerCase();
    if (!text) return;

    // Clear options
    optionsContainer.innerHTML = '';

    if (isAssessmentComplete) {
        addUserMessage(userInput.value);
        userInput.value = '';
        setTimeout(() => addBotMessage("The assessment is complete! Refresh to start over. 🔄"), 500);
        return;
    }

    if (text !== 'yes' && text !== 'no' && text !== 'y' && text !== 'n') {
        addUserMessage(userInput.value);
        userInput.value = '';
        setTimeout(() => addBotMessage("Please answer with 'yes' or 'no'. 😊"), 500);
        // Show options again if invalid input
        setTimeout(() => showOptions(), 1000);
        return;
    }

    addUserMessage(userInput.value);
    userInput.value = '';

    const isYes = text === 'yes' || text === 'y';
    updateScores(currentQuestionIndex, isYes);

    currentQuestionIndex++;

    setTimeout(() => {
        askQuestion();
    }, 600);
}

function updateScores(qIndex, isYes) {
    if (!isYes) return;

    // 1-based index logic mapped to 0-based qIndex
    // Q1 (0) -> Data Analyst +1, Data Scientist +1
    if (qIndex === 0) {
        roles["Data Analyst"]++;
        roles["Data Scientist"]++;
    }
    // Q2 (1) -> ML Engineer +1
    if (qIndex === 1) {
        roles["ML Engineer"]++;
    }
    // Q3 (2) -> Data Analyst +1, Data Scientist +1
    if (qIndex === 2) {
        roles["Data Analyst"]++;
        roles["Data Scientist"]++;
    }
    // Q4 (3) -> Data Scientist +1
    if (qIndex === 3) {
        roles["Data Scientist"]++;
    }
    // Q5 (4) -> Cloud Engineer +1
    if (qIndex === 4) {
        roles["Cloud Engineer"]++;
    }
    // Q6 (5) -> Big Data Engineer +1
    if (qIndex === 5) {
        roles["Big Data Engineer"]++;
    }
    // Q7 (6) -> Big Data Engineer +1
    if (qIndex === 6) {
        roles["Big Data Engineer"]++;
    }
    // Q8 (7) -> Cloud Engineer +1
    if (qIndex === 7) {
        roles["Cloud Engineer"]++;
    }
    // Q9 (8) -> ML Engineer +1
    if (qIndex === 8) {
        roles["ML Engineer"]++;
    }
    // Q10 (9) -> ML Engineer +1
    if (qIndex === 9) {
        roles["ML Engineer"]++;
    }
}

function finishAssessment() {
    isAssessmentComplete = true;

    // Find winner
    let maxScore = -1;
    let winner = "";

    for (const [role, score] of Object.entries(roles)) {
        if (score > maxScore) {
            maxScore = score;
            winner = role;
        }
    }

    const explanations = {
        "Data Analyst": "You love uncovering insights from numbers and visualizing data!",
        "Data Scientist": "You have a blend of analytical skills and programming know-how!",
        "ML Engineer": "You're passionate about building intelligent systems and algorithms!",
        "Cloud Engineer": "You're ready to build scalable infrastructure in the cloud!",
        "Big Data Engineer": "You thrive on managing massive datasets and complex systems!"
    };

    const resultMsg = `🎯 Based on your answers, your ideal career path is: **${winner}** 🚀\nHere’s why this career suits you:\n${explanations[winner]}`;

    addBotMessage(resultMsg);
}

// UI Functions
function addUserMessage(text) {
    const div = document.createElement('div');
    div.className = 'message user-message';
    div.textContent = text;
    chatWindow.appendChild(div);
    scrollToBottom();
}

function addBotMessage(text) {
    // Show typing indicator
    const typingDiv = document.createElement('div');
    typingDiv.className = 'typing-indicator';
    typingDiv.innerHTML = '<div class="dot"></div><div class="dot"></div><div class="dot"></div>';
    chatWindow.appendChild(typingDiv);
    scrollToBottom();

    // Remove typing indicator and show message after delay
    setTimeout(() => {
        chatWindow.removeChild(typingDiv);

        const div = document.createElement('div');
        div.className = 'message bot-message';
        // Handle bold text for the result
        div.innerHTML = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br>');
        chatWindow.appendChild(div);
        scrollToBottom();
    }, 800);
}

function scrollToBottom() {
    chatWindow.scrollTop = chatWindow.scrollHeight;
}

// Event Listeners
sendBtn.addEventListener('click', handleInput);
userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') handleInput();
});
