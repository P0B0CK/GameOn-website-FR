/* LES CHAMPS REQUIS */

/* First and last NAME */
let firstName = document.getElementById('first');

firstName.addEventListener('submit')



/* FORMULAIRE D'INSCRIPTION*/


/* TABLEAU DES PARTICIPANTS */ 
let participants = ['Paul']


/* INFORMATIONS DES PARTICIPANTS */
let participant = {
    firstName: 'Paul',
    lastName:'Blanchon',
    mail: 'paulb@gmail.com',
    dateOfBirth: 22/05/1991,
    numberOfParticipation: 4,
    Place: 'Chicago'
    agreement: true,
    nextEvents: true
}

if (participant.firstName === '') {
    console.log('ok')
} else {
    console.log('erreur')
}