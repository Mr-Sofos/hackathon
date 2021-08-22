import {Module} from '../core/module.js'


export default class CustomMessage extends Module{
	#elementLiCustomMessage

	constructor(type, text){
		super(type, text)
		this.#render()
		this.#elementLiCustomMessage = document.querySelector('[data-type="message"]')
		this.#eventShow()
	}
	#getRandomNumber(){
		return Math.floor(Math.random() * 9)
	}
	#render(){
		let ulMenu = document.querySelector('#menu')
		ulMenu.innerHTML += this.toHTML()
	}
	#createElement(){
		const arrayMessages = ["Не волнуйтесь, если что-то не работает. Если бы всё работало, вас бы уволили.", "Язык, который не меняет вашего представления о программировании, недостоин изучения.", "Простота — залог надежности.", "42", "Коммуникация переоценена. Час одиночества продуктивнее недели разговоров.", "Чтобы быть по-настоящему свободным, нужно быть готовым рисковать всем ради свободы.", "Наиболее страшный грех среди поклонников культа денег — выбросить деньги на ветер в прямом смысле.", "Однажды я начал видеть, как некоторые люди терпят поражение не из-за того, что не умеют считать, – а из-за неумения понять, почему так произошло. Отговорки они умели находить, но понять – нет."]
		const divElementMessage = document.createElement('div')
		divElementMessage.classList.add('custom-message')
		const pElementMessage = document.createElement('p')
		pElementMessage.textContent = arrayMessages[this.#getRandomNumber()]
		console.log(this.#getRandomNumber());
		pElementMessage.classList.add('custom-message-paragraph')
		divElementMessage.append(pElementMessage)
		document.body.append(divElementMessage)
	}
	#removeElement(){
		const divMessageElement = document.querySelector('.custom-message')
		divMessageElement.remove()
	}
	#trigger(event){
		if(event.target.dataset.type === 'message'){
			this.#createElement()
			const divMessage = document.querySelector('.custom-message')
			divMessage.classList.remove('close-message')
			this.#elementLiCustomMessage.style.visibility = 'hidden'
			const promiseMessage = new Promise((resolve, reject) => {
				setTimeout(() => {
					resolve('Промис сообщения успешен!')
				}, 3000)
			})
				.then((txt) => {
					console.log(txt)
					divMessage.classList.add('close-message')
					this.#removeElement()
					this.#elementLiCustomMessage.style.visibility = 'visible'
				})
				.catch((error) => {
					throw new Error(error)
				})
				.finally(() => {
					console.log('Промис сообщения дошел до конца')
				})
		}
	}
	#eventShow(){
		this.#elementLiCustomMessage.addEventListener("click", this.#trigger.bind(this))
	}
}