/**
 * STTech Unified Exam Engine 2.0
 * Engine trắc nghiệm hiện đại: 15 câu ngẫu nhiên cho từng đề, 20 câu tổng hợp từ 6 đề.
 * Hỗ trợ lưu lịch sử, xem lại câu trước, nộp bài sớm, hiệu ứng mượt mà và giao diện Quizizz đẳng cấp.
 */

const SttechQuizEngine = (function () {
    // 1. Quản lý thông tin thí sinh
    let userName = localStorage.getItem('sttech_user_name') || 'Học viên STTech';

    function getUserName() {
        return userName;
    }

    function setUserName(newName) {
        if (newName && newName.trim() !== '') {
            userName = newName.trim();
            localStorage.setItem('sttech_user_name', userName);
            updateUserDisplays();
        }
    }

    function promptChangeName() {
        const input = prompt('Nhập họ và tên của bạn:', userName);
        if (input !== null && input.trim() !== '') {
            setUserName(input);
        }
    }

    function updateUserDisplays() {
        document.querySelectorAll('.sttech-user-name-display, #current-user-name').forEach(el => {
            el.innerText = userName;
        });
    }

    // 2. Thuật toán Fisher-Yates đảo ngẫu nhiên mảng
    function shuffleArray(arr) {
        const clone = [...arr];
        for (let i = clone.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [clone[i], clone[j]] = [clone[j], clone[i]];
        }
        return clone;
    }

    // 3. Trạng thái phiên thi
    let currentBankId = 'quiz1';
    let currentBankConfig = null;
    let targetQuestionCount = 15;
    let questions = [];
    let currentIndex = 0;
    let score = 0;
    let userAnswers = []; // Lưu lại lịch sử trả lời: { selectedIdx, isCorrect }

    // 4. Khởi tạo bài thi
    function startQuiz(config = {}) {
        currentBankId = config.bankId || detectBankFromUrl();
        targetQuestionCount = config.questionCount || (currentBankId === 'tong_hop' ? 20 : 15);

        let pool = [];

        if (currentBankId === 'tong_hop') {
            currentBankConfig = {
                id: 'tong_hop',
                title: 'Đề Kiểm Tra Tổng Hợp',
                category: 'Tổng Hợp 6 Chuyên Đề',
                description: 'Bộ câu hỏi khảo thí toàn diện 20 câu ngẫu nhiên trích xuất từ 6 chủ đề STTech.'
            };
            // Gom toàn bộ câu hỏi từ 6 ngân hàng
            if (window.STTECH_QUIZ_BANKS) {
                Object.keys(window.STTECH_QUIZ_BANKS).forEach(key => {
                    const bank = window.STTECH_QUIZ_BANKS[key];
                    if (bank && bank.questions) {
                        bank.questions.forEach(q => {
                            pool.push({
                                ...q,
                                sourceCategory: bank.category,
                                sourceTitle: bank.title
                            });
                        });
                    }
                });
            }
        } else {
            if (window.STTECH_QUIZ_BANKS && window.STTECH_QUIZ_BANKS[currentBankId]) {
                currentBankConfig = window.STTECH_QUIZ_BANKS[currentBankId];
                pool = currentBankConfig.questions.map(q => ({
                    ...q,
                    sourceCategory: currentBankConfig.category,
                    sourceTitle: currentBankConfig.title
                }));
            }
        }

        if (pool.length === 0) {
            console.error('Không tìm thấy ngân hàng câu hỏi cho bankId:', currentBankId);
            return;
        }

        // Xáo trộn ngẫu nhiên và cắt đúng số lượng câu hỏi
        const shuffled = shuffleArray(pool);
        questions = shuffled.slice(0, Math.min(targetQuestionCount, shuffled.length));
        targetQuestionCount = questions.length;

        currentIndex = 0;
        score = 0;
        userAnswers = new Array(targetQuestionCount).fill(null);

        renderQuizContainer();
        loadQuestion(0);
    }

    function detectBankFromUrl() {
        const path = window.location.pathname.toLowerCase();
        if (path.includes('quiz_sttech')) return 'quiz2';
        if (path.includes('quiz_de_nham_lan')) return 'quiz3';
        if (path.includes('quiz_lien_thong_du_lieu')) return 'quiz4';
        if (path.includes('quiz_tinh_huong_thuc_te')) return 'quiz5';
        if (path.includes('quiz_can_cu_phap_ly')) return 'quiz6';
        if (path.includes('quiz_tong_hop')) return 'tong_hop';
        if (path.includes('quiz.html')) return 'quiz1';
        return 'quiz1';
    }

    // 5. Render khung cấu trúc trang trắc nghiệm
    function renderQuizContainer() {
        const container = document.querySelector('.quiz-container');
        if (!container) return;

        container.innerHTML = `
            <div class="sttech-topbar">
                <div class="sttech-user-tag" onclick="SttechQuizEngine.changeName()" title="Bấm để đổi tên học viên">
                    <i class="fa-solid fa-user-graduate"></i>
                    <span>Thí sinh: <b class="sttech-user-name-display">${userName}</b></span>
                    <i class="fa-solid fa-pen-to-square" style="font-size: 0.8rem; opacity: 0.8; margin-left: 4px;"></i>
                </div>
                <div class="sttech-nav-actions">
                    <a href="index.html" class="sttech-btn-nav"><i class="fa-solid fa-house"></i> Trang chủ</a>
                    <button class="sttech-btn-nav" id="btn-prev-question" onclick="SttechQuizEngine.prevQuestion()"><i class="fa-solid fa-backward"></i> Câu trước</button>
                    <button class="sttech-btn-nav sttech-btn-finish" onclick="SttechQuizEngine.forceFinish()"><i class="fa-solid fa-flag-checkered"></i> Nộp bài sớm</button>
                </div>
            </div>

            <div id="quiz-screen">
                <div class="quiz-header-info">
                    <div class="quiz-title-badge">${currentBankConfig ? currentBankConfig.title : 'Đề Kiểm Tra'}</div>
                    <div class="stats-counter">
                        <span class="q-progress-text">Câu <b id="current-q-num">1</b>/${targetQuestionCount}</span>
                        <span class="q-score-text"><i class="fa-solid fa-circle-check"></i> Đúng: <b id="current-score-num">0</b></span>
                    </div>
                </div>

                <div class="progress-bar-container">
                    <div class="progress-bar" id="progress-bar-fill" style="width: 0%;"></div>
                </div>

                <div class="question-wrapper">
                    <div class="category-badge" id="category-badge">STTech</div>
                    <div class="question-box">
                        <div class="question-text" id="question-text">Đang tải câu hỏi...</div>
                    </div>
                </div>

                <div class="options-grid" id="options-grid"></div>

                <div class="explanation-box" id="explanation-box" style="display: none;">
                    <div class="explanation-title"><i class="fa-solid fa-lightbulb"></i> Giải thích & Chú thích nghiệp vụ:</div>
                    <div class="explanation-text" id="explanation-text"></div>
                </div>

                <div class="quiz-bottom-actions">
                    <button class="next-btn" id="next-btn" onclick="SttechQuizEngine.nextQuestion()" style="display: none;">
                        Câu tiếp theo <i class="fa-solid fa-arrow-right"></i>
                    </button>
                </div>
            </div>

            <div class="result-screen" id="result-screen" style="display: none;">
                <div class="result-icon-wrapper"><i class="fa-solid fa-trophy"></i></div>
                <h2 id="result-headline">HOÀN THÀNH BÀI THI!</h2>
                <p id="result-subtext" style="color: var(--text-sub); font-size: 1.05rem; margin-bottom: 20px;">
                    Bạn đã hoàn thành bài kiểm tra trắc nghiệm Hệ sinh thái STTech.
                </p>

                <div class="result-score-box">
                    <div class="result-score-main"><span id="final-score-val">0</span> / ${targetQuestionCount}</div>
                    <div class="result-percent-badge" id="final-percent-val">0%</div>
                </div>

                <div class="result-rating-tag" id="final-rating-tag">Đạt</div>
                <div class="result-comment-box" id="final-comment-val">Nhận xét đánh giá...</div>

                <div class="result-actions-grid">
                    <button class="actions-btn" onclick="SttechQuizEngine.restartQuiz()">
                        <i class="fa-solid fa-rotate-right"></i> Làm lại đề này (${targetQuestionCount} câu ngẫu nhiên mới)
                    </button>
                    <a href="index.html" class="actions-btn btn-secondary">
                        <i class="fa-solid fa-table-cells-large"></i> Về Menu Trang Chủ
                    </a>
                </div>
            </div>
        `;
    }

    // 6. Hiển thị câu hỏi hiện tại
    function loadQuestion(idx) {
        currentIndex = idx;
        const qData = questions[currentIndex];
        if (!qData) return;

        // Cập nhật thống kê
        document.getElementById('current-q-num').innerText = currentIndex + 1;
        document.getElementById('current-score-num').innerText = score;

        const progressPercent = ((currentIndex + 1) / targetQuestionCount) * 100;
        document.getElementById('progress-bar-fill').style.width = `${progressPercent}%`;

        // Cập nhật Badge chủ đề
        const catBadge = document.getElementById('category-badge');
        if (currentBankId === 'tong_hop' && qData.sourceTitle) {
            catBadge.innerText = `${qData.sourceTitle} ${qData.badge ? '• ' + qData.badge : ''}`;
        } else if (qData.badge) {
            catBadge.innerText = qData.badge;
        } else if (currentBankConfig) {
            catBadge.innerText = currentBankConfig.category || currentBankConfig.title;
        }

        // Cập nhật nội dung câu hỏi
        document.getElementById('question-text').innerText = `Câu ${currentIndex + 1}: ${qData.q}`;

        // Cập nhật các lựa chọn
        const optionsGrid = document.getElementById('options-grid');
        optionsGrid.innerHTML = '';

        const letters = ['A', 'B', 'C', 'D'];
        const previousAnswer = userAnswers[currentIndex];

        qData.options.forEach((optText, optIdx) => {
            // Tách tiền tố A., B., C., D. nếu có trong chuỗi
            let cleanText = optText;
            let letterPrefix = letters[optIdx] || '•';

            if (/^[A-D]\.\s*/i.test(optText)) {
                letterPrefix = optText.charAt(0).toUpperCase();
                cleanText = optText.replace(/^[A-D]\.\s*/i, '');
            }

            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.innerHTML = `
                <span class="option-prefix">${letterPrefix}</span>
                <span class="option-text-val">${cleanText}</span>
            `;

            // Nếu câu này đã được trả lời trước đó (khi người dùng bấm Câu trước rồi quay lại)
            if (previousAnswer !== null) {
                btn.disabled = true;
                if (optIdx === qData.answer) {
                    btn.classList.add('correct');
                }
                if (optIdx === previousAnswer.selectedIdx && !previousAnswer.isCorrect) {
                    btn.classList.add('incorrect');
                }
            } else {
                btn.onclick = () => selectOption(optIdx, btn);
            }

            optionsGrid.appendChild(btn);
        });

        // Ẩn/Hiện hộp giải thích & nút Tiếp theo
        const expBox = document.getElementById('explanation-box');
        const nextBtn = document.getElementById('next-btn');

        if (previousAnswer !== null) {
            document.getElementById('explanation-text').innerHTML = qData.exp;
            expBox.style.display = 'block';
            updateNextBtnText();
            nextBtn.style.display = 'inline-flex';
        } else {
            expBox.style.display = 'none';
            nextBtn.style.display = 'none';
        }

        // Cập nhật trạng thái nút Câu trước
        const btnPrev = document.getElementById('btn-prev-question');
        if (btnPrev) {
            btnPrev.disabled = currentIndex === 0;
            btnPrev.style.opacity = currentIndex === 0 ? '0.5' : '1';
        }
    }

    // 7. Xử lý khi thí sinh chọn đáp án
    function selectOption(selectedIdx, selectedBtn) {
        if (userAnswers[currentIndex] !== null) return; // Đã trả lời

        const qData = questions[currentIndex];
        const isCorrect = selectedIdx === qData.answer;

        userAnswers[currentIndex] = {
            selectedIdx: selectedIdx,
            isCorrect: isCorrect
        };

        const buttons = document.querySelectorAll('#options-grid .option-btn');
        buttons.forEach(btn => btn.disabled = true);

        if (isCorrect) {
            selectedBtn.classList.add('correct');
            score++;
            document.getElementById('current-score-num').innerText = score;
        } else {
            selectedBtn.classList.add('incorrect');
            if (buttons[qData.answer]) {
                buttons[qData.answer].classList.add('correct');
            }
        }

        // Hiển thị giải thích
        const expBox = document.getElementById('explanation-box');
        document.getElementById('explanation-text').innerHTML = qData.exp;
        expBox.style.display = 'block';

        // Hiển thị nút tiếp theo
        const nextBtn = document.getElementById('next-btn');
        updateNextBtnText();
        nextBtn.style.display = 'inline-flex';
    }

    function updateNextBtnText() {
        const nextBtn = document.getElementById('next-btn');
        if (currentIndex === targetQuestionCount - 1) {
            nextBtn.innerHTML = `Xem Kết Quả Tổng Kết <i class="fa-solid fa-square-poll-vertical"></i>`;
        } else {
            nextBtn.innerHTML = `Câu Tiếp Theo <i class="fa-solid fa-arrow-right"></i>`;
        }
    }

    // 8. Chuyển sang câu tiếp theo
    function nextQuestion() {
        if (currentIndex < targetQuestionCount - 1) {
            loadQuestion(currentIndex + 1);
        } else {
            showFinalResults();
        }
    }

    // 9. Quay lại câu trước
    function prevQuestion() {
        if (currentIndex > 0) {
            loadQuestion(currentIndex - 1);
        }
    }

    // 10. Nộp bài sớm
    function forceFinish() {
        const answeredCount = userAnswers.filter(a => a !== null).length;
        const confirmMsg = answeredCount < targetQuestionCount
            ? `Bạn mới trả lời ${answeredCount}/${targetQuestionCount} câu. Bạn có chắc chắn muốn nộp bài sớm và chấm điểm ngay không?`
            : 'Bạn có chắc chắn muốn nộp bài và xem điểm ngay không?';

        if (confirm(confirmMsg)) {
            showFinalResults();
        }
    }

    // 11. Màn hình tổng kết điểm & Lưu lịch sử
    function showFinalResults() {
        const quizScreen = document.getElementById('quiz-screen');
        const resultScreen = document.getElementById('result-screen');
        if (!quizScreen || !resultScreen) return;

        quizScreen.style.display = 'none';
        resultScreen.style.display = 'block';

        const percent = Math.round((score / targetQuestionCount) * 100);
        document.getElementById('final-score-val').innerText = score;
        document.getElementById('final-percent-val').innerText = `${percent}%`;

        let rating = 'Cần ôn thêm';
        let headline = 'HOÀN THÀNH BÀI THI!';
        let comment = 'Đừng nản lòng! Hãy làm lại bài thi để ghi nhớ sâu sắc hơn về các giải pháp STTech nhé.';
        let ratingClass = 'rating-need-practice';

        if (percent === 100) {
            rating = 'Xuất sắc';
            headline = '🎉 XUẤT SẮC TUYỆT ĐỐI!';
            comment = 'Hoàn hảo 100%! Bạn đã làm chủ toàn diện kiến thức và nghiệp vụ của Hệ sinh thái STTech!';
            ratingClass = 'rating-excellent';
            triggerConfetti();
        } else if (percent >= 80) {
            rating = 'Xuất sắc';
            headline = '🌟 KẾT QUẢ XUẤT SẮC!';
            comment = 'Rất ấn tượng! Kiến thức của bạn cực kỳ vững vàng và sẵn sàng tư vấn chuyên nghiệp.';
            ratingClass = 'rating-excellent';
            triggerConfetti();
        } else if (percent >= 50) {
            rating = 'Đạt';
            headline = '👏 HOÀN THÀNH TỐT!';
            comment = 'Khá tốt! Bạn đã nắm vững các nội dung chính, hãy đọc kỹ thêm giải thích để đạt điểm tuyệt đối.';
            ratingClass = 'rating-good';
            triggerConfetti();
        }

        const ratingTag = document.getElementById('final-rating-tag');
        ratingTag.innerText = rating;
        ratingTag.className = `result-rating-tag ${ratingClass}`;
        document.getElementById('result-headline').innerText = headline;
        document.getElementById('final-comment-val').innerText = comment;

        // Lưu lịch sử bài thi vào localStorage
        saveHistoryRecord(percent, rating);
    }

    function saveHistoryRecord(percent, rating) {
        const quizName = currentBankConfig ? currentBankConfig.title : 'Bài thi trắc nghiệm';
        const record = {
            name: userName,
            quiz: quizName,
            score: `${score}/${targetQuestionCount}`,
            percent: `${percent}%`,
            rating: rating,
            date: new Date().toLocaleString('vi-VN', {
                hour: '2-digit',
                minute: '2-digit',
                day: '2-digit',
                month: '2-digit',
                year: 'numeric'
            })
        };

        const history = JSON.parse(localStorage.getItem('sttech_history') || '[]');
        history.unshift(record);
        if (history.length > 25) history.pop();
        localStorage.setItem('sttech_history', JSON.stringify(history));
    }

    function triggerConfetti() {
        if (typeof confetti === 'function') {
            const end = Date.now() + 2500;
            (function frame() {
                confetti({ particleCount: 5, angle: 60, spread: 55, origin: { x: 0, y: 0.85 } });
                confetti({ particleCount: 5, angle: 120, spread: 55, origin: { x: 1, y: 0.85 } });
                if (Date.now() < end) requestAnimationFrame(frame);
            })();
        }
    }

    function restartQuiz() {
        startQuiz({
            bankId: currentBankId,
            questionCount: targetQuestionCount
        });
    }

    // Tự động nạp khi tài liệu sẵn sàng
    window.addEventListener('DOMContentLoaded', () => {
        const container = document.querySelector('.quiz-container');
        if (container) {
            const bankAttr = container.getAttribute('data-quiz-bank') || detectBankFromUrl();
            const countAttr = container.getAttribute('data-question-count');
            startQuiz({
                bankId: bankAttr,
                questionCount: countAttr ? parseInt(countAttr, 10) : undefined
            });
        }
        updateUserDisplays();
    });

    return {
        startQuiz,
        restartQuiz,
        nextQuestion,
        prevQuestion,
        forceFinish,
        changeName: promptChangeName,
        getUserName,
        setUserName
    };
})();

window.SttechQuizEngine = SttechQuizEngine;
window.sttechPrevQuestion = () => SttechQuizEngine.prevQuestion();
window.sttechForceFinish = () => SttechQuizEngine.forceFinish();
window.changeName = () => SttechQuizEngine.changeName();
