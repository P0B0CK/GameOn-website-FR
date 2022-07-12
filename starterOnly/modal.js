// DOM Elements
const form = document.getElementById('form'); // Formulaire
const modalbg = document.querySelector(".bground"); // Ensemble du modal
const modalBtn = document.querySelectorAll(".modal-btn"); // Boutons d'ouverture du modal
const formData = document.querySelectorAll(".formData"); // champs des saisies
const modalRegister = document.querySelector(".content--confirmation");
const btnConfirmation = document.querySelector(".btn-soon");

const first = document.getElementById('first');
const last = document.getElementById('last');
const mail = document.getElementById('email');
const birth = document.getElementById('birthdate');
const participation = document.getElementById('quantity');
const locationRadio = document.querySelector('input[name="location"]');
const btnCGU = document.getElementById('checkbox1');

const closeBtn = document.querySelectorAll(".close"); // Boutons de fermeture du modal

const isValidDate = (date) => {
  return (new Date(date) !== "Invalid Date") && !isNaN(new Date(date));
}

// Error Message

const errorFirstName = "Veuillez entrer 2 caractères ou plus pour le champ prénom.";
const errorLastName = "Veuillez entrer 2 caractères ou plus pour le champ nom.";
const errorMail = "Veuillez entrer un mail type : exemple@mail.com";
const errorBirthday = "Vous devez entrer votre date de naissance.";
const errorParticipation = "Veuillez renseigner une valeur comprise entre 0 et 99.";
const errorLocation = "Vous devez choisir une option.";
const errorCGU = "Vous devez vérifier que vous acceptez les termes et conditions.";

function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// Variables

let regEx = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;


/**
 * Event ouverture du modal
 */
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

/**
 * Ouvrir le modal
 */
function launchModal() {
  modalbg.style.display = "block";
}

/**
 * Bouton de fermeture du modal
 */
closeBtn.forEach((close) => close.addEventListener("click", closeModal));

/**
 * Bouton "A Bientôt !" quitte/ferme le modal 
 */

document.querySelector(".btn-soon").addEventListener("click", closeModal);


/**
 * Close modal action
 */
function closeModal() {

  form.reset();
  form.querySelectorAll('.formData').forEach(el => {
    el.lastElementChild.innerHTML = "";
    el.querySelector('input').classList.remove("invalid");
  })

  modalbg.style.display = "none";     // closeModal n'affiche plus le modalbg
  form.style.display = "block";
  modalRegister.style.display = "none";
}

form.addEventListener('submit', (e) => { validate(e) });

/**
 * Deuxième implémentation
 * @param {Event} e 
 */

function validate(e) {
  console.log(e)
  e.preventDefault();
  let firstName = checkFirstName();
  let lastName = checkLastName();
  let mailContact = checkMailContact();
  let IsValidBirthday = checkBirthdayDate();
  let IsValidParticipation = checkParticipation();
  let IsValidLocation = checkBtn();
  let IsValidCGU = checkCGU();


  if (firstName && lastName && mailContact && IsValidBirthday && IsValidParticipation && IsValidLocation && IsValidCGU) {
    form.style.display = "none";
    modalRegister.style.display = "block";
  } 
    else {
      first.addEventListener("input", checkFirstName);
      last.addEventListener("input", checkLastName);
      mail.addEventListener("input", checkMailContact);
      birth.addEventListener("input", checkBirthdayDate);
      participation.addEventListener("input", checkParticipation);
      locationRadio.addEventListener("input", checkBtn);
      btnCGU.addEventListener("input", checkCGU);
    }
}

/**
 * 
 * @returns fonction de contrôl des champs du formulaire
 */

let checkFirstName = () => {
  let value = first.value;
  //test non concluant
  if (!value || value.trim().length < 2) {
    first.parentElement.lastElementChild.innerHTML = errorFirstName;
    first.classList.add('invalid');
    return false;
  }
  //Test concluant
  else {
    first.parentElement.lastElementChild.innerHTML = "";
    first.classList.remove("invalid");
    return true;
  }
}

let checkLastName = () => {
  let value = last.value;

  if (!value || value.trim().length < 2) {
    last.parentElement.lastElementChild.innerHTML = errorLastName;
    last.classList.add('invalid');
    return false;
  }
  else {
    last.parentElement.lastElementChild.innerHTML = "";
    last.classList.remove("invalid");
    return true;
  }
}


let checkMailContact = () => {
  let value = mail.value

  if (value.trim().match(regEx)) {
    mail.parentElement.lastElementChild.innerHTML = "";
    mail.classList.remove("invalid");
    return true;

  } if (value === "") {
    mail.parentElement.lastElementChild.innerHTML = errorMail;
    mail.classList.add("invalid");
    return false;

  } else {
    mail.parentElement.lastElementChild.innerHTML = errorMail;
    mail.classList.add("invalid");
    return false;
  }
}


let checkBirthdayDate = () => {
  console.log("date de naissance = " + birth.value)
  let value = birth.value;

  let valueDate = new Date(value);
  let currentDate = new Date();

  if (!isValidDate(value)) {
    birth.parentElement.lastElementChild.innerHTML = errorBirthday;
    birth.classList.add('invalid');
    return false;
  } else if (valueDate.getFullYear() >= currentDate.getFullYear()-18) {
    birth.parentElement.lastElementChild.innerHTML = errorBirthday;
    birth.classList.add('invalid');
  }
  else {
    birth.parentElement.lastElementChild.innerHTML = "";
    birth.classList.remove("invalid");
    return true;
  }
}


let checkParticipation = () => {
  let value = participation.value
  let regexNumbers = /^[0-9]{1,2}$/

  if (value.trim().match(regexNumbers)) {
    participation.classList.remove("invalid");
    return true;
  }
    else {
      participation.parentElement.lastElementChild.innerHTML = errorParticipation;
      participation.classList.add("invalid");
      return false;
    }
}


let checkBtn = () => {
  let checkedLocation = document.querySelector('input[name="location"]:checked');


  if (!checkedLocation) {
    locationRadio.parentElement.lastElementChild.innerHTML = errorLocation;
    locationRadio.classList.add('invalid');
    return false;
  }
    else {
      locationRadio.parentElement.lastElementChild.innerHTML = "";
      locationRadio.classList.remove("invalid");
      return true;
    }
}


let checkCGU = () => {

  if (btnCGU.checked == true) {
    btnCGU.parentElement.lastElementChild.innerHTML = "";
    btnCGU.classList.remove('invalid');
    return true;
  }
  else {
    btnCGU.parentElement.lastElementChild.innerHTML = errorCGU;
    btnCGU.classList.add("invalid");
    return false;
  }
}

//document.getElementById('checkbox1').checked = true;