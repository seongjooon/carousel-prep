// Load application styles
import 'styles/index.css';

function Carusel(numOfImages) {
    this.focus = 0;
    this.numOfImages = numOfImages;
}

Carusel.prototype.moveHorizontal = function (direction) {
    direction === "left" ? this.focus++ : this.focus--;
    if (this.focus === 1) this.focus = -this.numOfImages + 1;
    if (this.focus === -this.numOfImages) this.focus = 0;
    document.getElementById("image-list").style.transform = 'translate(' + 600 * this.focus + 'px)';
};

Carusel.prototype.bindButtonAction = function (direction) {
    document.getElementById(direction + 'Btn')
        .addEventListener('click', this.moveHorizontal.bind(this, direction));
};

const numOfImages = document.getElementById("image-list").children.length;
const carusel = new Carusel(numOfImages);

carusel.bindButtonAction('left');
carusel.bindButtonAction('right');
