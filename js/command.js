const toggleButtons = document.querySelectorAll('.toggle')

toggleButtons.forEach(button => {
	button.addEventListener('click', () => {
		const folder = button.parentElement
		const subfolders = folder.querySelector('.subfolders')
		const icon = button.querySelector('i')
		subfolders.classList.toggle('hidden')
		icon.classList.toggle('fa-plus')
		icon.classList.toggle('fa-minus')
	})
})

const scriptFile = document.querySelector('.folder .file.script')
scriptFile.addEventListener('click', function () {
	const modal = document.querySelector('.modal')
	const modalContent = modal.querySelector('.modal-content')
	const closeButton = modal.querySelector('.close')
	const scriptInput = modal.querySelector('#script-input')
	const runScriptButton = modal.querySelector('#run-script-btn')

	scriptInput.value = 'Run, https://www.google.com'

	modal.style.display = 'block'

	closeButton.addEventListener('click', function () {
		modal.style.display = 'none'
	})

	runScriptButton.addEventListener('click', function () {
		const scriptText = scriptInput.value

		modal.style.display = 'none'
	})
})

