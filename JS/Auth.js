const auth = firebase.auth(); //firebase auth module

//Geting element
const textEmail = document.getElementById('user_mail');
const textpass = document.getElementById('user_pas');
const btnLogin = document.getElementById('btnLogin');
const btnCreateAccount = document.getElementById('btnSingup');
const btnLogout = document.getElementById('btnLogout');


//Events

//Login
btnLogin.addEventListener('click', e => {

  const promise = auth.signInWithEmailAndPassword( // Connecting to firebase auth sys to get for user if exist auto login if not ...
    textEmail.value ,
    textpass.value
  );
  promise.catch(e => {console.log(e.message) });

});

//Singup
btnCreateAccount.addEventListener('click', e => {

  // TODO:Validate mail

  const promise = auth.createUserWithEmailAndPassword( // Connecting to firebase auth sys to get for user if exist auto login if not ...
    textEmail.value ,
    textpass.value
  );
  promise.catch(e => {console.log(e.message) });

});

//logout
btnLogout.addEventListener('click', e => {

  firebase.auth().signOut().then(function() {
    console.log("Loged out");
  }, function(error) {
    console.error(error);
  });

});


//Realtime Auth listenner
firebase.auth().onAuthStateChanged(user =>{
  if (user) {
    console.log(user);
    btnLogout.classList.remove('hide');
  } else {
    console.log("not logged in ");
    btnLogout.classList.add('hide');
  }
});
