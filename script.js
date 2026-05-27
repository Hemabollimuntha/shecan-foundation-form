const form =
document.getElementById("contactForm");

const successMessage =
document.getElementById("successMessage");

form.addEventListener("submit", function(event){

    event.preventDefault();

    successMessage.style.display = "block";

    form.reset();

}); 
