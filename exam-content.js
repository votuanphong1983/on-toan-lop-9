// ==================== REAL EXAM CONTENT ====================
// Đề thi thực tế từ các trường THPT năm 2024-2025

const realExamContent = {
    // Đề thi TP.HCM 2024
    tphcm_2024: {
        id: 'tphcm_2024',
        title: 'Đề Thi Tuyển Sinh Lớp 10 - TP. Hồ Chí Minh 2024',
        school: 'Sở GD&ĐT TP. Hồ Chí Minh',
        year: 2024,
        date: '07/06/2024',
        duration: '120 phút',
        totalPoints: 10,
        problems: [
            {
                number: 1,
                title: 'Đại số - Hàm số và đồ thị',
                points: 1.5,
                content: `
                    <p><strong>Câu 1:</strong> (1,5 điểm)</p>
                    <p>Cho hàm số $y = x^2$ có đồ thị là parabol $(P)$ và đường thẳng $(d): y = 2x + 3$</p>
                    <p>a) Vẽ đồ thị $(P)$ của hàm số $y = x^2$</p>
                    <p>b) Tìm tọa độ giao điểm của $(P)$ và $(d)$ bằng phép tính</p>
                `,
                solution: `
                    <p><strong>Lời giải:</strong></p>
                    <p><strong>a)</strong> Lập bảng giá trị:</p>
                    <table style="margin: 1rem 0; border-collapse: collapse;">
                        <tr><td style="border: 1px solid #666; padding: 0.5rem;">$x$</td><td style="border: 1px solid #666; padding: 0.5rem;">-2</td><td style="border: 1px solid #666; padding: 0.5rem;">-1</td><td style="border: 1px solid #666; padding: 0.5rem;">0</td><td style="border: 1px solid #666; padding: 0.5rem;">1</td><td style="border: 1px solid #666; padding: 0.5rem;">2</td></tr>
                        <tr><td style="border: 1px solid #666; padding: 0.5rem;">$y$</td><td style="border: 1px solid #666; padding: 0.5rem;">4</td><td style="border: 1px solid #666; padding: 0.5rem;">1</td><td style="border: 1px solid #666; padding: 0.5rem;">0</td><td style="border: 1px solid #666; padding: 0.5rem;">1</td><td style="border: 1px solid #666; padding: 0.5rem;">4</td></tr>
                    </table>
                    <p><strong>b)</strong> Phương trình hoành độ giao điểm:</p>
                    <p>$x^2 = 2x + 3$</p>
                    <p>$x^2 - 2x - 3 = 0$</p>
                    <p>$\\Delta = 4 + 12 = 16 > 0$</p>
                    <p>$x_1 = \\frac{2 + 4}{2} = 3 \\Rightarrow y_1 = 9$</p>
                    <p>$x_2 = \\frac{2 - 4}{2} = -1 \\Rightarrow y_2 = 1$</p>
                    <p>Vậy giao điểm là $A(3; 9)$ và $B(-1; 1)$</p>
                `
            },
            {
                number: 2,
                title: 'Đại số - Định lý Vi-ét',
                points: 1.0,
                content: `
                    <p><strong>Câu 2:</strong> (1,0 điểm)</p>
                    <p>Cho phương trình $x^2 - 5x + 3 = 0$ có hai nghiệm $x_1, x_2$</p>
                    <p>Không giải phương trình, hãy tính giá trị của biểu thức: $P = x_1^2 + x_2^2$</p>
                `,
                solution: `
                    <p><strong>Lời giải:</strong></p>
                    <p>Theo định lý Vi-ét: $\\begin{cases} x_1 + x_2 = 5 \\\\ x_1 \\cdot x_2 = 3 \\end{cases}$</p>
                    <p>Ta có: $P = x_1^2 + x_2^2 = (x_1 + x_2)^2 - 2x_1x_2$</p>
                    <p>$P = 5^2 - 2 \\times 3 = 25 - 6 = 19$</p>
                    <p>Vậy $P = 19$</p>
                `
            },
            {
                number: 3,
                title: 'Đại số - Rút gọn biểu thức',
                points: 1.5,
                content: `
                    <p><strong>Câu 3:</strong> (1,5 điểm)</p>
                    <p>Rút gọn biểu thức: $A = \\frac{\\sqrt{x} + 1}{\\sqrt{x} - 2} + \\frac{2\\sqrt{x}}{\\sqrt{x} + 2} - \\frac{5\\sqrt{x} + 2}{x - 4}$ với $x \\geq 0, x \\neq 4$</p>
                `,
                solution: `
                    <p><strong>Lời giải:</strong></p>
                    <p>$A = \\frac{(\\sqrt{x} + 1)(\\sqrt{x} + 2)}{(\\sqrt{x} - 2)(\\sqrt{x} + 2)} + \\frac{2\\sqrt{x}(\\sqrt{x} - 2)}{(\\sqrt{x} + 2)(\\sqrt{x} - 2)} - \\frac{5\\sqrt{x} + 2}{(\\sqrt{x} - 2)(\\sqrt{x} + 2)}$</p>
                    <p>$= \\frac{x + 3\\sqrt{x} + 2 + 2x - 4\\sqrt{x} - 5\\sqrt{x} - 2}{x - 4}$</p>
                    <p>$= \\frac{3x - 6\\sqrt{x}}{x - 4} = \\frac{3\\sqrt{x}(\\sqrt{x} - 2)}{(\\sqrt{x} - 2)(\\sqrt{x} + 2)} = \\frac{3\\sqrt{x}}{\\sqrt{x} + 2}$</p>
                `
            },
            {
                number: 4,
                title: 'Toán thực tế - Thuê pin xe máy điện',
                points: 1.5,
                content: `
                    <p><strong>Câu 4:</strong> (1,5 điểm) - Bài toán thực tế</p>
                    <p>Một công ty cho thuê pin xe máy điện có hai gói:</p>
                    <ul>
                        <li><strong>Gói linh hoạt:</strong> 189.000 đồng/tháng cho 400km đầu tiên, sau đó 374 đồng/km vượt</li>
                        <li><strong>Gói cố định:</strong> 350.000 đồng/tháng không giới hạn km</li>
                    </ul>
                    <p>a) Anh Tâm di chuyển trung bình 800km mỗi tháng. Hỏi anh nên chọn gói nào để tiết kiệm hơn?</p>
                    <p>b) Với quãng đường bao nhiêu km thì hai gói có chi phí bằng nhau?</p>
                `,
                solution: `
                    <p><strong>Lời giải:</strong></p>
                    <p><strong>a)</strong> Với 800km:</p>
                    <p>• Gói linh hoạt: $189.000 + (800 - 400) \\times 374 = 189.000 + 149.600 = 338.600$ đồng</p>
                    <p>• Gói cố định: $350.000$ đồng</p>
                    <p>Vậy anh Tâm nên chọn <strong>Gói linh hoạt</strong> để tiết kiệm hơn.</p>
                    <p><strong>b)</strong> Gọi $x$ (km) là quãng đường cần tìm $(x > 400)$</p>
                    <p>Hai gói có chi phí bằng nhau khi:</p>
                    <p>$189.000 + (x - 400) \\times 374 = 350.000$</p>
                    <p>$(x - 400) \\times 374 = 161.000$</p>
                    <p>$x - 400 = 430,48$</p>
                    <p>$x \\approx 830,5$ km</p>
                    <p>Vậy với quãng đường khoảng <strong>830,5 km</strong> thì hai gói có chi phí bằng nhau.</p>
                `
            },
            {
                number: 5,
                title: 'Hình học - Hình trụ',
                points: 1.0,
                content: `
                    <p><strong>Câu 5:</strong> (1,0 điểm)</p>
                    <p>Một hình trụ có bán kính đáy $r = 5$ cm và chiều cao $h = 12$ cm.</p>
                    <p>Tính diện tích xung quanh và thể tích của hình trụ đó.</p>
                `,
                solution: `
                    <p><strong>Lời giải:</strong></p>
                    <p>Diện tích xung quanh: $S_{xq} = 2\\pi rh = 2\\pi \\times 5 \\times 12 = 120\\pi$ (cm²)</p>
                    <p>Thể tích: $V = \\pi r^2 h = \\pi \\times 5^2 \\times 12 = 300\\pi$ (cm³)</p>
                `
            },
            {
                number: 6,
                title: 'Hệ phương trình - Bài toán thực tế',
                points: 1.5,
                content: `
                    <p><strong>Câu 6:</strong> (1,5 điểm)</p>
                    <p>Một khu vườn hình chữ nhật có chu vi 160m. Nếu tăng chiều dài 10m và giảm chiều rộng 5m thì diện tích tăng 75m².</p>
                    <p>Tính chiều dài và chiều rộng ban đầu của khu vườn.</p>
                `,
                solution: `
                    <p><strong>Lời giải:</strong></p>
                    <p>Gọi chiều dài và chiều rộng ban đầu là $x, y$ (m), $(x, y > 0)$</p>
                    <p>Theo đề bài ta có hệ phương trình:</p>
                    <p>$\\begin{cases} 2(x + y) = 160 \\\\ (x + 10)(y - 5) = xy + 75 \\end{cases}$</p>
                    <p>$\\Leftrightarrow \\begin{cases} x + y = 80 \\\\ -5x + 10y - 50 = 75 \\end{cases}$</p>
                    <p>$\\Leftrightarrow \\begin{cases} x + y = 80 \\\\ -5x + 10y = 125 \\end{cases}$</p>
                    <p>$\\Leftrightarrow \\begin{cases} x + y = 80 \\\\ -x + 2y = 25 \\end{cases}$</p>
                    <p>Từ phương trình thứ nhất: $x = 80 - y$</p>
                    <p>Thay vào phương trình thứ hai: $-(80 - y) + 2y = 25$</p>
                    <p>$-80 + y + 2y = 25 \\Rightarrow 3y = 105 \\Rightarrow y = 35$</p>
                    <p>$\\Rightarrow x = 80 - 35 = 45$</p>
                    <p>Vậy chiều dài ban đầu là <strong>45m</strong> và chiều rộng là <strong>35m</strong>.</p>
                `
            },
            {
                number: 7,
                title: 'Hình học phẳng - Đường tròn',
                points: 2.0,
                content: `
                    <p><strong>Câu 7:</strong> (2,0 điểm)</p>
                    <p>Cho đường tròn $(O)$ đường kính $AB = 2R$. Điểm $C$ thuộc đường tròn sao cho $AC < BC$. Tiếp tuyến tại $C$ của đường tròn cắt đường thẳng $AB$ tại $D$.</p>
                    <p>a) Chứng minh $\\triangle ACB$ vuông tại $C$</p>
                    <p>b) Chứng minh $DC^2 = DA \\cdot DB$</p>
                    <p>c) Gọi $H$ là hình chiếu của $C$ trên $AB$. Chứng minh $CH^2 = HA \\cdot HB$</p>
                `,
                solution: `
                    <p><strong>Lời giải:</strong></p>
                    <p><strong>a)</strong> Vì $AB$ là đường kính của đường tròn $(O)$ nên theo định lý góc nội tiếp chắn nửa đường tròn:</p>
                    <p>$\\angle ACB = 90°$</p>
                    <p>Vậy $\\triangle ACB$ vuông tại $C$.</p>
                    
                    <p><strong>b)</strong> Vì $DC$ là tiếp tuyến tại $C$ nên $OC \\perp DC$</p>
                    <p>Xét $\\triangle DCA$ và $\\triangle DCB$:</p>
                    <p>• $\\angle D$ chung</p>
                    <p>• $\\angle DCA = \\angle DBC$ (cùng phụ với $\\angle CAB$)</p>
                    <p>Do đó $\\triangle DCA \\sim \\triangle DCB$ (g.g)</p>
                    <p>$\\Rightarrow \\frac{DC}{DB} = \\frac{DA}{DC} \\Rightarrow DC^2 = DA \\cdot DB$</p>
                    
                    <p><strong>c)</strong> Trong tam giác vuông $ACB$, $CH$ là đường cao nên:</p>
                    <p>$CH^2 = HA \\cdot HB$ (hệ thức lượng trong tam giác vuông)</p>
                `
            }
        ]
    },

    // Đề thi Hà Nội 2024
    hanoi_2024: {
        id: 'hanoi_2024',
        title: 'Đề Thi Tuyển Sinh Lớp 10 - Hà Nội 2024',
        school: 'Sở GD&ĐT Hà Nội',
        year: 2024,
        date: '09/06/2024',
        duration: '120 phút',
        totalPoints: 10,
        problems: [
            {
                number: 1,
                title: 'Đại số - Rút gọn biểu thức',
                points: 2.0,
                content: `
                    <p><strong>Câu 1:</strong> (2,0 điểm)</p>
                    <p>a) Tính giá trị của biểu thức $A = \\sqrt{48} - 2\\sqrt{27} + \\sqrt{12}$</p>
                    <p>b) Rút gọn biểu thức $B = \\left(\\frac{\\sqrt{x}}{\\sqrt{x} - 1} - \\frac{1}{x - \\sqrt{x}}\\right) : \\frac{\\sqrt{x} + 1}{x - 1}$ với $x > 0, x \\neq 1$</p>
                `,
                solution: `
                    <p><strong>Lời giải:</strong></p>
                    <p><strong>a)</strong> $A = \\sqrt{48} - 2\\sqrt{27} + \\sqrt{12}$</p>
                    <p>$= 4\\sqrt{3} - 6\\sqrt{3} + 2\\sqrt{3} = 0$</p>
                    
                    <p><strong>b)</strong> $B = \\left(\\frac{\\sqrt{x}}{\\sqrt{x} - 1} - \\frac{1}{\\sqrt{x}(\\sqrt{x} - 1)}\\right) \\cdot \\frac{x - 1}{\\sqrt{x} + 1}$</p>
                    <p>$= \\frac{x - 1}{\\sqrt{x}(\\sqrt{x} - 1)} \\cdot \\frac{(\\sqrt{x} - 1)(\\sqrt{x} + 1)}{\\sqrt{x} + 1}$</p>
                    <p>$= \\frac{x - 1}{\\sqrt{x}} = \\sqrt{x} - \\frac{1}{\\sqrt{x}}$</p>
                `
            },
            {
                number: 2,
                title: 'Phương trình và hệ phương trình',
                points: 2.0,
                content: `
                    <p><strong>Câu 2:</strong> (2,0 điểm)</p>
                    <p>a) Giải phương trình: $x^2 - 6x + 5 = 0$</p>
                    <p>b) Giải hệ phương trình: $\\begin{cases} 2x + y = 5 \\\\ 3x - 2y = 4 \\end{cases}$</p>
                `,
                solution: `
                    <p><strong>Lời giải:</strong></p>
                    <p><strong>a)</strong> $x^2 - 6x + 5 = 0$</p>
                    <p>$\\Delta = 36 - 20 = 16 > 0$</p>
                    <p>$x_1 = \\frac{6 + 4}{2} = 5$; $x_2 = \\frac{6 - 4}{2} = 1$</p>
                    
                    <p><strong>b)</strong> $\\begin{cases} 2x + y = 5 \\\\ 3x - 2y = 4 \\end{cases}$</p>
                    <p>Từ PT(1): $y = 5 - 2x$</p>
                    <p>Thay vào PT(2): $3x - 2(5 - 2x) = 4$</p>
                    <p>$3x - 10 + 4x = 4 \\Rightarrow 7x = 14 \\Rightarrow x = 2$</p>
                    <p>$\\Rightarrow y = 5 - 4 = 1$</p>
                    <p>Vậy hệ có nghiệm $(x, y) = (2, 1)$</p>
                `
            },
            {
                number: 3,
                title: 'Hàm số và đồ thị',
                points: 2.0,
                content: `
                    <p><strong>Câu 3:</strong> (2,0 điểm)</p>
                    <p>Cho hàm số $y = -x^2$ có đồ thị $(P)$</p>
                    <p>a) Vẽ đồ thị $(P)$</p>
                    <p>b) Tìm $m$ để đường thẳng $y = 2x + m$ cắt $(P)$ tại hai điểm phân biệt</p>
                `,
                solution: `
                    <p><strong>Lời giải:</strong></p>
                    <p><strong>a)</strong> Lập bảng giá trị và vẽ parabol đi qua các điểm</p>
                    
                    <p><strong>b)</strong> Phương trình hoành độ giao điểm:</p>
                    <p>$-x^2 = 2x + m$</p>
                    <p>$x^2 + 2x + m = 0$</p>
                    <p>Để có 2 giao điểm phân biệt: $\\Delta' > 0$</p>
                    <p>$1 - m > 0 \\Rightarrow m < 1$</p>
                `
            },
            {
                number: 4,
                title: 'Hình học - Tam giác và đường tròn',
                points: 4.0,
                content: `
                    <p><strong>Câu 4:</strong> (4,0 điểm)</p>
                    <p>Cho tam giác $ABC$ vuông tại $A$, đường cao $AH$. Biết $AB = 6$ cm, $AC = 8$ cm.</p>
                    <p>a) Tính $BC, AH$</p>
                    <p>b) Đường tròn tâm $A$ bán kính $AH$ cắt $AB, AC$ tại $M, N$. Chứng minh $BC$ là tiếp tuyến của đường tròn $(A; AH)$</p>
                    <p>c) Tính diện tích tứ giác $AMHN$</p>
                `,
                solution: `
                    <p><strong>Lời giải:</strong></p>
                    <p><strong>a)</strong> $BC = \\sqrt{AB^2 + AC^2} = \\sqrt{36 + 64} = 10$ cm</p>
                    <p>$AH = \\frac{AB \\cdot AC}{BC} = \\frac{6 \\cdot 8}{10} = 4,8$ cm</p>
                    
                    <p><strong>b)</strong> Vì $AH \\perp BC$ và $AH$ là bán kính nên $BC$ là tiếp tuyến của $(A; AH)$ tại $H$</p>
                    
                    <p><strong>c)</strong> $S_{AMHN} = S_{\\triangle AMN} = \\frac{1}{2} \\cdot AM \\cdot AN = \\frac{1}{2} \\cdot AH^2 = \\frac{1}{2} \\cdot 4,8^2 = 11,52$ cm²</p>
                `
            }
        ]
    },

    // THPT Chuyên Lê Hồng Phong 2025
    '1': {
        id: '1',
        title: 'Đề Thi Thử Vào 10 - THPT Chuyên Lê Hồng Phong 2025',
        school: 'THPT Chuyên Lê Hồng Phong',
        year: 2025,
        date: '15/03/2025',
        duration: '150 phút',
        totalPoints: 10,
        problems: [
            {
                number: 1,
                title: 'Phương trình vô tỉ',
                points: 2.0,
                content: `
                    <p><strong>Câu 1:</strong> (2,0 điểm)</p>
                    <p>Giải phương trình: $\\sqrt{x^2 + 4x + 5} + \\sqrt{2x^2 + 8x + 10} = 3$</p>
                `,
                solution: `
                    <p><strong>Lời giải:</strong></p>
                    <p>Ta có: $x^2 + 4x + 5 = (x+2)^2 + 1 \\geq 1 \\Rightarrow \\sqrt{x^2 + 4x + 5} \\geq 1$</p>
                    <p>$2x^2 + 8x + 10 = 2(x+2)^2 + 2 \\geq 2 \\Rightarrow \\sqrt{2x^2 + 8x + 10} \\geq \\sqrt{2}$</p>
                    <p>VT $\\geq 1 + \\sqrt{2} \\approx 2.41$</p>
                    <p>Để phương trình có nghiệm thì dấu bằng phải xảy ra.</p>
                    <p>Dấu "=" xảy ra khi $x + 2 = 0 \\Leftrightarrow x = -2$.</p>
                    <p>Thử lại: $\\sqrt{1} + \\sqrt{2} \\neq 3$.</p>
                    <p>Vậy phương trình vô nghiệm.</p>
                `
            },
            {
                number: 2,
                title: 'Hệ phương trình đối xứng',
                points: 2.0,
                content: `
                    <p><strong>Câu 2:</strong> (2,0 điểm)</p>
                    <p>Giải hệ phương trình: $\\begin{cases} x^3 + y^3 = 9 \\\\ x^2y + xy^2 = 6 \\end{cases}$</p>
                `,
                solution: `
                    <p><strong>Lời giải:</strong></p>
                    <p>Cộng hai vế ta được: $x^3 + 3x^2y + 3xy^2 + y^3 = 27$</p>
                    <p>$\\Leftrightarrow (x+y)^3 = 27 \\Leftrightarrow x+y = 3$</p>
                    <p>Từ $x+y=3 \\Rightarrow y = 3-x$. Thay vào PT(2):</p>
                    <p>$xy(x+y) = 6 \\Rightarrow xy \\cdot 3 = 6 \\Rightarrow xy = 2$</p>
                    <p>Vậy $x, y$ là nghiệm phương trình $T^2 - 3T + 2 = 0$</p>
                    <p>$\\Rightarrow T_1 = 1, T_2 = 2$</p>
                    <p>Hệ có nghiệm $(1; 2)$ hoặc $(2; 1)$.</p>
                `
            }
        ]
    },

    // THPT Chuyên Trần Đại Nghĩa 2025
    '2': {
        id: '2',
        title: 'Đề Thi Thử Vào 10 - THPT Chuyên Trần Đại Nghĩa 2025',
        school: 'THPT Chuyên Trần Đại Nghĩa',
        year: 2025,
        date: '20/04/2025',
        duration: '150 phút',
        totalPoints: 10,
        problems: [
            {
                number: 1,
                title: 'Bất đẳng thức',
                points: 2.0,
                content: `
                    <p><strong>Câu 1:</strong> (2,0 điểm)</p>
                    <p>Cho $a, b, c > 0$. Chứng minh rằng: $\\frac{a}{b+c} + \\frac{b}{c+a} + \\frac{c}{a+b} \\geq \\frac{3}{2}$</p>
                `,
                solution: `
                    <p><strong>Lời giải:</strong></p>
                    <p>Đây là bất đẳng thức Nesbitt.</p>
                    <p>Đặt $S = \\frac{a}{b+c} + \\frac{b}{c+a} + \\frac{c}{a+b}$</p>
                    <p>$S = \\frac{a+b+c}{b+c} - 1 + \\frac{a+b+c}{c+a} - 1 + \\frac{a+b+c}{a+b} - 1$</p>
                    <p>$S = (a+b+c)\\left(\\frac{1}{b+c} + \\frac{1}{c+a} + \\frac{1}{a+b}\\right) - 3$</p>
                    <p>Áp dụng BĐT Cauchy-Schwarz: $(x+y+z)(\\frac{1}{x}+\\frac{1}{y}+\\frac{1}{z}) \\geq 9$</p>
                    <p>Với $x=b+c, y=c+a, z=a+b \\Rightarrow x+y+z = 2(a+b+c)$</p>
                    <p>Ta có: $2(a+b+c)(\\frac{1}{b+c} + \\frac{1}{c+a} + \\frac{1}{a+b}) \\geq 9$</p>
                    <p>$\\Rightarrow (a+b+c)(\\frac{1}{b+c} + \\frac{1}{c+a} + \\frac{1}{a+b}) \\geq \\frac{9}{2}$</p>
                    <p>$\\Rightarrow S \\geq \\frac{9}{2} - 3 = \\frac{3}{2}$ (đpcm)</p>
                `
            }
        ]
    },

    // THPT Chuyên Nguyễn Huệ 2025
    '3': {
        id: '3',
        title: 'Đề Thi Thử Vào 10 - THPT Chuyên Nguyễn Huệ 2025',
        school: 'THPT Chuyên Nguyễn Huệ',
        year: 2025,
        date: '10/05/2025',
        duration: '150 phút',
        totalPoints: 10,
        problems: [
            {
                number: 1,
                title: 'Số học',
                points: 2.0,
                content: `
                    <p><strong>Câu 1:</strong> (2,0 điểm)</p>
                    <p>Tìm tất cả các số nguyên $x, y$ thỏa mãn: $x^2 - y^2 = 2024$</p>
                `,
                solution: `
                    <p><strong>Lời giải:</strong></p>
                    <p>$x^2 - y^2 = 2024 \\Leftrightarrow (x-y)(x+y) = 2024$</p>
                    <p>Ta thấy $(x+y) - (x-y) = 2y$ là số chẵn, nên $x+y$ và $x-y$ cùng tính chẵn lẻ.</p>
                    <p>Tích của chúng là 2024 (chẵn), nên cả hai đều phải chẵn.</p>
                    <p>Ta phân tích $2024 = 2^3 \\cdot 11 \\cdot 23 = 8 \\cdot 253$</p>
                    <p>Các cặp ước số chẵn của 2024 là: $(2; 1012), (4; 506), ...$</p>
                    <p>Giải từng trường hợp để tìm $x, y$.</p>
                `
            }
        ]
    }
};
