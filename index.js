//add a realtime listener
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
    //   window.location.assign("dashboard.html")
        console.log(user, "This is the logged in user")
        // btnLogout.addEventListener('click', function(){
        //     window.location.assign("login.html")
        // })
    } else {
      // No user is signed in.
      
      console.log("not logged in")
     
    }
  });

function login(){
    var email = userEmail.value;
    var pass = userPass.value;
    console.log("clicked log in")
    var promise = firebase.auth().signInWithEmailAndPassword(email, pass)

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
function signUp(e) {
    //todo: check 4 real email
    var email = userEmail.value;
    var pass = userPass.value;
    var promise = firebase.auth().createUserWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message))
    
}  



// signUp().then((message) => {
//     alert(message);
// }).catch((error) => {
//     alert(error);
// })
    // var promise = firebase.auth().createUserWithEmailAndPassword(email, pass)
    
btnLogout.addEventListener('click', e => {
    firebase.auth().signOut();
    window.location.assign("login.html")

});

