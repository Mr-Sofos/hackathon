import {Module} from '@/core/module'

export class BackgroundModule extends Module {
    #elementLiBackgroundColor
    constructor(type, text) {
        super(type, text)
        this.render()
         this.#elementLiBackgroundColor = document.querySelector('[data-type="bgColor"]')
        this.#eventShow()
    }


    #colorsRandom() {
		const colors = ['#FFC0CB', '#FFA07A', '#FFFFE0', '#ADD8E6', '#E0FFFF', '#20B2AA', '#90EE90', '#F08080']
        return colors[Math.floor(Math.random() * colors.length)]
    }

    #trigger() {
		
      document.body.style.background = this.#colorsRandom()

    }

    render() {
        let ulMenu = document.querySelector('#menu')
        ulMenu.innerHTML += this.toHTML()

    }

    #eventShow() {
        this.#elementLiBackgroundColor.addEventListener("click", this.#trigger.bind(this))
    }
}
