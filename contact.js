let myName = document.getElementById('nameInput');
console.log(myName.value);

let myEmail = document.getElementById('emailInput');
console.log(myEmail.value);

let myPhone = document.getElementById('phoneInput');
console.log(myPhone.value);

let mySubject = document.getElementById('subjectInput');
console.log(mySubject.value);

let contactForm = document.getElementById('contactForm');

contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    alert("This form has been successsfully submitted");

    
    //handle submit
})