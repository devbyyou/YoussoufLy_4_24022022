function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
//
const closeBtn = document.querySelector(".close");


const modalThanks = document.querySelector(".booking-thanks");
const openModal = document.querySelectorAll(".openModal");
const modal = document.getElementById("modal");
//-------  fermer le modal
closeBtn.addEventListener("click", closeModal);

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form

function closeModal() {
  modalbg.style.display = "none";
}

//-------------------------------------------------------------------------------------------------




let form = document.querySelector('#loginForm');
//Ecouter la modification du prenom
form.first.addEventListener('change', function() {
  validFirst(this);
});
// ecouter Last
form.last.addEventListener('change', function() {
  validLast(this);
});
// ecouter Number
form.quantity.addEventListener('change', function() {
  validQuantity(this);
});
// ecouter email
form.email.addEventListener('change', function() {
  validEmail(this);
});
// ecouter birthday
form.birthdate.addEventListener('change', function() {
  validBirthdate(this);
});

//--------------------------------------prenom-----------------------------------------------------------



const validFirst = function(inputFirst) { 

  // Creation de la reg pour validation prenom
  let firstRegExp = new RegExp(
    "^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]{2,}$"
  );
  

  let testFirst = firstRegExp.test(inputFirst.value);
  let small = inputFirst.nextElementSibling;

  if(inputFirst.value == ""){
    small.innerHTML = "Ce champ ne peut pas être vide"
    small.classList.add('text-danger');
     small.classList.remove("text-success");
     return false;
  }

  if (testFirst) {
    small.innerHTML = "Le Prénom est valide";
    small.classList.remove('text-danger');
     small.classList.add("text-success");
   return true;
  }else{
  small.innerHTML = "veuillez entrer 2 caractères ou plus pour le champ du prénom";
  small.classList.remove("text-success");
    small.classList.add("text-danger");
    return false;
}

  };
//--------------------------------------nom-----------------------------------------------------------

  
  
  const validLast = function(inputLast) {
    // Creation de la reg pour validation nom
    let lastRegExp = new RegExp(
      "^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]{2,}$"
    );
  
    let testLast = lastRegExp.test(inputLast.value);
    let small = inputLast.nextElementSibling;
  
    if(inputLast.value == ""){
      small.innerHTML = "Ce champ ne peut pas être vide"
      small.classList.add('text-danger');
       small.classList.remove("text-success");
       return false;
    }
    if (testLast) {
      small.innerHTML = "Le Nom est valide";
      small.classList.remove('text-danger');
       small.classList.add("text-success");
     return true;
    }else{
    small.innerHTML = "Le champ du nom de famille a un minimum de 2 caractères";
    small.classList.remove("text-success");
      small.classList.add("text-danger");
      return false;
  }

};
//--------------------------------------NUMBER-----------------------------------------------------------

const validQuantity = function(inputQuantity) {
  // Creation de la reg pour validation nom
  let quantityRegExp = new RegExp(
    "^([0-9]|([1-9][0-9])|100)$"
  );


let testQuantity = quantityRegExp.test(inputQuantity.value);
    let small = inputQuantity.nextElementSibling;
  
  
    if (testQuantity) {
      small.innerHTML = "";
      small.classList.remove('text-danger');
       small.classList.add("text-success");
     return true;
    }else{
    small.innerHTML = "Veuillez entrer un nombre entier compris entre 0 et 99";
    small.classList.remove("text-success");
      small.classList.add("text-danger");
      return false;
  } 

};

//-------------------------------- Validation EMAIL-----------------

const validEmail = function(inputEmail) {
  // Creation de la reg pour validation email
  let emailRegExp = new RegExp(
      '^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$', 'g'
  );

let testEmail = emailRegExp.test(inputEmail.value);
let br = inputEmail.nextElementSibling;

 
      if (testEmail) {
          br.innerHTML = "L'adresse électronique est valide";
          br.classList.remove('text-danger');
          br.classList.add("text-success");
         return true;
        }else{
        br.innerHTML = "L'adresse électronique n'est pas valide";
        br.classList.remove("text-success");
          br.classList.add("text-danger");
          return false;
      }
   
    };
    //-------------------------------- Validation brirthdaTE-----------------
    



const validBirthdate = function(inputBirthdate) {
  
  const birthdateRegExp = /^((19[3-9]+[0-9]|200[0-9])-(0?[1-9]|1[0-2])-(0?[1-9]|[12]\d|3[01])|(0?[1-9]|[12]\d|3[01])[/](0?[1-9]|1[0-2])[/](19[3-9]+[0-9]|200[0-6]))$/

let testBirthdate = birthdateRegExp.test(inputBirthdate.value);
let small = inputBirthdate.nextElementSibling;

 
      if (testBirthdate) {
          small.innerHTML = "La date est valide";
          small.classList.remove('text-danger');
           small.classList.add("text-success");
         return true;
        }else{
        small.innerHTML = "La date n'est pas valide";
        small.classList.remove("text-success");
          small.classList.add("text-danger");
          return false;
      }
   
    };

    //-------------------------------- Validation ville-----------------
const validateTown = function() {

  const radioList = form.querySelectorAll('input[name="location"]');

    let radioValue;
    
    let rcheck = false ;
    radioList.forEach((el) => {
        if (el.checked) {
          radioValue = el.value;  
          rcheck = true ;
                 }
        
      });

    if (!radioValue) {
      showFieldError(radioList[0]);
      
    }else {
      hideFieldError(radioList[0]);
    }
    return rcheck ;
  }

  const validateTermCondition = function() {

    const terms = form.querySelectorAll('input[name="terms"]')[0];
    if (!terms.checked) {
      showFieldError(terms);
      
      return false;

    } else {
      hideFieldError(terms);
      return true;
    }
  }


  //--------------------------------------SUBMIT-----------------------------------------------------------
form.addEventListener("submit", function(e) {
  e.preventDefault();
validEmail(form.email);
validFirst(form.first);
validLast(form.last);
validQuantity(form.quantity);
validBirthdate(form.birthdate);
validateTown();
validateTermCondition();




      if(validEmail(form.email) 
      && validQuantity(form.quantity) 
      && validLast(form.last) 
      && validBirthdate(form.birthdate) 
      && validFirst(form.first)
      && validateTown()
      && validateTermCondition()
      ){

          // form.submit();
               
        form.style.display = "none";
        modalThanks.style.display = "block";

      }

});


/**
 * Show field error
 * @param {HTMLElement} el
 */
 function showFieldError(el) {
  el.closest('.formData').dataset.errorVisible = 'true';
}

/**
 * Hide field error
 * @param {HTMLElement} el
 */
 function hideFieldError(el) {
  el.closest('.formData').dataset.errorVisible = 'null';
}


