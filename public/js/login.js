// MODAL stuff: login, open modal
const logInModalEl = document.getElementById('logInButton');
const modalContLog = document.getElementById('logInModal');
logInModalEl.addEventListener('click', function() {
  event.preventDefault();
  modalContLog.classList.add('is-active');
});
// login, close modal
const modalLogCloseEl = document.getElementById('modalLogClose');
modalLogCloseEl.addEventListener('click', function() {
  modalContLog.classList.remove('is-active');
});

// sign in, open modal
const signInEl = document.getElementById('signInButton');
const modalSignLog = document.getElementById('signInModal');
signInEl.addEventListener('click', function() {
  event.preventDefault();
  modalSignLog.classList.add('is-active');
});
// sign in, close modal
const modalCloseEl = document.getElementById('modalSignClose');
modalCloseEl.addEventListener('click', function() {
  modalSignLog.classList.remove('is-active');
});
// modal close (X). . .
const modalClose = function() {
	location.reload();
};


// login form
const loginFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#name-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (name && password) {
    const response = await fetch('/api/user/login', {
    method: 'POST',
    body: JSON.stringify({ name, password }),
    headers: { 'Content-Type': 'application/json' },
      });

  if (response.ok) {
    document.location.replace('/');
  } else {
    alert('Failed to log in.');
  }
  }
};


// sign up form
const signupFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#name-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (name && email && password) {
    const response = await fetch('/api/user', {
    method: 'POST',
    body: JSON.stringify({ name, email, password }),
    headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.location.replace('/');

    } else {
        alert('Failed to sign up.');
    }
  }
};

// bulbasaur signup
// var flag = 0;

// $( ".email" ).keyup(function() {
//   var letterCount = $(this).val().length;
//   var count = letterCount/2.5;
//   var countEyes = letterCount;
  
//   if(letterCount >= 1 && letterCount < 34){
//     $(".pupil, .pupil2").css("transform","translate("+count+"px, 7px)");
//     $(".mouth").css("height",countEyes+"px");
//   }
// });

//  setInterval(function(){
//    if($(".pass").is(":focus") == false && flag == 0){
//      $(".eye").hide();
//      setTimeout(function(){ 
//        $(".eye").show(); 
//      }, 200);}
//  }, 2500);

// $( ".pass" ).focus(function() {
//   resetEyes();
//   if(flag == 0){
//     $(".eye").hide();
//   }
//   if(flag == 1){
//     $(".eye-right").show();
//   }
// });

// $( ".email" ).focus(function() {
//   $(".eye").show();
// });

// $(".show").on("click", function(){
//   if(flag == 1){
//     $(".eye-left").show();
//   }
// });

// function show() {
//   if(flag == 0){
//     flag = 1;
//   }else{
//     flag = 0;
//     $(".eye").hide();
//   }
//   var x = document.getElementById("pass");
//   if (x.type === "password") {
//     x.type = "text";
//   } else {
//     x.type = "password";
//   }
// }

// function validate(){
//   var email = $(".email").val();
//   var regex = /^\S+@\S+$/;
//   var rest = regex.test(email);
//   $(".eye").show();
  
//   return rest;
// }

// $(".button").on("click", function(){
//   resetEyes()
//   if(!validate()){
//     $(".pokemon").addClass("mad");
//     $(".pokemon, .f").css("background-color","#d9aa78");
//     $(".email").css("border-color","#e74c3c");
    
//     setTimeout(function(){ 
//     $(".pokemon").removeClass("mad");
//     $(".pokemon, .f").css("background-color","#78d9ad");
//     $(".email").css("border-color","#b8e994");
//      }, 300);
//   }else{
//     $(".mouth").css("height","38px");
//     $(".button").fadeOut("fast");
//     $("input").fadeOut("fast");
//     $("p").fadeOut("fast");
//     $("span").fadeOut("fast");
//     $(".pokemon").fadeOut("fast");
//     $(".leafs").fadeOut("fast");
    
//     $(".red").fadeIn();
//     $(".circle").fadeIn();
//     $(".squareC2").fadeIn();
//     $(".container").css("width","150px");
//     $(".container").css("height","150px");
//     $(".container").css("transform-origin","-25px");
//     $(".container").css("animation","catch 3s ease 1s forwards");
//     $(".squareC2").css("animation","catch2 3s ease 1s forwards");
//     $(".done").css("animation","done .5s ease 3s forwards");
//   }
// });

// function resetEyes(){
//   $(".pupil").css("transform","translate(13px, 7px)");
//   $(".pupil2").css("transform","translate(0px, 7px)");
// }

// document
//   .querySelector('.login-form')
//   .addEventListener('submit', loginFormHandler);

// document
//   .querySelector('.signup-form')
//   .addEventListener('submit', signupFormHandler);