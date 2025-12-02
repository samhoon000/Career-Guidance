import React, { useState, useEffect, useRef } from 'react';
import './ChatBot.css';

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

const ChatBot = () => {
    const [messages, setMessages] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [isAssessmentComplete, setIsAssessmentComplete] = useState(false);
    const [roles, setRoles] = useState({
        "Data Analyst": 0,
        "Data Scientist": 0,
        "ML Engineer": 0,
        "Cloud Engineer": 0,
        "Big Data Engineer": 0
    });
    const [showOptions, setShowOptions] = useState(false);
    const [isTyping, setIsTyping] = useState(false);
    const [userInput, setUserInput] = useState('');
    const chatWindowRef = useRef(null);

    const hasInitialized = useRef(false);

    const scrollToBottom = () => {
        if (chatWindowRef.current) {
            chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
        }
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    useEffect(() => {
        if (hasInitialized.current) return;
        hasInitialized.current = true;

        // Initial greeting
        setTimeout(() => {
            addBotMessage("Hello! I'm your Career Assessment Assistant. Let's find your ideal career path! 😄✨");
            setTimeout(() => {
                askQuestion(0);
            }, 1000);
        }, 500);
    }, []);

    useEffect(() => {
        if (isAssessmentComplete) {
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
    }, [isAssessmentComplete, roles]);

    const addBotMessage = (text) => {
        setIsTyping(true);
        setTimeout(() => {
            setIsTyping(false);
            setMessages(prev => [...prev, { text, sender: 'bot' }]);
        }, 800);
    };

    const addUserMessage = (text) => {
        setMessages(prev => [...prev, { text, sender: 'user' }]);
    };

    const askQuestion = (index) => {
        if (index < questions.length) {
            addBotMessage(questions[index]);
            setTimeout(() => {
                setShowOptions(true);
            }, 800);
        } else {
            finishAssessment();
        }
    };

    const handleOptionClick = (value) => {
        handleInput(value);
    };

    const handleInput = (value = userInput) => {
        const text = value.trim().toLowerCase();
        if (!text) return;

        setShowOptions(false);
        setUserInput('');

        if (isAssessmentComplete) {
            addUserMessage(value);
            setTimeout(() => addBotMessage("The assessment is complete! Refresh to start over. 🔄"), 500);
            return;
        }

        if (text !== 'yes' && text !== 'no' && text !== 'y' && text !== 'n') {
            addUserMessage(value);
            setTimeout(() => addBotMessage("Please answer with 'yes' or 'no'. 😊"), 500);
            setTimeout(() => setShowOptions(true), 1000);
            return;
        }

        addUserMessage(value);

        const isYes = text === 'yes' || text === 'y';
        updateScores(currentQuestionIndex, isYes);

        const nextIndex = currentQuestionIndex + 1;
        setCurrentQuestionIndex(nextIndex);

        setTimeout(() => {
            askQuestion(nextIndex);
        }, 600);
    };

    const updateScores = (qIndex, isYes) => {
        if (!isYes) return;

        setRoles(prevRoles => {
            const newRoles = { ...prevRoles };
            if (qIndex === 0) { newRoles["Data Analyst"]++; newRoles["Data Scientist"]++; }
            if (qIndex === 1) { newRoles["ML Engineer"]++; }
            if (qIndex === 2) { newRoles["Data Analyst"]++; newRoles["Data Scientist"]++; }
            if (qIndex === 3) { newRoles["Data Scientist"]++; }
            if (qIndex === 4) { newRoles["Cloud Engineer"]++; }
            if (qIndex === 5) { newRoles["Big Data Engineer"]++; }
            if (qIndex === 6) { newRoles["Big Data Engineer"]++; }
            if (qIndex === 7) { newRoles["Cloud Engineer"]++; }
            if (qIndex === 8) { newRoles["ML Engineer"]++; }
            if (qIndex === 9) { newRoles["ML Engineer"]++; }
            return newRoles;
        });
    };

    const finishAssessment = () => {
        setIsAssessmentComplete(true);
    };

    return (
        <div className="app-container">
            <header className="chat-header">
                <div className="bot-avatar">🤖</div>
                <div className="header-info">
                    <h1>Career Guide</h1>
                    <span className="status">Online</span>
                </div>
            </header>

            <div className="chat-window" ref={chatWindowRef}>
                {messages.map((msg, index) => (
                    <div key={index} className={`message ${msg.sender === 'bot' ? 'bot-message' : 'user-message'}`}>
                        {msg.sender === 'bot' ? (
                            <span dangerouslySetInnerHTML={{ __html: msg.text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br>') }} />
                        ) : (
                            msg.text
                        )}
                    </div>
                ))}
                {isTyping && (
                    <div className="typing-indicator">
                        <div className="dot"></div><div className="dot"></div><div className="dot"></div>
                    </div>
                )}
            </div>

            <div className="input-area">
                {showOptions && (
                    <div className="options-container">
                        <button className="option-btn" onClick={() => handleOptionClick('yes')}>Yes</button>
                        <button className="option-btn" onClick={() => handleOptionClick('no')}>No</button>
                    </div>
                )}
                <div className="input-wrapper">
                    <input
                        type="text"
                        id="user-input"
                        placeholder="Type 'yes' or 'no'..."
                        autoComplete="off"
                        value={userInput}
                        onChange={(e) => setUserInput(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleInput()}
                    />
                    <button id="send-btn" onClick={() => handleInput()}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22 2L11 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ChatBot;
