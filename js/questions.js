const faqToggles = document.querySelectorAll('.faq-toggle')

faqToggles.forEach(toggle => {
	toggle.addEventListener('click', () => {
		const faqItem = toggle.closest('.faq-item')
		const faqAnswer = faqItem.querySelector('.faq-answer')
		toggle.classList.toggle('active')
		faqAnswer.style.height = toggle.classList.contains('active')
			? faqAnswer.scrollHeight + 'px'
			: 0
	})
})
