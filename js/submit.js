let form = document.querySelector("form")
let email = document.getElementById("email")

form.addEventListener("submit", (e) => {
 e.preventDefault()
  
  emailValidate()
})

function emailValidate() {
 let emailValue =  email.value.trim();
 let validaremail = document.getElementById("email").value
 let  emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/ ;

 if(emailValue === '') {
   setErrorMsg(email,'Please provide a valid email')
 }  else {
  setErrorMsg(email,'Please provide a valid email')
 }
 
 if(emailPattern.test(validaremail)) {
  setSuccMsg(email)
 } else {
  setErrorMsg(email,'Please provide a valid email')
 }





 function  setErrorMsg(input, msg) {
   const errorMsg = input.parentElement;
   const errorline = document.querySelector('.error-txt');
   const icon = document.querySelector('i')
   icon.classList.add('error')
   input.classList.add('red')
   input.classList.add('red-2') 
   errorline.innerText = msg;
 }

 function  setSuccMsg(input, msg) {
  const errorMsg = input.parentElement;
   const errorline = document.querySelector('.error-txt');
   const icon = document.querySelector('i')
   icon.classList.remove('error')
   input.classList.remove('red')
   input.classList.remove('red-2') 
   errorline.innerText = ' ';
 }
}