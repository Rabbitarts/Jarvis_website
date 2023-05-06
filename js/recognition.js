const assistant = document.getElementById('assistant')
const startBtn = assistant.querySelector('#startBtn')

const commands = {
	'открой YouTube': function () {
		window.open('https://www.youtube.com/', '_blank')
	},
	'открой ChatGpt': function () {
		window.open('https://chat.openai.com/', '_blank')
	},
	'открой переводчик': function () {
		window.open('https://translate.google.com/', '_blank')
	},
	'запусти музыку': function () {
		window.open('https://lofigenerator.com/', '_blank')
	},
	'открой Github': function () {
		window.open('https://github.com/', '_blank')
	},
	'открой калькулятор': function () {
		window.open('https://www.google.com/search?q=calculator', '_blank')
	},
	'стоп': function () {
		recognition.stop()
	},
}

const recognition = new window.webkitSpeechRecognition()
recognition.continuous = true
recognition.interimResults = false
recognition.lang = 'ru-RU'

recognition.onstart = function () {
	console.log('Voice recognition started')
	startBtn.innerHTML = '<i class="fa-solid fa-microphone-slash"></i>'
}

recognition.onend = function () {
	console.log('Voice recognition ended')
	startBtn.innerHTML = '<i class="fa-solid fa-microphone"></i>'
}

recognition.onresult = function (event) {
	const command = event.results[event.results.length - 1][0].transcript
	console.log('User said: ' + command)

	for (const cmd in commands) {
		if (command.toLowerCase().includes(cmd.toLowerCase())) {
			console.log('Recognized command: ' + cmd)
			commands[cmd]()
			return
		}
	}

	console.log('Unrecognized command')
}

recognition.onerror = function (event) {
	console.log('Voice recognition error: ' + event.error)
}

startBtn.addEventListener('click', function () {
	recognition.start()
})

const toggleBtn = document.getElementById('toggleAssistant')
const icon = toggleBtn.querySelector('i')

toggleBtn.addEventListener('click', function () {
	assistant.classList.toggle('show')
	icon.classList.toggle('fa-angle-up')
	icon.classList.toggle('fa-angle-down')
})
