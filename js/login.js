function login(event){

event.preventDefault()

let email = document.getElementById("email").value.trim()
let password = document.getElementById("password").value.trim()

if(email === "" || password === ""){
alert("Email dan password harus diisi")
return
}

let akun = JSON.parse(localStorage.getItem("akun")) || []

let user = akun.find(function(u){
return u.email === email && u.password === password
})

if(!user){
alert("Email atau password salah")
return
}

alert("Login berhasil")

localStorage.setItem("userLogin", JSON.stringify(user))

window.location.href="user.html"

}