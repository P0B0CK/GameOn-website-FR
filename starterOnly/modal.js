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

// Error Message
const ErrorFirstName = "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";


/**
 * Première implémentation d'une fonction
 * @param {Event} e 
 */
function validate(e) {
    alert("Submit du formulaire");
}

/**
 * Deuxième implémentation
 * @param {Event} e 
 */
const submitHandler = (e) => {
    e.preventDefault();
    let bFirstName = checkFirstName();
    //let bLastName = checkLastName();
    //...
    //...
    //...

    if(bFirstName)
        alert("OK");

}

form.addEventListener('submit', submitHandler);

/**
 * fonction de contrôl du champ FirstName
 */
var checkFirstName = () => {
    let value = first.value;
    //test non concluant
    if (!value || value.length < 2) {
        first.parentElement.lastElementChild.innerHTML = ErrorFirstName;
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

