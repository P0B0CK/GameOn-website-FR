/* --------------------------------------------------------------------------------------*/
/* --------------------------------------------------------------------------------------*/
/* --------------------------------------------------------------------------------------*/
/* ----------------------------- MODAL EVENT OPEN -------------------------------------- */
/* --------------------------------------------------------------------------------------*/
/* --------------------------------------------------------------------------------------*/
/* --------------------------------------------------------------------------------------*/



// DOM Elements
const form = document.getElementById('form'); // Formulaire
const modalbg = document.querySelector(".bground"); // Ensemble du modal
const modalBtn = document.querySelectorAll(".modal-btn"); // Boutons d'ouverture du modal
const formData = document.querySelectorAll(".formData"); // champs des saisies

const first = document.getElementById('first');
const last = document.getElementById('last');
const mail = document.getElementById('email');
const birth = document.getElementById('birthdate');
const participation = document.getElementById('quantity');
const locationRadio = document.querySelector('input[name="location"]');
const btnCGU = document.getElementById('checkbox1');

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


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// DOM elements

const closeBtn = document.querySelectorAll(".close"); // Boutons de fermeture du modal


// Close modal event

closeBtn.forEach((close) => close.addEventListener("click", closeModal)); // Pour chaque boutons "close" alors au clic déclenche closeModal



/**
 * Close modal action
 */
function closeModal() {


  let inputs = document.querySelectorAll('input');
  let spans = document.querySelector('span.error-message')

  form.reset();
  form.querySelectorAll('.formData').forEach(el => {
    el.lastElementChild.innerHTML = "";
    el.querySelector('input').classList.remove("invalid");
  })
  //inputs.forEach(input => input.value = '');
  //spans.forEach(span => span.value = '');
  modalbg.style.display = "none";     // closeModal n'affiche plus le modalbg
}

// A chaque fermeture du modal on remet à zéro les inputs et on réinitialise les messages d'erreurs
/*  if (firstName && lastName && mailContact && IsValidBirthday && IsValidParticipation && IsValidLocation && IsValidCGU) { 
    
    inputs.forEach(input => input.value = '');
    
  };*/



/* --------------------------------------------------------------------------------------*/
/* --------------------------------------------------------------------------------------*/
/* --------------------------------------------------------------------------------------*/
/* --------------------------- FORM SAISIE DES CHAMPS ---------------------------------- */
/* --------------------------------------------------------------------------------------*/
/* --------------------------------------------------------------------------------------*/
/* --------------------------------------------------------------------------------------*/



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
    alert('Merci ! Votre réservation a été reçue.');
    //closeModal();
  }

  else {
    //alert("Une erreur s'est produite : Vérifiez les champs");
  }
}
/*
function reinitialisation(e) {
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
    alert('Merci ! Votre réservation a été reçue.');
    //closeModal();
  } 
  
    else {
      alert("Une erreur s'est produite : Vérifiez les champs");
    }
}*/



/**
 * 
 * @returns fonction de contrôl du champ FirstName
 */

var checkFirstName = () => {
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
  //alert(last.value)
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
  //alert(mail.value)
  let value = mail.value

  if (value.trim().match(regEx)) {
    mail.classList.add("valid");
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



// BIRTHDAY DATE



let checkBirthdayDate = () => {
  console.log("date de naissance = " + birth.value)
  let value = birth.value;

  let valueDate = new Date(value);


  if (!isValidDate(value)) {
    birth.parentElement.lastElementChild.innerHTML = errorBirthday;
    birth.classList.add('invalid');
    return false;
  } else if (valueDate.getFullYear() >= 2004) {
    birth.parentElement.lastElementChild.innerHTML = errorBirthday;
    birth.classList.add('invalid');
  }
  else {
    birth.parentElement.lastElementChild.innerHTML = "";
    birth.classList.remove("invalid");
    return true;
  }
}

const isValidDate = (date) => {
  return (new Date(date) !== "Invalid Date") && !isNaN(new Date(date));
}



// NOMBRE DE PARTICIPATION



let checkParticipation = () => {
  let value = participation.value
  let regexNumbers = /^[0-9]{1,2}$/

  if (value.trim().match(regexNumbers)) {
    participation.classList.add("valid");
    return true;
  }
  /*
  // Si ce champ à une valeur non numérique alors elle est de 0
  else if (value === isNaN) {
    console.log('Si ce champ à une valeur non numérique alors elle est de 0')
    value === 0;
  }
  // Si ce champ n'est pas renseigné alors elle est de 0
  else if (value == null) {
    console.log('Si ce champ n\'est pas renseigné alors elle est de 0')
    value === 0;
  }
  */

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



// Checked

//document.getElementById('location1').checked = true;

document.getElementById('checkbox1').checked = true;



// Conditions Générales d'utilisation 


let checkCGU = () => {

  if (btnCGU.checked == true) {
    btnCGU.parentElement.lastElementChild.innerHTML = "";
    btnCGU.classList.add('valid');
    return true;
  }
  else {
    btnCGU.parentElement.lastElementChild.innerHTML = errorCGU;
    btnCGU.classList.remove("invalid");
    return false;
  }
}