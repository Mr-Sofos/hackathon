import {Module} from '../core/module.js'


export default class SoundModule extends Module{
	#elementLiSound

	constructor(type, text){
		super(type, text)
		this.#render()
		this.#elementLiSound = document.querySelector('[data-type="sound"]')
		this.#eventShow()
	}
	#getRandomNumber(){
		return Math.floor(Math.random() * 26)
	}
	#trigger(){
		console.log(this)
			const randomNumber = this.#getRandomNumber()
			let myAudio = new Audio(`../sounds/${randomNumber}.mp3`)
			myAudio.play()
			this.#elementLiSound.style.visibility = 'hidden'
			const promise = new Promise((resolve, reject) => {
				setTimeout(() => {
					resolve('Промис успешно отработал!')
				}, 2000)
			})
				.then((message) => {
					console.log(message)
					this.#elementLiSound.style.visibility = 'visible'
				})
				.catch((error) => {
					throw new Error(error)
				})
				.finally(() => {
					console.log('Окончание конструкции промиса')
				})
	}
	#render(){
		let ulMenu = document.querySelector('#menu')
		ulMenu.innerHTML += this.toHTML()
	}
	#eventShow(){
		this.#elementLiSound.addEventListener("click", this.#trigger.bind(this))
	}
}


