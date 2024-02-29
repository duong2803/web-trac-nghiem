document.addEventListener('DOMContentLoaded', function () {

    loadAnswers()

    window.addEventListener('beforeunload', function () {
        saveAnswers();
    });
    const submitQuizBtn = document.getElementById('submit-quiz');
    submitQuizBtn.addEventListener('click', function () {
        // Lưu câu trả lời của người dùng
        saveAnswers()
        // Đưa answer lên backend xử lí        
        window.location.href = 'ket-qua.html'
    });

    function saveAnswers() {
        const answers = {
            // Nhóm 1: Lựa chọn đúng/sai
            question1: document.querySelector('input[name="question1"]:checked').value,
            question2: document.querySelector('input[name="question2"]:checked').value,
            question3: document.querySelector('input[name="question3"]:checked').value,
            question4: document.querySelector('input[name="question4"]:checked').value,
            question5: document.querySelector('input[name="question5"]:checked').value,
            question6: document.querySelector('input[name="question6"]:checked').value,
            question7: document.querySelector('input[name="question7"]:checked').value,
            question8: document.querySelector('input[name="question8"]:checked').value,
            question9: document.querySelector('input[name="question9"]:checked').value,
            question10: document.querySelector('input[name="question10"]:checked').value,

            // Nhóm 2: Chọn 1 trong 4 đáp án
            question11: document.querySelector('input[name="question11"]:checked').value,
            question12: document.querySelector('input[name="question12"]:checked').value,
            question13: document.querySelector('input[name="question13"]:checked').value,
            question14: document.querySelector('input[name="question14"]:checked').value,
            question15: document.querySelector('input[name="question15"]:checked').value,
            question16: document.querySelector('input[name="question16"]:checked').value,
            question17: document.querySelector('input[name="question17"]:checked').value,
            question18: document.querySelector('input[name="question18"]:checked').value,
            question19: document.querySelector('input[name="question19"]:checked').value,
            question20: document.querySelector('input[name="question20"]:checked').value,

            // Nhóm 3: Chọn nhiều đáp án
            question21: [],
            question22: [],
            question23: [],
            question24: [],
            question25: [],
            question26: [],
            question27: [],
            question28: [],
            question29: [],
            question30: [],

            // Nhóm 4: Trả lời tự luận
            question31: document.querySelector('textarea[name="question31"]').value,
            question32: document.querySelector('textarea[name="question32"]').value,
            question33: document.querySelector('textarea[name="question33"]').value,
            question34: document.querySelector('textarea[name="question34"]').value,
            question35: document.querySelector('textarea[name="question35"]').value,
            question36: document.querySelector('textarea[name="question36"]').value,
            question37: document.querySelector('textarea[name="question37"]').value,
            question38: document.querySelector('textarea[name="question38"]').value,
            question39: document.querySelector('textarea[name="question39"]').value,
            question40: document.querySelector('textarea[name="question40"]').value,
        };

        document.querySelectorAll('input[name="question21"]:checked').forEach(input => {
            answers.question21.push(input.value);
        })

        document.querySelectorAll('input[name="question22"]:checked').forEach(input => {
            answers.question22.push(input.value);
        })

        document.querySelectorAll('input[name="question23"]:checked').forEach(input => {
            answers.question23.push(input.value);
        })

        document.querySelectorAll('input[name="question24"]:checked').forEach(input => {
            answers.question24.push(input.value);
        })

        document.querySelectorAll('input[name="question25"]:checked').forEach(input => {
            answers.question25.push(input.value);
        })

        document.querySelectorAll('input[name="question26"]:checked').forEach(input => {
            answers.question26.push(input.value);
        })

        document.querySelectorAll('input[name="question27"]:checked').forEach(input => {
            answers.question27.push(input.value);
        })

        document.querySelectorAll('input[name="question28"]:checked').forEach(input => {
            answers.question28.push(input.value);
        })

        document.querySelectorAll('input[name="question29"]:checked').forEach(input => {
            answers.question29.push(input.value);
        })

        document.querySelectorAll('input[name="question30"]:checked').forEach(input => {
            answers.question30.push(input.value);
        })

        console.log(answers)
        localStorage.setItem('quizAnswers', JSON.stringify(answers));
    }

    function loadAnswers() {
        const savedAnswers = localStorage.getItem('quizAnswers');
        console.log(savedAnswers)
        if (savedAnswers) {
            const answers = JSON.parse(savedAnswers);
            console.log(answers)
            // Đặt lại các input radio và textarea với giá trị đã lưu
            for (const question in answers) {
                if (answers.hasOwnProperty(question)) {
                    const answer = answers[question];
                    const input = document.querySelector(`input[name="${question}"][value="${answer}"]`);
                    if (input) {
                        input.checked = true;
                    }
                }
            }
        }
    }
});
