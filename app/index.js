// Load application styles
import 'styles/index.css';

const el = el => document.getElementById(el);

function Carusel(imageNum) {
    this.focus = 0;
    this.imageNum = imageNum;
}

Carusel.prototype.moveHorizontal = function (direction) {
    direction === "left" ? this.focus++ : this.focus--;
    if (this.focus === 1) this.focus = -this.imageNum + 1;
    if (this.focus === -this.imageNum) this.focus = 0;
    el("image-list").style.transform = 'translate(' + 600 * this.focus + 'px)';
}

Carusel.prototype.getBtn = function (direction) {
    el(direction + 'Btn')
        .addEventListener('click', Carusel.prototype.moveHorizontal.bind(this, direction))
}

const imageNum = el("image-list").children.length;
const carusel = new Carusel(imageNum);

carusel.getBtn('left');
carusel.getBtn('right');