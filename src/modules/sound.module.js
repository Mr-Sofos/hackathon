import {Module} from '../core/module.js'


export default class SoundModule extends Module{
	constructor(type, text){
		super(type, text)
		this.render()
		this.elementLiSound = document.querySelector('[data-type="sound"]')
		this.eventShow()
	}
	trigger(){
		
	}
	render(){
		let ulMenu = document.querySelector('#menu')
		ulMenu.innerHTML = this.toHTML()
	}
	eventShow(){
		this.elementLiSound.addEventListener("click", this.trigger)
	}
}


