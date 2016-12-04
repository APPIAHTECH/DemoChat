const dbOb = "Persona";
const dbRef = firebase.database().ref().child(dbOb);

function recuperarInfo(display) {

  let show = document.getElementById(display);

  dbRef.on('value', snap => show.innerText = snap.val());

}
