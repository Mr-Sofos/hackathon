import {Module} from '@/core/module'
import {random} from "@/utils"

const colors = ['#FFC0CB', '#FFA07A', '#FFFFE0', '#ADD8E6', '#E0FFFF', '#20B2AA', '#90EE90', '#F08080']

export class BackgroundModule extends Module {
    #elementLiBackgroundColor
    #backgroundColor
    constructor(type, text) {
        super(type, text)
        this.#render()
        this.#elementLiBackgroundColor = document.querySelector('[data-type="bgColor"]')
        this.#backgroundColor = document.querySelector('html')
        this.#eventShow()
    }


    #colorsRandom() {

        return colors[random(0, colors.length - 1)]
    }

    #trigger() {

        this.#backgroundColor.style.bgColor = this.#colorsRandom();

    }

    #render() {
        let ulMenu = document.querySelector('#menu')
        ulMenu.innerHTML += this.toHTML()
    }

    #eventShow() {
        this.#elementLiBackgroundColor.addEventListener("click", this.#trigger.bind(this))
    }
}
