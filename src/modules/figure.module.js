import { random } from "../utils";
import {Module} from '../core/module.js'

// массив массивов с цветами для создания градиентов
const arrGrad = [
  ["#92FFC0", "#002661"],
  ["#fab2ff", "#1904e5"],
  ["#FF6FD8", "#3813C2"],
  ["#FFA8A8", "#FCFF00"],
  ["#3C8CE7", "#00EAFF"],
  ["#FFF720", "#3CD500"],
];

export default class FigureModule extends Module{
  constructor(type, text) {
	  super(type, text)
    this.main = document.querySelector("#menu");
    this.figure = document.createElement("div");
  }
  // эта функция возвращает массив случайный цифр в диапазоне от 1 до 100
  //например [100, 0, 15, 16, 22, 55, 44, 78]
  randomArr() {
    return Array.from({ length: 8 }, () => random(1, 100));
  }
  // эта функция возвращает рандомно один массив из массива массивов arrGrad
  // например ["#FF6FD8", "#3813C2"]
  createGrad() {
    let index = random(0, arrGrad.length - 1);
    return arrGrad[index];
  }

  render() {
		let ulMenu = document.querySelector('#menu')
		ulMenu.innerHTML += this.toHTML()
		
    // временно. Удаляю класс .menu т.к. там свойство  display: none (из за этого не показывает фигуру)
    this.main.classList.remove("menu");
    this.main.classList.add("menuGradient");
    // присваиваю значения переменных из массива randomArr
    // дальше они используются для создания borderRadius
    let [a, b, c, d, e, f, g, i] = this.randomArr();
    const { width } = this.main.getBoundingClientRect();
    let height = width < 650 ? width : 650;

    let size = random(50, Math.round(height / 2));
    let colors = this.createGrad();

    // динамическое размещение
    let x = random(0, width - (size + size / 2));
    let y = random(0, height - (size + size / 2));

    console.log("x", x);
    console.log("y", y);
    this.figure.className = "figure";
    // создание формы фигуры
    this.figure.style.borderRadius = `${a}% ${b}% ${c}% ${d}% / ${e}% ${f}% ${g}% ${i}%`;
    // размытие
    this.figure.style.boxShadow = `0 0 2px ${colors[0]}, 0 0 10px ${colors[0]}`;
    // создание размера фигуры
    this.figure.style.height = `${size}px`;
    this.figure.style.width = `${size}px`;

    this.figure.style.top = `${y}px`;
    this.figure.style.left = `${x}px`;

    // создание градиента
    this.figure.style.backgroundImage = `linear-gradient(135deg, ${colors[0]} 10%, ${colors[1]} 100%)`;
    // встраиваю созданную фигуру в html
    this.main.append(this.figure);
  }
}
