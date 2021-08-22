import {Menu} from './core/menu.js'
import Sound from './modules/sound.module.js'

export default class ContextMenu extends Menu{
	#element
	constructor(selector){
		super(selector)
		this.#element = document.querySelector(selector)
		this.add()
		this.open()
		this.close()
	}
	open(){
		document.body.addEventListener('contextmenu', (event) => {
			event.preventDefault()
			this.#element.classList.add('open')
			this.#element.style.top = event.clientY + 'px'
			this.#element.style.left = event.clientX + 'px'
		})
	}
	close(){
		document.body.addEventListener('click', (event) => {
			if(event.target.offsetParent?.id !== 'menu'){
				this.#element.classList.remove('open')
			}
		})
		document.body.addEventListener('keydown', (event) => {
			if(event.keyCode === 27){
				this.#element.classList.remove('open')
			}
		})
	}
	add(){
		const soundElement = new Sound('sound', 'случайный звук')
	}
}