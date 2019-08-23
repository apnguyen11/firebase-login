//add a realtime listener
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
    //   window.location.assign("dashboard.html")
        console.log(user)
    } else {
      // No user is signed in.
    //   window.location.assign("login.html")
      
      console.log("not logged in")
     
    }
  });

function login(e){
    const email = userEmail.value;
    const pass = userPass.value;
    console.log("clicked log in")
    const promise = firebase.auth().signInWithEmailAndPassword(email, pass)

    
    
    promise
    .then(() => {
            window.location.assign("dashboard.html")
        })
    .catch(e => 
        //handles error
        window.alert("The password or email you have entered is incorrect")
        );
   
}

var userEmail = document.getElementById("email_field");
var userPass = document.getElementById("password_field");
const btnLogin = document.getElementById("btnLogin");
const btnLogout = document.getElementById("btnLogout")
const btnSignUp = document.getElementById('btnSignUp')

// add signup event
btnSignUp.addEventListener('click', e => {
    //todo: check 4 real email
    const email = userEmail.value;
    const pass = userPass.value;
    window.alert("clicked")
    const promise = firebase.auth().createUserWithEmailAndPassword(email, pass)
    
    promise
        .catch(window.alert(e.message))
})

// btnLogout.addEventListener('click', e => {
//     firebase.auth().signOut();
// });

