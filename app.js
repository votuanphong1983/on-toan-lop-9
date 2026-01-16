// ==================== STATE MANAGEMENT ====================
let currentPage = 'home';
let currentQuizIndex = 0;
let quizScore = 0;
let answeredQuestions = [];
let selectedExamFilter = 'all';

// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', () => {
    initializeNavigation();
    loadPage('home');
});

// ==================== NAVIGATION ====================
function initializeNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const page = link.getAttribute('data-page');

            // Update active state
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');

            // Load page
            loadPage(page);
        });
    });
}

function loadPage(page) {
    currentPage = page;
    const content = document.getElementById('app-content');

    switch (page) {
        case 'home':
            content.innerHTML = renderHomePage();
            break;
        case 'knowledge':
            content.innerHTML = renderKnowledgePage();
            initializeTopicToggles();
            break;
        case 'quiz':
            resetQuiz();
            content.innerHTML = renderQuizPage();
            initializeQuiz();
            break;
        case 'exams':
            content.innerHTML = renderExamsPage();
            initializeExamFilters();
            break;
    }

    // Trigger MathJax rendering
    if (window.MathJax) {
        MathJax.typesetPromise();
    }

    // Smooth scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ==================== HOME PAGE ====================
function renderHomePage() {
    return `
        <div class="hero fade-in">
            <h1 class="hero-title">Chinh Phục Kỳ Thi Toán 9→10</h1>
            <p class="hero-subtitle">Hệ thống ôn tập toàn diện - Đại số & Hình học</p>
            
            <div class="hero-stats">
                <div class="stat-card" onclick="loadPage('knowledge'); document.querySelector('[data-page=knowledge]').click();">
                    <div class="stat-number">15+</div>
                    <div class="stat-label">Chủ đề kiến thức</div>
                </div>
                <div class="stat-card" onclick="loadPage('quiz'); document.querySelector('[data-page=quiz]').click();">
                    <div class="stat-number">20+</div>
                    <div class="stat-label">Câu hỏi trắc nghiệm</div>
                </div>
                <div class="stat-card" onclick="loadPage('exams'); document.querySelector('[data-page=exams]').click();">
                    <div class="stat-number">12+</div>
                    <div class="stat-label">Đề thi các năm</div>
                </div>
            </div>
            
            <div style="margin-top: 3rem; display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
                <button class="btn btn-primary" onclick="loadPage('knowledge'); document.querySelector('[data-page=knowledge]').click();">
                    📚 Bắt đầu học
                </button>
                <button class="btn btn-secondary" onclick="loadPage('quiz'); document.querySelector('[data-page=quiz]').click();">
                    🎯 Làm trắc nghiệm
                </button>
            </div>
        </div>
        
        <div class="section-header" style="margin-top: 4rem;">
            <h2 class="section-title">Tại sao chọn chúng tôi?</h2>
        </div>
        
        <div class="grid-3">
            <div class="card">
                <div style="font-size: 3rem; text-align: center; margin-bottom: 1rem;">📖</div>
                <h3 class="card-title">Kiến thức đầy đủ</h3>
                <div class="card-content">
                    Tổng hợp toàn bộ kiến thức Đại số và Hình học lớp 9, được trình bày rõ ràng với công thức và ví dụ minh họa.
                </div>
            </div>
            
            <div class="card">
                <div style="font-size: 3rem; text-align: center; margin-bottom: 1rem;">🎮</div>
                <h3 class="card-title">Học tập tương tác</h3>
                <div class="card-content">
                    Hệ thống trắc nghiệm với phản hồi tức thì, giúp các em tự kiểm tra và củng cố kiến thức một cách hiệu quả.
                </div>
            </div>
            
            <div class="card">
                <div style="font-size: 3rem; text-align: center; margin-bottom: 1rem;">📝</div>
                <h3 class="card-title">Đề thi thực tế</h3>
                <div class="card-content">
                    Bộ sưu tập đề thi tuyển sinh từ các trường THPT hàng đầu, giúp các em làm quen với cấu trúc đề thi thực tế.
                </div>
            </div>
        </div>
    `;
}

// ==================== KNOWLEDGE PAGE ====================
function renderKnowledgePage() {
    return `
        <div class="section-header fade-in">
            <h2 class="section-title">Tóm Tắt Kiến Thức</h2>
            <p class="section-subtitle">Nắm vững lý thuyết - Chinh phục mọi bài toán</p>
        </div>
        
        <div class="grid-2">
            <div>
                <h3 style="font-size: 1.8rem; margin-bottom: 1.5rem; color: var(--text-primary);">
                    📊 Đại Số
                </h3>
                <div class="topic-list">
                    ${knowledgeData.algebra.map(topic => renderTopicCard(topic)).join('')}
                </div>
            </div>
            
            <div>
                <h3 style="font-size: 1.8rem; margin-bottom: 1.5rem; color: var(--text-primary);">
                    📐 Hình Học
                </h3>
                <div class="topic-list">
                    ${knowledgeData.geometry.map(topic => renderTopicCard(topic)).join('')}
                </div>
            </div>
        </div>
    `;
}

function renderTopicCard(topic) {
    return `
        <div class="topic-card" data-topic-id="${topic.id}">
            <div class="topic-header">
                <h4 class="topic-title">${topic.icon} ${topic.title}</h4>
                <span class="topic-icon">▼</span>
            </div>
            <div class="topic-content">
                ${topic.content}
            </div>
        </div>
    `;
}

function initializeTopicToggles() {
    const topicCards = document.querySelectorAll('.topic-card');
    topicCards.forEach(card => {
        card.addEventListener('click', (e) => {
            // Don't toggle if clicking on a link or button inside
            if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON') return;

            card.classList.toggle('expanded');

            // Re-render MathJax for expanded content
            if (card.classList.contains('expanded') && window.MathJax) {
                MathJax.typesetPromise([card]);
            }
        });
    });
}

// ==================== QUIZ PAGE ====================
function resetQuiz() {
    currentQuizIndex = 0;
    quizScore = 0;
    answeredQuestions = [];
}

function renderQuizPage() {
    if (currentQuizIndex >= quizData.length) {
        return renderQuizResults();
    }

    const question = quizData[currentQuizIndex];
    const progress = ((currentQuizIndex) / quizData.length) * 100;

    return `
        <div class="quiz-container fade-in">
            <div class="section-header">
                <h2 class="section-title">Trắc Nghiệm Toán Học</h2>
                <p class="section-subtitle">Kiểm tra kiến thức của bạn</p>
            </div>
            
            <div class="quiz-progress">
                <div class="quiz-progress-bar" style="width: ${progress}%"></div>
            </div>
            <p class="text-center" style="margin-top: 0.5rem; color: var(--text-muted);">
                Câu ${currentQuizIndex + 1} / ${quizData.length}
            </p>
            
            <div class="question-card" id="question-card">
                <div class="question-header">
                    <span class="question-number">Câu ${currentQuizIndex + 1}</span>
                    <span class="question-category">${question.category}</span>
                </div>
                
                <div class="question-text">${question.question}</div>
                
                <div class="options-list" id="options-list">
                    ${question.options.map((option, index) => `
                        <button class="option-btn" data-index="${index}">
                            ${String.fromCharCode(65 + index)}. ${option}
                        </button>
                    `).join('')}
                </div>
                
                <div id="feedback-container"></div>
            </div>
            
            <div class="quiz-controls">
                <button class="btn btn-secondary" onclick="previousQuestion()" ${currentQuizIndex === 0 ? 'disabled' : ''}>
                    ← Câu trước
                </button>
                <div style="color: var(--text-secondary);">
                    Điểm: <strong style="color: var(--text-primary);">${quizScore}</strong>/${currentQuizIndex}
                </div>
                <button class="btn btn-primary" id="next-btn" onclick="nextQuestion()" style="display: none;">
                    Câu tiếp theo →
                </button>
            </div>
        </div>
    `;
}

function initializeQuiz() {
    const optionButtons = document.querySelectorAll('.option-btn');
    optionButtons.forEach(btn => {
        btn.addEventListener('click', () => handleAnswerSelection(btn));
    });
}

function handleAnswerSelection(selectedBtn) {
    const question = quizData[currentQuizIndex];
    const selectedIndex = parseInt(selectedBtn.getAttribute('data-index'));
    const isCorrect = selectedIndex === question.correct;

    // Disable all buttons
    const allButtons = document.querySelectorAll('.option-btn');
    allButtons.forEach(btn => {
        btn.disabled = true;
        const index = parseInt(btn.getAttribute('data-index'));
        if (index === question.correct) {
            btn.classList.add('correct');
        }
    });

    // Mark selected answer
    selectedBtn.classList.add('selected');
    if (!isCorrect) {
        selectedBtn.classList.add('incorrect');
    }

    // Update score
    if (isCorrect) {
        quizScore++;
    }

    // Show feedback
    const feedbackContainer = document.getElementById('feedback-container');
    feedbackContainer.innerHTML = `
        <div class="feedback-box ${isCorrect ? 'correct' : 'incorrect'}">
            <strong>${isCorrect ? '✅ Chính xác!' : '❌ Chưa đúng!'}</strong><br>
            ${question.explanation}
        </div>
    `;

    // Show next button
    document.getElementById('next-btn').style.display = 'inline-block';

    // Re-render MathJax
    if (window.MathJax) {
        MathJax.typesetPromise();
    }
}

function nextQuestion() {
    currentQuizIndex++;
    loadPage('quiz');
}

function previousQuestion() {
    if (currentQuizIndex > 0) {
        currentQuizIndex--;
        loadPage('quiz');
    }
}

function renderQuizResults() {
    const percentage = Math.round((quizScore / quizData.length) * 100);
    let message = '';
    let emoji = '';

    if (percentage >= 90) {
        message = 'Xuất sắc! Bạn đã nắm vững kiến thức!';
        emoji = '🏆';
    } else if (percentage >= 70) {
        message = 'Tốt lắm! Tiếp tục phát huy!';
        emoji = '🌟';
    } else if (percentage >= 50) {
        message = 'Khá tốt! Hãy ôn lại một số phần nhé!';
        emoji = '👍';
    } else {
        message = 'Cần cố gắng thêm! Hãy xem lại kiến thức!';
        emoji = '💪';
    }

    return `
        <div class="quiz-container fade-in">
            <div class="section-header">
                <h2 class="section-title">Kết Quả Trắc Nghiệm</h2>
            </div>
            
            <div class="score-display">
                <div style="font-size: 5rem; margin-bottom: 1rem;">${emoji}</div>
                <div class="score-number">${quizScore}/${quizData.length}</div>
                <div class="score-message">${message}</div>
                <div style="font-size: 2rem; color: var(--text-secondary); margin: 1rem 0;">
                    ${percentage}%
                </div>
                
                <div style="margin-top: 2rem; display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
                    <button class="btn btn-primary" onclick="resetQuiz(); loadPage('quiz');">
                        🔄 Làm lại
                    </button>
                    <button class="btn btn-secondary" onclick="loadPage('knowledge'); document.querySelector('[data-page=knowledge]').click();">
                        📚 Xem lại kiến thức
                    </button>
                    <button class="btn btn-success" onclick="loadPage('home'); document.querySelector('[data-page=home]').click();">
                        🏠 Về trang chủ
                    </button>
                </div>
            </div>
        </div>
    `;
}

// ==================== EXAMS PAGE ====================
function renderExamsPage() {
    return `
        <div class="section-header fade-in">
            <h2 class="section-title">Đề Thi Các Năm</h2>
            <p class="section-subtitle">Luyện tập với đề thi thực tế từ các trường THPT</p>
        </div>
        
        <div class="exam-filters">
            <button class="filter-btn active" data-filter="all">Tất cả</button>
            <button class="filter-btn" data-filter="2025">Năm 2025</button>
            <button class="filter-btn" data-filter="2024">Năm 2024</button>
            <button class="filter-btn" data-filter="2023">Năm 2023</button>
            <button class="filter-btn" data-filter="chuyen">Trường chuyên</button>
            <button class="filter-btn" data-filter="conglab">Công lập</button>
        </div>
        
        <div class="exam-grid" id="exam-grid">
            ${renderExamCards(examData)}
        </div>
    `;
}

function renderExamCards(exams) {
    return exams.map(exam => `
        <div class="exam-card" data-year="${exam.year}" data-type="${exam.school.includes('Chuyên') ? 'chuyen' : 'conglab'}">
            <span class="exam-badge">${exam.year}</span>
            <h3 class="exam-title">${exam.school}</h3>
            <p class="exam-meta">📍 ${exam.province} • ⏱️ ${exam.duration}</p>
            <p class="exam-description">${exam.description}</p>
            <div style="margin-top: 1rem; display: flex; justify-content: space-between; align-items: center;">
                <span style="color: var(--text-muted); font-size: 0.9rem;">
                    ${exam.problems} câu • ${exam.difficulty}
                </span>
                <button class="btn btn-primary" style="padding: 0.5rem 1rem; font-size: 0.9rem;" onclick="viewExam(${exam.id})">
                    Xem đề →
                </button>
            </div>
        </div>
    `).join('');
}

function initializeExamFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active state
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Filter exams
            const filter = btn.getAttribute('data-filter');
            filterExams(filter);
        });
    });
}

function filterExams(filter) {
    const examCards = document.querySelectorAll('.exam-card');

    examCards.forEach(card => {
        const year = card.getAttribute('data-year');
        const type = card.getAttribute('data-type');

        let shouldShow = false;

        if (filter === 'all') {
            shouldShow = true;
        } else if (filter === 'chuyen' || filter === 'conglab') {
            shouldShow = type === filter;
        } else {
            shouldShow = year === filter;
        }

        if (shouldShow) {
            card.style.display = 'block';
            card.style.animation = 'fadeInUp 0.5s ease';
        } else {
            card.style.display = 'none';
        }
    });
}

function viewExam(examId) {
    const exam = examData.find(e => e.id === examId);
    if (!exam) return;

    alert(`📝 Đề thi: ${exam.school} - ${exam.year}\n\n` +
        `Trong phiên bản demo này, nội dung đề thi chi tiết sẽ được cập nhật sau.\n\n` +
        `Thông tin đề thi:\n` +
        `• Trường: ${exam.school}\n` +
        `• Năm: ${exam.year}\n` +
        `• Thời gian: ${exam.duration}\n` +
        `• Số câu: ${exam.problems}\n` +
        `• Độ khó: ${exam.difficulty}\n\n` +
        `Bạn có thể thêm nội dung đề thi thực tế vào file data.js!`);
}
