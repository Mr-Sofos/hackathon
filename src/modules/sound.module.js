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
		const randomNumber = this.#getRandomNumber()
		let myAudio = new Audio(`../sounds/${randomNumber}.mp3`)
		myAudio.play()
		this.#elementLiSound.style.visibility = 'hidden'
		this.#elementLiSound.style.textDecoration = 'underline'
		setTimeout(() => {
			this.#elementLiSound.style.visibility = 'visible'
		}, 1000)
	}
	#render(){
		let ulMenu = document.querySelector('#menu')
		ulMenu.innerHTML = this.toHTML()
	}
	#eventShow(){
		this.#elementLiSound.addEventListener("click", this.#trigger.bind(this))
	}
}


