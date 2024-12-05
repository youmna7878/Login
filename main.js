var nameInput = document.getElementById('nameInput')
var emailInput = document.getElementById('emailInput')
var passInput = document.getElementById('passInput')
var signUpBtn = document.getElementById('signUp')
var required = document.getElementById('required')
var success = document.getElementById('success')
var exist = document.getElementById('exist')
var myEmailInput = document.getElementById('myEmailInput')
var myPassInput = document.getElementById('myPassInput')
var loginBtn = document.getElementById('loginBtn')
var incorrect = document.getElementById('incorrect')
var welcomeUser = document.getElementById('welcomeUser')

var dataContainer = [];
if (localStorage.getItem('userData') !== null) {
    dataContainer = JSON.parse(localStorage.getItem('userData'))
}
function existedEmail() {
    for (var i = 0; i < dataContainer.length; i++) {
        if (dataContainer[i].userEmail == emailInput.value) {

            return false
        }
    }
}

function addData() {
    if (nameInput.value == "" || emailInput.value == "" || passInput.value == "") {
        required.classList.remove('d-none')


    }
    else if (existedEmail() == false) {
        success.classList.add('d-none');
        exist.classList.remove('d-none');

    }
    else {
        userData = {
            userName: nameInput.value,
            userEmail: emailInput.value,
            userPassword: passInput.value
        };
        dataContainer.push(userData);
        localStorage.setItem('userData', JSON.stringify(dataContainer));
        success.classList.remove('d-none');


    }
}

function userInfo() {

    if (myEmailInput.value == "" || myPassInput.value == "") {
        required.classList.remove('d-none')
    }
    for (var i = 0; i < dataContainer.length; i++) {
        if (dataContainer[i].userEmail !== myEmailInput.value || dataContainer[i].userPassword !== myPassInput.value) {
            incorrect.classList.remove('d-none')
            console.log('hi');
            
        }
        else {
            incorrect.classList.add('d-none')
            window.open('home.html', '_self')


        }
    }


}
var myElem = document.createElement('h1')
var welcome = document.querySelector('.welcome')
for (var i = 1; i < dataContainer.length; i++) {
    myElem.innerText = `Welcome ${dataContainer[i].userName}`
    welcome.append(myElem)
}

function logOut() {
    window.open('login.html', '_self')
}












