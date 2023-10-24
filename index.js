
        function afficherSidebar(){
            const sidebar = document.querySelector('.sidebar')
          sidebar.style.display ='flex'
        }

        function anulleSidebar(){
            const sidebar = document.querySelector('.sidebar')
          sidebar.style.display ='none'
        }
 





        /************************panier js******************** */

        document.addEventListener('DOMContentLoaded', function () {
            const removeButtons = document.querySelectorAll('.buttonRetirer');
            const quantityInputs = document.querySelectorAll('input[type="number"]');
            const totalElement = document.querySelector('.prix-total');
        
            
            
        
          
            removeButtons.forEach((button) => {
                button.addEventListener('click', () => {
                    const productDiv = button.parentElement;
                    productDiv.remove();
                    updateTotal();
                    

                });
            });
        
            
            quantityInputs.forEach((input) => {
                input.addEventListener('change', () => {
                    updateTotal();
                });
            });
        
            function updateTotal() {
                let newTotal = 0;

                quantityInputs.forEach((input) => {
                    const productDiv = input.parentElement;
                    const priceElement = productDiv.querySelector('.prix');
                    const price = parseFloat(priceElement.textContent.replace('$', ''));
                    const quantity = parseInt(input.value);
                    newTotal += price * quantity;
                });
                
        
                totalElement.textContent = '$' + newTotal.toFixed(2);
            }
            
            updateTotal();
        });
        



        
        

        
        

      




        /****************************************************************************/
        
        

       



const form = document.getElementById("form");
const emailInput = document.getElementById("email");
const emailError = emailInput.nextElementSibling ;
const cardNumberInput = document.getElementById("cardNumber");
const cardNumberError = cardNumberInput.nextElementSibling;
const expirationInput = document.getElementById("expiration");
const expirationError = expirationInput.nextElementSibling;
const cvvInput = document.getElementById("cvv");
const cvvError = cvvInput.nextElementSibling;
const nomInput = document.getElementById("name");
const nomError = nomInput.nextElementSibling;
const addressInput = document.getElementById("address");
const adressError = addressInput.nextElementSibling;
const cityInput = document.getElementById("city");
const cityError = cityInput.nextElementSibling;
const zipInput = document.getElementById("zip");
const zipError = zipInput.nextElementSibling;


form.addEventListener("input", function (event) {

    if (event.target === emailInput) {
        if (!validateEmail(emailInput.value)) {
          emailInput.style.border = "2px solid orange";
          emailError.textContent = "L'email Invalide";
          emailError.classList.add("error");
        } else {
          emailInput.style.border = "2px solid #65e20d";
          emailError.classList.add("valid");
          emailError.classList.remove("error");
          emailError.textContent = "Valide";
        }
      }


      if (event.target === cardNumberInput) {
        if (!/^\d{16}$/.test(cardNumberInput.value)) {
          cardNumberInput.style.border = "2px solid orange";
          cardNumberError.textContent = "Le numéro de carte doit contenir 16 chiffres";
          cardNumberError.classList.add("error");
        } else {
          cardNumberInput.style.border = "2px solid #65e20d";
          cardNumberError.classList.add("valid");
          cardNumberError.classList.remove("error");
          cardNumberError.textContent = "Valide";
        }
      }

      if (event.target === nomInput) {
        const nameValue = nomInput.value;
        const words = nameValue.split(' ');
      
        if (words.length >= 2) {
          nomInput.style.border = "2px solid #65e20d";
          nomError.classList.add("valid");
          nomError.classList.remove("error");
          nomError.textContent = "Valide";
        } else {
          nomInput.style.border = "2px solid orange";
          nomError.textContent = "Veuillez entrer un nom et un prénom valide";
          nomError.classList.add("error");
        }
      }
      

      if (event.target === addressInput) {
        const addressValue = addressInput.value;
      
        if (addressValue.trim() !== '') {
          addressInput.style.border = "2px solid #65e20d";
          adressError.classList.add("valid");
          adressError.classList.remove("error");
          adressError.textContent = "Valide";
        } else {
          addressInput.style.border = "2px solid orange";
          adressError.textContent = "Veuillez entrer une adresse valide";
          adressError.classList.add("error");
        }
      }
      
      if (event.target === cvvInput) {
        const cvvValue = cvvInput.value;
      
        if (/^\d{3,4}$/.test(cvvValue)) {
          cvvInput.style.border = "2px solid #65e20d";
          cvvError.classList.add("valid");
          cvvError.classList.remove("error");
          cvvError.textContent = "Valide";
        } else {
          cvvInput.style.border = "2px solid orange";
          cvvError.textContent = "Veuillez entrer un CVV valide (3 ou 4 chiffres)";
          cvvError.classList.add("error");
        }
      }
      

      if (event.target === expirationInput) {
        const expirationValue = expirationInput.value;
      
        if (/^\d{2}\/\d{2}$/.test(expirationValue)) {
          expirationInput.style.border = "2px solid #65e20d";
          expirationError.classList.add("valid");
          expirationError.classList.remove("error");
          expirationError.textContent = "Valide";
        } else {
          expirationInput.style.border = "2px solid orange";
          expirationError.textContent = "Veuillez entrer une date d'expiration valide (MM/YY)";
          expirationError.classList.add("error");
        }
      }
      

      if (event.target === cityInput) {
        if (cityInput.value.trim() === "") {
          cityInput.style.border = "2px solid orange";
          cityError.textContent = "Veuillez entrer votre ville.";
          cityError.classList.add("error");
          
        } else {
          cityInput.style.border = "2px solid #65e20d";
          cityError.classList.add("valid");
          cityError.classList.remove("error");
          cityError.textContent = "Valide";
        }
      }

      
      if (event.target === zipInput) {
        if (/^\d{5}$/.test(zipInput.value)) {
          zipInput.style.border = "2px solid #65e20d";
          zipError.classList.add("valid");
          zipError.classList.remove("error");
          zipError.textContent = "Valide";
        } else {
          zipInput.style.border = "2px solid orange";
          zipError.textContent = "Code postal invalide (5 chiffres).";
          zipError.classList.add("error");
        }
      }
      

      
  
});

function validateEmail(email) {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailPattern.test(email);
}







    


        
        
 


        


        




















        