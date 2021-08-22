import {Menu} from './core/menu.js'
import Sound from './modules/sound.module.js'
import CustomMessage from './modules/customMessage.module.js'
import {BackgroundModule} from "./modules/background.module.js"
import FigureModule from "./modules/figure.module.js"

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
		const customMessageElement = new CustomMessage('message', 'Вызвать сообщение')
		const backgroundModuleObject = new BackgroundModule('bgColor', 'Случайный цвет')
		const figureModule = new FigureModule('figure', 'Случайная фигура')
		const soundElement = new Sound('sound', 'Случайный звук')
	}
}