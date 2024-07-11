const Logout = () =>{
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
  