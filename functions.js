
const firstName = document.querySelector('#firstName')
console.log(firstName);

class Specialty {
    constructor(name, health, magic, chill, energy) {
        this.name = name;
        this.health = health;
        this.magic = magic;
        this.chill = chill;
        this.energy = energy;
    }
}

const socialGuru = new Specialty('Social', 100, 10, 0, 50);
const witchcraft = new Specialty('Witch', 85, 100, 0, 50);
const fitness = new Specialty('Fit', 100, 10, 0, 50);
const greenThumb = new Specialty('Planty', 100, 50, 0, 50);
const bookButterfly = new Specialty('Reader', 85, 30, 0, 50);

console.log(greenThumb)
