// STTech Ecosystem Centralized Question Banks
// Chứa toàn bộ 165 câu hỏi từ 6 chuyên đề với cấu trúc chuẩn hóa

window.STTECH_QUIZ_BANKS = {
    quiz1: {
        id: "quiz1",
        title: "1. Bản Đầy Đủ & Pháp Lý",
        category: "Hệ Sinh Thái Toàn Diện",
        icon: "fa-list-check",
        color: "#818cf8",
        description: "Học phần ôn tập nhận diện tính năng, mã cốt lõi và căn cứ pháp lý của 15 phần mềm STTech.",
        questions: [
            {
                id: 1,
                badge: "ST-EMS",
                q: "Phần mềm ST-EMS phục vụ việc quản lý dạy và học trực tuyến bám sát quy định pháp lý chính nào của Bộ GD&ĐT?",
                options: [
                    "A. Thông tư 16/2022/TT-BGDĐT",
                    "B. Thông tư 09/2021/TT-BGDĐT",
                    "C. Quyết định 3806/QĐ-BGDĐT",
                    "D. Nghị định 90/2020/NĐ-CP"
                ],
                answer: 1,
                exp: "ST-EMS đáp ứng Thông tư 09/2021/TT-BGDĐT quy định về quản lý và tổ chức dạy học trực tuyến trong cơ sở giáo dục phổ thông và GDTX.",
                sourceTitle: "1. Bản Đầy Đủ & Pháp Lý"
            },
            {
                id: 2,
                badge: "ST-EMS",
                q: "Phân hệ 'Lớp học trực tuyến trực tiếp (Meeting Online)' trong ST-EMS tích hợp công cụ nền tảng nào sau đây?",
                options: [
                    "A. Zoom Meetings",
                    "B. Microsoft Teams",
                    "C. Google Meet",
                    "D. Cisco Webex"
                ],
                answer: 2,
                exp: "ST-EMS tích hợp trực tiếp với hệ thống Google Meet cùng các công cụ bảng trắng, điểm danh tự động và quay phim màn hình.",
                sourceTitle: "1. Bản Đầy Đủ & Pháp Lý"
            },
            {
                id: 3,
                badge: "ST-EMS",
                q: "Tính năng nào trong ST-EMS giúp phụ huynh đồng hành học cùng con tại nhà?",
                options: [
                    "A. Tự động chấm điểm bài tập tự luận",
                    "B. Kho tài liệu học tập bổ sung kiến thức chuẩn theo chương trình trên lớp",
                    "C. Tự động cấp bằng chứng nhận hoàn thành khóa học",
                    "D. Phê duyệt tờ trình xét tốt nghiệp trực tuyến"
                ],
                answer: 1,
                exp: "ST-EMS cung cấp kho tài liệu học tập bổ sung cho phụ huynh tra cứu để hướng dẫn và bổ sung kiến thức con còn thiếu.",
                sourceTitle: "1. Bản Đầy Đủ & Pháp Lý"
            },
            {
                id: 4,
                badge: "ST-ETEST",
                q: "Kỹ thuật ra đề thi nổi bật nhất trong ST-ETEST nhằm đáp ứng định hướng đánh giá năng lực học sinh của Bộ GD&ĐT là gì?",
                options: [
                    "A. Trộn đề thi thủ công theo thứ tự bảng chữ cái",
                    "B. Trộn đề theo phương pháp tổ hợp",
                    "C. Tự động đảo ngẫu nhiên không theo ma trận",
                    "D. Xuất file đề thi mã hóa PDF chống sao chép"
                ],
                answer: 1,
                exp: "ST-ETEST hỗ trợ trộn đề theo phương pháp tổ hợp kết hợp nhiều mảng kiến thức/môn học nhằm đánh giá năng lực học sinh.",
                sourceTitle: "1. Bản Đầy Đủ & Pháp Lý"
            },
            {
                id: 5,
                badge: "ST-ETEST",
                q: "Mô hình vận hành CSDL của phần mềm ST-ETEST có đặc điểm gì nổi bật?",
                options: [
                    "A. Chỉ hoạt động 100% offline trên máy tính cá nhân",
                    "B. Kết hợp giữa hình thức Offline (cục bộ) và Online (đồng bộ CSDL dùng chung lên Server)",
                    "C. Bắt buộc phải cài đặt máy chủ riêng tại từng trường học",
                    "D. Chỉ lưu trữ đề thi dưới dạng file ảnh JPG"
                ],
                answer: 1,
                exp: "ST-ETEST triển khai kết hợp offline cho giáo viên làm việc cục bộ và online để đồng bộ CSDL dùng chung với Server quản lý.",
                sourceTitle: "1. Bản Đầy Đủ & Pháp Lý"
            },
            {
                id: 6,
                badge: "ST-ETEST",
                q: "Khi nhập hàng loạt câu hỏi từ file Word vào ST-ETEST, phần mềm xử lý như thế nào nếu có câu sai định dạng?",
                options: [
                    "A. Tự động xóa bỏ toàn bộ file nhập vào",
                    "B. Báo lỗi hệ thống và dừng chương trình",
                    "C. Tự động chỉ ra các câu lỗi và xuất ra file Word để người dùng dễ dàng chỉnh sửa",
                    "D. Tự động sửa lại nội dung câu hỏi theo AI"
                ],
                answer: 2,
                exp: "ST-ETEST tự động phát hiện câu hỏi không đúng định dạng và xuất ra file Word riêng cho giáo viên sửa.",
                sourceTitle: "1. Bản Đầy Đủ & Pháp Lý"
            },
            {
                id: 7,
                badge: "DTI",
                q: "Bộ tiêu chí Đánh giá chuyển đổi số dành cho Cơ quan quản lý giáo dục Cấp Sở & Cấp Phòng (theo QĐ 3806/QĐ-BGDĐT) gồm bao nhiêu trụ cột và tiêu chí?",
                options: [
                    "A. 5 trụ cột – 25 tiêu chí",
                    "B. 6 trụ cột – 48 tiêu chí – hơn 140 minh chứng",
                    "C. 8 trụ cột – 50 tiêu chí",
                    "D. 4 trụ cột – 30 tiêu chí"
                ],
                answer: 1,
                exp: "Theo QĐ 3806/QĐ-BGDĐT, bộ tiêu chí DTI cấp Sở/Phòng gồm 6 trụ cột, 48 tiêu chí và hơn 140 minh chứng.",
                sourceTitle: "1. Bản Đầy Đủ & Pháp Lý"
            },
            {
                id: 8,
                badge: "DTI",
                q: "Căn cứ pháp lý áp dụng đánh giá chuyển đổi số cho Trường Phổ thông & GDTX trên hệ thống DTI là văn bản nào?",
                options: [
                    "A. Quyết định 3806/QĐ-BGDĐT",
                    "B. Quyết định 3276/QĐ-BGDĐT",
                    "C. Quyết định 4725/QĐ-BGDĐT",
                    "D. Thông tư 09/2024/TT-BGDĐT"
                ],
                answer: 2,
                exp: "Quyết định 4725/QĐ-BGDĐT ban hành bộ tiêu chí CĐS dành cho các trường phổ thông và trung tâm GDTX.",
                sourceTitle: "1. Bản Đầy Đủ & Pháp Lý"
            },
            {
                id: 9,
                badge: "DTI",
                q: "Quy trình đánh giá Chuyển đổi số trên hệ thống DTI gồm mấy bước tiêu chuẩn?",
                options: [
                    "A. 3 bước (Tự đánh giá -> Thẩm định -> Xuất báo cáo)",
                    "B. 4 bước (Cơ sở tự đánh giá -> Phòng/Sở thẩm định -> Hội đồng Sở công nhận -> Toàn ngành công bố & đồng bộ)",
                    "C. 5 bước (Lập kế hoạch -> Nhập liệu -> Chấm điểm -> Duyệt -> Lưu kho)",
                    "D. 2 bước (Chấm online -> Ban hành quyết định)"
                ],
                answer: 1,
                exp: "Quy trình DTI chuẩn gồm 4 bước khép kín từ trường tự đánh giá đến thẩm định, công nhận và đồng bộ CSDL Bộ GD&ĐT.",
                sourceTitle: "1. Bản Đầy Đủ & Pháp Lý"
            },
            {
                id: 10,
                badge: "QA",
                q: "Chức năng cốt lõi của phần mềm QA trong hệ sinh thái STTech là gì?",
                options: [
                    "A. Đánh giá và quản lý hồ sơ kiểm định chất lượng cơ sở giáo dục",
                    "B. Quản lý điểm số và danh mục lớp học",
                    "C. Tự động bóc tách OCR hồ sơ lưu trữ",
                    "D. Quản lý phôi bằng và cấp bản sao văn bằng"
                ],
                answer: 0,
                exp: "QA là phần mềm Kiểm định chất lượng giáo dục, chuyên quản lý hồ sơ và quy trình kiểm định chất lượng các trường.",
                sourceTitle: "1. Bản Đầy Đủ & Pháp Lý"
            },
            {
                id: 11,
                badge: "EDU",
                q: "Cổng thông tin điện tử Giáo dục (EduPortal AI / EDU) thực hiện công khai giáo dục theo văn bản quy định mới nhất nào?",
                options: [
                    "A. Thông tư 36/2017/TT-BGDĐT",
                    "B. Thông tư 09/2024/TT-BGDĐT",
                    "C. Thông tư 16/2022/TT-BGDĐT",
                    "D. Nghị định 90/2020/NĐ-CP"
                ],
                answer: 1,
                exp: "Hệ thống EDU công khai giáo dục 5 nội dung (Đội ngũ, CSVC, Tài chính, Chất lượng GD, Kế hoạch năm) theo Thông tư 09/2024/TT-BGDĐT.",
                sourceTitle: "1. Bản Đầy Đủ & Pháp Lý"
            },
            {
                id: 12,
                badge: "EDU",
                q: "Trợ lý AI (EduPortal AI) tích hợp trên Cổng thông tin EDU có vai trò chính là gì?",
                options: [
                    "A. Tự động chấm bài thi tự luận của học sinh",
                    "B. Hỗ trợ tra cứu tự động về tuyển sinh, học bạ số và thủ tục hành chính",
                    "C. Tự động xếp thời khóa biểu cho nhà trường",
                    "D. Thay thế hoàn toàn giáo viên trong việc giảng dạy"
                ],
                answer: 1,
                exp: "Trợ lý EduPortal AI hỗ trợ bạn đọc, phụ huynh tra cứu tự động về tuyển sinh, học bạ số và thủ tục hành chính 24/7.",
                sourceTitle: "1. Bản Đầy Đủ & Pháp Lý"
            },
            {
                id: 13,
                badge: "ST-AMS",
                q: "Đặc điểm nghiệp vụ vượt trội của ST-AMS trong công tác phân tuyến tuyển sinh là gì?",
                options: [
                    "A. Chỉ phân tuyến theo cấp Huyện",
                    "B. Phân tuyến chi tiết theo địa bàn sâu đến tận Khu phố / Tổ / Thôn / Ấp / Xóm",
                    "C. Tự động phân chia học sinh ngẫu nhiên không cần địa chỉ",
                    "D. Phân tuyến dựa trên điểm thi môn Toán và Ngữ văn"
                ],
                answer: 1,
                exp: "ST-AMS cài đặt danh mục địa giới 3 cấp và phân tuyến chi tiết theo địa bàn đến tận Khu phố/Tổ/Thôn/Ấp/Xóm giúp phụ huynh biết chính xác trường đúng tuyến.",
                sourceTitle: "1. Bản Đầy Đủ & Pháp Lý"
            },
            {
                id: 14,
                badge: "ST-AMS",
                q: "Sau khi phụ huynh nộp hồ sơ tuyển sinh trực tuyến thành công trên ST-AMS, hệ thống sẽ tự động gửi gì đến phụ huynh?",
                options: [
                    "A. Mã bảo mật và mã số thuế",
                    "B. Thông báo đăng ký thành công qua Email và thông báo lịch hẹn làm việc với nhà trường",
                    "C. Giấy nhập học chính thức ngay lập tức",
                    "D. Thẻ thư viện điện tử"
                ],
                answer: 1,
                exp: "ST-AMS tự động gửi email xác nhận nộp thành công và lịch hẹn làm việc với hội đồng tuyển sinh để tránh ùn tắc.",
                sourceTitle: "1. Bản Đầy Đủ & Pháp Lý"
            },
            {
                id: 15,
                badge: "ST-AMS",
                q: "Ngoài nghiệp vụ tuyển sinh, phần mềm ST-AMS còn tích hợp phân hệ đặc thù nào cho các trường THCS?",
                options: [
                    "A. Xét công nhận tốt nghiệp THCS và xuất giấy chứng nhận tốt nghiệp tạm thời",
                    "B. Quản lý phôi bằng đại học",
                    "C. Tự động bóc tách tài liệu OCR",
                    "D. Tính dự toán tiền lương ngạch bậc"
                ],
                answer: 0,
                exp: "ST-AMS tích hợp phân hệ Xét tốt nghiệp THCS, xuất danh sách và in giấy chứng nhận tốt nghiệp tạm thời.",
                sourceTitle: "1. Bản Đầy Đủ & Pháp Lý"
            },
            {
                id: 16,
                badge: "ST-LIB",
                q: "ST-LIB là sự kết hợp đồng bộ của 3 phân hệ liên thông dữ liệu nào?",
                options: [
                    "A. Quản lý nhân sự - Tính lương - Bảo hiểm",
                    "B. Thư viện số - Đánh giá thư viện đạt chuẩn (TT 16) - Quản lý thư viện trường học trực tuyến",
                    "C. Tuyển sinh - Thi trực tuyến - Cấp bằng",
                    "D. Số hóa tài liệu - Ký số - Đóng gói"
                ],
                answer: 1,
                exp: "ST-LIB gồm 3 phân hệ cốt lõi: Thư viện số (ebook 3D), Đánh giá thư viện đạt chuẩn (TT 16/2022) và Quản lý thư viện trường học (DDC/Cutter).",
                sourceTitle: "1. Bản Đầy Đủ & Pháp Lý"
            },
            {
                id: 17,
                badge: "ST-LIB",
                q: "Trong phân hệ Biên mục của ST-LIB, bộ mã nào được áp dụng để tự động mã hóa tên tài liệu và tên tác giả?",
                options: [
                    "A. Bộ mã Unicode UTF-8",
                    "B. Bộ mã Cutter",
                    "C. Bộ mã Barcode QR-Code",
                    "D. Bộ mã DDC 23"
                ],
                answer: 1,
                exp: "ST-LIB hỗ trợ biên mục chuẩn DDC và tự động mã hóa tên tài liệu/tác giả theo bảng mã Cutter.",
                sourceTitle: "1. Bản Đầy Đủ & Pháp Lý"
            },
            {
                id: 18,
                badge: "ST-LIB",
                q: "Cách thức ST-LIB hỗ trợ thủ thư làm báo cáo Tự đánh giá thư viện theo Thông tư 16/2022/TT-BGDĐT là gì?",
                options: [
                    "A. Yêu cầu thủ thư nhập tay lại toàn bộ số liệu sách và lượt mượn",
                    "B. Tự động lấy số liệu liên thông từ phân hệ Quản lý mượn/trả và cơ sở dữ liệu thư viện",
                    "C. Chỉ cho phép tải biểu mẫu Word về làm thủ công",
                    "D. Tự động phê duyệt đạt chuẩn mà không cần minh chứng"
                ],
                answer: 1,
                exp: "ST-LIB tự động kết xuất và liên thông dữ liệu mượn/đọc từ phân hệ quản lý thư viện vào các chỉ số tự đánh giá TT 16.",
                sourceTitle: "1. Bản Đầy Đủ & Pháp Lý"
            },
            {
                id: 19,
                badge: "ST-DMS",
                q: "Phần mềm ST-DMS đáp ứng dịch vụ hành chính công ở mức độ nào với phân hệ 'Cấp bản sao trực tuyến'?",
                options: [
                    "A. Mức độ 1 và 2",
                    "B. Mức độ 3 và 4",
                    "C. Chỉ phục vụ tra cứu nội bộ",
                    "D. Không hỗ trợ hành chính công"
                ],
                answer: 1,
                exp: "ST-DMS hiện đại hóa thủ tục hành chính công, đáp ứng mức độ 3 và 4 cho phép công dân đăng ký cấp bản sao văn bằng trực tuyến.",
                sourceTitle: "1. Bản Đầy Đủ & Pháp Lý"
            },
            {
                id: 20,
                badge: "ST-DMS",
                q: "Tính năng 'Sổ gốc điện tử' trong ST-DMS mang lại giá trị quan trọng nào cho cơ quan quản lý?",
                options: [
                    "A. Thay thế việc ký duyệt của Lãnh đạo",
                    "B. Đính kèm và tra cứu trả về kết quả ảnh sổ gốc chính xác, bảo vệ dữ liệu vĩnh viễn chống hư hỏng giấy",
                    "C. Tự động in phôi bằng khi học sinh làm đơn",
                    "D. Tự động gửi phôi bằng qua bưu điện"
                ],
                answer: 1,
                exp: "Sổ gốc điện tử trong ST-DMS đính kèm ảnh chụp sổ gốc, hỗ trợ tìm kiếm xác minh tức thì và bảo tồn lâu dài.",
                sourceTitle: "1. Bản Đầy Đủ & Pháp Lý"
            },
            {
                id: 21,
                badge: "ST-DMS",
                q: "Khi thực hiện in văn bằng hàng loạt trên ST-DMS, hệ thống sẽ cấp số hiệu văn bằng như thế nào?",
                options: [
                    "A. Giáo viên tự gõ tay từng số hiệu",
                    "B. Cấp số hiệu tự động theo danh sách phôi đã nhập và danh sách người học",
                    "C. Số hiệu được lấy ngẫu nhiên không theo thứ tự",
                    "D. Chỉ dùng 1 số hiệu duy nhất cho cả lớp"
                ],
                answer: 1,
                exp: "ST-DMS tự động cấp số hiệu văn bằng chuẩn xác theo thứ tự danh sách phôi bằng và danh sách học sinh trúng tuyển.",
                sourceTitle: "1. Bản Đầy Đủ & Pháp Lý"
            },
            {
                id: 22,
                badge: "ST-TMIS",
                q: "Bộ phần mềm ST-TMIS là sự hợp nhất cốt lõi từ 2 dòng sản phẩm nào?",
                options: [
                    "A. EMS và ETEST",
                    "B. CMS (Chuẩn nghề nghiệp) và KPI (Đánh giá công chức/viên chức)",
                    "C. BHR và HRS",
                    "D. SMS và EDIS"
                ],
                answer: 1,
                exp: "ST-TMIS là bộ phần mềm gộp chung quy trình từ CMS (Đánh giá chuẩn nghề nghiệp) và KPI (Đánh giá công chức/viên chức).",
                sourceTitle: "1. Bản Đầy Đủ & Pháp Lý"
            },
            {
                id: 23,
                badge: "ST-TMIS",
                q: "Các căn cứ pháp lý chính quy định về đánh giá Chuẩn hiệu trưởng và Chuẩn nghề nghiệp giáo viên trên TMIS và CEMS bao gồm:",
                options: [
                    "A. Các Thông tư 14, 20, 25, 26 ban hành năm 2018 của Bộ GD&ĐT",
                    "B. Nghị định 64/2007/NĐ-CP",
                    "C. Thông tư 16/2022/TT-BGDĐT",
                    "D. Quyết định 3806/QĐ-BGDĐT"
                ],
                answer: 0,
                exp: "Đánh giá chuẩn nghề nghiệp trên TMIS/CEMS tuân thủ các Thông tư 14 (Chuẩn HT phổ thông), 20 (Chuẩn GV phổ thông), 25 (Chuẩn HT mầm non), 26 (Chuẩn GV mầm non).",
                sourceTitle: "1. Bản Đầy Đủ & Pháp Lý"
            },
            {
                id: 24,
                badge: "ST-CEMS",
                q: "Tính năng phát triển đội ngũ đặc thù chỉ có ở phần mềm ST-CEMS là gì?",
                options: [
                    "A. Tự động tính dự toán quỹ lương",
                    "B. Thống kê và thông báo danh sách giáo viên/cán bộ quản lý gần đủ điều kiện thành Cán bộ / Giáo viên cốt cán",
                    "C. Tự động bóc tách chữ ký số",
                    "D. Phát hiện câu hỏi trùng lặp trong đề thi"
                ],
                answer: 1,
                exp: "ST-CEMS có tính năng tự động thống kê cảnh báo danh sách nhân sự gần đạt tiêu chí để quy hoạch làm Cán bộ/Giáo viên cốt cán địa phương.",
                sourceTitle: "1. Bản Đầy Đủ & Pháp Lý"
            },
            {
                id: 25,
                badge: "ST-KPI",
                q: "Phần mềm ST-KPI đáp ứng công tác đánh giá xếp loại chất lượng cán bộ, công chức, viên chức theo các Nghị định cốt lõi nào?",
                options: [
                    "A. Nghị định 90/2020/NĐ-CP và Nghị định 48/2023/NĐ-CP",
                    "B. Nghị định 131/2022/NĐ-CP",
                    "C. Thông tư 09/2021/TT-BGDĐT",
                    "D. Quyết định 749/QĐ-TTg"
                ],
                answer: 0,
                exp: "ST-KPI bám sát Nghị định 90/2020/NĐ-CP và Nghị định 48/2023/NĐ-CP sửa đổi bổ sung về đánh giá chất lượng CCVC.",
                sourceTitle: "1. Bản Đầy Đủ & Pháp Lý"
            },
            {
                id: 26,
                badge: "ST-KPI",
                q: "Tính năng 'Kế thừa dữ liệu sang năm mới' trong KPI và TMIS mang lại lợi ích gì?",
                options: [
                    "A. Tự động tăng điểm đánh giá lên 10%",
                    "B. Cho phép chuyển dữ liệu báo cáo sang năm làm việc tiếp theo giúp giảm tối đa thời gian nhập lại từ đầu",
                    "C. Xóa toàn bộ dữ liệu đánh giá của năm cũ",
                    "D. Khóa tài khoản của những cán bộ xếp loại không đạt"
                ],
                answer: 1,
                exp: "Kế thừa dữ liệu giúp chuyển toàn bộ danh mục, minh chứng và kế hoạch sang năm mới để đơn vị sử dụng lại mà không cần khai báo từ đầu.",
                sourceTitle: "1. Bản Đầy Đủ & Pháp Lý"
            },
            {
                id: 27,
                badge: "ST-BHR",
                q: "Chức năng cảnh báo tự động nổi bật của phần mềm ST-BHR giúp Phòng Nội vụ/UBND không bỏ sót quyền lợi cán bộ là gì?",
                options: [
                    "A. Nhắc lịch họp giao ban hàng ngày",
                    "B. Cảnh báo tự động đến hạn nâng bậc lương định kỳ/trước hạn, lịch nghỉ hưu, hết hạn hợp đồng qua Email",
                    "C. Cảnh báo số lượng học sinh nghỉ học",
                    "D. Cảnh báo quá hạn mượn sách thư viện"
                ],
                answer: 1,
                exp: "ST-BHR tự động quét và gửi email cảnh báo nâng lương ngạch bậc, nghỉ hưu, hết hạn bổ nhiệm/hợp đồng đến cấp quản lý.",
                sourceTitle: "1. Bản Đầy Đủ & Pháp Lý"
            },
            {
                id: 28,
                badge: "ST-BHR",
                q: "Biểu mẫu quản lý sơ yếu lý lịch cán bộ chuẩn hóa được trích xuất tự động từ ST-BHR là mẫu nào?",
                options: [
                    "A. Mẫu 01/TCTW",
                    "B. Mẫu 2C/HS02",
                    "C. Mẫu 09/TT-BGDĐT",
                    "D. Mẫu 04a-BNV"
                ],
                answer: 1,
                exp: "ST-BHR quản lý và kết xuất sơ yếu lý lịch cán bộ công chức theo mẫu chuẩn 2C/HS02.",
                sourceTitle: "1. Bản Đầy Đủ & Pháp Lý"
            },
            {
                id: 29,
                badge: "HRS",
                q: "Nghiệp vụ cốt lõi của phần mềm HRS trong nhóm quản trị nhân sự là gì?",
                options: [
                    "A. Đánh giá chuẩn giáo viên mầm non",
                    "B. Quản lý thông tin nhân sự, tính lương chi tiết và lập dự toán chi trả lương",
                    "C. Bóc tách chữ ký số tài liệu lưu trữ",
                    "D. Tổ chức trộn đề thi trắc nghiệm"
                ],
                answer: 1,
                exp: "HRS chuyên trách mảng Quản lý nhân sự, tính toán tiền lương chi tiết và lập dự toán chi trả lương cho đơn vị.",
                sourceTitle: "1. Bản Đầy Đủ & Pháp Lý"
            },
            {
                id: 30,
                badge: "ST-TMIS",
                q: "Khác biệt về phân quyền nhóm người dùng giữa ST-TMIS và ST-CEMS là gì?",
                options: [
                    "A. TMIS chỉ dùng cho Cấp Trường, CEMS dùng cho Cấp Sở",
                    "B. TMIS bao gồm cả Admin/Lãnh đạo Phòng GD&ĐT, BGH, Giáo viên và Cán bộ công chức viên chức; còn CEMS tập trung vào BGH & Giáo viên mầm non/phổ thông",
                    "C. CEMS không cho phép lưu trữ minh chứng",
                    "D. TMIS không hỗ trợ báo cáo xuất file Excel"
                ],
                answer: 1,
                exp: "TMIS gộp chung cả KPI nên phục vụ toàn bộ cán bộ công chức Phòng GD&ĐT lẫn viên chức nhà trường, còn CEMS tập chuyên sâu cho Chuẩn hiệu trưởng/giáo viên.",
                sourceTitle: "1. Bản Đầy Đủ & Pháp Lý"
            },
            {
                id: 31,
                badge: "ST-SMS",
                q: "Phần mềm ST-SMS tổ chức mô hình quản lý kho lưu trữ vật lý theo cấu trúc cây phân cấp nào?",
                options: [
                    "A. Tỉnh -> Huyện -> Xã -> Trường",
                    "B. Kho -> Kệ/Giá -> Phông -> Hộp -> Hồ sơ",
                    "C. Tòa nhà -> Phòng -> Bàn -> Ngăn kéo",
                    "D. Nhóm -> Danh mục -> File -> Trang"
                ],
                answer: 1,
                exp: "ST-SMS sắp xếp tài liệu lưu trữ khoa học theo hình cây phân cấp: Kho -> Kệ/Giá -> Phông -> Hộp -> Hồ sơ.",
                sourceTitle: "1. Bản Đầy Đủ & Pháp Lý"
            },
            {
                id: 32,
                badge: "ST-SMS",
                q: "Trong phân hệ Cho mượn tài liệu của ST-SMS, quy trình kiểm soát an toàn tài liệu quan trọng được thực hiện ra sao?",
                options: [
                    "A. Cho phép người dùng tự do tải về mà không cần đăng nhập",
                    "B. Lập phiếu mượn trực tuyến và phải được duyệt bởi người quản lý có thẩm quyền",
                    "C. Tự động hủy tài liệu sau 7 ngày mượn",
                    "D. Chỉ cho mượn tài liệu gốc bản giấy"
                ],
                answer: 1,
                exp: "Với các tài liệu quan trọng, ST-SMS bắt buộc lập phiếu mượn và phải qua phê duyệt trực tuyến của lãnh đạo có thẩm quyền.",
                sourceTitle: "1. Bản Đầy Đủ & Pháp Lý"
            },
            {
                id: 33,
                badge: "ST-SMS",
                q: "Điểm khác biệt về mặt vận hành giữa ST-SMS và EDIS là gì?",
                options: [
                    "A. SMS là phần mềm mới hơn EDIS",
                    "B. SMS nhập liệu thủ công nhiều hơn, đã triển khai lâu năm; còn EDIS là giải pháp số hóa hiện đại tích hợp OCR tự động",
                    "C. EDIS không hỗ trợ tra cứu văn bản",
                    "D. SMS chỉ dùng cho doanh nghiệp tư nhân"
                ],
                answer: 1,
                exp: "SMS là phần mềm quản lý kho lưu trữ truyền thống lâu năm nhập tay nhiều hơn, trong khi EDIS là nền tảng số hóa tự động hóa bằng công nghệ OCR.",
                sourceTitle: "1. Bản Đầy Đủ & Pháp Lý"
            },
            {
                id: 34,
                badge: "EDIS",
                q: "Công nghệ cốt lõi nào được tích hợp trong EDIS giúp bóc tách thông tin và siêu dữ liệu (Metadata) tự động từ file scan?",
                options: [
                    "A. Công nghệ Blockchain",
                    "B. Công nghệ nhận dạng quang học OCR",
                    "C. Công nghệ VR 3D",
                    "D. Công nghệ IoT"
                ],
                answer: 1,
                exp: "EDIS tích hợp công nghệ OCR tự động nhận dạng chữ viết và bóc tách siêu dữ liệu (Metadata) giúp giảm 95% thời gian tìm kiếm.",
                sourceTitle: "1. Bản Đầy Đủ & Pháp Lý"
            },
            {
                id: 35,
                badge: "EDIS",
                q: "Quy trình số hóa khép kín 6 bước trên hệ thống EDIS bao gồm thứ tự nào sau đây?",
                options: [
                    "A. Quét tài liệu -> Nhập thông tin (OCR) -> Chuẩn hóa -> Kiểm tra QC -> Ký số & Đóng gói -> Lưu trữ & Tra cứu",
                    "B. Ký số -> Quét tài liệu -> Kiểm tra QC -> Đóng gói -> Nhập thông tin",
                    "C. Lập kế hoạch -> In giấy -> Lưu kho -> Mượn trả",
                    "D. Quét tài liệu -> Lưu trữ -> Ký số -> Sửa lỗi"
                ],
                answer: 0,
                exp: "Quy trình EDIS tiêu chuẩn gồm 6 bước: Quét -> Nhập metadata (OCR) -> Chuẩn hóa -> Kiểm tra QC -> Ký số xác thực & Đóng gói -> Lưu trữ & Tra cứu.",
                sourceTitle: "1. Bản Đầy Đủ & Pháp Lý"
            },
            {
                id: 36,
                badge: "EDIS",
                q: "Khâu Kiểm tra chất lượng (QC) trong hệ thống EDIS đóng vai trò gì?",
                options: [
                    "A. Kiểm tra xem cán bộ có đi làm đúng giờ không",
                    "B. Kiểm duyệt gắt gao chất lượng file scan và metadata của từng hồ sơ trước khi chính thức lưu kho",
                    "C. Tự động gửi Email thông báo cho phụ huynh",
                    "D. Xóa các file có dung lượng lớn"
                ],
                answer: 1,
                exp: "Khâu QC của EDIS thực hiện kiểm duyệt gắt gao chất lượng hình ảnh và thông tin bóc tách để đảm bảo độ chính xác tuyệt đối.",
                sourceTitle: "1. Bản Đầy Đủ & Pháp Lý"
            },
            {
                id: 37,
                badge: "Hạ Tầng Kỹ Thuật",
                q: "Điểm chung về kiến trúc hạ tầng kỹ thuật của hầu hết các phần mềm trong hệ sinh thái STTech là gì?",
                options: [
                    "A. Bắt buộc phải cài đặt phần mềm trên từng máy tính",
                    "B. Hoạt động trên nền tảng Web Cloud, hỗ trợ Responsive, đăng nhập 1 lần (SSO) và mỗi đơn vị có CSDL riêng biệt",
                    "C. Dùng chung 1 CSDL duy nhất cho tất cả các tỉnh thành",
                    "D. Chỉ chạy được trên hệ điều hành Windows XP"
                ],
                answer: 1,
                exp: "Toàn bộ giải pháp STTech chạy trên Web Cloud, không cần cài đặt, hỗ trợ SSO, kho CSDL riêng biệt cho từng đơn vị để đảm bảo an toàn.",
                sourceTitle: "1. Bản Đầy Đủ & Pháp Lý"
            },
            {
                id: 38,
                badge: "ST-DMS",
                q: "Phần mềm nào đóng vai trò quản lý Cấp phôi bằng và xác minh chống bằng giả cho Sở/Phòng GD&ĐT?",
                options: [
                    "A. ST-AMS",
                    "B. ST-DMS",
                    "C. ST-SMS",
                    "D. ST-LIB"
                ],
                answer: 1,
                exp: "ST-DMS là Phần mềm Quản lý, cấp phát và xác minh văn bằng chứng chỉ.",
                sourceTitle: "1. Bản Đầy Đủ & Pháp Lý"
            },
            {
                id: 39,
                badge: "Phân Biệt Phần Mềm",
                q: "Sự khác biệt rõ nhất giữa ST-EMS và ST-ETEST là gì?",
                options: [
                    "A. EMS là quản lý học trực tuyến & lớp học ảo; ETEST chuyên sâu về ngân hàng câu hỏi, ma trận đề & trộn đề thi",
                    "B. ETEST dành cho phụ huynh, EMS dành cho BGH",
                    "C. EMS không có chức năng kiểm tra trực tuyến",
                    "D. ETEST chỉ dùng để đánh giá giáo viên"
                ],
                answer: 0,
                exp: "EMS là nền tảng quản lý dạy học trực tuyến và lớp học ảo Meeting Online; ETEST là hệ thống chuyên sâu về xây dựng ngân hàng đề, ma trận đề và trộn đề.",
                sourceTitle: "1. Bản Đầy Đủ & Pháp Lý"
            },
            {
                id: 40,
                badge: "DTI",
                q: "Hệ thống nào giúp Lãnh đạo Sở/Phòng GD&ĐT theo dõi tiến độ và xếp hạng Mức độ Chuyển đổi số của toàn bộ trường học trên địa bàn?",
                options: [
                    "A. ST-BHR",
                    "B. DTI (Hệ thống Đánh giá chuyển đổi số)",
                    "C. ST-AMS",
                    "D. EDIS"
                ],
                answer: 1,
                exp: "DTI là Nền tảng đánh giá Chuyển đổi số ngành Giáo dục cấp tỉnh, giúp lãnh đạo theo dõi Dashboard xếp hạng CĐS thời gian thực.",
                sourceTitle: "1. Bản Đầy Đủ & Pháp Lý"
            }
        ]
    },

    quiz2: {
        id: "quiz2",
        title: "2. Tên Gọi & Mã Viết Tắt",
        category: "Tên Gọi & Mã Viết Tắt",
        icon: "fa-tags",
        color: "#38bdf8",
        description: "Luyện phản xạ ghi nhớ tên tiếng Anh, tên viết tắt và ý nghĩa cốt lõi của 15 phần mềm STTech.",
        questions: [
            {
                id: 1,
                badge: "ST-DMS",
                q: "Tên viết tắt 'ST-DMS' trong hệ sinh thái phần mềm STTech đại diện cho tên tiếng Anh và tên đầy đủ tiếng Việt nào sau đây?",
                options: [
                    "A. Document Management System - Phần mềm Quản lý văn bản điện tử",
                    "B. Diploma Management System - Phần mềm Quản lý, cấp phát văn bằng chứng chỉ",
                    "C. Data Mining System - Hệ thống Phân tích dữ liệu giáo dục",
                    "D. Digital Media System - Phần mềm Quản lý truyền thông số"
                ],
                answer: 1,
                exp: "<b>ST-DMS</b> là viết tắt của <i>Diploma Management System</i> - Phần mềm Quản lý, cấp phát văn bằng chứng chỉ, phục vụ quy trình xét tốt nghiệp, cấp phôi bằng, in bằng và tra cứu bản sao trực tuyến.",
                sourceTitle: "2. Tên Gọi & Mã Viết Tắt"
            },
            {
                id: 2,
                badge: "EDIS",
                q: "Phần mềm nào sau đây có tên tiếng Việt là 'Hệ thống số hóa & Quản lý dữ liệu hồ sơ lưu trữ'?",
                options: [
                    "A. ST-SMS",
                    "B. EDIS",
                    "C. DTI",
                    "D. ST-LIB"
                ],
                answer: 1,
                exp: "<b>EDIS</b> (Electronic Document Archiving & Digitization Information System) là Hệ thống số hóa & Quản lý dữ liệu hồ sơ lưu trữ, tích hợp công nghệ quét OCR, ký số xác thực và đóng gói tự động.",
                sourceTitle: "2. Tên Gọi & Mã Viết Tắt"
            },
            {
                id: 3,
                badge: "ST-TMIS",
                q: "Tên gọi 'ST-TMIS' viết tắt từ cụm từ gốc tiếng Anh nào?",
                options: [
                    "A. Teacher & Management Information System",
                    "B. Total Management Instruction System",
                    "C. Training & Monitoring Inspection Software",
                    "D. Technical Measurement Integration System"
                ],
                answer: 0,
                exp: "<b>ST-TMIS</b> viết tắt của <i>Teacher & Management Information System</i> - Phần mềm Đánh giá chuẩn hiệu trưởng, chuẩn nghề nghiệp giáo viên và Đánh giá cán bộ, công chức, viên chức.",
                sourceTitle: "2. Tên Gọi & Mã Viết Tắt"
            },
            {
                id: 4,
                badge: "ST-AMS",
                q: "Ứng dụng nào dưới đây là 'Phần mềm Quản lý tuyển sinh đầu cấp'?",
                options: [
                    "A. ST-EMS",
                    "B. ST-AMS",
                    "C. ST-SMS",
                    "D. ST-BHR"
                ],
                answer: 1,
                exp: "<b>ST-AMS</b> (Admission Management System) là Phần mềm Quản lý tuyển sinh đầu cấp, hỗ trợ phân tuyến theo địa bàn thôn/ấp, xét tuyển tự động và nhận lịch hẹn trực tuyến.",
                sourceTitle: "2. Tên Gọi & Mã Viết Tắt"
            },
            {
                id: 5,
                badge: "DTI",
                q: "Mã viết tắt 'DTI' đại diện cho hệ thống nào của STTech?",
                options: [
                    "A. Digital Teacher Inspection - Kiểm tra giáo viên số",
                    "B. Digital Transformation Index - Hệ thống Đánh giá chuyển đổi số ngành Giáo dục",
                    "C. Data Transfer Interface - Giao diện chuyển giao dữ liệu",
                    "D. District Technical Infrastructure - Hạ tầng kỹ thuật cấp huyện"
                ],
                answer: 1,
                exp: "<b>DTI</b> là <i>Digital Transformation Index</i> - Hệ thống Đánh giá chuyển đổi số ngành Giáo dục, thực hiện bộ tiêu chí theo QĐ 3806, QĐ 4725 và QĐ 3276 của Bộ GD&ĐT.",
                sourceTitle: "2. Tên Gọi & Mã Viết Tắt"
            },
            {
                id: 6,
                badge: "ST-SMS vs EDIS",
                q: "Sự khác biệt cốt lõi về tên gọi và chức năng giữa 'ST-SMS' và 'EDIS' là gì?",
                options: [
                    "A. ST-SMS quản lý tuyển sinh; EDIS quản lý bằng cấp.",
                    "B. ST-SMS là Quản lý kho hồ sơ lưu trữ (vật lý & điện tử); EDIS là Hệ thống số hóa chuyên sâu (quét OCR, ký số, đóng gói).",
                    "C. ST-SMS dành cho Trường học; EDIS dành cho Sở Tài chính.",
                    "D. Hai phần mềm này là một, chỉ khác tên do năm phát hành."
                ],
                answer: 1,
                exp: "<b>ST-SMS</b> (Storage Management System) quản lý kho lưu trữ vật lý/điện tử & quy trình mượn/trả. Trong khi <b>EDIS</b> là giải pháp số hóa chuyên sâu áp dụng OCR, QC và ký số bản sao pháp lý.",
                sourceTitle: "2. Tên Gọi & Mã Viết Tắt"
            },
            {
                id: 7,
                badge: "ST-BHR",
                q: "Tên gọi 'ST-BHR' liên quan đến mảng nghiệp vụ quản trị nào?",
                options: [
                    "A. Báo cáo học sinh giỏi và khen thưởng",
                    "B. Quản lý hồ sơ - Cảnh báo nâng bậc lương - Đánh giá cán bộ, công chức, viên chức",
                    "C. Biên mục thư viện và mã hóa Cutter",
                    "D. Bảng chấm công tự động qua nhận diện khuôn mặt"
                ],
                answer: 1,
                exp: "<b>ST-BHR</b> (Bureaucracy/Board Human Resources) là Phần mềm Quản lý hồ sơ, Cảnh báo nâng bậc lương tự động qua Email và Đánh giá cán bộ, công chức, viên chức.",
                sourceTitle: "2. Tên Gọi & Mã Viết Tắt"
            },
            {
                id: 8,
                badge: "ST-ETEST",
                q: "Phần mềm nào có chức năng chính là 'Quản lý ngân hàng đề thi trực tuyến' và hỗ trợ trộn đề tổ hợp?",
                options: [
                    "A. ST-EMS",
                    "B. ST-ETEST",
                    "C. EDU",
                    "D. QA"
                ],
                answer: 1,
                exp: "<b>ST-ETEST</b> (E-Test) là Phần mềm Quản lý ngân hàng đề thi trực tuyến Etech, hỗ trợ ma trận đề thi, phát hiện lỗi file Word và trộn đề tổ hợp đa môn.",
                sourceTitle: "2. Tên Gọi & Mã Viết Tắt"
            },
            {
                id: 9,
                badge: "ST-EMS",
                q: "Cụm từ 'ST-EMS' là viết tắt của ứng dụng nào?",
                options: [
                    "A. Educational Examination Management Software",
                    "B. Educational Management System (Quản lý giáo dục & Dạy học trực tuyến)",
                    "C. Emergency Medical System in Schools",
                    "D. Enterprise Resource Management System"
                ],
                answer: 1,
                exp: "<b>ST-EMS</b> là Educational Management System - Phần mềm Quản lý giáo dục và Dạy học trực tuyến, tích hợp lớp học ảo Meeting Online và bài giảng SCORM.",
                sourceTitle: "2. Tên Gọi & Mã Viết Tắt"
            },
            {
                id: 10,
                badge: "HRS vs ST-BHR",
                q: "Phần mềm 'HRS' khác gì với 'ST-BHR' trong nhóm quản lý nhân sự?",
                options: [
                    "A. HRS quản lý thư viện; ST-BHR quản lý điểm số.",
                    "B. HRS chuyên sâu về Quản lý nhân sự, tiền lương và dự toán chi trả lương; ST-BHR tập trung vào hồ sơ, cảnh báo nâng lương và biểu mẫu 2C.",
                    "C. HRS chỉ dành cho học sinh; ST-BHR dành cho giáo viên.",
                    "D. Hai phần mềm hoàn toàn giống nhau."
                ],
                answer: 1,
                exp: "<b>HRS</b> (Human Resource System) tập trung vào tính lương chi tiết và lập dự toán chi trả lương. <b>ST-BHR</b> tập trung vào quản lý lý lịch hồ sơ 2C/HS02 và cảnh báo nâng lương ngạch bậc.",
                sourceTitle: "2. Tên Gọi & Mã Viết Tắt"
            },
            {
                id: 11,
                badge: "ST-CEMS",
                q: "Mã phần mềm 'ST-CEMS' viết tắt của tên tiếng Việt đầy đủ nào?",
                options: [
                    "A. Phần mềm Quản lý cơ sở vật chất và thiết bị trường học",
                    "B. Phần mềm Đánh giá chuẩn hiệu trưởng, chuẩn nghề nghiệp giáo viên",
                    "C. Phần mềm Cam kết chất lượng giáo dục mầm non",
                    "D. Phần mềm Cấp phát chỉ tiêu tuyển sinh"
                ],
                answer: 1,
                exp: "<b>ST-CEMS</b> là Phần mềm Đánh giá chuẩn hiệu trưởng, chuẩn nghề nghiệp giáo viên, có tính năng đặc thù là thống kê và gợi ý danh sách giáo viên cốt cán địa phương.",
                sourceTitle: "2. Tên Gọi & Mã Viết Tắt"
            },
            {
                id: 12,
                badge: "ST-LIB",
                q: "Phần mềm 'ST-LIB' đại diện cho giải pháp nào của STTech?",
                options: [
                    "A. Thư viện số & Quản lý thư viện trường học",
                    "B. Lịch công tác và Bán hàng trực tuyến",
                    "C. Luân chuyển hồ sơ công văn",
                    "D. Lớp học tương tác thông minh"
                ],
                answer: 0,
                exp: "<b>ST-LIB</b> (Library Management System) là Thư viện số & Quản lý thư viện trường học, có tính năng đọc sách 3D, biên mục Cutter/DDC và liên thông tự đánh giá thư viện TT 16.",
                sourceTitle: "2. Tên Gọi & Mã Viết Tắt"
            },
            {
                id: 13,
                badge: "ST-KPI",
                q: "Phần mềm nào có tên gọi gắn liền với 'Nghị định 90/2020/NĐ-CP' và 'Nghị định 48/2023/NĐ-CP' về đánh giá hiệu suất?",
                options: [
                    "A. ST-KPI",
                    "B. ST-LIB",
                    "C. ST-AMS",
                    "D. EDIS"
                ],
                answer: 0,
                exp: "<b>ST-KPI</b> là Phần mềm Đánh giá xếp loại chất lượng tập thể và cá nhân công chức, viên chức theo Nghị định 90/2020 và Nghị định 48/2023.",
                sourceTitle: "2. Tên Gọi & Mã Viết Tắt"
            },
            {
                id: 14,
                badge: "QA",
                q: "Tên viết tắt 'QA' trong bảng danh mục sản phẩm STTech đại diện cho phần mềm nào?",
                options: [
                    "A. Phần mềm Quản lý kho tàng (Quality Administration)",
                    "B. Phần mềm Kiểm định chất lượng giáo dục (Quality Assurance)",
                    "C. Phần mềm Quản lý tài chính (Quantitative Analysis)",
                    "D. Phần mềm Hỏi đáp tự động (Question & Answer)"
                ],
                answer: 1,
                exp: "<b>QA</b> viết tắt từ <i>Quality Assurance</i> - Phần mềm Kiểm định chất lượng giáo dục trong các cơ sở giáo dục.",
                sourceTitle: "2. Tên Gọi & Mã Viết Tắt"
            },
            {
                id: 15,
                badge: "EDU",
                q: "Cổng thông tin tích hợp 'Trợ lý AI' tự động tư vấn thủ tục hành chính và công khai giáo dục theo TT 09/2024 có tên là gì?",
                options: [
                    "A. ST-EMS",
                    "B. EDU (EduPortal AI)",
                    "C. DTI",
                    "D. ST-LIB"
                ],
                answer: 1,
                exp: "<b>EDU (EduPortal AI)</b> là Cổng thông tin điện tử Giáo dục, tích hợp Trợ lý AI giải đáp tuyển sinh, học bạ số và công khai 5 nội dung theo Thông tư 09/2024/TT-BGDĐT.",
                sourceTitle: "2. Tên Gọi & Mã Viết Tắt"
            },
            {
                id: 16,
                badge: "ST-DMS",
                q: "Nếu sếp hỏi: 'Phần mềm nào xử lý quy trình cấp bản sao bằng tốt nghiệp trực tuyến đáp ứng Dịch vụ công mức 3-4?', bạn sẽ trả lời mã phần mềm nào?",
                options: [
                    "A. ST-AMS",
                    "B. ST-DMS",
                    "C. EDIS",
                    "D. ST-SMS"
                ],
                answer: 1,
                exp: "Đó là <b>ST-DMS</b>. Phân hệ Cấp bản sao trực tuyến của ST-DMS cho phép người dân đăng ký hồ sơ trực tuyến, Phòng GD&ĐT tự động duyệt cấp số và trả kết quả qua Email.",
                sourceTitle: "2. Tên Gọi & Mã Viết Tắt"
            },
            {
                id: 17,
                badge: "TMIS vs CEMS",
                q: "Điểm biệt định rõ nhất giữa 'ST-TMIS' và 'ST-CEMS' là gì?",
                options: [
                    "A. ST-TMIS gộp chung quy trình đánh giá Chuẩn nghề nghiệp VÀ Đánh giá công chức/viên chức theo NĐ 90; còn ST-CEMS tập trung chuyên sâu Chuẩn hiệu trưởng/Chuẩn nhà giáo.",
                    "B. ST-TMIS dành cho học sinh; ST-CEMS dành cho phụ huynh.",
                    "C. ST-TMIS là phần mềm quản lý học phí; ST-CEMS là phần mềm quản lý xe bus.",
                    "D. Hai phần mềm hoàn toàn giống hệt nhau về mọi chức năng."
                ],
                answer: 0,
                exp: "<b>ST-TMIS</b> có phạm vi rộng hơn khi tích hợp cả đánh giá Chuẩn nghề nghiệp nhà giáo (TT 14,20,25,26) lẫn Đánh giá công chức/viên chức theo Nghị định 90. <b>ST-CEMS</b> chuyên sâu về Chuẩn nhà giáo & quy hoạch GV cốt cán.",
                sourceTitle: "2. Tên Gọi & Mã Viết Tắt"
            },
            {
                id: 18,
                badge: "ST-AMS",
                q: "Tên gọi 'Admission Management System' tương ứng với mã viết tắt nào?",
                options: [
                    "A. ST-AMS",
                    "B. ST-EMS",
                    "C. ST-DMS",
                    "D. ST-SMS"
                ],
                answer: 0,
                exp: "<b>ST-AMS</b> chính là <i>Admission Management System</i> - Hệ thống Quản lý tuyển sinh đầu cấp.",
                sourceTitle: "2. Tên Gọi & Mã Viết Tắt"
            },
            {
                id: 19,
                badge: "ST-LIB",
                q: "Phần mềm nào hỗ trợ 'Biên mục DDC/Cutter' và 'Đọc sách 3D lật trang'?",
                options: [
                    "A. ST-LIB",
                    "B. ST-EMS",
                    "C. EDIS",
                    "D. ST-ETEST"
                ],
                answer: 0,
                exp: "Đó là <b>ST-LIB</b> (Thư viện số & Quản lý thư viện trường học).",
                sourceTitle: "2. Tên Gọi & Mã Viết Tắt"
            },
            {
                id: 20,
                badge: "DTI",
                q: "Hệ thống nào thực hiện đánh giá Chuyển đổi số theo quy trình 4 bước (Tự đánh giá -> Thẩm định -> Công nhận -> Đồng bộ CSDL Bộ)?",
                options: [
                    "A. DTI",
                    "B. QA",
                    "C. ST-KPI",
                    "D. EDIS"
                ],
                answer: 0,
                exp: "Đó là <b>DTI</b> (Hệ thống Đánh giá chuyển đổi số ngành Giáo dục).",
                sourceTitle: "2. Tên Gọi & Mã Viết Tắt"
            },
            {
                id: 21,
                badge: "ST-SMS",
                q: "Mã phần mềm 'ST-SMS' viết tắt từ cụm từ tiếng Anh nào?",
                options: [
                    "A. Short Message Service",
                    "B. Storage Management System",
                    "C. School Management Software",
                    "D. Student Monitoring System"
                ],
                answer: 1,
                exp: "Trong hệ sinh thái STTech, <b>ST-SMS</b> là <i>Storage Management System</i> - Phần mềm Quản lý hồ sơ lưu trữ.",
                sourceTitle: "2. Tên Gọi & Mã Viết Tắt"
            },
            {
                id: 22,
                badge: "ST-BHR",
                q: "Phần mềm nào tự động cảnh báo danh sách cán bộ đến hạn nâng lương qua Email cho cấp quản lý?",
                options: [
                    "A. ST-BHR",
                    "B. HRS",
                    "C. ST-KPI",
                    "D. ST-TMIS"
                ],
                answer: 0,
                exp: "Đó là tính năng cốt lõi của <b>ST-BHR</b> (Phần mềm Quản lý hồ sơ – Cảnh báo nâng bậc lương).",
                sourceTitle: "2. Tên Gọi & Mã Viết Tắt"
            },
            {
                id: 23,
                badge: "ST-KPI",
                q: "Để chấm điểm đánh giá hiệu suất công việc cán bộ theo Nghị định 90/2020 và hiển thị Dashboard biểu đồ tròn tỷ lệ xếp loại, ta dùng phần mềm nào?",
                options: [
                    "A. ST-KPI",
                    "B. ST-LIB",
                    "C. ST-AMS",
                    "D. ST-EMS"
                ],
                answer: 0,
                exp: "Đó là <b>ST-KPI</b> (Phần mềm Đánh giá xếp loại chất lượng tập thể và cá nhân công chức, viên chức).",
                sourceTitle: "2. Tên Gọi & Mã Viết Tắt"
            },
            {
                id: 24,
                badge: "EDIS",
                q: "Hệ thống nào có chức năng bóc tách siêu dữ liệu (Metadata) tự động bằng công nghệ OCR và ký số bản sao điện tử?",
                options: [
                    "A. EDIS",
                    "B. ST-SMS",
                    "C. ST-DMS",
                    "D. DTI"
                ],
                answer: 0,
                exp: "Đó là <b>EDIS</b> (Hệ thống số hóa & Quản lý dữ liệu hồ sơ lưu trữ).",
                sourceTitle: "2. Tên Gọi & Mã Viết Tắt"
            },
            {
                id: 25,
                badge: "ST-ETEST",
                q: "Phần mềm 'ST-ETEST' phục vụ chính cho đối tượng và công việc nào?",
                options: [
                    "A. Học sinh đăng ký tuyển sinh lớp 1",
                    "B. Cán bộ quản lý thư viện mượn trả sách",
                    "C. Giáo viên & Chuyên môn tạo ngân hàng câu hỏi, ma trận đề thi và trộn đề thi",
                    "D. Kế toán tính lương và lập dự toán chi trả"
                ],
                answer: 2,
                exp: "<b>ST-ETEST</b> phục vụ giáo viên và cán bộ chuyên môn xây dựng ngân hàng câu hỏi, tạo ma trận đề thi và xuất đề thi tổ hợp.",
                sourceTitle: "2. Tên Gọi & Mã Viết Tắt"
            },
            {
                id: 26,
                badge: "ST-LIB",
                q: "Sản phẩm nào liên thông trực tiếp dữ liệu lượt mượn/đọc sách vào Báo cáo tự đánh giá đạt chuẩn theo Thông tư 16/2022/TT-BGDĐT?",
                options: [
                    "A. ST-LIB",
                    "B. ST-DMS",
                    "C. DTI",
                    "D. QA"
                ],
                answer: 0,
                exp: "<b>ST-LIB</b> tích hợp sẵn phân hệ Đánh giá thư viện đạt chuẩn, tự động lấy số liệu liên thông từ phân hệ quản lý mượn/trả sách.",
                sourceTitle: "2. Tên Gọi & Mã Viết Tắt"
            },
            {
                id: 27,
                badge: "HRS",
                q: "Tên tiếng Việt của 'HRS' là gì?",
                options: [
                    "A. Phần mềm Quản lý nhân sự, quản lý tiền lương và dự toán chi trả lương",
                    "B. Hệ thống Đánh giá công chức viên chức hàng năm",
                    "C. Phần mềm Cảnh báo nghỉ hưu và nâng ngạch",
                    "D. Hệ thống Lưu trữ hồ sơ cán bộ ngành giáo dục"
                ],
                answer: 0,
                exp: "<b>HRS</b> (Human Resource System) là Phần mềm Quản lý nhân sự, quản lý tiền lương và dự toán chi trả lương.",
                sourceTitle: "2. Tên Gọi & Mã Viết Tắt"
            },
            {
                id: 28,
                badge: "DTI",
                q: "Hệ thống nào giúp Phòng GD&ĐT tự động thẩm định chỉ số Chuyển đổi số của các trường mầm non theo Quyết định 3276/QĐ-BGDĐT?",
                options: [
                    "A. DTI",
                    "B. ST-EMS",
                    "C. QA",
                    "D. ST-AMS"
                ],
                answer: 0,
                exp: "<b>DTI</b> quản lý bộ tiêu chí CĐS cấp mầm non theo QĐ 3276/QĐ-BGDĐT.",
                sourceTitle: "2. Tên Gọi & Mã Viết Tắt"
            },
            {
                id: 29,
                badge: "ST-EMS",
                q: "Phần mềm 'ST-EMS' cung cấp tính năng nổi bật nào cho việc giảng dạy trực tuyến?",
                options: [
                    "A. In phích cá biệt và Sổ cá biệt",
                    "B. Lớp học ảo Meeting Online (bảng trắng, điểm danh tự động, quay bài giảng)",
                    "C. Rà soát danh sách học sinh trúng tuyển đầu cấp",
                    "D. In sổ gốc văn bằng tốt nghiệp"
                ],
                answer: 1,
                exp: "<b>ST-EMS</b> tích hợp lớp học ảo Meeting Online hỗ trợ tương tác thời gian thực, bảng trắng, điểm danh tự động và quay bài giảng.",
                sourceTitle: "2. Tên Gọi & Mã Viết Tắt"
            },
            {
                id: 30,
                badge: "STTech Toàn Diện",
                q: "Tổng cộng trong Bức tranh tổng thể Hệ sinh thái STTech có bao nhiêu phần mềm/giải pháp cốt lõi?",
                options: [
                    "A. 10 phần mềm",
                    "B. 12 phần mềm",
                    "C. 15 phần mềm",
                    "D. 20 phần mềm"
                ],
                answer: 2,
                exp: "Hệ sinh thái STTech bao gồm đầy đủ <b>15 phần mềm/giải pháp</b> chia làm 4 trụ cột nghiệp vụ.",
                sourceTitle: "2. Tên Gọi & Mã Viết Tắt"
            }
        ]
    },

    quiz3: {
        id: "quiz3",
        title: "3. Cặp Đôi Dễ Nhầm Lẫn",
        category: "Phân Biệt Cặp Đôi Tính Năng",
        icon: "fa-code-compare",
        color: "#c084fc",
        description: "Đối đầu phân biệt các cặp sản phẩm có tên gọi hoặc nghiệp vụ tương đồng trong Hệ sinh thái STTech.",
        questions: [
            {
                id: 1,
                badge: "ST-TMIS vs ST-CEMS",
                q: "Một Sở GD&ĐT muốn dùng phần mềm vừa đánh giá Chuẩn nghề nghiệp nhà giáo (TT 14,20,25,26) vừa đánh giá xếp loại Công chức/Viên chức theo Nghị định 90 trong CÙNG MỘT HỆ THỐNG. Đâu là lựa chọn chính xác?",
                options: [
                    "A. ST-CEMS - Vì phần mềm này chuyên về chuẩn nhà giáo.",
                    "B. ST-TMIS - Vì phần mềm này hợp nhất cả đánh giá Chuẩn nghề nghiệp VÀ Nghị định 90.",
                    "C. Cả hai phần mềm đều không có tính năng này.",
                    "D. ST-BHR - Vì quản lý lý lịch cán bộ."
                ],
                answer: 1,
                exp: "<b>ST-TMIS</b> hợp nhất cả 2 quy trình: Đánh giá Chuẩn nghề nghiệp nhà giáo VÀ Đánh giá CCVC theo Nghị định 90. Trong khi <b>ST-CEMS</b> tập trung chuyên sâu vào Chuẩn nhà giáo và quy hoạch Cán bộ/Giáo viên cốt cán.",
                sourceTitle: "3. Cặp Đôi Dễ Nhầm Lẫn"
            },
            {
                id: 2,
                badge: "ST-BHR vs HRS",
                q: "Điểm biệt định rõ nhất về mặt nghiệp vụ tài chính giữa ST-BHR và HRS là gì?",
                options: [
                    "A. ST-BHR quản lý hồ sơ lý lịch mẫu 2C và cảnh báo nâng lương; còn HRS đi sâu vào tính lương chi tiết và lập dự toán quỹ lương.",
                    "B. ST-BHR dành cho doanh nghiệp tư nhân; HRS dành cho cơ quan nhà nước.",
                    "C. ST-BHR tính lương theo giờ; HRS tính lương theo tháng.",
                    "D. Hai phần mềm là một, chỉ khác tên theo phiên bản năm phát hành."
                ],
                answer: 0,
                exp: "<b>ST-BHR</b> quản lý hồ sơ lý lịch, quá trình công tác, cảnh báo ngạch bậc lương/nghỉ hưu. <b>HRS</b> là hệ thống quản trị nhân sự tài chính chuyên sâu tính toán chi tiết bảng lương và lập dự toán chi trả lương.",
                sourceTitle: "3. Cặp Đôi Dễ Nhầm Lẫn"
            },
            {
                id: 3,
                badge: "ST-SMS vs EDIS",
                q: "Nếu đơn vị cần giải pháp bóc tách dữ liệu văn bản bằng công nghệ OCR, kiểm định chất lượng QC gắt gao và ký số xác thực bản sao pháp lý, họ phải chọn phần mềm nào?",
                options: [
                    "A. ST-SMS - Vì là phần mềm quản lý lưu trữ.",
                    "B. EDIS - Vì đây là Hệ thống số hóa chuyên sâu tích hợp OCR, QC và ký số xác thực.",
                    "C. ST-DMS - Vì quản lý văn bằng.",
                    "D. DTI - Vì đánh giá chuyển đổi số."
                ],
                answer: 1,
                exp: "<b>EDIS</b> là hệ thống số hóa chuyên sâu (OCR, QC, Ký số bản sao điện tử). <b>ST-SMS</b> là phần mềm quản lý kho lưu trữ (cây Kho -> Kệ -> Phông -> Hộp và quy trình mượn trả).",
                sourceTitle: "3. Cặp Đôi Dễ Nhầm Lẫn"
            },
            {
                id: 4,
                badge: "DTI vs QA",
                q: "Cơ quan muốn đánh giá mức độ Số hóa và Chuyển đổi số toàn ngành theo bộ tiêu chí QĐ 3806/4725/3276 sẽ chọn DTI hay QA?",
                options: [
                    "A. QA - Vì QA là Kiểm định chất lượng.",
                    "B. DTI - Vì DTI là Hệ thống Đánh giá Chuyển đổi số ngành Giáo dục.",
                    "C. Chọn phần mềm nào cũng như nhau.",
                    "D. EDU (EduPortal AI)."
                ],
                answer: 1,
                exp: "<b>DTI</b> (Digital Transformation Index) phục vụ Đánh giá Mức độ Chuyển đổi số ngành giáo dục. <b>QA</b> (Quality Assurance) phục vụ Kiểm định chất lượng giáo dục trường học.",
                sourceTitle: "3. Cặp Đôi Dễ Nhầm Lẫn"
            },
            {
                id: 5,
                badge: "ST-EMS vs ST-ETEST",
                q: "Trường học muốn tổ chức Lớp học ảo trực tuyến Meeting Online tích hợp Google Meet và quản lý bài giảng SCORM thì dùng phần mềm nào?",
                options: [
                    "A. ST-ETEST - Vì tạo bài kiểm tra.",
                    "B. ST-EMS - Vì là Hệ thống Quản lý giáo dục & Dạy học trực tuyến.",
                    "C. EDIS - Vì lưu trữ file.",
                    "D. ST-AMS - Vì hỗ trợ học sinh."
                ],
                answer: 1,
                exp: "<b>ST-EMS</b> cung cấp môi trường LMS/LCMS, lớp học ảo Meeting Online và quản lý bài giảng SCORM. <b>ST-ETEST</b> chuyên sâu về Ngân hàng câu hỏi, ma trận đề thi và trộn đề tổ hợp.",
                sourceTitle: "3. Cặp Đôi Dễ Nhầm Lẫn"
            },
            {
                id: 6,
                badge: "ST-AMS vs ST-DMS",
                q: "Hai phần mềm ST-AMS và ST-DMS dễ gây nhầm lẫn do đuôi 'MS'. Phân định đối tượng và đầu ra nghiệp vụ của từng phần mềm như thế nào?",
                options: [
                    "A. ST-AMS xử lý học sinh đầu vào (Tuyển sinh đầu cấp); ST-DMS xử lý học sinh đầu ra (Quản lý văn bằng chứng chỉ & Sổ gốc).",
                    "B. ST-AMS quản lý bằng cấp; ST-DMS quản lý tuyển sinh.",
                    "C. ST-AMS dành cho cấp Đại học; ST-DMS dành cho mầm non.",
                    "D. Cả hai phần mềm đều quản lý tài chính trường học."
                ],
                answer: 0,
                exp: "<b>ST-AMS</b> (Admission MS) quản lý <i>ĐẦU VÀO</i> - Tuyển sinh mầm non, tiểu học, THCS. <b>ST-DMS</b> (Diploma MS) quản lý <i>ĐẦU RA</i> - Xét tốt nghiệp, sổ gốc, phôi bằng và cấp bản sao trực tuyến.",
                sourceTitle: "3. Cặp Đôi Dễ Nhầm Lẫn"
            },
            {
                id: 7,
                badge: "EDU vs DTI",
                q: "Điểm khác biệt chính giữa Cổng EDU (EduPortal AI) và Hệ thống DTI là gì?",
                options: [
                    "A. EDU là Cổng thông tin giao tiếp công khai (có Trợ lý AI, TT 09/2024); DTI là Hệ thống đánh giá chấm điểm chỉ số Chuyển đổi số nội bộ ngành.",
                    "B. EDU dùng cho Phòng GD; DTI dùng cho Học sinh.",
                    "C. EDU để thi trắc nghiệm; DTI để quản lý thư viện.",
                    "D. Hai phần mềm hoàn toàn giống nhau."
                ],
                answer: 0,
                exp: "<b>EDU</b> là Cổng thông tin điện tử công khai tích hợp Trợ lý AI giao tiếp công chúng. <b>DTI</b> là hệ thống chấm điểm thẩm định chỉ số Chuyển đổi số 4 bước của ngành.",
                sourceTitle: "3. Cặp Đôi Dễ Nhầm Lẫn"
            },
            {
                id: 8,
                badge: "ST-LIB vs ST-SMS",
                q: "Thủ thư trường học quản lý sách, mã phân loại DDC/Cutter và lượt đọc sách 3D sẽ dùng ST-LIB hay ST-SMS?",
                options: [
                    "A. ST-SMS - Vì quản lý lưu trữ.",
                    "B. ST-LIB - Vì đây là Phần mềm Quản lý Thư viện trường học.",
                    "C. EDIS - Vì số hóa tài liệu.",
                    "D. DTI - Vì chuyển đổi số."
                ],
                answer: 1,
                exp: "<b>ST-LIB</b> dành cho Thư viện trường học (sách, tạp chí, biên mục DDC/Cutter, sách 3D). <b>ST-SMS</b> dành cho Lưu trữ lịch sử hành chính cơ quan (hồ sơ, công văn, cây kho/kệ/phông/hộp).",
                sourceTitle: "3. Cặp Đôi Dễ Nhầm Lẫn"
            },
            {
                id: 9,
                badge: "ST-KPI vs ST-BHR",
                q: "Nếu ban thi đua muốn lấy điểm đánh giá hiệu suất công việc định kỳ theo Nghị định 90 & NĐ 48, họ chọn ST-KPI hay ST-BHR?",
                options: [
                    "A. ST-BHR - Vì quản lý nhân sự.",
                    "B. ST-KPI - Vì là Phần mềm Đánh giá xếp loại chất lượng KPI theo Nghị định 90 & NĐ 48.",
                    "C. ST-SMS - Vì lưu hồ sơ.",
                    "D. ST-LIB - Vì đánh giá thư viện."
                ],
                answer: 1,
                exp: "<b>ST-KPI</b> chuyên trách chấm điểm tiêu chí hiệu suất KPI theo NĐ 90 & NĐ 48. <b>ST-BHR</b> quản lý thông tin lý lịch cá nhân, khen thưởng/kỷ luật và đếm ngược thời gian nâng lương.",
                sourceTitle: "3. Cặp Đôi Dễ Nhầm Lẫn"
            },
            {
                id: 10,
                badge: "ST-TMIS vs ST-CEMS",
                q: "Tính năng 'Tự động thống kê và gợi ý danh sách cán bộ/giáo viên gần đủ điều kiện thành Giáo viên cốt cán' thuộc về phần mềm nào?",
                options: [
                    "A. ST-TMIS",
                    "B. ST-CEMS",
                    "C. ST-KPI",
                    "D. ST-BHR"
                ],
                answer: 1,
                exp: "Đây là tính năng độc quyền nổi bật của <b>ST-CEMS</b> phục vụ công tác quy hoạch phát triển đội ngũ nhà giáo cốt cán tại địa phương.",
                sourceTitle: "3. Cặp Đôi Dễ Nhầm Lẫn"
            },
            {
                id: 11,
                badge: "ST-DMS vs EDIS",
                q: "Khi dân xin cấp bản sao Bằng tốt nghiệp THCS qua Cổng Dịch vụ công, phần mềm nào sẽ thụ lý duyệt sổ gốc và trả kết quả?",
                options: [
                    "A. EDIS",
                    "B. ST-DMS",
                    "C. ST-SMS",
                    "D. ST-AMS"
                ],
                answer: 1,
                exp: "<b>ST-DMS</b> xử lý nghiệp vụ Cấp bản sao từ sổ gốc trực tuyến Mức 3-4. <b>EDIS</b> là công cụ quét số hóa đầu vào cho kho tư liệu.",
                sourceTitle: "3. Cặp Đôi Dễ Nhầm Lẫn"
            },
            {
                id: 12,
                badge: "ST-ETEST vs ST-EMS",
                q: "Giáo viên muốn tạo đề thi xáo trộn câu hỏi theo 'Phương pháp tổ hợp' đánh giá năng lực học sinh sẽ thao tác trên phần mềm nào?",
                options: [
                    "A. ST-EMS",
                    "B. ST-ETEST",
                    "C. EDU",
                    "D. DTI"
                ],
                answer: 1,
                exp: "Kỹ thuật tạo ma trận và trộn đề thi tổ hợp đa môn là tính năng cốt lõi của <b>ST-ETEST</b>.",
                sourceTitle: "3. Cặp Đôi Dễ Nhầm Lẫn"
            },
            {
                id: 13,
                badge: "ST-AMS vs ST-EMS",
                q: "Phụ huynh đăng ký cho con vào lớp 1 theo đúng địa bàn tuyến Thôn/Xóm sẽ dùng ST-AMS hay ST-EMS?",
                options: [
                    "A. ST-EMS - Vì học trực tuyến.",
                    "B. ST-AMS - Vì đây là Phần mềm Quản lý tuyển sinh đầu cấp.",
                    "C. ST-DMS - Vì cấp hồ sơ.",
                    "D. EDU - Vì tra cứu điểm."
                ],
                answer: 1,
                exp: "<b>ST-AMS</b> hỗ trợ phụ huynh nộp hồ sơ tuyển sinh đầu cấp trực tuyến và phân tuyến theo địa bàn thôn/ấp.",
                sourceTitle: "3. Cặp Đôi Dễ Nhầm Lẫn"
            },
            {
                id: 14,
                badge: "ST-BHR vs ST-TMIS",
                q: "Tính năng xuất Sơ yếu lý lịch chuẩn biểu mẫu 2C/HS02 của Bộ Nội vụ thuộc về phần mềm nào?",
                options: [
                    "A. ST-TMIS",
                    "B. ST-BHR",
                    "C. ST-KPI",
                    "D. HRS"
                ],
                answer: 1,
                exp: "<b>ST-BHR</b> chuyên trách trích xuất hồ sơ cán bộ công chức theo mẫu 2C/HS02.",
                sourceTitle: "3. Cặp Đôi Dễ Nhầm Lẫn"
            },
            {
                id: 15,
                badge: "ST-LIB vs QA",
                q: "Thủ thư muốn xuất Báo cáo tự đánh giá Thư viện đạt chuẩn theo Thông tư 16/2022/TT-BGDĐT sẽ chọn ST-LIB hay QA?",
                options: [
                    "A. QA - Vì QA đánh giá kiểm định.",
                    "B. ST-LIB - Vì ST-LIB tích hợp sẵn Phân hệ Đánh giá thư viện đạt chuẩn theo TT 16.",
                    "C. DTI - Vì đánh giá số.",
                    "D. EDIS - Vì lưu kho."
                ],
                answer: 1,
                exp: "<b>ST-LIB</b> tích hợp sẵn phân hệ Đánh giá thư viện đạt chuẩn Thông tư 16 và tự động lấy minh chứng từ lượt mượn trả.",
                sourceTitle: "3. Cặp Đôi Dễ Nhầm Lẫn"
            },
            {
                id: 16,
                badge: "ST-SMS vs ST-DMS",
                q: "Phần mềm nào quản lý theo cây thư mục phân cấp 'Kho -> Giá/Kệ -> Phông -> Hộp -> Hồ sơ'?",
                options: [
                    "A. ST-DMS",
                    "B. ST-SMS",
                    "C. EDIS",
                    "D. ST-LIB"
                ],
                answer: 1,
                exp: "Đó là mô hình lưu trữ chuẩn Cây phân cấp của <b>ST-SMS</b> (Storage Management System).",
                sourceTitle: "3. Cặp Đôi Dễ Nhầm Lẫn"
            },
            {
                id: 17,
                badge: "HRS vs ST-KPI",
                q: "Phần mềm nào lập dự toán ngân sách chi trả lương hàng năm cho toàn bộ cán bộ viên chức trong đơn vị?",
                options: [
                    "A. ST-KPI",
                    "B. HRS",
                    "C. ST-BHR",
                    "D. ST-TMIS"
                ],
                answer: 1,
                exp: "<b>HRS</b> (Human Resource System) phụ trách dự toán quỹ lương và quản lý chi tiết bảng lương.",
                sourceTitle: "3. Cặp Đôi Dễ Nhầm Lẫn"
            },
            {
                id: 18,
                badge: "EDIS vs DTI",
                q: "Tính năng tự động đóng gói dữ liệu số hóa theo tiêu chuẩn lưu trữ để truyền sang các hệ thống khác thuộc về phần mềm nào?",
                options: [
                    "A. DTI",
                    "B. EDIS",
                    "C. QA",
                    "D. EDU"
                ],
                answer: 1,
                exp: "Đó là khâu Đóng gói dữ liệu tự động trong quy trình 6 bước của <b>EDIS</b>.",
                sourceTitle: "3. Cặp Đôi Dễ Nhầm Lẫn"
            },
            {
                id: 19,
                badge: "EDU vs ST-EMS",
                q: "Trợ lý AI trả lời tự động thắc mắc về tuyển sinh và học bạ số nằm trên giải pháp nào?",
                options: [
                    "A. ST-EMS",
                    "B. EDU (EduPortal AI)",
                    "C. ST-AMS",
                    "D. ST-ETEST"
                ],
                answer: 1,
                exp: "<b>EduPortal AI (EDU)</b> tích hợp Trợ lý AI giải đáp thắc mắc thủ tục hành chính công khai.",
                sourceTitle: "3. Cặp Đôi Dễ Nhầm Lẫn"
            },
            {
                id: 20,
                badge: "ST-KPI vs ST-CEMS",
                q: "Phần mềm nào chấm điểm đánh giá cả TẬP THỂ phòng ban lẫn CÁ NHÂN công chức?",
                options: [
                    "A. ST-CEMS - Vì đánh giá giáo viên.",
                    "B. ST-KPI - Vì là Phần mềm Đánh giá xếp loại chất lượng tập thể và cá nhân.",
                    "C. ST-LIB - Vì đánh giá thư viện.",
                    "D. ST-ETEST - Vì chấm điểm thi."
                ],
                answer: 1,
                exp: "<b>ST-KPI</b> thực hiện Đánh giá xếp loại chất lượng cho cả TẬP THỂ đơn vị và CÁ NHÂN công chức/viên chức.",
                sourceTitle: "3. Cặp Đôi Dễ Nhầm Lẫn"
            }
        ]
    },

    quiz4: {
        id: "quiz4",
        title: "4. Mạng Lưới Liên Thông",
        category: "Mạng Lưới Liên Thông & Luồng Dữ Liệu",
        icon: "fa-network-wired",
        color: "#34d399",
        description: "Phân tích luồng dữ liệu trao đổi nội bộ giữa 15 phần mềm và tích hợp với CSDL Bộ GD&ĐT.",
        questions: [
            {
                id: 1,
                badge: "Liên Thông ST-LIB",
                q: "Dữ liệu mượn/trả sách và lượt đọc thực tế trong phần mềm Thư viện số ST-LIB được liên thông trực tiếp sang phân hệ nào để giảm bớt thao tác thủ công cho thủ thư?",
                options: [
                    "A. Tự động chuyển thành dữ liệu điểm thi trong ST-EMS",
                    "B. Tự động tổng hợp số liệu vào Báo cáo tự đánh giá Thư viện đạt chuẩn theo Thông tư 16/2022/TT-BGDĐT",
                    "C. Tự động gửi cảnh báo nâng lương sang ST-BHR",
                    "D. Tự động đồng bộ lên phôi bằng tốt nghiệp trong ST-DMS"
                ],
                answer: 1,
                exp: "<b>Liên thông ST-LIB:</b> Phân hệ Đánh giá thư viện đạt chuẩn tự động lấy số liệu lượt mượn/đọc sách thực tế từ Quản lý mượn/trả để điền trực tiếp vào minh chứng báo cáo Thông tư 16.",
                sourceTitle: "4. Mạng Lưới Liên Thông"
            },
            {
                id: 2,
                badge: "EDIS -> ST-SMS",
                q: "Luồng dữ liệu xử lý hồ sơ giữa phần mềm Số hóa EDIS và Phần mềm Lưu trữ ST-SMS diễn ra theo trình tự chuẩn nào sau đây?",
                options: [
                    "A. Quét hồ sơ giấy -> Bóc tách OCR & Tạo Metadata -> Kiểm duyệt QC -> Ký số xác thực -> Đóng gói dữ liệu -> Đẩy vào Kho lưu trữ điện tử ST-SMS",
                    "B. Lập phiếu mượn ST-SMS -> In phôi bằng EDIS -> Ký số -> Tiêu hủy file scan",
                    "C. Nhập thủ công Excel -> Đẩy thẳng vào ST-SMS -> Chạy OCR sau khi cho mượn",
                    "D. Quét OCR -> Xóa file ảnh -> Đẩy sang ST-LIB biên mục"
                ],
                answer: 0,
                exp: "<b>Luồng EDIS -> ST-SMS:</b> EDIS quét tài liệu, bóc tách OCR siêu dữ liệu, duyệt QC, ký số bản sao pháp lý rồi tự động đóng gói tích hợp thẳng vào Kho lưu trữ dùng chung ST-SMS.",
                sourceTitle: "4. Mạng Lưới Liên Thông"
            },
            {
                id: 3,
                badge: "Đồng Bộ DTI",
                q: "Kết quả đánh giá Mức độ Chuyển đổi số từ các Trường mầm non, Phổ thông và Phòng GD&ĐT trên hệ thống DTI được liên thông dữ liệu về đâu?",
                options: [
                    "A. Chỉ lưu trữ nội bộ máy tính của Hiệu trưởng",
                    "B. Đồng bộ liên thông trực tiếp lên Cơ sở dữ liệu của Bộ Giáo dục & Đào tạo và CSDL Quốc gia",
                    "C. Chuyển thành ngân hàng câu hỏi cho phần mềm ST-ETEST",
                    "D. Tự động in bằng khen trên phần mềm ST-DMS"
                ],
                answer: 1,
                exp: "<b>Đồng bộ DTI:</b> Bước 4 trong quy trình 4 bước của DTI là công bố kết quả toàn ngành và tự động đồng bộ dữ liệu báo cáo lên CSDL của Bộ GD&ĐT.",
                sourceTitle: "4. Mạng Lưới Liên Thông"
            },
            {
                id: 4,
                badge: "Kế Thừa TMIS / KPI",
                q: "Tính năng 'Kết chuyển dữ liệu sang năm làm việc tiếp theo' trong phần mềm ST-TMIS và ST-KPI có ý nghĩa luồng dữ liệu như thế nào?",
                options: [
                    "A. Tự động nhân đôi điểm đánh giá của tất cả cán bộ năm cũ",
                    "B. Kế thừa toàn bộ danh mục, tiêu chí, cấu hình quy trình từ năm trước giúp người dùng không phải khởi tạo lại từ đầu",
                    "C. Xóa sạch dữ liệu năm cũ để giải phóng dung lượng máy chủ",
                    "D. Tự động gửi báo cáo kỷ luật cán bộ sang phần mềm ST-BHR"
                ],
                answer: 1,
                exp: "<b>Kế thừa dữ liệu TMIS/KPI:</b> Tính năng chuyển năm giúp kề thừa dữ liệu tiêu chí, mẫu báo cáo và cấu hình phòng ban năm học cũ sang năm mới, giảm 90% thời gian nhập liệu.",
                sourceTitle: "4. Mạng Lưới Liên Thông"
            },
            {
                id: 5,
                badge: "Phân Tuyến ST-AMS",
                q: "Trong phần mềm Quản lý tuyển sinh đầu cấp ST-AMS, dữ liệu phân tuyến địa bàn được liên thông từ cấp nào xuống cấp nào?",
                options: [
                    "A. Phân tuyến chi tiết từ 3 cấp hành chính (Tỉnh/Huyện/Xã) xuống tận Thôn, Ấp, Tổ dân phố, Khu phố để phân bổ chỉ tiêu cho từng trường",
                    "B. Chỉ phân tuyến theo quận/huyện, không quản lý được cấp xã",
                    "C. Phụ huynh tự điền trường bất kỳ mà không cần dữ liệu phân tuyến",
                    "D. Liên thông từ CSDL Ngân hàng để thu tiền học phí"
                ],
                answer: 0,
                exp: "<b>Dữ liệu địa bàn ST-AMS:</b> ST-AMS cho phép cấu hình phân tuyến chuẩn xác đến từng Tổ dân phố/Thôn/Ấp, liên thông chỉ tiêu tuyển sinh chính xác cho từng nhà trường đúng tuyến.",
                sourceTitle: "4. Mạng Lưới Liên Thông"
            },
            {
                id: 6,
                badge: "EduPortal AI",
                q: "Trợ lý AI (EduPortal AI) trên Cổng thông tin CĐS EDU liên kết và tự động trích xuất dữ liệu từ các nguồn nào để giải đáp cho người dân?",
                options: [
                    "A. Chỉ đọc file PDF tải lên từ máy cá nhân",
                    "B. Tích hợp dữ liệu Công khai giáo dục (TT 09/2024), Học bạ số, Cổng Dịch vụ công Quốc gia và Cổng Thông tin Chính phủ",
                    "C. Lấy dữ liệu bài giảng trực tuyến từ ST-EMS",
                    "D. Lấy ma trận đề thi từ ST-ETEST"
                ],
                answer: 1,
                exp: "<b>Tích hợp EduPortal AI (EDU):</b> Trợ lý AI kết nối dữ liệu liên thông với Cổng DVCQG, CTTCP, dữ liệu Học bạ số và nội dung công khai TT 09/2024 để trả lời thủ tục hành chính.",
                sourceTitle: "4. Mạng Lưới Liên Thông"
            },
            {
                id: 7,
                badge: "Luồng ST-EMS",
                q: "Dữ liệu điểm thi, bài làm trắc nghiệm và lịch sử học tập của học sinh trên lớp học ảo Meeting Online (ST-EMS) được luân chuyển ra sao?",
                options: [
                    "A. Bị xóa ngay sau khi kết thúc buổi học trực tuyến",
                    "B. Tự động tổng hợp vào hệ thống theo dõi tiến độ học tập, lưu vết tham gia và gửi báo cáo kết quả cho Giáo viên & Phụ huynh",
                    "C. Chuyển thành hồ sơ mượn sách trong ST-LIB",
                    "D. Đẩy sang phần mềm HRS để tính lương cho học sinh"
                ],
                answer: 1,
                exp: "<b>Luồng dữ liệu ST-EMS:</b> Kết quả bài tập, điểm danh tự động và tiến độ học bài giảng SCORM được tự động ghi nhận vào CSDL theo dõi cá nhân của học sinh.",
                sourceTitle: "4. Mạng Lưới Liên Thông"
            },
            {
                id: 8,
                badge: "Sổ Gốc ST-DMS",
                q: "Dữ liệu 'Sổ gốc điện tử' trong phần mềm Quản lý văn bằng chứng chỉ ST-DMS giữ vai trò luồng dữ liệu trung tâm nào?",
                options: [
                    "A. Làm dữ liệu đầu vào để in phôi bằng, duyệt cấp bản sao trực tuyến level 3-4 và phục vụ cổng tra cứu xác thực QR code chống văn bằng giả",
                    "B. Dùng để xếp lịch công tác tuần cho Phòng Giáo dục",
                    "C. Dùng để làm ngân hàng câu hỏi thi trắc nghiệm",
                    "D. Dùng để chấm điểm Chuyển đổi số DTI"
                ],
                answer: 0,
                exp: "<b>Trung tâm dữ liệu ST-DMS:</b> Sổ gốc điện tử lưu trữ vĩnh viễn thông tin tốt nghiệp, là căn cứ để tự động duyệt cấp bản sao trực tuyến và đối soát tra cứu QR minh bạch.",
                sourceTitle: "4. Mạng Lưới Liên Thông"
            },
            {
                id: 9,
                badge: "Đồng Bộ ST-ETEST",
                q: "Phần mềm Ngân hàng đề thi ST-ETEST xử lý luồng dữ liệu câu hỏi giữa máy tính cá nhân của giáo viên và server dùng chung như thế nào?",
                options: [
                    "A. Bắt buộc giáo viên phải luôn có mạng Internet mới soạn được câu hỏi",
                    "B. Cho phép giáo viên làm việc Offline trên CSDL máy cá nhân, sau đó sử dụng tính năng 'Đồng bộ CSDL' để đẩy dữ liệu lên Server Phòng/Sở hoặc tải dữ liệu về",
                    "C. Chỉ cho phép nhập dữ liệu từ file ảnh chụp hand-written",
                    "D. Tự động xóa câu hỏi trên máy cá nhân sau khi đẩy lên server"
                ],
                answer: 1,
                exp: "<b>Đồng bộ CSDL ST-ETEST:</b> ST-ETEST hỗ trợ mô hình linh hoạt: Giáo viên soạn thảo Offline nội bộ, sau đó đồng bộ kết nối liên thông với CSDL ngân hàng câu hỏi trung tâm.",
                sourceTitle: "4. Mạng Lưới Liên Thông"
            },
            {
                id: 10,
                badge: "Cảnh Báo ST-BHR",
                q: "Dữ liệu hồ sơ cán bộ công chức (Sơ yếu lý lịch 2C/HS02) trong phần mềm ST-BHR được kết nối với hệ thống Email quản lý ra sao?",
                options: [
                    "A. Người quản lý phải tự tra sổ giấy hàng ngày",
                    "B. Hệ thống tự động quét mốc thời gian nâng lương/nghỉ hưu và tự động phát cảnh báo kèm danh sách qua Email đến cấp quản lý",
                    "C. Tự động gửi Email thông báo điểm số cho học sinh",
                    "D. Không có tính năng kết nối Email"
                ],
                answer: 1,
                exp: "<b>Luồng cảnh báo ST-BHR:</b> ST-BHR liên thông dữ liệu thời gian nâng ngạch bậc với dịch vụ Mail Server để tự động gửi thông báo chủ động đến cấp quản lý khi đến hạn.",
                sourceTitle: "4. Mạng Lưới Liên Thông"
            },
            {
                id: 11,
                badge: "HRS & ST-BHR",
                q: "Giữa phần mềm Quản lý nhân sự HRS và phần mềm Hồ sơ cán bộ ST-BHR có sự chia sẻ luồng dữ liệu nghiệp vụ nào?",
                options: [
                    "A. Dữ liệu quá trình đóng BHXH và ngạch bậc lương từ hồ sơ nhân sự được HRS kế thừa để tính bảng lương chi tiết và lập dự toán quỹ lương",
                    "B. HRS tự động lấy ngân hàng đề thi từ ST-ETEST để kiểm tra nhân sự",
                    "C. ST-BHR lấy dữ liệu mượn sách từ ST-LIB để trừ lương cán bộ",
                    "D. Hai phần mềm sử dụng hai định dạng dữ liệu hoàn toàn xung đột không thể chia sẻ"
                ],
                answer: 0,
                exp: "<b>Liên thông HRS & ST-BHR:</b> Thông tin ngạch bậc, hệ số lương và biến động nhân sự từ hồ sơ cán bộ được chuyển giao sang HRS để tính lương và lập dự toán ngân sách chi trả.",
                sourceTitle: "4. Mạng Lưới Liên Thông"
            },
            {
                id: 12,
                badge: "Cây Dữ Liệu ST-SMS",
                q: "Hệ thống Quản lý lưu trữ ST-SMS tổ chức luồng dữ liệu kho lưu trữ theo mô hình cây phân cấp nào?",
                options: [
                    "A. Tỉnh -> Huyện -> Xã -> Thôn",
                    "B. Cơ quan lưu trữ -> Kho lưu trữ -> Kệ/Giá lưu trữ -> Phông lưu trữ -> Hộp hồ sơ -> Hồ sơ/Văn bản",
                    "C. Trường học -> Lớp học -> Học sinh -> Bài tập",
                    "D. Thư viện -> DDC -> Cutter -> Khổ sách"
                ],
                answer: 1,
                exp: "<b>Cây dữ liệu ST-SMS:</b> Luồng quản lý kho của ST-SMS tổ chức hình cây linh hoạt: Kho -> Kệ/Giá -> Phông -> Hộp -> Hồ sơ, giúp định vị chính xác vị trí tài liệu vật lý & số hóa.",
                sourceTitle: "4. Mạng Lưới Liên Thông"
            },
            {
                id: 13,
                badge: "OCR EDIS",
                q: "Công nghệ OCR trong phần mềm EDIS đoạt vai trò gì trong chuỗi chuyển đổi luồng dữ liệu?",
                options: [
                    "A. Chuyển file nhạc MP3 thành video bài giảng",
                    "B. Tự động quét và nhận dạng văn bản ảnh scan, bóc tách thông tin thành Siêu dữ liệu (Metadata) chuẩn hóa để truy xuất siêu tốc",
                    "C. Tự động dịch tài liệu sang 50 ngôn ngữ",
                    "D. Chuyển bài thi trắc nghiệm thành danh sách trúng tuyển lớp 1"
                ],
                answer: 1,
                exp: "<b>Vai trò OCR trong EDIS:</b> OCR chuyển đổi dữ liệu phi cấu trúc (file ảnh scan) thành dữ liệu có cấu trúc (Metadata), tạo nền tảng cho việc tìm kiếm từ khóa siêu tốc.",
                sourceTitle: "4. Mạng Lưới Liên Thông"
            },
            {
                id: 14,
                badge: "Đánh Giá TMIS / CEMS",
                q: "Phân hệ 'Đánh giá, xếp loại' trong phần mềm ST-TMIS và ST-CEMS luân chuyển dữ liệu phiếu tự đánh giá như thế nào?",
                options: [
                    "A. Giáo viên in ra giấy, nộp tay cho Trưởng bộ môn",
                    "B. Kết quả tự đánh giá và minh chứng được tự động đẩy liên thông lên tài khoản cấp trên (Tổ trưởng/BGH/Phòng GD) để thực hiện chấm điểm & xếp loại trực tuyến",
                    "C. Tự động gửi công khai lên mạng xã hội Facebook",
                    "D. Bắt buộc phải lưu vào đĩa CD gửi bưu điện"
                ],
                answer: 1,
                exp: "<b>Luân chuyển đánh giá TMIS/CEMS:</b> Phiếu tự đánh giá kèm minh chứng trực tuyến được tự động chuyển tiếp lên cấp quản lý trực tiếp duyệt, tạo quy trình làm việc không giấy tờ.",
                sourceTitle: "4. Mạng Lưới Liên Thông"
            },
            {
                id: 15,
                badge: "Quy Trình DTI",
                q: "Trình tự dữ liệu 4 bước trong Hệ thống Đánh giá chuyển đổi số DTI diễn ra theo đúng thứ tự nào?",
                options: [
                    "A. Kiểm tra -> Tự đánh giá -> Công bố -> Công nhận",
                    "B. Bước 1: CSGD Tự đánh giá -> Bước 2: Phòng/Sở Kiểm tra & Thẩm định -> Bước 3: Hội đồng Sở Công nhận -> Bước 4: Toàn ngành Công bố & Đồng bộ CSDL",
                    "C. Công nhận -> Tự đánh giá -> Thẩm định -> Lưu kho",
                    "D. Nhập minh chứng -> In bằng khen -> Báo cáo Bộ -> Kiểm tra"
                ],
                answer: 1,
                exp: "<b>Quy trình 4 bước DTI:</b> Đúng trình tự pháp lý: 1. Đơn vị tự chấm & nộp minh chứng -> 2. Cấp trên thẩm định online -> 3. Hội đồng công nhận xếp loại Mức 1-2-3 -> 4. Công bố & Đồng bộ CSDL.",
                sourceTitle: "4. Mạng Lưới Liên Thông"
            },
            {
                id: 16,
                badge: "Dịch Vụ ST-AMS",
                q: "Tính năng nào trong phần mềm ST-AMS giúp giảm tải việc đi lại và tập trung đông người tại các trường học vào mùa tuyển sinh?",
                options: [
                    "A. Tự động gửi Email xác nhận đăng ký thành công kèm mã hồ sơ và Lịch hẹn làm việc trực tuyến/trực tiếp",
                    "B. Yêu cầu phụ huynh xếp hàng lấy số thứ tự từ 4 giờ sáng",
                    "C. Bắt buộc phụ huynh nộp học phí 3 năm trước khi đăng ký",
                    "D. Cho phép học sinh tự thi trắc nghiệm xếp lớp tại nhà"
                ],
                answer: 0,
                exp: "<b>Dịch vụ ST-AMS:</b> Hệ thống tự động gửi Email tiếp nhận thành công và cấp Lịch hẹn làm việc giãn cách, giúp nhà trường chủ động thời gian đón tiếp phụ huynh.",
                sourceTitle: "4. Mạng Lưới Liên Thông"
            },
            {
                id: 17,
                badge: "SSO & Phân Quyền",
                q: "Trong Hệ sinh thái phần mềm STTech, tính năng 'Phân quyền đa tầng & Đăng nhập một lần (SSO)' mang lại giá trị vận hành nào?",
                options: [
                    "A. Giúp người dùng đăng nhập 1 tài khoản có thể di chuyển an toàn giữa các phần mềm theo đúng thẩm quyền được giao mà không phải nhớ nhiều mật khẩu",
                    "B. Bắt buộc người dùng đổi mật khẩu 5 phút một lần",
                    "C. Cho phép người ngoài tự do truy cập vào CSDL bảo mật của Sở",
                    "D. Giảm giá thành mua phần mềm"
                ],
                answer: 0,
                exp: "<b>Hạ tầng SSO & Phân quyền:</b> Giúp chuẩn hóa tài khoản người dùng toàn ngành, đảm bảo an toàn bảo mật dữ liệu và tạo trải nghiệm làm việc liền mạch.",
                sourceTitle: "4. Mạng Lưới Liên Thông"
            },
            {
                id: 18,
                badge: "Biên Mục DDC / Cutter",
                q: "Dữ liệu biên mục sách theo chuẩn quốc tế DDC và mã Cutter trong ST-LIB giúp các nhà trường đạt được điều gì?",
                options: [
                    "A. Giúp học sinh tự động thuộc lòng nội dung cuốn sách",
                    "B. Chuẩn hóa CSDL thư viện theo chuẩn quốc gia/quốc tế, tạo tiền đề để kết nối chia sẻ thư viện dùng chung giữa các trường trong toàn huyện/tỉnh",
                    "C. Tự động thanh lý sách cũ mà không cần kiểm kê",
                    "D. Chuyển toàn bộ sách in thành tài liệu thi ETEST"
                ],
                answer: 1,
                exp: "<b>Chuẩn hóa ST-LIB:</b> Áp dụng DDC và Cutter giúp chuẩn hóa CSDL sách, giúp các trường dễ dàng liên thông kho học liệu số dùng chung trên cùng hệ thống.",
                sourceTitle: "4. Mạng Lưới Liên Thông"
            },
            {
                id: 19,
                badge: "Minh Chứng QA",
                q: "Phần mềm Kiểm định chất lượng giáo dục QA thu thập luồng dữ liệu minh chứng từ đâu?",
                options: [
                    "A. Tự động kết nối và trích xuất minh chứng số hóa từ các phần mềm thành phần trong trường (ST-LIB, ST-EMS, ST-AMS, ST-BHR...) để lập Báo cáo Tự đánh giá KĐCLGD",
                    "B. Bắt buộc cán bộ tự viết tay toàn bộ báo cáo",
                    "C. Lấy dữ liệu từ các trang báo mạng ngẫu nhiên",
                    "D. Chỉ thu thập dữ liệu về tài chính"
                ],
                answer: 0,
                exp: "<b>Thu thập minh chứng QA:</b> QA đóng vai trò trung tâm tổng hợp minh chứng từ tất cả các phân hệ nghiệp vụ trường học để lập hồ sơ kiểm định chất lượng giáo dục.",
                sourceTitle: "4. Mạng Lưới Liên Thông"
            },
            {
                id: 20,
                badge: "Dashboard Điều Hành",
                q: "Bảng tổng quan Dashboard trên các phần mềm như ST-SMS, ST-KPI, ST-BHR hay DTI cung cấp luồng thông tin nào cho Lãnh đạo?",
                options: [
                    "A. Chỉ hiển thị văn bản chữ thuần túy không có con số",
                    "B. Thống kê trực quan qua biểu đồ thời gian thực, chỉ số tổng hợp, tỷ lệ phần trăm và danh sách cảnh báo giúp Lãnh đạo ra quyết định chỉ đạo tức thời",
                    "C. Dự báo thời tiết địa phương",
                    "D. Cho phép Lãnh đạo chơi game giải trí"
                ],
                answer: 1,
                exp: "<b>Dashboard điều hành:</b> Màn hình Dashboard tổng quan hợp nhất dữ liệu thành các biểu đồ sinh động (hình tròn, cột, xu hướng), giúp Lãnh đạo nắm bắt tình hình tức thời.",
                sourceTitle: "4. Mạng Lưới Liên Thông"
            }
        ]
    },

    quiz5: {
        id: "quiz5",
        title: "5. Tình Huống Khách Hàng",
        category: "Tình Huống Thực Tế & Tư Vấn Khách Hàng",
        icon: "fa-briefcase",
        color: "#fbbf24",
        description: "Rèn luyện phản xạ tư vấn giải pháp chuyển đổi số cho Sở, Phòng và các cấp trường học.",
        questions: [
            {
                id: 1,
                badge: "Tình huống 1 - Hành chính công & Bằng cấp",
                q: "Người dân gửi phản ánh lên Phòng GD&ĐT về việc bị thất lạc Bằng tốt nghiệp THCS từ 10 năm trước và muốn xin cấp lại Bản sao cấp tốc mà không thể đi lại trực tiếp. Bạn nên tư vấn Phòng GD&ĐT sử dụng giải pháp nào?",
                options: [
                    "A. Dùng ST-AMS để tra cứu thông tin học sinh và cấp lại sổ gốc.",
                    "B. Dùng ST-DMS phân hệ Cấp bản sao trực tuyến level 3-4 để người dân gửi yêu cầu qua web, hệ thống tự duyệt, cấp số vào sổ và gửi kết quả qua Email.",
                    "C. Dùng EDIS để số hóa lại toàn bộ bằng cấp của trường cũ.",
                    "D. Dùng ST-SMS để xuất phiếu mượn tài liệu giấy cho người dân."
                ],
                answer: 1,
                exp: "<b>ST-DMS</b> tích hợp Cổng Cấp bản sao trực tuyến (Hành chính công Mức độ 3-4). Người dân đăng ký trực tuyến, hệ thống tự cấp số vào sổ duy nhất và trả kết quả/giấy xác nhận qua Email mà không cần đến trực tiếp.",
                sourceTitle: "5. Tình Huống Khách Hàng"
            },
            {
                id: 2,
                badge: "Tình huống 2 - Đánh giá năng lực Khảo thí",
                q: "Một trường THPT muốn tổ chức kỳ thi thử tốt nghiệp kết hợp 3 môn Lý - Hóa - Sinh trong cùng 1 đề thi tổ hợp theo định hướng đánh giá năng lực của Bộ GD&ĐT. Hệ thống nào đáp ứng chuẩn xác tính năng này?",
                options: [
                    "A. ST-EMS phân hệ Quản lý bài học trực tuyến.",
                    "B. ST-ETEST với kỹ thuật 'Trộn đề theo phương pháp tổ hợp' đa môn và xây dựng ma trận kiến thức.",
                    "C. QA phân hệ Quản lý đề kiểm định.",
                    "D. EDU phân hệ Kho học liệu số."
                ],
                answer: 1,
                exp: "<b>ST-ETEST</b> sở hữu kỹ thuật trộn đề độc đáo theo phương pháp tổ hợp, cho phép ghép câu hỏi nhiều môn học/chuyên đề vào 1 đề thi tổ hợp duy nhất để đánh giá năng lực học sinh.",
                sourceTitle: "5. Tình Huống Khách Hàng"
            },
            {
                id: 3,
                badge: "Tình huống 3 - Tuyển sinh & Phân tuyến",
                q: "Trưởng phòng GD&ĐT muốn giải quyết bài toán dồn hồ sơ tuyển sinh lớp 1 vào các trường trung tâm bằng cách phân tuyến chính xác theo từng 'Tổ, Thôn, Ấp, Xóm' của địa bàn. Phần mềm nào hỗ trợ cấu hình địa giới 3 cấp chi tiết đến tận xóm/thôn?",
                options: [
                    "A. ST-DMS",
                    "B. ST-AMS",
                    "C. DTI",
                    "D. ST-BHR"
                ],
                answer: 1,
                exp: "<b>ST-AMS</b> (Tuyển sinh đầu cấp) quản lý danh mục địa giới 3 cấp chi tiết đến tận Khu phố/Tổ/Thôn/Ấp/Xóm, giúp phân tuyến chính xác học sinh đúng tuyến theo từng địa bàn nhỏ nhất.",
                sourceTitle: "5. Tình Huống Khách Hàng"
            },
            {
                id: 4,
                badge: "Tình huống 4 - Quản lý & Cảnh báo Nhân sự",
                q: "Trưởng phòng Tổ chức Cán bộ phản ánh thường xuyên bị sót thời hạn nâng bậc lương ngạch bậc của cán bộ khiến phát sinh khiếu nại thi đua. Bạn đề xuất phần mềm nào để giải quyết triệt để vấn đề này?",
                options: [
                    "A. HRS để tính tự động quỹ lương.",
                    "B. ST-BHR với tính năng cài đặt thời gian cảnh báo và tự động gửi Email thông báo danh sách cán bộ đến hạn nâng lương về cấp quản lý.",
                    "C. ST-KPI để hạ điểm thi đua của cán bộ trễ hạn.",
                    "D. ST-TMIS để lập biên bản họp xét nâng lương."
                ],
                answer: 1,
                exp: "<b>ST-BHR</b> có phân hệ Cảnh báo đến hạn nâng lương chuyên biệt: Cấu hình thời gian báo trước, quét danh sách tự động và gửi cảnh báo trực tiếp về Email của Lãnh đạo/Quản lý.",
                sourceTitle: "5. Tình Huống Khách Hàng"
            },
            {
                id: 5,
                badge: "Tình huống 5 - Đánh giá Chuyển đổi số Cấp mầm non",
                q: "Một Phòng GD&ĐT cần thẩm định online mức độ Chuyển đổi số của 20 trường Mầm non trên địa bàn theo Quyết định 3276/QĐ-BGDĐT. Bạn hãy chọn phần mềm thực hiện quy trình này:",
                options: [
                    "A. QA",
                    "B. DTI (Hệ thống Đánh giá Chuyển đổi số ngành Giáo dục)",
                    "C. ST-CEMS",
                    "D. EDIS"
                ],
                answer: 1,
                exp: "<b>DTI</b> quản lý bộ tiêu chí CĐS riêng cho Mầm non theo QĐ 3276/QĐ-BGDĐT, cho phép trường Tự đánh giá -> Phòng Thẩm định -> Sở Công nhận trực tuyến.",
                sourceTitle: "5. Tình Huống Khách Hàng"
            },
            {
                id: 6,
                badge: "Tình huống 6 - Thư viện số & Tiêu chuẩn TT 16",
                q: "Nhà trường muốn xây dựng Thư viện đạt chuẩn theo Thông tư 16/2022/TT-BGDĐT, vừa hỗ trợ học sinh đọc sách 3D lật trang vừa tự động liên thông dữ liệu lượt mượn sách vào báo cáo minh chứng. Giải pháp là gì?",
                options: [
                    "A. ST-SMS",
                    "B. ST-LIB",
                    "C. EDIS",
                    "D. EDU"
                ],
                answer: 1,
                exp: "<b>ST-LIB</b> tích hợp trọn gói: Thư viện số đọc sách 3D, Quản lý biên mục Cutter/DDC và Phân hệ Đánh giá thư viện đạt chuẩn tự động lấy số liệu liên thông từ mượn/trả sách.",
                sourceTitle: "5. Tình Huống Khách Hàng"
            },
            {
                id: 7,
                badge: "Tình huống 7 - Số hóa Hồ sơ Lưu trữ Pháp lý",
                q: "Sở GD&ĐT có hàng ngàn hồ sơ giấy cũ cần chuyển thành dữ liệu số có giá trị pháp lý, tự động bóc tách thông tin bằng công nghệ OCR mà không mất thời gian gõ tay. Bạn chọn hệ thống nào?",
                options: [
                    "A. ST-SMS",
                    "B. EDIS",
                    "C. ST-DMS",
                    "D. DTI"
                ],
                answer: 1,
                exp: "<b>EDIS</b> là giải pháp số hóa chuyên sâu áp dụng OCR tự động bóc tách siêu dữ liệu (Metadata), kiểm định QC gắt gao và Ký số xác thực bản sao điện tử đảm bảo giá trị pháp lý.",
                sourceTitle: "5. Tình Huống Khách Hàng"
            },
            {
                id: 8,
                badge: "Tình huống 8 - Quản lý Kho tài liệu Vật lý",
                q: "Lưu trữ viên của Phòng GD&ĐT cần một công cụ quản lý chính xác tài liệu giấy đang nằm ở Kho nào, Giá/Kệ nào, Hộp số mấy và duyệt phiếu mượn tài liệu trực tuyến. Phần mềm phù hợp nhất là:",
                options: [
                    "A. EDIS",
                    "B. ST-SMS",
                    "C. ST-LIB",
                    "D. ST-BHR"
                ],
                answer: 1,
                exp: "<b>ST-SMS</b> (Storage Management System) quản lý mô hình kho cây phân cấp (Kho -> Kệ/Giá -> Phông -> Hộp -> Hồ sơ) và quy trình lập/duyệt phiếu mượn tài liệu trực tuyến.",
                sourceTitle: "5. Tình Huống Khách Hàng"
            },
            {
                id: 9,
                badge: "Tình huống 9 - Đánh giá Cán bộ & Quy hoạch Cốt cán",
                q: "Phòng GD&ĐT cần thống kê danh sách các Giáo viên giỏi gần đủ điều kiện để quy hoạch thành đội ngũ 'Giáo viên cốt cán' của huyện dựa trên kết quả đánh giá Chuẩn nghề nghiệp. Phần mềm nào có tính năng này?",
                options: [
                    "A. ST-TMIS",
                    "B. ST-CEMS",
                    "C. ST-KPI",
                    "D. HRS"
                ],
                answer: 1,
                exp: "<b>ST-CEMS</b> có tính năng đặc thù: Thống kê & tự động thông báo danh sách cán bộ quản lý, giáo viên mầm non/phổ thông gần đủ điều kiện để phát triển thành Cán bộ/Giáo viên cốt cán.",
                sourceTitle: "5. Tình Huống Khách Hàng"
            },
            {
                id: 10,
                badge: "Tình huống 10 - Hợp nhất Đánh giá CCVC & Chuẩn nhà giáo",
                q: "Một Hiệu trường muốn dùng 1 phần mềm duy nhất để vừa tự đánh giá Chuẩn nghề nghiệp giáo viên (TT 14,20,25,26) vừa chấm điểm xếp loại công chức/viên chức cuối năm theo Nghị định 90. Bạn tư vấn phần mềm nào?",
                options: [
                    "A. ST-CEMS",
                    "B. ST-TMIS",
                    "C. ST-KPI",
                    "D. QA"
                ],
                answer: 1,
                exp: "<b>ST-TMIS</b> tích hợp cả 2 bộ quy chuẩn trong cùng một hệ thống: Đánh giá Chuẩn nghề nghiệp nhà giáo VÀ Đánh giá công chức, viên chức theo Nghị định 90.",
                sourceTitle: "5. Tình Huống Khách Hàng"
            },
            {
                id: 11,
                badge: "Tình huống 11 - Đánh giá Hiệu suất KPI & Dashboard",
                q: "Lãnh đạo đơn vị muốn xem biểu đồ tròn tỷ lệ xếp loại chất lượng công chức hàng tháng và chấm điểm KPI theo Nghị định 90/2020 & NĐ 48/2023. Giải pháp chuyên biệt là gì?",
                options: [
                    "A. ST-KPI",
                    "B. ST-BHR",
                    "C. HRS",
                    "D. ST-SMS"
                ],
                answer: 0,
                exp: "<b>ST-KPI</b> là phần mềm chuyên biệt đánh giá xếp loại chất lượng CCVC theo NĐ 90 & NĐ 48, trang bị Dashboard trực quan với biểu đồ tròn tỷ lệ và biểu đồ xu hướng thời gian.",
                sourceTitle: "5. Tình Huống Khách Hàng"
            },
            {
                id: 12,
                badge: "Tình huống 12 - Quản lý Dạy học Trực tuyến & Meeting Online",
                q: "Trong đợt thiên tai học sinh phải nghỉ ở nhà, nhà trường cần tổ chức Lớp học trực tuyến trực tiếp có bảng trắng, tự động điểm danh và quay lại bài giảng tích hợp Google Meet. Ứng dụng nào đáp ứng?",
                options: [
                    "A. ST-ETEST",
                    "B. ST-EMS",
                    "C. EDU",
                    "D. DTI"
                ],
                answer: 1,
                exp: "<b>ST-EMS</b> có phân hệ 'Lớp học trực tuyến trực tiếp (Meeting Online)' tích hợp Google Meet, bảng trắng tương tác, tự động điểm danh và quay phim màn hình bài giảng.",
                sourceTitle: "5. Tình Huống Khách Hàng"
            },
            {
                id: 13,
                badge: "Tình huống 13 - Trợ lý AI & Cổng thông tin Công khai",
                q: "Một trường THCS muốn xây dựng Cổng thông tin điện tử công khai 5 nội dung theo Thông tư 09/2024/TT-BGDĐT và tích hợp Trợ lý AI tự động trả lời thắc mắc tuyển sinh cho phụ huynh 24/7. Giải pháp là:",
                options: [
                    "A. ST-EMS",
                    "B. EDU (EduPortal AI)",
                    "C. DTI",
                    "D. ST-AMS"
                ],
                answer: 1,
                exp: "<b>EDU (EduPortal AI)</b> là Cổng thông tin điện tử Giáo dục đáp ứng Thông tư 09/2024, trang bị Trợ lý AI tự động tư vấn thủ tục hành chính, học bạ số và tuyển sinh.",
                sourceTitle: "5. Tình Huống Khách Hàng"
            },
            {
                id: 14,
                badge: "Tình huống 14 - Dự toán Quỹ lương & Tính lương",
                q: "Phòng Kế toán - Nhân sự cần lập dự toán chi trả lương hàng năm và tính toán chi tiết lương ngạch bậc, phụ cấp cho toàn bộ cán bộ công chức. Bạn chọn phần mềm nào?",
                options: [
                    "A. ST-BHR",
                    "B. HRS",
                    "C. ST-KPI",
                    "D. ST-TMIS"
                ],
                answer: 1,
                exp: "<b>HRS</b> (Human Resource System) chuyên sâu về Quản lý nhân sự, tiền lương ngạch bậc và lập dự toán chi trả lương cho đơn vị.",
                sourceTitle: "5. Tình Huống Khách Hàng"
            },
            {
                id: 15,
                badge: "Tình huống 15 - Nhận dạng File Word Đề thi lỗi",
                q: "Giáo viên tải file đề thi Word từ bên ngoài vào hệ thống ra đề, file bị lỗi định dạng câu hỏi. Phần mềm nào có tính năng tự động phát hiện câu lỗi và xuất ra file Word riêng để giáo viên sửa?",
                options: [
                    "A. ST-EMS",
                    "B. ST-ETEST",
                    "C. ST-LIB",
                    "D. EDIS"
                ],
                answer: 1,
                exp: "<b>ST-ETEST</b> có tính năng thông minh: Tự động nhận dạng loại câu hỏi từ file Word, phát hiện các câu sai định dạng và xuất ra file Word lỗi để giáo viên chỉnh sửa nhanh.",
                sourceTitle: "5. Tình Huống Khách Hàng"
            },
            {
                id: 16,
                badge: "Tình huống 16 - In Sổ gốc & Phôi bằng THCS",
                q: "Phòng GD&ĐT thực hiện ghi Sổ gốc tốt nghiệp THCS, cấp số hiệu phôi bằng tự động và hủy phôi cũ đã in sai. Nghiệp vụ này thuộc phân hệ nào của ST-DMS?",
                options: [
                    "A. Quản lý Quy trình Xét tốt nghiệp",
                    "B. Quản lý In văn bằng THCS & Quản lý Phôi bằng",
                    "C. Quản lý Cấp bản sao trực tuyến",
                    "D. Quản lý Sổ gốc cũ"
                ],
                answer: 1,
                exp: "<b>ST-DMS</b> quản lý chặt chẽ vòng đời phôi bằng: Nhập số hiệu bắt đầu, cấp số tự động khi in, xác nhận ghi sổ gốc và quản lý thu hồi/hủy phôi cũ.",
                sourceTitle: "5. Tình Huống Khách Hàng"
            },
            {
                id: 17,
                badge: "Tình huống 17 - Đăng ký Tuyển sinh không cần Tài khoản",
                q: "Phụ huynh học sinh muốn đăng ký tuyển sinh vào lớp 1 trực tuyến mà không muốn tốn thời gian tạo tài khoản đăng nhập phức tạp. Phần mềm nào hỗ trợ đăng ký tự do không cần đăng nhập?",
                options: [
                    "A. ST-AMS",
                    "B. ST-EMS",
                    "C. EDU",
                    "D. DTI"
                ],
                answer: 0,
                exp: "<b>ST-AMS</b> cho phép Phụ huynh đăng ký hồ sơ tuyển sinh trực tuyến nhanh chóng, nhận Email xác nhận và lịch hẹn làm việc mà không bắt buộc tạo tài khoản phức tạp.",
                sourceTitle: "5. Tình Huống Khách Hàng"
            },
            {
                id: 18,
                badge: "Tình huống 18 - Kết xuất Sơ yếu lý lịch Mẫu 2C",
                q: "Cán bộ chuyên trách nhân sự cần xuất ngay bản Sơ yếu lý lịch chuẩn Mẫu 2C/HS02 của Bộ Nội vụ cho 50 cán bộ để nộp Sở. Phần mềm nào hỗ trợ xuất tự động biểu mẫu này?",
                options: [
                    "A. ST-BHR",
                    "B. ST-KPI",
                    "C. ST-TMIS",
                    "D. EDIS"
                ],
                answer: 0,
                exp: "<b>ST-BHR</b> quản lý chi tiết hồ sơ lý lịch và có chức năng tự động kết xuất hồ sơ cán bộ theo biểu mẫu chuẩn quốc gia 2C/HS02.",
                sourceTitle: "5. Tình Huống Khách Hàng"
            },
            {
                id: 19,
                badge: "Tình huống 19 - Kế thừa Báo cáo Tự đánh giá Năm học cũ",
                q: "Khi bắt đầu năm học mới, Chuyên viên không muốn nhập lại từ đầu toàn bộ các tiêu chí đánh giá và danh mục minh chứng của năm trước. Chức năng nào hỗ trợ việc này?",
                options: [
                    "A. Tự động đồng bộ lên CSDL Bộ GD&ĐT",
                    "B. Chuyển dữ liệu / Kết chuyển dữ liệu sang năm làm việc tiếp theo (kế thừa dữ liệu)",
                    "C. Mã hóa minh chứng trực tuyến bằng Blockchain",
                    "D. Import file Excel danh mục từ thư viện"
                ],
                answer: 1,
                exp: "Các phần mềm như <b>ST-TMIS, ST-KPI, ST-CEMS</b> đều tích hợp tính năng 'Chuyển dữ liệu sang năm làm việc tiếp theo', giúp kế thừa dữ liệu báo cáo năm cũ mà không phải làm lại từ đầu.",
                sourceTitle: "5. Tình Huống Khách Hàng"
            },
            {
                id: 20,
                badge: "Tình huống 20 - Tra cứu Ảnh Sổ gốc Bằng cấp cũ",
                q: "Phòng GD&ĐT có các Sổ gốc bằng tốt nghiệp giấy từ năm 1990 đã đính kèm file ảnh quét vào hệ thống. Cán bộ muốn tìm kiếm và trả về chính xác trang ảnh sổ gốc cũ. Phần mềm nào đáp ứng?",
                options: [
                    "A. ST-DMS (Phân hệ Quản lý Sổ gốc cũ & Ảnh sổ gốc)",
                    "B. ST-SMS",
                    "C. EDIS",
                    "D. DTI"
                ],
                answer: 0,
                exp: "<b>ST-DMS</b> có phân hệ Quản lý sổ gốc cũ cho phép đính kèm file ảnh sổ gốc, tìm kiếm theo tên/năm học và trả về trực tiếp trang ảnh sổ gốc để đối soát.",
                sourceTitle: "5. Tình Huống Khách Hàng"
            },
            {
                id: 21,
                badge: "Tình huống 21 - Bóc tách Minh chứng Tự động cho Thư viện",
                q: "Thủ thư không muốn nhập số liệu báo cáo thủ công khi làm kiểm định thư viện. Phân hệ Đánh giá thư viện của ST-LIB lấy minh chứng tự động từ đâu?",
                options: [
                    "A. Tự động lấy số liệu liên thông từ phân hệ Quản lý mượn/trả sách và độc giả",
                    "B. Tự sinh dữ liệu ngẫu nhiên",
                    "C. Lấy dữ liệu từ cổng Dịch vụ công",
                    "D. Lấy từ phần mềm kế toán HRS"
                ],
                answer: 0,
                exp: "<b>ST-LIB</b> liên thông dữ liệu nội bộ: Phân hệ Đánh giá thư viện tự động tổng hợp minh chứng từ thực tế lượt mượn/trả sách và hoạt động đọc sách trên hệ thống.",
                sourceTitle: "5. Tình Huống Khách Hàng"
            },
            {
                id: 22,
                badge: "Tình huống 22 - Đồng bộ Dữ liệu Chuyển đổi số lên Bộ GD&ĐT",
                q: "Sau khi Giám đốc Sở GD&ĐT duyệt kết quả xếp hạng Chuyển đổi số (DTI) toàn tỉnh, dữ liệu cần được truyền lên hệ thống quốc gia. DTI xử lý ra sao?",
                options: [
                    "A. Xuất file PDF gửi bưu điện",
                    "B. Tự động đồng bộ dữ liệu kết quả CĐS lên CSDL của Bộ Giáo dục & Đào tạo",
                    "C. Yêu cầu nhập tay lại trên web của Bộ",
                    "D. Gửi qua Email cho Chánh văn phòng Bộ"
                ],
                answer: 1,
                exp: "<b>DTI</b> ở Bước 4 quy trình có tính năng Công bố & Đồng bộ dữ liệu tự động lên CSDL chung của Bộ Giáo dục & Đào tạo.",
                sourceTitle: "5. Tình Huống Khách Hàng"
            },
            {
                id: 23,
                badge: "Tình huống 23 - Duyệt Mượn Hồ sơ Lưu trữ Theo Thẩm quyền",
                q: "Cán bộ phòng Kế toán gửi yêu cầu mượn Hồ sơ tài chính cũ. Hệ thống cần chuyển yêu cầu này đến Chánh Văn phòng phê duyệt trước khi Lưu trữ viên xuất kho. Quản lý luồng này là:",
                options: [
                    "A. ST-SMS (Phân hệ Cho mượn tài liệu & Phê duyệt trực tuyến)",
                    "B. EDIS",
                    "C. ST-BHR",
                    "D. ST-DMS"
                ],
                answer: 0,
                exp: "<b>ST-SMS</b> hỗ trợ quy trình Cho mượn tài liệu khép kín: Lập phiếu mượn -> Phê duyệt trực tuyến theo thẩm quyền -> Theo dõi thu hồi / Cảnh báo quá hạn.",
                sourceTitle: "5. Tình Huống Khách Hàng"
            },
            {
                id: 24,
                badge: "Tình huống 24 - Đánh giá Kiểm định Chất lượng Cơ sở Giáo dục",
                q: "Một trường Mầm non sắp đón đoàn Đánh giá ngoài về Kiểm định chất lượng giáo dục và công nhận trường đạt chuẩn quốc gia. Phần mềm nào hỗ trợ quy trình tự đánh giá kiểm định này?",
                options: [
                    "A. QA (Phần mềm Kiểm định chất lượng giáo dục)",
                    "B. DTI",
                    "C. ST-CEMS",
                    "D. ST-KPI"
                ],
                answer: 0,
                exp: "<b>QA</b> (Quality Assurance) là giải pháp chuyên biệt phục vụ công tác Kiểm định chất lượng giáo dục và xây dựng trường chuẩn quốc gia.",
                sourceTitle: "5. Tình Huống Khách Hàng"
            },
            {
                id: 25,
                badge: "Tình huống 25 - Hệ sinh thái 15 Sản phẩm STTech",
                q: "Khi báo cáo với Sếp về phương án tư vấn tổng thể cho một Sở Giáo dục & Đào tạo, bạn nên nhóm 15 sản phẩm STTech thành mấy trụ cột chiến lược?",
                options: [
                    "A. 2 nhóm: Phần mềm Trường học và Phần mềm Sở/Phòng",
                    "B. 4 trụ cột: 1) Dạy học & Khảo thí CĐS, 2) Số hóa Nghiệp vụ Nhà trường, 3) Quản lý Nhân sự & Thi đua, 4) Quản lý Hồ sơ Lưu trữ",
                    "C. 6 nhóm theo cấp học từ Mầm non đến THPT",
                    "D. Không cần chia nhóm, giới thiệu lần lượt 15 tên phần mềm"
                ],
                answer: 1,
                exp: "Cấu trúc báo cáo chuẩn mực và chuyên nghiệp nhất là chia 15 sản phẩm thành <b>4 Trụ cột Giải pháp Cốt lõi</b>, giúp Lãnh đạo nắm trọn Bức tranh tổng thể Chuyển đổi số.",
                sourceTitle: "5. Tình Huống Khách Hàng"
            }
        ]
    },

    quiz6: {
        id: "quiz6",
        title: "6. Căn Cứ Pháp Lý Chuyên Sâu",
        category: "Căn Cứ Pháp Lý & Quy Chuẩn",
        icon: "fa-scale-balanced",
        color: "#f472b6",
        description: "Học phần căn cứ pháp lý, thông tư, nghị định và quyết định triển khai các dự án STTech.",
        questions: [
            {
                id: 1,
                badge: "Nghị Định 90 & 48",
                q: "Nghị định 90/2020/NĐ-CP và Nghị định 48/2023/NĐ-CP của Chính phủ là căn cứ pháp lý nền tảng trực tiếp của hai phần mềm nào trong hệ sinh thái STTech?",
                options: [
                    "A. ST-EMS và ST-LIB",
                    "B. ST-KPI và ST-TMIS",
                    "C. ST-AMS và ST-DMS",
                    "D. EDIS và ST-SMS"
                ],
                answer: 1,
                exp: "<b>ST-KPI</b> và <b>ST-TMIS</b> sử dụng trực tiếp khung tiêu chí của Nghị định 90/2020/NĐ-CP (được sửa đổi bởi NĐ 48/2023/NĐ-CP) để đánh giá xếp loại chất lượng cán bộ, công chức, viên chức.",
                sourceTitle: "6. Căn Cứ Pháp Lý Chuyên Sâu"
            },
            {
                id: 2,
                badge: "Thông Tư 14, 20, 25, 26",
                q: "Các Thông tư 14, 20, 25, 26 ban hành năm 2018 của Bộ GD&ĐT quy định về vấn đề gì và áp dụng chính cho hai phần mềm nào?",
                options: [
                    "A. Quy định tiêu chuẩn thư viện trường học -> Áp dụng cho ST-LIB và QA",
                    "B. Quy định chuẩn hiệu trưởng và chuẩn nghề nghiệp giáo viên -> Áp dụng cho ST-CEMS và ST-TMIS",
                    "C. Quy định quản lý dạy học trực tuyến -> Áp dụng cho ST-EMS và ST-ETEST",
                    "D. Quy định công khai giáo dục -> Áp dụng cho EDU và DTI"
                ],
                answer: 1,
                exp: "Các Thông tư 14, 20, 25, 26/2018/TT-BGDĐT quy định về Chuẩn hiệu trưởng mầm non/phổ thông và Chuẩn nghề nghiệp giáo viên, làm cơ sở đánh giá cho <b>ST-CEMS</b> và <b>ST-TMIS</b>.",
                sourceTitle: "6. Căn Cứ Pháp Lý Chuyên Sâu"
            },
            {
                id: 3,
                badge: "Thông Tư 16/2022",
                q: "Thủ thư sử dụng phần mềm ST-LIB để lập báo cáo tự đánh giá 'Thư viện đạt chuẩn' nhằm đáp ứng quy định tại văn bản pháp lý nào?",
                options: [
                    "A. Thông tư 09/2021/TT-BGDĐT",
                    "B. Thông tư 16/2022/TT-BGDĐT",
                    "C. Thông tư 09/2024/TT-BGDĐT",
                    "D. Quyết định 3806/QĐ-BGDĐT"
                ],
                answer: 1,
                exp: "<b>Thông tư 16/2022/TT-BGDĐT</b> quy định tiêu chuẩn thư viện cơ sở giáo dục mầm non và phổ thông. ST-LIB tích hợp sẵn phân hệ đánh giá tự động theo đúng Thông tư này.",
                sourceTitle: "6. Căn Cứ Pháp Lý Chuyên Sâu"
            },
            {
                id: 4,
                badge: "Quyết Định 4725",
                q: "Bộ tiêu chí Đánh giá Chuyển đổi số (DTI) áp dụng cho 'Trường Phổ thông và Cơ sở GDTX' được ban hành theo quyết định nào của Bộ GD&ĐT?",
                options: [
                    "A. Quyết định 3806/QĐ-BGDĐT",
                    "B. Quyết định 4725/QĐ-BGDĐT",
                    "C. Quyết định 3276/QĐ-BGDĐT",
                    "D. Quyết định 1980/QĐ-BGDĐT"
                ],
                answer: 1,
                exp: "Quyết định <b>4725/QĐ-BGDĐT</b> quy định bộ tiêu chí đánh giá chuyển đổi số cho các Trường Phổ thông và Trung tâm GDTX (5 trụ cột - 25 tiêu chí - hơn 100 minh chứng).",
                sourceTitle: "6. Căn Cứ Pháp Lý Chuyên Sâu"
            },
            {
                id: 5,
                badge: "Quyết Định 3806",
                q: "Quyết định 3806/QĐ-BGDĐT ban hành bộ tiêu chí Đánh giá Chuyển đổi số (DTI) dành riêng cho cấp quản lý nào?",
                options: [
                    "A. Cơ sở Giáo dục Mầm non",
                    "B. Trường Đại học & Cao đẳng",
                    "C. Sở Giáo dục & Đào tạo và Phòng Giáo dục & Đào tạo",
                    "D. Trung tâm Giáo dục Nghề nghiệp"
                ],
                answer: 2,
                exp: "Quyết định <b>3806/QĐ-BGDĐT</b> áp dụng bộ tiêu chí CĐS (6 trụ cột - 48 tiêu chí - hơn 140 minh chứng) cho <b>Sở GD&ĐT</b> và <b>Phòng GD&ĐT</b>.",
                sourceTitle: "6. Căn Cứ Pháp Lý Chuyên Sâu"
            },
            {
                id: 6,
                badge: "Thông Tư 09/2024",
                q: "Văn bản pháp lý mới nhất quy định về việc 'Công khai 5 nội dung giáo dục' trên Cổng thông tin điện tử EDU (EduPortal AI) là gì?",
                options: [
                    "A. Thông tư 36/2017/TT-BGDĐT",
                    "B. Thông tư 09/2024/TT-BGDĐT",
                    "C. Thông tư 16/2022/TT-BGDĐT",
                    "D. Nghị định 42/2022/NĐ-CP"
                ],
                answer: 1,
                exp: "<b>Thông tư 09/2024/TT-BGDĐT</b> (thay thế TT 36/2017) quy định công khai 5 nội dung: Đội ngũ nhà giáo, Cơ sở vật chất, Tài chính, Chất lượng giáo dục và Kế hoạch năm học trên Cổng EDU.",
                sourceTitle: "6. Căn Cứ Pháp Lý Chuyên Sâu"
            },
            {
                id: 7,
                badge: "Thông Tư 09/2021",
                q: "Phần mềm ST-EMS tổ chức lớp học trực tuyến, quản lý bài giảng SCORM và kiểm tra đánh giá trực tuyến tuân thủ quy định tại văn bản nào?",
                options: [
                    "A. Thông tư 09/2021/TT-BGDĐT",
                    "B. Thông tư 14/2018/TT-BGDĐT",
                    "C. Nghị định 90/2020/NĐ-CP",
                    "D. Quyết định 4725/QĐ-BGDĐT"
                ],
                answer: 0,
                exp: "<b>Thông tư 09/2021/TT-BGDĐT</b> quy định về quản lý và tổ chức dạy học trực tuyến trong cơ sở giáo dục phổ thông và cơ sở giáo dục thường xuyên.",
                sourceTitle: "6. Căn Cứ Pháp Lý Chuyên Sâu"
            },
            {
                id: 8,
                badge: "Dịch Vụ Công Mức 3-4",
                q: "Cấp bản sao văn bằng chứng chỉ trực tuyến trên phần mềm ST-DMS đáp ứng Dịch vụ công trực tuyến ở mức độ nào theo định hướng Chính phủ số?",
                options: [
                    "A. Mức độ 1 và 2",
                    "B. Mức độ 3 và 4",
                    "C. Chỉ áp dụng lưu trữ nội bộ",
                    "D. Mức độ thử nghiệm"
                ],
                answer: 1,
                exp: "ST-DMS đáp ứng <b>Dịch vụ công trực tuyến Mức độ 3 và 4</b>, cho phép công dân gửi đăng ký hồ sơ xin cấp bản sao trực tuyến và nhận kết quả xác nhận qua Email/Bưu điện.",
                sourceTitle: "6. Căn Cứ Pháp Lý Chuyên Sâu"
            },
            {
                id: 9,
                badge: "Quyết Định 3276",
                q: "Trực quan hóa đánh giá Chuyển đổi số cấp Cơ sở Giáo dục Mầm non trên hệ thống DTI tuân thủ theo quyết định nào?",
                options: [
                    "A. Quyết định 3276/QĐ-BGDĐT",
                    "B. Quyết định 3806/QĐ-BGDĐT",
                    "C. Quyết định 4725/QĐ-BGDĐT",
                    "D. Thông tư 16/2022/TT-BGDĐT"
                ],
                answer: 0,
                exp: "Quyết định <b>3276/QĐ-BGDĐT</b> quy định bộ tiêu chí đánh giá chuyển đổi số áp dụng riêng cho các cơ sở <b>Giáo dục Mầm non</b>.",
                sourceTitle: "6. Căn Cứ Pháp Lý Chuyên Sâu"
            },
            {
                id: 10,
                badge: "Mẫu 2C/HS02",
                q: "Phần mềm ST-BHR xuất bản biểu mẫu Sơ yếu lý lịch chuẩn nào của Bộ Nội vụ phục vụ quản lý hồ sơ cán bộ công chức viên chức?",
                options: [
                    "A. Mẫu 01b-BNV/2008",
                    "B. Mẫu 2C/TCTW-98 và Mẫu 2C/HS02",
                    "C. Mẫu 03/VC-2015",
                    "D. Mẫu Sổ gốc THCS"
                ],
                answer: 1,
                exp: "ST-BHR tự động kết xuất Sơ yếu lý lịch cán bộ chuẩn hóa theo <b>Mẫu 2C/HS02</b> (Bộ Nội vụ) và Mẫu 2C/TCTW-98.",
                sourceTitle: "6. Căn Cứ Pháp Lý Chuyên Sâu"
            },
            {
                id: 11,
                badge: "Ký Số & QC EDIS",
                q: "Điểm cốt lõi giúp file số hóa trên phần mềm EDIS có giá trị pháp lý tương đương bản gốc là nhờ quy trình công nghệ nào?",
                options: [
                    "A. Chuyển file thành dạng ảnh PNG đính kèm",
                    "B. Quy trình QC gắt gao kết hợp Ký số xác thực bản sao điện tử",
                    "C. Nén file zip đặt mật khẩu",
                    "D. Gửi email xác nhận cho thủ thư"
                ],
                answer: 1,
                exp: "EDIS áp dụng quy trình kiểm định chất lượng (QC) gắt gao kết hợp <b>Ký số xác thực bản sao điện tử</b>, đảm bảo giá trị pháp lý của tài liệu lưu trữ.",
                sourceTitle: "6. Căn Cứ Pháp Lý Chuyên Sâu"
            },
            {
                id: 12,
                badge: "DDC / Cutter ST-LIB",
                q: "Đâu là sự khác biệt giữa quy chuẩn phân loại tài liệu của ST-LIB so với các phần mềm lưu trữ văn bản hành chính thông thường?",
                options: [
                    "A. ST-LIB không phân loại tài liệu",
                    "B. ST-LIB áp dụng chuẩn phân loại biên mục DDC và bảng mã Cutter chuẩn thư viện quốc tế",
                    "C. ST-LIB phân loại theo ngày ban hành công văn",
                    "D. ST-LIB chỉ lưu trữ văn bản PDF"
                ],
                answer: 1,
                exp: "ST-LIB chuẩn hóa nghiệp vụ thư viện theo chuẩn phân loại <b>DDC (Dewey Decimal Classification)</b> và <b>bảng mã Cutter</b>, tích hợp biên mục khổ mẫu MARC21.",
                sourceTitle: "6. Căn Cứ Pháp Lý Chuyên Sâu"
            },
            {
                id: 13,
                badge: "Minh Bạch ST-AMS",
                q: "Nghiệp vụ nào trên ST-AMS đảm bảo tính công bằng và minh bạch tối đa trong công tác tuyển sinh đầu cấp theo chỉ đạo của Sở/Phòng GD&ĐT?",
                options: [
                    "A. Phân tuyến tuyển sinh chính xác đến tận khu phố/tổ/thôn/ấp/xóm và Xét tuyển tự động",
                    "B. Cho phép phụ huynh thỏa thuận chỉ tiêu trực tiếp",
                    "C. Tự động cộng điểm cho tất cả học sinh",
                    "D. Thu phí đăng ký qua cổng trung gian"
                ],
                answer: 0,
                exp: "ST-AMS cho phép cấu hình phân tuyến địa bàn tỉ mỉ đến cấp <b>khu phố/tổ/thôn/ấp/xóm</b> và chạy thuật toán <b>xét tuyển tự động</b> theo đúng tiêu chí và chỉ tiêu.",
                sourceTitle: "6. Căn Cứ Pháp Lý Chuyên Sâu"
            },
            {
                id: 14,
                badge: "Quy Trình 4 Bước DTI",
                q: "Quy trình đánh giá Chuyển đổi số (DTI) trên phần mềm được thực hiện qua bao nhiêu bước chuẩn?",
                options: [
                    "A. 2 bước",
                    "B. 3 bước",
                    "C. 4 bước (Tự đánh giá -> Kiểm tra/Thẩm định -> Công nhận -> Công bố & Đồng bộ)",
                    "D. 5 bước"
                ],
                answer: 2,
                exp: "Quy trình DTI chuẩn gồm <b>4 bước</b>: Bước 1 Trường tự đánh giá -> Bước 2 Phòng/Sở thẩm định -> Bước 3 Hội đồng công nhận -> Bước 4 Công bố & Đồng bộ CSDL Bộ GD&ĐT.",
                sourceTitle: "6. Căn Cứ Pháp Lý Chuyên Sâu"
            },
            {
                id: 15,
                badge: "Tự Đánh Giá TT 16",
                q: "Nguồn dữ liệu đánh giá tiêu chí trong phân hệ 'Đánh giá thư viện đạt chuẩn' của ST-LIB được lấy từ đâu để đảm bảo tính khách quan?",
                options: [
                    "A. Người dùng tự gõ số liệu thủ công vào báo cáo",
                    "B. Liên thông tự động trích xuất từ dữ liệu thực tế của phân hệ Quản lý mượn/trả và Thư viện số",
                    "C. Lấy từ kết quả tìm kiếm Google",
                    "D. Nhập ngẫu nhiên từ file Excel"
                ],
                answer: 1,
                exp: "ST-LIB tự động trích xuất số liệu thực tế (lượt mượn, đầu sách, lượt truy cập sách 3D) từ hệ thống để điền vào minh chứng đánh giá thư viện chuẩn.",
                sourceTitle: "6. Căn Cứ Pháp Lý Chuyên Sâu"
            },
            {
                id: 16,
                badge: "Khảo Thí ST-ETEST",
                q: "Tính năng 'Trộn đề theo phương pháp tổ hợp' trong ST-ETEST đáp ứng trực tiếp hướng dẫn khảo thí nào của Bộ GD&ĐT?",
                options: [
                    "A. Hướng dẫn thi học sinh giỏi cấp tỉnh",
                    "B. Định hướng đánh giá năng lực học sinh (kết hợp đa môn trong một đề thi)",
                    "C. Quy chế thi học kỳ tiểu học",
                    "D. Quy định chấm thi tự luận"
                ],
                answer: 1,
                exp: "Trộn đề tổ hợp trên ST-ETEST giúp tạo các bài thi tích hợp liên môn, đáp ứng đúng định hướng <b>đánh giá năng lực</b> toàn diện theo chương trình GDPT mới.",
                sourceTitle: "6. Căn Cứ Pháp Lý Chuyên Sâu"
            },
            {
                id: 17,
                badge: "EDIS & ST-SMS",
                q: "Sự liên thông giữa phần mềm EDIS và ST-SMS được thực hiện theo luồng nghiệp vụ chuẩn nào?",
                options: [
                    "A. EDIS thực hiện bóc tách OCR/Ký số số hóa -> Đóng gói dữ liệu chuyển vào Kho lưu trữ ST-SMS",
                    "B. ST-SMS quét OCR -> Chuyển file cho EDIS in ra giấy",
                    "C. EDIS dùng cho trường học -> ST-SMS dùng cho bệnh viện",
                    "D. Hai phần mềm không có khả năng trao đổi dữ liệu"
                ],
                answer: 0,
                exp: "EDIS đóng vai trò là nhà máy <b>số hóa chuyên sâu</b> (quét, bóc tách OCR, QC, ký số) rồi đóng gói dữ liệu đẩy vào hệ thống <b>Quản lý kho lưu trữ ST-SMS</b>.",
                sourceTitle: "6. Căn Cứ Pháp Lý Chuyên Sâu"
            },
            {
                id: 18,
                badge: "Chuẩn Quốc Gia QA",
                q: "Phần mềm QA (Quality Assurance) trong hệ sinh thái STTech phục vụ cho công tác quy chuẩn nào?",
                options: [
                    "A. Kiểm định chất lượng giáo dục và Đánh giá công nhận trường đạt chuẩn quốc gia",
                    "B. Kiểm tra vệ sinh an toàn thực phẩm bếp ăn",
                    "C. Đánh giá trình độ tiếng Anh giáo viên",
                    "D. Kiểm toán tài chính nhà trường"
                ],
                answer: 0,
                exp: "<b>QA</b> chuyên trách công tác <b>Kiểm định chất lượng giáo dục</b> và tự đánh giá trường đạt chuẩn quốc gia theo các cấp độ quy định.",
                sourceTitle: "6. Căn Cứ Pháp Lý Chuyên Sâu"
            },
            {
                id: 19,
                badge: "Cảnh Báo Lương ST-BHR",
                q: "Cơ sở dữ liệu của phần mềm ST-BHR được thiết kế để theo dõi thông tin ngạch bậc lương và tự động phát phát tín hiệu cảnh báo nào?",
                options: [
                    "A. Cảnh báo cán bộ đi muộn",
                    "B. Cảnh báo tự động khi cán bộ đến hạn nâng bậc lương thường xuyên / trước thời hạn và nâng ngạch",
                    "C. Cảnh báo hết hạn thẻ bảo hiểm xe máy",
                    "D. Cảnh báo thay đổi số điện thoại"
                ],
                answer: 1,
                exp: "ST-BHR tự động quét dữ liệu và <b>gửi Email cảnh báo</b> cho cấp quản lý khi cán bộ đến hạn nâng lương ngạch bậc hoặc mốc nghỉ hưu.",
                sourceTitle: "6. Căn Cứ Pháp Lý Chuyên Sâu"
            },
            {
                id: 20,
                badge: "Mức Độ CĐS DTI",
                q: "Hệ thống DTI phân loại kết quả đánh giá Chuyển đổi số của các đơn vị thành các mức độ nào?",
                options: [
                    "A. Đạt / Không đạt",
                    "B. Mức 1, Mức 2 và Mức 3",
                    "C. Loại Giỏi, Loại Khá, Loại Trung bình",
                    "D. Hạng A, Hạng B, Hạng C, Hạng D"
                ],
                answer: 1,
                exp: "Theo quy định của Bộ GD&ĐT, DTI xếp loại mức độ CĐS của các cơ sở giáo dục theo 3 mức: <b>Mức 1, Mức 2 và Mức 3</b>.",
                sourceTitle: "6. Căn Cứ Pháp Lý Chuyên Sâu"
            },
            {
                id: 21,
                badge: "Sổ Gốc Điện Tử ST-DMS",
                q: "Trong phần mềm ST-DMS, chức năng 'Sổ gốc điện tử' giúp cơ quan quản lý đáp ứng quy chuẩn lưu trữ nào?",
                options: [
                    "A. Cho phép sửa đổi số liệu tốt nghiệp tự do",
                    "B. Lưu trữ vĩnh viễn dữ liệu tốt nghiệp, tích hợp ảnh sổ gốc và phụ lục chỉnh sửa bằng",
                    "C. Tự động xóa sổ gốc sau 5 năm",
                    "D. Chỉ lưu thông tin của học sinh xếp loại giỏi"
                ],
                answer: 1,
                exp: "Sổ gốc điện tử trong ST-DMS bảo tồn vĩnh viễn dữ liệu tốt nghiệp, cho phép đính kèm <b>ảnh chụp sổ gốc lịch sử</b> và quản lý phụ lục chỉnh sửa văn bằng đúng pháp lý.",
                sourceTitle: "6. Căn Cứ Pháp Lý Chuyên Sâu"
            },
            {
                id: 22,
                badge: "Kế Thừa Báo Cáo",
                q: "Tính năng 'Kế thừa dữ liệu sang năm làm việc tiếp theo' có trên cả ST-KPI, ST-TMIS và ST-CEMS mang lại giá trị vận hành gì?",
                options: [
                    "A. Tự động tăng điểm đánh giá năm sau cao hơn năm trước",
                    "B. Giúp chuyển toàn bộ hồ sơ, cấu hình tiêu chí và báo cáo năm cũ sang năm mới để không tốn thời gian nhập lại từ đầu",
                    "C. Tự động xóa dữ liệu năm cũ để giải phóng dung lượng",
                    "D. Nhân đôi số lượng tài khoản cán bộ"
                ],
                answer: 1,
                exp: "Kế thừa dữ liệu giúp đơn vị <b>tiết kiệm 90% thời gian thiết lập</b>, kế thừa cây cơ cấu, danh sách nhân sự và biểu mẫu đánh giá cho năm học mới.",
                sourceTitle: "6. Căn Cứ Pháp Lý Chuyên Sâu"
            },
            {
                id: 23,
                badge: "Dự Toán Quỹ Lương HRS",
                q: "Phần mềm HRS hỗ trợ phòng Kế toán / Tài chính nhà trường đáp ứng nghiệp vụ tài chính - tiền lương nào?",
                options: [
                    "A. In hóa đơn bán hàng canteen",
                    "B. Quản lý chi tiết ngạch bậc lương, phụ cấp, bảo hiểm và Lập dự toán chi trả lương định kỳ",
                    "C. Chấm công theo giờ dạy",
                    "D. Thu tiền học phí qua QRCode"
                ],
                answer: 1,
                exp: "<b>HRS</b> chuyên sâu về quản lý chính sách tiền lương, đóng bảo hiểm, phụ cấp ngành và <b>lập dự toán quỹ lương</b> chính xác.",
                sourceTitle: "6. Căn Cứ Pháp Lý Chuyên Sâu"
            },
            {
                id: 24,
                badge: "Cây Lưu Trữ ST-SMS",
                q: "Mô hình quản lý kho lưu trữ trong phần mềm ST-SMS được cấu trúc theo cây phân cấp tiêu chuẩn nào?",
                options: [
                    "A. Tỉnh -> Huyện -> Xã",
                    "B. Kho lưu trữ -> Kệ/Giá -> Phông lưu trữ -> Hộp hồ sơ -> Hồ sơ -> Văn bản",
                    "C. Lớp -> Khối -> Trường",
                    "D. Thư mục Windows ngẫu nhiên"
                ],
                answer: 1,
                exp: "ST-SMS quản lý chuẩn nghiệp vụ lưu trữ theo cây phân cấp: <b>Kho -> Kệ/Giá -> Phông -> Hộp -> Hồ sơ -> Văn bản</b>.",
                sourceTitle: "6. Căn Cứ Pháp Lý Chuyên Sâu"
            },
            {
                id: 25,
                badge: "Trợ Lý Dịch Vụ Công EDU",
                q: "Hệ thống EduPortal AI (EDU) cập nhật tính năng 'Trợ lý AI' nhằm mục đích gì đối với người dân và phụ huynh?",
                options: [
                    "A. Tự động giải bài tập về nhà cho học sinh",
                    "B. Tự động truy vấn và tư vấn thông tin tuyển sinh đầu cấp, tra cứu học bạ số và thủ tục hành chính 24/7",
                    "C. Tự động nhắn tin đòi tiền học phí",
                    "D. Chơi trò chơi trực tuyến"
                ],
                answer: 1,
                exp: "Trợ lý AI trên Cổng EDU đóng vai trò là <b>Trợ lý ảo dịch vụ công</b>, tự động trả lời thắc mắc của người dân về tuyển sinh, học bạ và quy trình hành chính.",
                sourceTitle: "6. Căn Cứ Pháp Lý Chuyên Sâu"
            },
            {
                id: 26,
                badge: "Quy Hoạch Cán Bộ ST-CEMS",
                q: "Phần mềm ST-CEMS giúp Sở/Phòng GD&ĐT tự động trích xuất danh sách cán bộ/giáo viên nào phục vụ công tác quy hoạch?",
                options: [
                    "A. Danh sách giáo viên sắp nghỉ hưu",
                    "B. Danh sách cán bộ quản lý và giáo viên đạt hoặc gần đủ điều kiện thành Cán bộ/Giáo viên cốt cán địa phương",
                    "C. Danh sách giáo viên chưa đạt chuẩn trình độ",
                    "D. Danh sách giáo viên chuyển công tác"
                ],
                answer: 1,
                exp: "ST-CEMS có tính năng đặc thù là thống kê và tự động phát hiện danh sách nhân sự tiệm cận tiêu chuẩn <b>Giáo viên/Cán bộ quản lý cốt cán</b>.",
                sourceTitle: "6. Căn Cứ Pháp Lý Chuyên Sâu"
            },
            {
                id: 27,
                badge: "Web Cloud & SSO",
                q: "Nền tảng hạ tầng kỹ thuật chung của toàn bộ 15 phần mềm trong Hệ sinh thái STTech là gì?",
                options: [
                    "A. Cài đặt thủ công từng đĩa CD vào máy tính",
                    "B. Công nghệ Web Cloud (Đánh giá & Quản trị trên điện toán đám mây), không cần cài đặt, truy cập mọi lúc mọi nơi",
                    "C. Chỉ chạy được trên máy chủ nội bộ LAN không có mạng",
                    "D. Chạy trên ứng dụng chạy bằng tệp Excel độc lập"
                ],
                answer: 1,
                exp: "Toàn bộ 15 sản phẩm STTech đều được phát triển trên nền tảng <b>Web Cloud hiện đại</b>, hỗ trợ Single Sign-On (SSO), tương thích mọi thiết bị và mã hóa bảo mật.",
                sourceTitle: "6. Căn Cứ Pháp Lý Chuyên Sâu"
            },
            {
                id: 28,
                badge: "6 Trụ Cột QĐ 3806",
                q: "Bộ tiêu chí DTI đánh giá 'Mức độ Chuyển đổi số cấp Sở/Phòng GD&ĐT' (QĐ 3806) bao gồm bao nhiêu trụ cột chính?",
                options: [
                    "A. 4 trụ cột",
                    "B. 5 trụ cột",
                    "C. 6 trụ cột (với 48 tiêu chí và hơn 140 minh chứng)",
                    "D. 8 trụ cột"
                ],
                answer: 2,
                exp: "Bộ tiêu chí DTI cấp Sở/Phòng (QĐ 3806) bao gồm <b>6 trụ cột</b> chính với 48 tiêu chí chi tiết.",
                sourceTitle: "6. Căn Cứ Pháp Lý Chuyên Sâu"
            },
            {
                id: 29,
                badge: "Chấm Thi Tự Động ST-EMS",
                q: "Khi một trường học tổ chức thi trực tuyến trên ST-EMS, kết quả chấm thi trắc nghiệm được xử lý như thế nào?",
                options: [
                    "A. Giáo viên phải chấm tay từng bài",
                    "B. Hệ thống tự động chấm điểm và trả kết quả trắc nghiệm ngay sau khi học sinh nộp bài",
                    "C. Phải gửi file về Sở GD&ĐT chấm",
                    "D. Sau 7 ngày mới có kết quả"
                ],
                answer: 1,
                exp: "ST-EMS tích hợp công cụ kiểm tra trực tuyến <b>tự động chấm điểm ngay tức thì</b> sau khi học sinh bấm nộp bài trắc nghiệm.",
                sourceTitle: "6. Căn Cứ Pháp Lý Chuyên Sâu"
            },
            {
                id: 30,
                badge: "Tầm Quan Trọng Pháp Lý",
                q: "Vì sao việc nắm vững Căn cứ pháp lý của 15 phần mềm STTech lại quan trọng nhất đối với cán bộ tư vấn dự án?",
                options: [
                    "A. Vì giúp nhớ tên phần mềm lâu hơn",
                    "B. Vì các cơ quan nhà nước và trường học bắt buộc phải căn cứ vào Văn bản/Thông tư/Nghị định quy định để phê duyệt kinh phí và triển khai dự án",
                    "C. Vì để thi trắc nghiệm đạt điểm cao",
                    "D. Vì luật pháp bắt buộc phải học thuộc"
                ],
                answer: 1,
                exp: "Căn cứ pháp lý chính là <b>điều kiện tiên quyết</b> để các đơn vị Giáo dục (Sở, Phòng, Trường) thuyết minh ngân sách và triển khai mua sắm phần mềm theo đúng quy định nhà nước.",
                sourceTitle: "6. Căn Cứ Pháp Lý Chuyên Sâu"
            }
        ]
    }
};
