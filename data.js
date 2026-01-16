// ==================== KNOWLEDGE DATA ====================
const knowledgeData = {
    algebra: [
        {
            id: 'eq1',
            title: 'Phương Trình Bậc Nhất Một Ẩn',
            icon: '📊',
            content: `
                <h3>Định nghĩa</h3>
                <p>Phương trình bậc nhất một ẩn có dạng: $ax + b = 0$ (với $a \\neq 0$)</p>
                
                <div class="formula-box">
                    <strong>Công thức nghiệm:</strong><br>
                    $$x = -\\frac{b}{a}$$
                </div>
                
                <div class="example-box">
                    <strong>Ví dụ:</strong><br>
                    Giải phương trình: $3x - 6 = 0$<br>
                    <strong>Giải:</strong><br>
                    $3x = 6$<br>
                    $x = 2$
                </div>
                
                <h3>Lưu ý quan trọng</h3>
                <ul>
                    <li>Nếu $a = 0$ và $b = 0$: phương trình vô số nghiệm</li>
                    <li>Nếu $a = 0$ và $b \\neq 0$: phương trình vô nghiệm</li>
                </ul>
            `
        },
        {
            id: 'eq2',
            title: 'Phương Trình Bậc Hai',
            icon: '🔢',
            content: `
                <h3>Định nghĩa</h3>
                <p>Phương trình bậc hai có dạng: $ax^2 + bx + c = 0$ (với $a \\neq 0$)</p>
                
                <div class="formula-box">
                    <strong>Công thức nghiệm:</strong><br>
                    Tính $\\Delta = b^2 - 4ac$<br><br>
                    • Nếu $\\Delta > 0$: phương trình có 2 nghiệm phân biệt<br>
                    $$x_1 = \\frac{-b + \\sqrt{\\Delta}}{2a}, \\quad x_2 = \\frac{-b - \\sqrt{\\Delta}}{2a}$$<br><br>
                    • Nếu $\\Delta = 0$: phương trình có nghiệm kép<br>
                    $$x = -\\frac{b}{2a}$$<br><br>
                    • Nếu $\\Delta < 0$: phương trình vô nghiệm
                </div>
                
                <div class="formula-box">
                    <strong>Định lý Vi-ét:</strong><br>
                    Nếu phương trình có 2 nghiệm $x_1, x_2$ thì:<br>
                    $$x_1 + x_2 = -\\frac{b}{a}$$
                    $$x_1 \\cdot x_2 = \\frac{c}{a}$$
                </div>
                
                <div class="example-box">
                    <strong>Ví dụ:</strong><br>
                    Giải phương trình: $x^2 - 5x + 6 = 0$<br>
                    <strong>Giải:</strong><br>
                    $\\Delta = (-5)^2 - 4(1)(6) = 25 - 24 = 1 > 0$<br>
                    $x_1 = \\frac{5 + 1}{2} = 3$<br>
                    $x_2 = \\frac{5 - 1}{2} = 2$
                </div>
            `
        },
        {
            id: 'ineq',
            title: 'Bất Phương Trình',
            icon: '⚖️',
            content: `
                <h3>Bất phương trình bậc nhất</h3>
                <p>Dạng: $ax + b > 0$ hoặc $ax + b < 0$ (với $a \\neq 0$)</p>
                
                <div class="formula-box">
                    <strong>Quy tắc giải:</strong><br>
                    • $ax + b > 0 \\Rightarrow x > -\\frac{b}{a}$ (nếu $a > 0$)<br>
                    • $ax + b > 0 \\Rightarrow x < -\\frac{b}{a}$ (nếu $a < 0$)
                </div>
                
                <h3>Tính chất quan trọng</h3>
                <ul>
                    <li>Cộng cùng một số vào hai vế: bất đẳng thức không đổi chiều</li>
                    <li>Nhân hai vế với số dương: bất đẳng thức không đổi chiều</li>
                    <li>Nhân hai vế với số âm: bất đẳng thức đổi chiều</li>
                </ul>
                
                <div class="example-box">
                    <strong>Ví dụ:</strong><br>
                    Giải bất phương trình: $2x - 4 > 0$<br>
                    <strong>Giải:</strong><br>
                    $2x > 4$<br>
                    $x > 2$
                </div>
            `
        },
        {
            id: 'func',
            title: 'Hàm Số Bậc Nhất',
            icon: '📈',
            content: `
                <h3>Định nghĩa</h3>
                <p>Hàm số bậc nhất có dạng: $y = ax + b$ (với $a \\neq 0$)</p>
                
                <div class="formula-box">
                    <strong>Tính chất đồ thị:</strong><br>
                    • Đồ thị là một đường thẳng<br>
                    • $a$ là hệ số góc (độ dốc)<br>
                    • $b$ là tung độ gốc (giao điểm với trục Oy)<br>
                    • Nếu $a > 0$: hàm số đồng biến<br>
                    • Nếu $a < 0$: hàm số nghịch biến
                </div>
                
                <div class="example-box">
                    <strong>Ví dụ:</strong><br>
                    Cho hàm số $y = 2x + 3$<br>
                    • Hệ số góc: $a = 2 > 0$ → hàm đồng biến<br>
                    • Giao với Oy tại điểm $(0, 3)$<br>
                    • Giao với Ox: cho $y = 0 \\Rightarrow x = -\\frac{3}{2}$
                </div>
            `
        },
        {
            id: 'system',
            title: 'Hệ Phương Trình Bậc Nhất Hai Ẩn',
            icon: '🔗',
            content: `
                <h3>Định nghĩa</h3>
                <p>Hệ phương trình bậc nhất hai ẩn có dạng:</p>
                <div class="formula-box">
                    $$\\begin{cases} ax + by = c \\\\ a'x + b'y = c' \\end{cases}$$
                </div>
                
                <h3>Phương pháp giải</h3>
                
                <strong>1. Phương pháp thế:</strong>
                <ul>
                    <li>Từ một phương trình, biểu diễn ẩn này theo ẩn kia</li>
                    <li>Thế vào phương trình còn lại</li>
                    <li>Giải phương trình một ẩn thu được</li>
                </ul>
                
                <strong>2. Phương pháp cộng đại số:</strong>
                <ul>
                    <li>Nhân hai phương trình với số thích hợp</li>
                    <li>Cộng hoặc trừ hai phương trình để khử một ẩn</li>
                    <li>Giải phương trình một ẩn thu được</li>
                </ul>
                
                <div class="example-box">
                    <strong>Ví dụ:</strong><br>
                    Giải hệ phương trình: $\\begin{cases} 2x + y = 5 \\\\ x - y = 1 \\end{cases}$<br>
                    <strong>Giải (phương pháp cộng):</strong><br>
                    Cộng hai phương trình: $3x = 6 \\Rightarrow x = 2$<br>
                    Thay vào phương trình thứ hai: $2 - y = 1 \\Rightarrow y = 1$<br>
                    Vậy hệ có nghiệm $(x, y) = (2, 1)$
                </div>
            `
        }
    ],
    geometry: [
        {
            id: 'triangle',
            title: 'Tam Giác - Định Lý Cơ Bản',
            icon: '🔺',
            content: `
                <h3>Các loại tam giác</h3>
                <ul>
                    <li><strong>Tam giác thường:</strong> ba cạnh khác nhau</li>
                    <li><strong>Tam giác cân:</strong> hai cạnh bằng nhau</li>
                    <li><strong>Tam giác đều:</strong> ba cạnh bằng nhau</li>
                    <li><strong>Tam giác vuông:</strong> có một góc vuông</li>
                </ul>
                
                <div class="formula-box">
                    <strong>Định lý Pythagore:</strong><br>
                    Trong tam giác vuông: $a^2 + b^2 = c^2$<br>
                    (với $c$ là cạnh huyền)
                </div>
                
                <div class="formula-box">
                    <strong>Công thức diện tích:</strong><br>
                    • $S = \\frac{1}{2} \\times \\text{đáy} \\times \\text{cao}$<br>
                    • $S = \\frac{1}{2}ab\\sin C$ (công thức lượng giác)<br>
                    • $S = \\sqrt{p(p-a)(p-b)(p-c)}$ (công thức Heron, với $p = \\frac{a+b+c}{2}$)
                </div>
                
                <div class="example-box">
                    <strong>Ví dụ:</strong><br>
                    Tam giác vuông có hai cạnh góc vuông là 3cm và 4cm. Tính cạnh huyền.<br>
                    <strong>Giải:</strong><br>
                    $c^2 = 3^2 + 4^2 = 9 + 16 = 25$<br>
                    $c = 5$ cm
                </div>
            `
        },
        {
            id: 'circle',
            title: 'Đường Tròn',
            icon: '⭕',
            content: `
                <h3>Định nghĩa và tính chất</h3>
                <p>Đường tròn tâm O, bán kính R là tập hợp các điểm cách O một khoảng bằng R.</p>
                
                <div class="formula-box">
                    <strong>Công thức cơ bản:</strong><br>
                    • Chu vi: $C = 2\\pi R$<br>
                    • Diện tích: $S = \\pi R^2$<br>
                    • Độ dài cung: $l = \\frac{\\pi R n}{180}$ (với $n$ là số đo góc ở tâm)
                </div>
                
                <h3>Định lý quan trọng</h3>
                <ul>
                    <li>Đường kính vuông góc với dây cung thì chia đôi dây cung đó</li>
                    <li>Trong một đường tròn, hai dây cung bằng nhau thì cách tâm bằng nhau</li>
                    <li>Góc nội tiếp bằng nửa góc ở tâm cùng chắn một cung</li>
                    <li>Góc nội tiếp chắn nửa đường tròn là góc vuông</li>
                </ul>
                
                <div class="example-box">
                    <strong>Ví dụ:</strong><br>
                    Đường tròn có bán kính 5cm. Tính diện tích.<br>
                    <strong>Giải:</strong><br>
                    $S = \\pi R^2 = \\pi \\times 5^2 = 25\\pi$ cm²
                </div>
            `
        },
        {
            id: 'quad',
            title: 'Tứ Giác',
            icon: '◻️',
            content: `
                <h3>Các loại tứ giác đặc biệt</h3>
                
                <strong>1. Hình bình hành:</strong>
                <ul>
                    <li>Các cạnh đối song song và bằng nhau</li>
                    <li>Các góc đối bằng nhau</li>
                    <li>Hai đường chéo cắt nhau tại trung điểm mỗi đường</li>
                </ul>
                
                <strong>2. Hình chữ nhật:</strong>
                <ul>
                    <li>Là hình bình hành có một góc vuông</li>
                    <li>Hai đường chéo bằng nhau</li>
                </ul>
                
                <strong>3. Hình thoi:</strong>
                <ul>
                    <li>Là hình bình hành có hai cạnh kề bằng nhau</li>
                    <li>Hai đường chéo vuông góc với nhau</li>
                </ul>
                
                <strong>4. Hình vuông:</strong>
                <ul>
                    <li>Là hình chữ nhật có hai cạnh kề bằng nhau</li>
                    <li>Là hình thoi có một góc vuông</li>
                </ul>
                
                <div class="formula-box">
                    <strong>Công thức diện tích:</strong><br>
                    • Hình bình hành: $S = \\text{đáy} \\times \\text{cao}$<br>
                    • Hình chữ nhật: $S = \\text{dài} \\times \\text{rộng}$<br>
                    • Hình thoi: $S = \\frac{1}{2} d_1 \\times d_2$ (với $d_1, d_2$ là đường chéo)<br>
                    • Hình vuông: $S = a^2$ (với $a$ là cạnh)
                </div>
            `
        },
        {
            id: 'trig',
            title: 'Tỉ Số Lượng Giác',
            icon: '📐',
            content: `
                <h3>Định nghĩa trong tam giác vuông</h3>
                <p>Cho tam giác ABC vuông tại A, góc B = α:</p>
                
                <div class="formula-box">
                    $$\\sin \\alpha = \\frac{\\text{cạnh đối}}{\\text{cạnh huyền}} = \\frac{AC}{BC}$$
                    $$\\cos \\alpha = \\frac{\\text{cạnh kề}}{\\text{cạnh huyền}} = \\frac{AB}{BC}$$
                    $$\\tan \\alpha = \\frac{\\text{cạnh đối}}{\\text{cạnh kề}} = \\frac{AC}{AB}$$
                    $$\\cot \\alpha = \\frac{\\text{cạnh kề}}{\\text{cạnh đối}} = \\frac{AB}{AC}$$
                </div>
                
                <div class="formula-box">
                    <strong>Hệ thức cơ bản:</strong><br>
                    $$\\sin^2 \\alpha + \\cos^2 \\alpha = 1$$
                    $$\\tan \\alpha = \\frac{\\sin \\alpha}{\\cos \\alpha}$$
                    $$\\tan \\alpha \\cdot \\cot \\alpha = 1$$
                </div>
                
                <h3>Giá trị đặc biệt</h3>
                <table style="width:100%; border-collapse: collapse; margin: 1rem 0;">
                    <tr style="background: rgba(102, 126, 234, 0.2);">
                        <th style="padding: 0.5rem; border: 1px solid rgba(255,255,255,0.1);">Góc</th>
                        <th style="padding: 0.5rem; border: 1px solid rgba(255,255,255,0.1);">30°</th>
                        <th style="padding: 0.5rem; border: 1px solid rgba(255,255,255,0.1);">45°</th>
                        <th style="padding: 0.5rem; border: 1px solid rgba(255,255,255,0.1);">60°</th>
                    </tr>
                    <tr>
                        <td style="padding: 0.5rem; border: 1px solid rgba(255,255,255,0.1);">sin</td>
                        <td style="padding: 0.5rem; border: 1px solid rgba(255,255,255,0.1);">$\\frac{1}{2}$</td>
                        <td style="padding: 0.5rem; border: 1px solid rgba(255,255,255,0.1);">$\\frac{\\sqrt{2}}{2}$</td>
                        <td style="padding: 0.5rem; border: 1px solid rgba(255,255,255,0.1);">$\\frac{\\sqrt{3}}{2}$</td>
                    </tr>
                    <tr>
                        <td style="padding: 0.5rem; border: 1px solid rgba(255,255,255,0.1);">cos</td>
                        <td style="padding: 0.5rem; border: 1px solid rgba(255,255,255,0.1);">$\\frac{\\sqrt{3}}{2}$</td>
                        <td style="padding: 0.5rem; border: 1px solid rgba(255,255,255,0.1);">$\\frac{\\sqrt{2}}{2}$</td>
                        <td style="padding: 0.5rem; border: 1px solid rgba(255,255,255,0.1);">$\\frac{1}{2}$</td>
                    </tr>
                    <tr>
                        <td style="padding: 0.5rem; border: 1px solid rgba(255,255,255,0.1);">tan</td>
                        <td style="padding: 0.5rem; border: 1px solid rgba(255,255,255,0.1);">$\\frac{\\sqrt{3}}{3}$</td>
                        <td style="padding: 0.5rem; border: 1px solid rgba(255,255,255,0.1);">1</td>
                        <td style="padding: 0.5rem; border: 1px solid rgba(255,255,255,0.1);">$\\sqrt{3}$</td>
                    </tr>
                </table>
            `
        },
        {
            id: 'coord',
            title: 'Hệ Tọa Độ',
            icon: '📍',
            content: `
                <h3>Tọa độ điểm và vectơ</h3>
                <p>Trong mặt phẳng tọa độ Oxy, mỗi điểm được xác định bởi cặp số $(x, y)$</p>
                
                <div class="formula-box">
                    <strong>Khoảng cách giữa hai điểm:</strong><br>
                    Cho $A(x_1, y_1)$ và $B(x_2, y_2)$:<br>
                    $$AB = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$$
                </div>
                
                <div class="formula-box">
                    <strong>Tọa độ trung điểm:</strong><br>
                    Trung điểm M của AB có tọa độ:<br>
                    $$M\\left(\\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2}\\right)$$
                </div>
                
                <div class="formula-box">
                    <strong>Phương trình đường thẳng:</strong><br>
                    • Dạng tổng quát: $ax + by + c = 0$<br>
                    • Dạng hệ số góc: $y = mx + n$<br>
                    (với $m$ là hệ số góc, $n$ là tung độ gốc)
                </div>
                
                <div class="example-box">
                    <strong>Ví dụ:</strong><br>
                    Tính khoảng cách giữa hai điểm $A(1, 2)$ và $B(4, 6)$<br>
                    <strong>Giải:</strong><br>
                    $AB = \\sqrt{(4-1)^2 + (6-2)^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$
                </div>
            `
        }
    ]
};

// ==================== QUIZ DATA ====================
const quizData = [
    {
        id: 1,
        category: 'Đại Số',
        question: 'Nghiệm của phương trình $2x - 6 = 0$ là:',
        options: ['$x = 2$', '$x = 3$', '$x = -3$', '$x = 4$'],
        correct: 1,
        explanation: 'Ta có: $2x - 6 = 0 \\Rightarrow 2x = 6 \\Rightarrow x = 3$'
    },
    {
        id: 2,
        category: 'Đại Số',
        question: 'Phương trình $x^2 - 5x + 6 = 0$ có bao nhiêu nghiệm?',
        options: ['Vô nghiệm', '1 nghiệm', '2 nghiệm', '3 nghiệm'],
        correct: 2,
        explanation: '$\\Delta = 25 - 24 = 1 > 0$ nên phương trình có 2 nghiệm phân biệt là $x_1 = 2$ và $x_2 = 3$'
    },
    {
        id: 3,
        category: 'Đại Số',
        question: 'Với giá trị nào của $x$ thì biểu thức $\\sqrt{x - 2}$ có nghĩa?',
        options: ['$x > 2$', '$x \\geq 2$', '$x < 2$', '$x \\leq 2$'],
        correct: 1,
        explanation: 'Căn bậc hai có nghĩa khi biểu thức trong căn không âm: $x - 2 \\geq 0 \\Rightarrow x \\geq 2$'
    },
    {
        id: 4,
        category: 'Đại Số',
        question: 'Hàm số $y = -3x + 2$ là hàm số:',
        options: ['Đồng biến', 'Nghịch biến', 'Không đổi', 'Không xác định'],
        correct: 1,
        explanation: 'Hệ số góc $a = -3 < 0$ nên hàm số nghịch biến trên $\\mathbb{R}$'
    },
    {
        id: 5,
        category: 'Đại Số',
        question: 'Nghiệm của hệ phương trình $\\begin{cases} x + y = 5 \\\\ x - y = 1 \\end{cases}$ là:',
        options: ['$(2, 3)$', '$(3, 2)$', '$(4, 1)$', '$(1, 4)$'],
        correct: 1,
        explanation: 'Cộng hai phương trình: $2x = 6 \\Rightarrow x = 3$. Thay vào: $3 + y = 5 \\Rightarrow y = 2$'
    },
    {
        id: 6,
        category: 'Đại Số',
        question: 'Rút gọn biểu thức $\\sqrt{50}$ ta được:',
        options: ['$5\\sqrt{2}$', '$2\\sqrt{5}$', '$10\\sqrt{5}$', '$25\\sqrt{2}$'],
        correct: 0,
        explanation: '$\\sqrt{50} = \\sqrt{25 \\times 2} = \\sqrt{25} \\times \\sqrt{2} = 5\\sqrt{2}$'
    },
    {
        id: 7,
        category: 'Đại Số',
        question: 'Với $a > 0$, biểu thức $\\sqrt{a^2}$ bằng:',
        options: ['$a$', '$-a$', '$|a|$', '$a^2$'],
        correct: 0,
        explanation: 'Vì $a > 0$ nên $\\sqrt{a^2} = |a| = a$'
    },
    {
        id: 8,
        category: 'Đại Số',
        question: 'Phương trình $x^2 = 9$ có nghiệm là:',
        options: ['$x = 3$', '$x = -3$', '$x = \\pm 3$', 'Vô nghiệm'],
        correct: 2,
        explanation: '$x^2 = 9 \\Rightarrow x = \\pm \\sqrt{9} = \\pm 3$'
    },
    {
        id: 9,
        category: 'Hình Học',
        question: 'Trong tam giác vuông có hai cạnh góc vuông là 3cm và 4cm, cạnh huyền dài:',
        options: ['5cm', '6cm', '7cm', '8cm'],
        correct: 0,
        explanation: 'Theo định lý Pythagore: $c^2 = 3^2 + 4^2 = 9 + 16 = 25 \\Rightarrow c = 5$ cm'
    },
    {
        id: 10,
        category: 'Hình Học',
        question: 'Diện tích hình tròn bán kính 5cm là:',
        options: ['$10\\pi$ cm²', '$25\\pi$ cm²', '$50\\pi$ cm²', '$5\\pi$ cm²'],
        correct: 1,
        explanation: '$S = \\pi R^2 = \\pi \\times 5^2 = 25\\pi$ cm²'
    },
    {
        id: 11,
        category: 'Hình Học',
        question: 'Chu vi hình tròn đường kính 10cm là:',
        options: ['$5\\pi$ cm', '$10\\pi$ cm', '$20\\pi$ cm', '$100\\pi$ cm'],
        correct: 1,
        explanation: '$C = \\pi d = \\pi \\times 10 = 10\\pi$ cm (hoặc $C = 2\\pi R = 2\\pi \\times 5 = 10\\pi$ cm)'
    },
    {
        id: 12,
        category: 'Hình Học',
        question: 'Trong tam giác vuông, $\\sin 30°$ bằng:',
        options: ['$\\frac{1}{2}$', '$\\frac{\\sqrt{2}}{2}$', '$\\frac{\\sqrt{3}}{2}$', '$1$'],
        correct: 0,
        explanation: 'Đây là giá trị lượng giác đặc biệt: $\\sin 30° = \\frac{1}{2}$'
    },
    {
        id: 13,
        category: 'Hình Học',
        question: 'Diện tích hình vuông cạnh 6cm là:',
        options: ['24 cm²', '36 cm²', '12 cm²', '18 cm²'],
        correct: 1,
        explanation: '$S = a^2 = 6^2 = 36$ cm²'
    },
    {
        id: 14,
        category: 'Hình Học',
        question: 'Góc nội tiếp chắn nửa đường tròn có số đo là:',
        options: ['$45°$', '$60°$', '$90°$', '$180°$'],
        correct: 2,
        explanation: 'Định lý: Góc nội tiếp chắn nửa đường tròn là góc vuông ($90°$)'
    },
    {
        id: 15,
        category: 'Hình Học',
        question: 'Khoảng cách giữa hai điểm $A(0, 0)$ và $B(3, 4)$ là:',
        options: ['3', '4', '5', '7'],
        correct: 2,
        explanation: '$AB = \\sqrt{(3-0)^2 + (4-0)^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$'
    },
    {
        id: 16,
        category: 'Đại Số',
        question: 'Giá trị của biểu thức $2^3 + 3^2$ là:',
        options: ['17', '15', '13', '19'],
        correct: 0,
        explanation: '$2^3 + 3^2 = 8 + 9 = 17$'
    },
    {
        id: 17,
        category: 'Đại Số',
        question: 'Phân tích đa thức $x^2 - 9$ thành nhân tử:',
        options: ['$(x-3)^2$', '$(x+3)^2$', '$(x-3)(x+3)$', '$x(x-9)$'],
        correct: 2,
        explanation: '$x^2 - 9 = x^2 - 3^2 = (x-3)(x+3)$ (hằng đẳng thức hiệu hai bình phương)'
    },
    {
        id: 18,
        category: 'Đại Số',
        question: 'Nếu $\\frac{x}{3} = \\frac{y}{4}$ và $x + y = 14$ thì $x$ bằng:',
        options: ['4', '6', '8', '10'],
        correct: 1,
        explanation: 'Đặt $\\frac{x}{3} = \\frac{y}{4} = k \\Rightarrow x = 3k, y = 4k$. Ta có $3k + 4k = 14 \\Rightarrow k = 2 \\Rightarrow x = 6$'
    },
    {
        id: 19,
        category: 'Hình Học',
        question: 'Diện tích tam giác có đáy 8cm, chiều cao 5cm là:',
        options: ['13 cm²', '20 cm²', '40 cm²', '80 cm²'],
        correct: 1,
        explanation: '$S = \\frac{1}{2} \\times \\text{đáy} \\times \\text{cao} = \\frac{1}{2} \\times 8 \\times 5 = 20$ cm²'
    },
    {
        id: 20,
        category: 'Hình Học',
        question: 'Trong hình thoi, hai đường chéo có tính chất:',
        options: ['Bằng nhau', 'Song song', 'Vuông góc với nhau', 'Không cắt nhau'],
        correct: 2,
        explanation: 'Trong hình thoi, hai đường chéo vuông góc với nhau và cắt nhau tại trung điểm mỗi đường'
    }
];

// ==================== EXAM DATA ====================
const examData = [
    {
        id: 1,
        school: 'THPT Chuyên Lê Hồng Phong',
        year: 2025,
        province: 'TP. Hồ Chí Minh',
        duration: '150 phút',
        description: 'Đề thi tuyển sinh vào lớp 10 chuyên Toán năm 2025',
        problems: 10,
        difficulty: 'Khó'
    },
    {
        id: 2,
        school: 'THPT Chuyên Trần Đại Nghĩa',
        year: 2025,
        province: 'TP. Hồ Chí Minh',
        duration: '150 phút',
        description: 'Đề thi tuyển sinh vào lớp 10 chuyên Toán năm 2025',
        problems: 10,
        difficulty: 'Khó'
    },
    {
        id: 3,
        school: 'THPT Chuyên Nguyễn Huệ',
        year: 2025,
        province: 'Hà Nội',
        duration: '150 phút',
        description: 'Đề thi tuyển sinh vào lớp 10 chuyên Toán năm 2025',
        problems: 10,
        difficulty: 'Khó'
    },
    {
        id: 4,
        school: 'THPT Chuyên Hà Nội - Amsterdam',
        year: 2024,
        province: 'Hà Nội',
        duration: '150 phút',
        description: 'Đề thi tuyển sinh vào lớp 10 chuyên Toán năm 2024',
        problems: 10,
        difficulty: 'Khó'
    },
    {
        id: 5,
        school: 'THPT Chuyên Lê Quý Đôn',
        year: 2024,
        province: 'Đà Nẵng',
        duration: '150 phút',
        description: 'Đề thi tuyển sinh vào lớp 10 chuyên Toán năm 2024',
        problems: 10,
        difficulty: 'Khó'
    },
    {
        id: 6,
        school: 'THPT Chuyên Phan Bội Châu',
        year: 2024,
        province: 'Nghệ An',
        duration: '150 phút',
        description: 'Đề thi tuyển sinh vào lớp 10 chuyên Toán năm 2024',
        problems: 10,
        difficulty: 'Khó'
    },
    {
        id: 'tphcm_2024',
        school: 'Sở GD&ĐT TP. Hồ Chí Minh',
        year: 2024,
        province: 'TP. Hồ Chí Minh',
        duration: '120 phút',
        description: 'Đề thi tuyển sinh vào lớp 10 công lập năm 2024',
        problems: 8,
        difficulty: 'Trung bình'
    },
    {
        id: 'hanoi_2024',
        school: 'Sở GD&ĐT Hà Nội',
        year: 2024,
        province: 'Hà Nội',
        duration: '120 phút',
        description: 'Đề thi tuyển sinh vào lớp 10 công lập năm 2024',
        problems: 8,
        difficulty: 'Trung bình'
    },
    {
        id: 9,
        school: 'THPT Chuyên Lam Sơn',
        year: 2023,
        province: 'Thanh Hóa',
        duration: '150 phút',
        description: 'Đề thi tuyển sinh vào lớp 10 chuyên Toán năm 2023',
        problems: 10,
        difficulty: 'Khó'
    },
    {
        id: 10,
        school: 'THPT Chuyên Quốc Học Huế',
        year: 2023,
        province: 'Thừa Thiên Huế',
        duration: '150 phút',
        description: 'Đề thi tuyển sinh vào lớp 10 chuyên Toán năm 2023',
        problems: 10,
        difficulty: 'Khó'
    },
    {
        id: 11,
        school: 'Sở GD&ĐT Đà Nẵng',
        year: 2023,
        province: 'Đà Nẵng',
        duration: '120 phút',
        description: 'Đề thi tuyển sinh vào lớp 10 công lập năm 2023',
        problems: 8,
        difficulty: 'Trung bình'
    },
    {
        id: 12,
        school: 'THPT Chuyên Chu Văn An',
        year: 2023,
        province: 'Hà Nội',
        duration: '150 phút',
        description: 'Đề thi tuyển sinh vào lớp 10 chuyên Toán năm 2023',
        problems: 10,
        difficulty: 'Khó'
    }
];
