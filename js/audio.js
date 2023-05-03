setTimeout(function () {
	var audio = new Audio('sound/run.wav')
	audio.play()
}, 1000) // время в миллисекундах

const downloadButton = document.getElementById('download-button')
const audio = new Audio('sound/ok1.wav')

downloadButton.addEventListener('click', function () {
	audio.play()
})

const controls = document.querySelectorAll('.control')
const clickSound = document.getElementById('click-sound')

controls.forEach(control => {
	control.addEventListener('click', () => {
		clickSound.play()
	})
})
