/* --------------------------------------------------------------------------------------*/
/* --------------------------------------------------------------------------------------*/
/* --------------------------------------------------------------------------------------*/
/* ----------------------------- MODAL EVENT OPEN -------------------------------------- */
/* --------------------------------------------------------------------------------------*/
/* --------------------------------------------------------------------------------------*/
/* --------------------------------------------------------------------------------------*/


function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground"); // Ensemble du modal
const modalBtn = document.querySelectorAll(".modal-btn"); // Boutons d'ouverture du modal
const formData = document.querySelectorAll(".formData"); // champs des saisies

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

/* --------------------------------------------------------------------------------------*/
/* --------------------------------------------------------------------------------------*/
/* --------------------------------------------------------------------------------------*/
/* ----------------------------- MODAL EVENT CLOSE ------------------------------------- */
/* --------------------------------------------------------------------------------------*/
/* --------------------------------------------------------------------------------------*/
/* --------------------------------------------------------------------------------------*/


// DOM elements

const closeBtn = document.querySelectorAll(".close"); // Boutons de fermeture du modal


// Close modal event

closeBtn.forEach((close) => close.addEventListener("click", closeModal)); // Pour chaque boutons "close" alors au clic déclenche closeModal


// Close modal action

function closeModal() {
  modalbg.style.display = "none";     // closeModal n'affiche plus le modalbg
}


/* --------------------------------------------------------------------------------------*/
/* --------------------------------------------------------------------------------------*/
/* --------------------------------------------------------------------------------------*/
/* --------------------------- FORM SAISIE DES CHAMPS ---------------------------------- */
/* --------------------------------------------------------------------------------------*/
/* --------------------------------------------------------------------------------------*/
/* --------------------------------------------------------------------------------------*/


// DOM elements
const form = document.getElementById('form');

const first = document.getElementById('first');
const last = document.getElementById('last');
const mail = document.getElementById('email');
const birth = document.getElementById('birthdate');
const participation = document.getElementById('quantity');


// Error Message
const errorFirstName = "Veuillez entrer 2 caractères ou plus pour le champ prénom.";
const errorLastName = "Veuillez entrer 2 caractères ou plus pour le champ nom.";
const errorSpacingName = "Les espaces ne sont pas autorisés.";
const errorNumberName = "Les chiffres ne sont pas autorisés.";
const errorMail = "Veuillez entrer un mail type : exemple@mail.com";
const errorDayOfBirth = "Le jour doit être compris entre 1 et 31.";
const errorMonthOfBirth = "Le mois doit être compris entre 1 et 12.";
const errorYearOfBirth = "L'année doit être comprise entre 1990 et 2023.";

form.addEventListener('submit', (e) => {validate(e)});

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

  if (firstName) {
    alert('OK');
  } else {
    alert("Une erreur s'est produite : Vérifiez les champs");
  }
}


/**
 * fonction de contrôl du champ FirstName
 */


var checkFirstName = () => {
  alert(first.value)
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
  alert(last.value)
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


// CONTACT EMAIL


let regEx = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

let checkMailContact = () => {
  alert(mail.value)
    let value = mail.value

    if (value.trim().match(regEx)) {
      mail.classList.add("valid");
      return true;

    } if (value === ""){
        mail.parentElement.lastElementChild.innerHTML = errorMail;
        mail.classList.add("invalid");
        return false;
    
      } else {
        mail.parentElement.lastElementChild.innerHTML = errorMail;
        mail.classList.add("invalid");
        return false;
    }
}

// BIRTHDAY DATE

let dayBirth = () => {
  let value = birth.value;

if (value > 0 || value < 31) {
  return true
} else {
    birth.parentElement.lastElementChild.innerHTML = errorDayOfBirth;
    birth.classList.add("invalid");
    return false;
  }
}

let monthBirth = () => {
  if (value > 0 || value < 12) {
    return true
  } else {
      birth.parentElement.lastElementChild.innerHTML = errorMonthOfBirth;
      birth.classList.add("invalid");
      return false;
    }
  }

let yearDate = () => {
  
  if (value > 1900 || value < 2023) {
    return true
  } else {
      birth.parentElement.lastElementChild.innerHTML = errorYearOfBirth;
      birth.classList.add("invalid");
      return false;
  }
}

