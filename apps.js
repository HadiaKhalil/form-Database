const Login = async (e) => {
    e.preventDefault()
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;
    console.log(email, password);
    try {



        const result = await firebase.auth().signInWithEmailAndPassword(email, password)
        alert(`user is successfulluy login ${result.user.email}`)
    } catch (error) {
        alert(error.message)

    }
}  




const LogOut = () =>{
    firebase.auth().signOut()

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
    console.log(user);
      var uid = user.uid;
    } else {
      console.log( `user successfully signout`);
      alert(`user successfully signout`)
    }
  });
}
  