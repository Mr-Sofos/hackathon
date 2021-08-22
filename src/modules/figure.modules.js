import { Module } from "../core/module";
import { random } from "../utils";
// массив массивов с цветами для создания градиентов
const arrGrad = [
  ["#92FFC0", "#002661"],
  ["#fab2ff", "#1904e5"],
  ["#FF6FD8", "#3813C2"],
  ["#FFA8A8", "#FCFF00"],
  ["#3C8CE7", "#00EAFF"],
  ["#FFF720", "#3CD500"],
];
export default class FigureModule extends Module {
  #elementLiFigure;
  #figure;
  constructor(type, text) {
    super(type, text);
    this.main = document.querySelector("#menu");
    this.#figure = document.createElement("div");
    this.render();
    this.#elementLiFigure = document.querySelector('[data-type="figure"]');
    this.#eventShow();
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
  #trigger() {
    let [a, b, c, d, e, f, g, i] = this.randomArr();
    const { width } = document.body.getBoundingClientRect();
    let height = width < 650 ? width : 650;
    let size = random(50, Math.round(height / 2));
    let colors = this.createGrad();
    let x = random(0, width - (size + size / 2));
    let y = random(0, height - (size + size / 2));
    this.#figure.className = "figure";
    this.#figure.style.borderRadius = `${a}% ${b}% ${c}% ${d}% / ${e}% ${f}% ${g}% ${i}%`;
    this.#figure.style.boxShadow = `0 0 2px ${colors[0]}, 0 0 10px ${colors[0]}`;
    this.#figure.style.height = `${size}px`;
    this.#figure.style.width = `${size}px`;
    this.#figure.style.top = `${y}px`;
    this.#figure.style.left = `${x}px`;
    this.#figure.style.backgroundImage = `linear-gradient(135deg, ${colors[0]} 10%, ${colors[1]} 100%)`;
    document.body.append(this.#figure);
  }
  render() {
    let ulMenu = document.querySelector("#menu");
    ulMenu.innerHTML += this.toHTML();
  }
  #eventShow() {
    this.#elementLiFigure.addEventListener("click", this.#trigger.bind(this));
  }
}
