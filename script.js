document.addEventListener('DOMContentLoaded', function() {
    // FAQ toggle functionality
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            const icon = question.querySelector('i');
            
            // Toggle answer visibility
            if (answer.style.display === 'block') {
                answer.style.display = 'none';
                icon.classList.remove('fa-minus');
                icon.classList.add('fa-plus');
            } else {
                answer.style.display = 'block';
                icon.classList.remove('fa-plus');
                icon.classList.add('fa-minus');
            }
            
            // Close other open answers
            faqQuestions.forEach(otherQuestion => {
                if (otherQuestion !== question) {
                    otherQuestion.nextElementSibling.style.display = 'none';
                    const otherIcon = otherQuestion.querySelector('i');
                    otherIcon.classList.remove('fa-minus');
                    otherIcon.classList.add('fa-plus');
                }
            });
        });
    });
    
});