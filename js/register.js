function register(event){

event.preventDefault()

let nama = document.getElementById("nama").value.trim()
let email = document.getElementById("email").value.trim()
let password = document.getElementById("password").value.trim()

if(nama=="" || email=="" || password==""){
alert("Semua data harus diisi")
return
}

let akun = JSON.parse(localStorage.getItem("akun")) || []

let cek = akun.find(user => user.email === email)

if(cek){
alert("Email sudah terdaftar")
return
}

akun.push({
nama:nama,
email:email,
password:password
})

localStorage.setItem("akun", JSON.stringify(akun))

alert("Registrasi berhasil")

window.location.href="login.html"

}