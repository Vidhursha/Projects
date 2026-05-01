// ========================================
// JobHunt - JavaScript Functions
// ========================================

// Chatbot Functions
function toggleChatbot() {
    const chatbot = document.getElementById('chatbot');
    chatbot.classList.toggle('active');
}

function handleKeyPress(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}

function sendMessage() {
    const userInput = document.getElementById('userInput');
    const message = userInput.value.trim();
    
    if (message === '') return;
    
    // Add user message
    addMessage(message, 'user');
    userInput.value = '';
    
    // Simulate bot response delay
    setTimeout(() => {
        const botResponse = getBotResponse(message);
        addMessage(botResponse, 'bot');
    }, 500);
}

function addMessage(message, sender) {
    const chatMessages = document.getElementById('chatMessages');
    const messageDiv = document.createElement('div');
    messageDiv.className = sender === 'user' ? 'user-message' : 'bot-message';
    messageDiv.innerHTML = `<p>${message}</p>`;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function getBotResponse(userMessage) {
    const message = userMessage.toLowerCase();
    
    // Job Search related responses
    if (message.includes('job') || message.includes('search') || message.includes('find')) {
        return `I'd be happy to help you find jobs! Here are some tips:<br><br>
            <strong>1.</strong> Use specific keywords in your search (e.g., "Python Developer" instead of "developer")<br>
            <strong>2.</strong> Filter by location, experience, and salary range<br>
            <strong>3.</strong> Set up job alerts for your preferred roles<br>
            <strong>4.</strong> Keep your resume updated<br><br>
            Would you like help with any specific aspect?`;
    }
    
    // Resume related responses
    else if (message.includes('resume') || message.includes('cv')) {
        return `Here are some resume tips:<br><br>
            <strong>✓</strong> Keep it concise - 1-2 pages max<br>
            <strong>✓</strong> Highlight key skills and achievements<br>
            <strong>✓</strong> Use action verbs (managed, developed, led)<br>
            <strong>✓</strong> Include quantifiable results<br>
            <strong>✓</strong> Tailor your resume for each job<br><br>
            Need help with resume building?`;
    }
    
    // Interview related responses
    else if (message.includes('interview')) {
        return `Interview preparation tips:<br><br>
            <strong>1.</strong> Research the company thoroughly<br>
            <strong>2.</strong> Practice common interview questions<br>
            <strong>3.</strong> Prepare your own questions for the interviewer<br>
            <strong>4.</strong> Dress professionally<br>
            <strong>5.</strong> Reach 10-15 minutes early<br><br>
            Want practice questions for a specific role?`;
    }
    
    // Skills related responses
    else if (message.includes('skill') || message.includes('learn')) {
        return `In-demand skills for 2026:<br><br>
            <strong>Technical:</strong> Python, JavaScript, AI/ML, Cloud Computing<br>
            <strong>Soft Skills:</strong> Communication, Problem-solving, Adaptability<br>
            <strong>Domain:</strong> Data Analysis, Cybersecurity, Digital Marketing<br><br>
            Would you like job recommendations based on your skills?`;
    }
    
    // Salary related responses
    else if (message.includes('salary') || message.includes('package')) {
        return `Salary information depends on:<br><br>
            • Your experience level<br>
            • Skills and expertise<br>
            • Company size and location<br>
            • Industry sector<br><br>
            You can filter jobs by salary range in the Jobs section. Would you like specific salary guidance for a role?`;
    }
    
    // Company related responses
    else if (message.includes('company') || message.includes('company')) {
        return `Top companies hiring on our platform:<br><br>
            • TCS - IT Services<br>
            • Infosys - Technology<br>
            • Wipro - IT Consulting<br>
            • Accenture - Professional Services<br>
            • Cognizant - IT Services<br><br>
            Would you like to see jobs from a specific company?`;
    }
    
    // Application status
    else if (message.includes('apply') || message.includes('application')) {
        return `To apply for jobs:<br><br>
            <strong>1.</strong> Click "Apply Now" on any job<br>
            <strong>2.</strong> Create/Update your profile<br>
            <strong>3.</strong> Upload your resume<br>
            <strong>4.</strong> Submit your application<br><br>
            Track your applications in your dashboard!`;
    }
    
    // Greetings
    else if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
        return `Hello! 👋 How can I help you with your job search today?`;
    }
    
    // Thanks
    else if (message.includes('thank') || message.includes('thanks')) {
        return `You're welcome! 😊 Feel free to ask if you need more help. Good luck with your job search!`;
    }
    
    // Help
    else if (message.includes('help')) {
        return `I can help you with:<br><br>
            • <strong>Job Search</strong> - Finding the right jobs<br>
            • <strong>Resume Tips</strong> - Building a great resume<br>
            • <strong>Interview Prep</strong> - Acing your interviews<br>
            • <strong>Career Advice</strong> - Making the right choice<br>
            • <strong>Salary Info</strong> - Understanding pay scales<br><br>
            What would you like to know more about?`;
    }
    
    // Default response
    else {
        return `I understand you're looking for information. Let me help you with that!<br><br>
            Here are some things I can assist with:<br>
            • Job search and listings<br>
            • Resume building tips<br>
            • Interview preparation<br>
            • Career guidance<br>
            • Salary information<br><br>
            What specific topic would you like to explore?`;
    }
}

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
            nav.style.position = 'absolute';
            nav.style.top = '100%';
            nav.style.left = '0';
            nav.style.width = '100%';
            nav.style.background = '#fff';
            nav.style.padding = '20px';
            nav.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
        });
    }
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Job Save Functionality
document.querySelectorAll('.btn-save').forEach(button => {
    button.addEventListener('click', function() {
        const icon = this.querySelector('i');
        if (icon.classList.contains('far')) {
            icon.classList.remove('far');
            icon.classList.add('fas');
            this.style.color = '#2563eb';
        } else {
            icon.classList.remove('fas');
            icon.classList.add('far');
            this.style.color = '';
        }
    });
});

// Apply Button Animation
document.querySelectorAll('.btn-apply').forEach(button => {
    button.addEventListener('click', function() {
        const originalText = this.textContent;
        this.textContent = 'Applied! ✓';
        this.style.background = '#10b981';
        
        setTimeout(() => {
            this.textContent = originalText;
            this.style.background = '';
        }, 2000);
    });
});

// Search Functionality (Basic)
document.querySelector('.btn-search')?.addEventListener('click', function() {
    const searchInputs = document.querySelectorAll('.search-box input');
    const category = document.querySelector('.search-box select').value;
    
    let searchTerm = '';
    searchInputs.forEach(input => {
        if (input.value) {
            searchTerm += input.value + ' ';
        }
    });
    
    if (searchTerm.trim() || category !== 'Select Category') {
        alert('Searching for jobs...\nThis would filter jobs based on your search criteria.');
    } else {
        alert('Please enter search criteria or select a category.');
    }
});

// Filter Apply Button
document.querySelector('.filters-sidebar .btn-primary')?.addEventListener('click', function() {
    const checkboxes = document.querySelectorAll('.filters-sidebar input[type="checkbox"]:checked');
    if (checkboxes.length > 0) {
        alert(`Applying ${checkboxes.length} filters...\nThis would filter the job listings.`);
    } else {
        alert('Please select at least one filter option.');
    }
});

// Lazy Loading for Job Cards (Visual Effect)
const observerOptions = {
    threshold: 0.1
};

const jobCards = document.querySelectorAll('.job-card');
jobCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = `all 0.5s ease ${index * 0.1}s`;
    
    setTimeout(() => {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
    }, 100 + (index * 100));
});

// Category Card Click Handler
document.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('click', function() {
        const categoryName = this.querySelector('h3').textContent;
        window.location.href = 'jobs.html';
    });
});

// Company Card Click Handler
document.querySelectorAll('.company-card').forEach(card => {
    card.addEventListener('click', function() {
        const companyName = this.querySelector('h3').textContent;
        alert(`Viewing jobs at ${companyName}...\nThis would show all open positions at this company.`);
    });
});

// Service Card Hover Effect
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
    });
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Console Welcome Message
console.log('%c🎉 Welcome to JobHunt!', 'font-size: 20px; font-weight: bold; color: #2563eb;');
console.log('%cYour dream job is just a click away!', 'font-size: 14px; color: #64748b;');