// STTech Unified Engine: Name, History & 15-Question Randomizer
(function () {
    // 1. Kiểm tra và yêu cầu nhập tên nếu chưa có
    let userName = localStorage.getItem('sttech_user_name');
    if (!userName || userName.trim() === "") {
        userName = prompt("Vui lòng nhập họ và tên của bạn để bắt đầu làm bài:", "Học viên STTech");
        if (!userName || userName.trim() === "") userName = "Học viên ẩn danh";
        localStorage.setItem('sttech_user_name', userName.trim());
    }

    // 2. Chèn CSS thanh điều hướng & giao diện đồng bộ
    const style = document.createElement('style');
    style.innerHTML = `
        .sttech-topbar {
            display: flex; justify-content: space-between; align-items: center;
            margin-bottom: 20px; padding-bottom: 12px; border-bottom: 1.5px solid rgba(255,255,255,0.1);
            gap: 10px; flex-wrap: wrap;
        }
        .sttech-user-tag {
            color: #38bdf8; font-weight: 700; font-size: 0.95rem;
            display: flex; align-items: center; gap: 8px;
        }
        .sttech-btn-nav {
            background: #1e293b; color: #f8fafc; border: 1.5px solid #334155;
            padding: 8px 16px; border-radius: 10px; font-weight: 700; cursor: pointer;
            text-decoration: none; display: inline-flex; align-items: center; gap: 8px;
            font-size: 0.9rem; box-shadow: 0 3px 0 #0f172a; transition: all 0.2s ease;
        }
        .sttech-btn-nav:hover { background: #334155; transform: translateY(-2px); border-color: #6366f1; }
        .sttech-btn-finish { background: #dc2626 !important; border-color: #ef4444 !important; }
        .sttech-btn-finish:hover { background: #b91c1c !important; }
    `;
    document.head.appendChild(style);

    // 3. Tự động cắt ngẫu nhiên 15 câu khi mảng quizData được nạp
    const MAX_QUESTIONS = 15;
    function sliceRandomQuizData() {
        if (window.quizData && Array.isArray(window.quizData) && window.quizData.length > MAX_QUESTIONS) {
            // Trộn ngẫu nhiên câu hỏi bằng thuật toán Fisher-Yates
            for (let i = window.quizData.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [window.quizData[i], window.quizData[j]] = [window.quizData[j], window.quizData[i]];
            }
            // Chỉ giữ đúng 15 câu
            window.quizData = window.quizData.slice(0, MAX_QUESTIONS);
        }
    }
    sliceRandomQuizData();

    // 4. Render thanh điều hướng phía trên
    window.addEventListener('DOMContentLoaded', () => {
        const container = document.querySelector('.quiz-container');
        if (!container) return;

        const topBar = document.createElement('div');
        topBar.className = 'sttech-topbar';
        topBar.innerHTML = `
            <div class="sttech-user-tag"><i class="fa-solid fa-user-graduate"></i> Thí sinh: ${userName}</div>
            <div style="display: flex; gap: 8px;">
                <a href="index.html" class="sttech-btn-nav"><i class="fa-solid fa-house"></i> Thoát</a>
                <button class="sttech-btn-nav" onclick="window.sttechPrevQuestion()"><i class="fa-solid fa-backward"></i> Câu trước</button>
                <button class="sttech-btn-nav sttech-btn-finish" onclick="window.sttechForceFinish()"><i class="fa-solid fa-flag-checkered"></i> Nộp bài</button>
            </div>
        `;
        container.insertBefore(topBar, container.firstChild);

        // Nút chuyển đề sau khi xem kết quả
        const resScreen = document.getElementById('result-screen');
        if (resScreen) {
            const extraActions = document.createElement('div');
            extraActions.style.marginTop = '15px';
            extraActions.innerHTML = `
                <a href="index.html" class="sttech-btn-nav" style="background: #4f46e5; border-color: #6366f1; padding: 12px 24px; font-size: 1rem;">
                    <i class="fa-solid fa-table-cells-large"></i> Lưu Kết Quả & Chọn Đề Khác
                </a>
            `;
            resScreen.appendChild(extraActions);
        }

        // Lắng nghe lúc kết thúc để lưu lịch sử
        hookResultSave();
    });

    // 5. Lưu lịch sử điểm và đánh giá vào localStorage
    function hookResultSave() {
        const origShowResults = window.showResults;
        const origShowFinalResult = window.showFinalResult;

        function saveRecord(scoreVal, totalVal) {
            let pct = Math.round((scoreVal / totalVal) * 100);
            let rating = pct >= 80 ? "Xuất sắc" : pct >= 50 ? "Đạt" : "Cần ôn thêm";
            
            let record = {
                name: userName,
                quiz: document.title.replace("STTech", "").trim(),
                score: `${scoreVal}/${totalVal}`,
                percent: `${pct}%`,
                rating: rating,
                date: new Date().toLocaleString('vi-VN')
            };

            let history = JSON.parse(localStorage.getItem('sttech_history') || '[]');
            history.unshift(record); // Thêm lên đầu danh sách
            if (history.length > 20) history.pop(); // Giữ 20 kết quả gần nhất
            localStorage.setItem('sttech_history', JSON.stringify(history));
        }

        if (typeof origShowResults === 'function') {
            window.showResults = function () {
                origShowResults.apply(this, arguments);
                let score = window.score || 0;
                let total = (window.quizData && window.quizData.length) || 15;
                saveRecord(score, total);
            };
        }

        if (typeof origShowFinalResult === 'function') {
            window.showFinalResult = function () {
                origShowFinalResult.apply(this, arguments);
                let score = window.userScore || 0;
                let total = (window.quizData && window.quizData.length) || 15;
                saveRecord(score, total);
            };
        }
    }

    // 6. Xử lý nút Nộp bài sớm & Câu trước
    window.sttechForceFinish = function () {
        if (confirm("Bạn có chắc chắn muốn nộp bài và chấm điểm ngay không?")) {
            if (typeof showResults === 'function') showResults();
            else if (typeof showFinalResult === 'function') showFinalResult();
        }
    };

    window.sttechPrevQuestion = function () {
        if (typeof currentQ !== 'undefined' && currentQ > 0) {
            currentQ--;
            if (typeof loadQuestion === 'function') loadQuestion();
        } else if (typeof currentIndex !== 'undefined' && currentIndex > 0) {
            currentIndex--;
            if (typeof loadQuestion === 'function') loadQuestion();
        } else {
            alert("Đây đã là câu hỏi đầu tiên!");
        }
    };
})();
