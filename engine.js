// STTech Unified UI & Navigation Engine
(function () {
    // 1. Nhúng font và FontAwesome tự động nếu trang chưa có
    if (!document.getElementById('sttech-fa-icons')) {
        const fa = document.createElement('link');
        fa.id = 'sttech-fa-icons';
        fa.rel = 'stylesheet';
        fa.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css';
        document.head.appendChild(fa);
    }

    // 2. Chèn CSS thanh điều hướng 3D chuẩn
    const style = document.createElement('style');
    style.innerHTML = `
        .sttech-topbar {
            display: flex; justify-content: space-between; align-items: center;
            margin-bottom: 20px; padding-bottom: 12px; border-bottom: 1.5px solid rgba(255,255,255,0.1);
            gap: 10px; flex-wrap: wrap;
        }
        .sttech-btn-nav {
            background: #1e293b; color: #f8fafc; border: 1.5px solid #334155;
            padding: 8px 16px; border-radius: 10px; font-weight: 700; cursor: pointer;
            text-decoration: none; display: inline-flex; align-items: center; gap: 8px;
            font-size: 0.9rem; box-shadow: 0 3px 0 #0f172a; transition: all 0.2s ease;
        }
        .sttech-btn-nav:hover { background: #334155; transform: translateY(-2px); border-color: #6366f1; }
        .sttech-btn-nav:active { transform: translateY(2px); box-shadow: 0 1px 0 #0f172a; }
        .sttech-btn-finish { background: #dc2626 !important; border-color: #ef4444 !important; }
        .sttech-btn-finish:hover { background: #b91c1c !important; }

        .sttech-botbar {
            display: flex; justify-content: space-between; align-items: center;
            margin-top: 25px; pt-3; gap: 10px;
        }
    `;
    document.head.appendChild(style);

    // 3. Tự động chèn nút điều khiển khi trang load xong
    window.addEventListener('DOMContentLoaded', () => {
        const container = document.querySelector('.quiz-container');
        if (!container) return;

        // Thanh điều hướng trên cùng (Thoát về Hub + Nộp bài chấm điểm ngay)
        const topBar = document.createElement('div');
        topBar.className = 'sttech-topbar';
        topBar.innerHTML = `
            <a href="index.html" class="sttech-btn-nav"><i class="fa-solid fa-house"></i> Về Menu Chính</a>
            <div style="display: flex; gap: 8px;">
                <button class="sttech-btn-nav" onclick="window.sttechPrevQuestion()"><i class="fa-solid fa-backward"></i> Câu trước</button>
                <button class="sttech-btn-nav sttech-btn-finish" onclick="window.sttechForceFinish()"><i class="fa-solid fa-flag-checkered"></i> Chấm bài & Kết thúc</button>
            </div>
        `;
        container.insertBefore(topBar, container.firstChild);

        // Nút ở màn hình kết thúc để chuyển sang đề khác
        const resScreen = document.getElementById('result-screen');
        if (resScreen) {
            const extraActions = document.createElement('div');
            extraActions.style.marginTop = '15px';
            extraActions.innerHTML = `
                <a href="index.html" class="sttech-btn-nav" style="background: #4f46e5; border-color: #6366f1; padding: 12px 24px; font-size: 1rem;">
                    <i class="fa-solid fa-table-cells-large"></i> Chọn Đề Khác Ôn Luyện
                </a>
            `;
            resScreen.appendChild(extraActions);
        }
    });

    // 4. Xử lý chức năng Chấm bài / Kết thúc ngay lập tức
    window.sttechForceFinish = function () {
        if (confirm("Bạn có chắc chắn muốn nộp bài sớm và chấm điểm ngay bây giờ không?")) {
            if (typeof showResults === 'function') {
                showResults();
            } else if (typeof showFinalResult === 'function') {
                showFinalResult();
            }
        }
    };

    // 5. Xử lý chức năng Quay lại câu trước
    window.sttechPrevQuestion = function () {
        // Hỗ trợ cả 2 chuẩn biến đếm currentIndex (quiz.html) và currentQ (các file còn lại)
        if (typeof currentQ !== 'undefined' && currentQ > 0) {
            currentQ--;
            if (typeof loadQuestion === 'function') loadQuestion();
        } else if (typeof currentIndex !== 'undefined' && currentIndex > 0) {
            currentIndex--;
            if (typeof loadQuestion === 'function') loadQuestion();
            if (typeof loadCurrentQuestion === 'function') loadCurrentQuestion();
        } else {
            alert("Đây đã là câu hỏi đầu tiên rồi!");
        }
    };
})();
