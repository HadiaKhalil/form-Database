

const Signup = async (e) => {
    e.preventDefault()
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email, password);
    try {



        const result = await firebase.auth().createUserWithEmailAndPassword(email, password)
        alert(`welcome ${result.user.email}`)
    } catch (error) {
        alert(error.message)

    }
}






