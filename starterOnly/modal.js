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
const lastName = document.getElementById('last');
const mail = document.getElementById('email');
const birth = document.getElementById('birthdate');
const participation = document.getElementById('quantity');


// Error Message
const errorFirstName = "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
const errorSpacingName = "Les espaces ne sont pas autorisés.";
const errorNumberName = "Les chiffres ne sont pas autorisés."

form.addEventListener('submit', (e) => {validate(e)});

/**
 * Deuxième implémentation
 * @param {Event} e 
 */

function validate(e) {
  console.log(e)
  e.preventDefault();
  let firstName = checkFirstName();
  //let lastName = checkLastName();

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

