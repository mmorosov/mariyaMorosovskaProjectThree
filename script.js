
// Specialty Class constructor
// We have not covered this method of creating objects in class (I think), but I saw this way of creating object prototypes through a function in a JS book, and wanted to try it out

class Specialty {
    constructor(name, health, magic, chill, energy, value) {
        this.name = name;
        this.health = health;
        this.magic = magic;
        this.chill = chill;
        this.energy = energy;
        this.value = value;
    }
}

const socialGuru = new Specialty('Social', 100, 10, 0, 50, 'socialGuru');
const witchcraft = new Specialty('Witch', 100, 100, 0, 50, 'witchcraft');
const fitness = new Specialty('Fit', 100, 100, 0, 50, 'fitness');
const greenThumb = new Specialty('Planty', 100, 50, 0, 50, 'greenThumb');
const bookButterfly = new Specialty('Reader', 100, 30, 0, 50, 'bookButterfly');

const specialtyArray = [socialGuru, witchcraft, fitness, greenThumb, bookButterfly]

// Empty Character type 


// Assign a namespace object for the app
const characterApp = {};

// Assign a blank object to contain Hero properties
let hero = {};

// Get user form input
characterApp.getFirstName = () => {
    $('#firstName').on('change', function(e) {
        const saveFirstName = e.target.value;
        $('.firstNameText').html(`${saveFirstName}`);
        hero.firstName = saveFirstName;
    })
};

characterApp.getLastName = () => {
    $('#lastName').on('change', function (e) {
        const saveLastName = e.target.value;
        $('.lastNameText').html(`${saveLastName}`);
        hero.lastName = saveLastName;
    })
};

characterApp.getSpecialty = () => {
    $('.specialtyClass').on('click', function(input) {
        hero.specialty = '';        
        if ($(this).is(':checked')) {
            const saveSpecialty = input.target.value;
            let userSelection;
            for (let i = 0; i < specialtyArray.length; i++) {
                const data = specialtyArray[i].value;              
                if (saveSpecialty.includes(data)) {
                    userSelection = specialtyArray[i];
                    $('.specialtyText').html(`
                    <div>${userSelection.name}</div> 
                    <div>${userSelection.health}</div> 
                    <div>${userSelection.magic}</div> 
                    <div>${userSelection.chill}</div>
                    <div>${userSelection.energy}</div>
                    `);
                    hero.specialty = userSelection;               
                }
            }
        }
    })
};

// function to get three skills values from the checkbox fieldset
characterApp.getSkills = () => {
    // hero key for 'skills' set up to save the three inputs into it.
    hero.skills = [];
    $('.newSkill').on('click', function (input) {
        if ($(this).is(':checked')) {
            const saveSkills = input.target.value;
            // push checkbox selections into the array
            // bug: checkbox selections keep appending items to the array
            // solution: need to think of a way fo filter unchecked boxes
            hero.skills.push(saveSkills);
            $('.skillsText').html(`
            ${hero.skills[0]} 
            ${hero.skills[1]} 
            ${hero.skills[2]}
            `) 
        }
    })
};




// when a radio option is checked, change label styling
$('input[type=radio]').on('click', function () {
    $(this).parent().addClass('custom').siblings().removeClass('custom');
});

// only allow three skills checkboxes to remain checked at a time
$('input[type=checkbox]').on('click', function () {
    $(this).parent().toggleClass('custom');
    let checkNum = $("input[type=checkbox]:checked").length >= 3;
    $('input[type=checkbox]').not(':checked').attr('disabled', checkNum);
});

// Display user form input in the DOM
characterApp.displayUserInput = () => {};

// Initialize app
characterApp.init = () => {
    characterApp.getFirstName();
    characterApp.getLastName();
    characterApp.getSpecialty();
    characterApp.getSkills();
    characterApp.displayUserInput();
}

// Document ready
$(function() {
    characterApp.init();
});



